import { Component } from '@angular/core';

import { DataService } from './data.service';
import { Todo } from './model.todo';
import { Generic } from './model.generic';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'aws-s3-ng try it now';
  private todos : Todo[] = [];
  private generics : Generic[] = [];

  constructor(private dataservice: DataService){
    console.log('inside constructor');
    
  }
  ///get_my_todo()
  // will display a to do list based on the ToDo model 
  public get_my_todo(){
    console.log('inside my to dos');
    this.dataservice.get_todo().subscribe((res : Todo[])=>{
      this.todos = res;
    });
    return this.todos; 
  }
  ///get_my_generic_call()
  // will display a generic response based on the generic model 
  public get_my_generic(){
    console.log('inside my generic api');
    this.dataservice.get_generic().subscribe((res : Generic[])=>{
      this.generics = res;
    });
    return this.generics; 
  }


}
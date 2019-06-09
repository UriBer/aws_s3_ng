import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './model.todo';
import { Generic } from './model.generic';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todoApi: string = 'https://jsonplaceholder.typicode.com/todos';
  genericApi: string = 'http://localhost:3000/generics';

  constructor(private httpClient: HttpClient) { 
  }
///get_todo()
// will get a list of todos from mock server
  public get_todo() {
    return this.httpClient.get<Todo[]>(`${this.todoApi}`);
    //return this.httpClient.get<Todo[]>(`${this.todoApi}/1`);
  }

///get_generic()
// will get a list of generic service model items
  public get_generic() {
    return this.httpClient.get<Generic[]>(`${this.genericApi}`);
    
  }


}

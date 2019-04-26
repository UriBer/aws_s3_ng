import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './model.todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) { 
  }
///get_todo()
// will get a list of todos from mock server
  public get_todo() {
    return this.httpClient.get<Todo[]>(`${this.apiURL}`);
    //return this.httpClient.get<Todo[]>(`${this.apiURL}/1`);
  }

}

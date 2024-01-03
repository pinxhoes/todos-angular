import {Component, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../todo";
import {AppService} from "../app.service";
import {CheckboxChangeEvent} from "primeng/checkbox";



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  @ViewChild('inputBoxTask') inputBoxTask: any;
  inputBox: string = '';
  todos : Todo[] = [];

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.getAllTodos();
  }

  getAllTodos(){
    this.appService.getAllTodos().subscribe(
      response => {
        this.todos = response;
      }
    )

  }
  addTask(){
    const task: Todo = {
      uuid: '',
      task: this.inputBox,
      created_at: new Date().toLocaleString('de-DE'),
      done: false
    };

    this.appService.addTask(task).subscribe(
      response => {
        this.inputBox = ''; //remove the task in the inputBox
        this.inputBoxTask.reset(); //remove the red box(validation?)
        this.getAllTodos();
      }
    )
  }

  updateTodo(e: CheckboxChangeEvent, todo: Todo ){
    todo.done = e.checked;
    this.appService.updateTodo(todo).subscribe(
      response => {
        console.log(response);

      }
    );
  }
  deleteTask(e: unknown, todo: Todo){
    this.appService.deleteTask(todo).subscribe(
      response => this.getAllTodos()
    )
  }
}

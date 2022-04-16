import { Component } from '@angular/core';
import { Task } from './todo-item';
import { TaskList } from './todo-list';
/* import { Task } from './etc/todoItems';
import { TodoList } from './todoList'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskList = new TaskList('امیرحسین راد', [
    new Task('پیاده سازی مدل', true),
    new Task('پیاده سازی لیست فعالیت ها', false),
    new Task('پیاده سازی فایل نمایش فعالیت ها', false),
  ]);


  user():string{
    return this.taskList.getUsername();
  }

  completedTasks(): Task[]{
    return this.taskList.getCompletedTasks();
  }

  notComppletedTasks(): Task[]{
    return this.taskList.notCompletedTasks();
  }

  countCompleted():number{
    return this.taskList.countCompletedTasks();
  }

  countAllTask():number {
    return this.taskList.countAllTasks();
  }





}

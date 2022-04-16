import { Task } from './todo-item';

export class TaskList {
  constructor(private name: string, public tasks: Task[]) {}

  //نمایش نام کاربر
  getUsername(): string {
    return this.name;
  }

  //نمایش فعالیت های انجام شده
  getCompletedTasks(): Task[] {
    return this.tasks.filter((x) => x.state);
  }

  //فعالیت های انجام نشده
  notCompletedTasks(): Task[] {
    return this.tasks.filter((x) => !x.state);
  }

  //نمایش تمامی فعالیت ها
  getAllTasks(): Task[] {
    return this.tasks;
  }

  //تعداد فعالیت های انجام شده
  countCompletedTasks(): number {
    return this.tasks.filter((x) => x.state).length;
  }

  //تعداد فعالیت های انجام نشده
  countNotCompletedTasks(): number {
    return this.tasks.filter((x) => !x.state).length;
  }

  //تعداد تمامی فعالیت ها
  countAllTasks(): number {
    return this.tasks.length;
  }

  //افزودن یک فعالیت
  addTask(task: string) {
    this.tasks.push(new Task(task, false));
  }
}

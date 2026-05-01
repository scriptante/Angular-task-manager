import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { ITask, TaskStatus, TaskStatusEnum } from './task-interface';
import { ITaskFormControls } from '../interfaces/task-form-controls-interface';
import { generateIdTimestamp } from '../utils/date.utils';

@Injectable({
  providedIn: 'root',
})
export class taskService {
  private todoTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly todoTasks = this.todoTasks$.asObservable().pipe(map((tasks) => structuredClone(tasks)));

  private doingTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly doingTasks = this.doingTasks$
    .asObservable()
    .pipe(map((tasks) => structuredClone(tasks)));

  private doneTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly doneTasks = this.doneTasks$.asObservable().pipe(map((tasks) => structuredClone(tasks)));

  addTask(taskInfos: ITaskFormControls) {
    const newTask: ITask = {
      ...taskInfos,
      status: TaskStatusEnum.TODO,
      id: generateIdTimestamp(),
      comments: [],
    };
    const currentList = this.todoTasks$.value;
    this.todoTasks$.next([...currentList, newTask]);
  }

  updateStatus(taskId: string, taskCurrentStatus: TaskStatus, taskNextStatus: TaskStatus) {
    const currentList = this.getTaskListByStatus(taskCurrentStatus);
    const nextList = this.getTaskListByStatus(taskNextStatus);
    const task = currentList.value.find((task) => task.id === taskId);
    if (task) {
      task.status = taskNextStatus;
      currentList.next(currentList.value.filter((task) => task.id !== taskId));
      nextList.next([...nextList.value, task]);
    }
  }

  private getTaskListByStatus(taskStatus: TaskStatus) {
    switch (taskStatus) {
      case TaskStatusEnum.TODO:
        return this.todoTasks$;
      case TaskStatusEnum.DOING:
        return this.doingTasks$;
      case TaskStatusEnum.DONE:
        return this.doneTasks$;
    }
  }
}

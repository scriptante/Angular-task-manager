import { Component, inject, Input } from '@angular/core';
import { ModalController } from '../../services/modal-controller';
import { ITask } from '../../services/task-interface';
import { TaskService } from '../../services/task.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-task-card',
  imports: [SlicePipe],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  private readonly modalController = inject(ModalController);
  private readonly taskService = inject(TaskService);
  @Input({ required: true }) task!: ITask;

  editTask() {
    const dialogRef = this.modalController.openEditTaskModal({
      id: this.task.id,
      name: this.task.name,
      description: this.task.description,
      status: this.task.status,
    });
    dialogRef.closed.subscribe((taskform) => {
      if (taskform) {
        this.taskService.updateTask(taskform);
      }
    });
  }

  deleteTask(taskToRemove: ITask) {
    this.taskService.deleteTask(taskToRemove.id, taskToRemove.status);
  }

  OpanTaskCommentsModal() {
    this.modalController.openTaskCommentsModal(this.task);
  }
}

import { Component, inject, Input } from '@angular/core';
import { ModalController } from '../../services/modal-controller';
import { ITask } from '../../services/task-interface';
import { taskService } from '../../services/task.service';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  private readonly modalController = inject(ModalController);
  private readonly taskService = inject(taskService);
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
}

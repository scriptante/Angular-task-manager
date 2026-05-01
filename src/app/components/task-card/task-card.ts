import { Component, inject, Input } from '@angular/core';
import { ModalController } from '../../services/modal-controller';
import { ITask } from '../../services/task-interface';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  private readonly modalController = inject(ModalController);
  @Input({ required: true }) task!: ITask;

  editTask() {
    const dialogRef = this.modalController.openEditTaskModal({
      name: 'Nova tarefa',
      description: 'Descrição tarefa',
    });
    dialogRef.closed.subscribe((taskForm) => {
      console.log(taskForm);
    });
  }
}

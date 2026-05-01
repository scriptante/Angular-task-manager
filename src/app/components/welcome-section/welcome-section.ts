import { Component, inject } from '@angular/core';
import { ModalController } from '../../services/modal-controller';
import { ITaskFormControls } from '../../interfaces/task-form-controls-interface';
import { ITask } from '../../services/task-interface';
import { taskService } from '../../services/task.service';

@Component({
  selector: 'app-welcome-section',
  imports: [],
  templateUrl: './welcome-section.html',
  styleUrl: './welcome-section.css',
})
export class WelcomeSection {
  private readonly modalNewTask = inject(ModalController);
  private readonly taskService = inject(taskService);

  createNewTask() {
    const dialogRef = this.modalNewTask.openNewTaskModal();
    dialogRef.closed.subscribe((taskform) => {
      if (taskform) {
        this.taskService.addTask(taskform);
      }
    });
  }
}

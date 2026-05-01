import { Component, inject } from '@angular/core';
import { Icomment, ITask } from '../../services/task-interface';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { generateIdTimestamp } from '../../utils/date.utils';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-comments-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-comments-modal.html',
  styleUrl: './task-comments-modal.css',
})
export class TaskCommentsModal {
  readonly _data = inject(DIALOG_DATA);
  readonly _dialogRef: DialogRef<boolean> = inject(DialogRef);
  readonly taskService = inject(TaskService);
  task: ITask = { ...this._data.task };
  commentControl = new FormControl('', [Validators.required]);

  onAddComment() {
    if (this.commentControl.valid) {
      const newComment: Icomment = {
        id: generateIdTimestamp(),
        description: this.commentControl.value!,
      };
      this.task.comments = [newComment, ...this.task.comments];
      this.commentControl.reset();
      this.taskService.updateTaskComments(this.task);
    }
  }

  onCloseModal() {
    this._dialogRef.close();
  }
}

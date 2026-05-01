import { Dialog } from '@angular/cdk/dialog';
import { inject, Injectable } from '@angular/core';
import { TaskFormModal } from '../components/task-form-modal/task-form-modal';
import { TaskCommentsModal } from '../components/task-comments-modal/task-comments-modal';
import { ITaskFormControls } from '../interfaces/task-form-controls-interface';

@Injectable({
  providedIn: 'root',
})
export class ModalController {
  private readonly _dialog = inject(Dialog);
  private readonly modalSizeOptions = {
    maxWidth: '620px',
    width: '95%',
  };

  openNewTaskModal() {
    return this._dialog.open<ITaskFormControls>(TaskFormModal, {
      ...this.modalSizeOptions,
      disableClose: true,
      data: {
        mode: 'create',
        formValues: {
          name: '',
          description: '',
        },
      },
    });
  }

  openEditTaskModal(formValues: ITaskFormControls) {
    return this._dialog.open<ITaskFormControls>(TaskFormModal, {
      ...this.modalSizeOptions,
      disableClose: true,
      data: { mode: 'edit', formValues },
    });
  }

  openTaskCommentsModal() {
    return this._dialog.open<string>(TaskCommentsModal, this.modalSizeOptions);
  }
}

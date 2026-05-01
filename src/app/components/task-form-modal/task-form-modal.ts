import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { ItaskFormModalData } from '../../interfaces/task-from-modal-data-interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITaskFormControls } from '../../interfaces/task-form-controls-interface';

@Component({
  selector: 'app-task-form-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form-modal.html',
  styleUrl: './task-form-modal.css',
})
export class TaskFormModal {
  readonly _data: ItaskFormModalData = inject(DIALOG_DATA);
  readonly _dialogRef = inject(DialogRef);

  taskForm: FormGroup = new FormGroup({
    id: new FormControl(this._data.formValues.id),
    name: new FormControl(this._data.formValues.name, [
      Validators.required,
      Validators.minLength(10),
    ]),
    description: new FormControl(this._data.formValues.description, [
      Validators.required,
      Validators.minLength(10),
    ]),
    status: new FormControl(this._data.formValues.status),
  });

  onFormSubmit() {
    this.closeModal(this.taskForm.value);
  }

  closeModal(formValues?: ITaskFormControls) {
    this._dialogRef.close(formValues);
  }
}

import { ITaskFormControls } from "./task-form-controls-interface";

export interface ItaskFormModalData {
    mode: 'create' | 'edit';
    formValues: ITaskFormControls
}
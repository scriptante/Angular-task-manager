import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCommentsModal } from './task-comments-modal';

describe('TaskCommentsModal', () => {
  let component: TaskCommentsModal;
  let fixture: ComponentFixture<TaskCommentsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCommentsModal],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskCommentsModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

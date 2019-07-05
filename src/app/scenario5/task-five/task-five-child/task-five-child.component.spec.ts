import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFiveChildComponent } from './task-five-child.component';

describe('TaskFiveChildComponent', () => {
  let component: TaskFiveChildComponent;
  let fixture: ComponentFixture<TaskFiveChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFiveChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFiveChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

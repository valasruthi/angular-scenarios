import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFiveGchildComponent } from './task-five-gchild.component';

describe('TaskFiveGchildComponent', () => {
  let component: TaskFiveGchildComponent;
  let fixture: ComponentFixture<TaskFiveGchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFiveGchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFiveGchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

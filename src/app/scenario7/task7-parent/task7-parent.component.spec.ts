import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task7ParentComponent } from './task7-parent.component';

describe('Task7ParentComponent', () => {
  let component: Task7ParentComponent;
  let fixture: ComponentFixture<Task7ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task7ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task7ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

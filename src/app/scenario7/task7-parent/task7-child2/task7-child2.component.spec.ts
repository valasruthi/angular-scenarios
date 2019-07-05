import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task7Child2Component } from './task7-child2.component';

describe('Task7Child2Component', () => {
  let component: Task7Child2Component;
  let fixture: ComponentFixture<Task7Child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task7Child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task7Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

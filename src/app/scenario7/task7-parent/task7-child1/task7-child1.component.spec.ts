import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task7Child1Component } from './task7-child1.component';

describe('Task7Child1Component', () => {
  let component: Task7Child1Component;
  let fixture: ComponentFixture<Task7Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task7Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task7Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

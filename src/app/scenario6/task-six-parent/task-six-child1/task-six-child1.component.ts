import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-six-child1',
  templateUrl: './task-six-child1.component.html',
  styleUrls: ['./task-six-child1.component.css']
})
export class TaskSixChild1Component implements OnInit {

  @Output() public childEvent = new EventEmitter();
  public childMessage = '';
  constructor() { }

  ngOnInit() {
  }

  typeToParent() {
    this.childEvent.emit(this.childMessage);
  }

}

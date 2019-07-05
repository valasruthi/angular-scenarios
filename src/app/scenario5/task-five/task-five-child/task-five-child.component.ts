import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-five-child',
  templateUrl: './task-five-child.component.html',
  styleUrls: ['./task-five-child.component.css']
})
export class TaskFiveChildComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();
  public childMessage = '';
  constructor() { }

  ngOnInit() {
  }

  typeToMyParent(event) {
    this.childEvent.emit(event);
    this.childMessage = event;
  }

}

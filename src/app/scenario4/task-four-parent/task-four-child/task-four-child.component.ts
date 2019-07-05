import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-four-child',
  templateUrl: './task-four-child.component.html',
  styleUrls: ['./task-four-child.component.css']
})
export class TaskFourChildComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();
  public childMessage = '';
  constructor() { }

  ngOnInit() {
  }

  typeEvent() {
    this.childEvent.emit(this.childMessage);
  }
  fireEvent() {
    this.childEvent.emit('Hello ' + this.childMessage);
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-five-gchild',
  templateUrl: './task-five-gchild.component.html',
  styleUrls: ['./task-five-gchild.component.css']
})
export class TaskFiveGchildComponent implements OnInit {

  @Output() public innerChildEvent = new EventEmitter();
  public gChildMessage = '';
  constructor() { }

  ngOnInit() {
  }

  typeToParent() {
    this.innerChildEvent.emit(this.gChildMessage);
  }

}

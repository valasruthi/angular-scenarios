import { Component, OnInit } from '@angular/core';
import { SiblingInteractionService } from '../../../sibling-interaction.service';

@Component({
  selector: 'app-task7-child1',
  templateUrl: './task7-child1.component.html',
  styleUrls: ['./task7-child1.component.css']
})
export class Task7Child1Component implements OnInit {

  constructor(private siblingService: SiblingInteractionService) { }

  ngOnInit() {
  }

  sendMessage(data) {
    this.siblingService.message.next(data);
  }

}

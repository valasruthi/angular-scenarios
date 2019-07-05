import { Component, OnInit } from '@angular/core';
import { SiblingInteractionService } from '../../../sibling-interaction.service';

@Component({
  selector: 'app-task7-child2',
  templateUrl: './task7-child2.component.html',
  styleUrls: ['./task7-child2.component.css']
})
export class Task7Child2Component implements OnInit {

  constructor(private siblingService: SiblingInteractionService) { }
  siblingMessage: any;
  ngOnInit() {
    this.siblingService.message.subscribe(data => {
         this.siblingMessage = data;
    });
  }

}

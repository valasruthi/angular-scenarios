import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskOneComponent } from './scenario1/task-one/task-one.component';
import { TaskTwoComponent } from './scenario2/task-two/task-two.component';
import { TaskThreeParentComponent } from './scenario3/task-three-parent/task-three-parent.component';
import { TaskThreeChildComponent } from './scenario3/task-three-parent/task-three-child/task-three-child.component';
import { TaskFourParentComponent } from './scenario4/task-four-parent/task-four-parent.component';
import { TaskFourChildComponent } from './scenario4/task-four-parent/task-four-child/task-four-child.component';
import { TaskFiveComponent } from './scenario5/task-five/task-five.component';
import { TaskFiveChildComponent } from './scenario5/task-five/task-five-child/task-five-child.component';
import { TaskFiveGchildComponent } from './scenario5/task-five/task-five-child/task-five-gchild/task-five-gchild.component';
import { TaskSixParentComponent } from './scenario6/task-six-parent/task-six-parent.component';
import { TaskSixChild1Component } from './scenario6/task-six-parent/task-six-child1/task-six-child1.component';
import { TaskSixChild2Component } from './scenario6/task-six-parent/task-six-child2/task-six-child2.component';
import { Task7ParentComponent } from './scenario7/task7-parent/task7-parent.component';
import { Task7Child1Component } from './scenario7/task7-parent/task7-child1/task7-child1.component';
import { Task7Child2Component } from './scenario7/task7-parent/task7-child2/task7-child2.component';
import { SiblingInteractionService } from './sibling-interaction.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskOneComponent,
    TaskTwoComponent,
    TaskThreeParentComponent,
    TaskThreeChildComponent,
    TaskFourParentComponent,
    TaskFourChildComponent,
    TaskFiveComponent,
    TaskFiveChildComponent,
    TaskFiveGchildComponent,
    TaskSixParentComponent,
    TaskSixChild1Component,
    TaskSixChild2Component,
    Task7ParentComponent,
    Task7Child1Component,
    Task7Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ SiblingInteractionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

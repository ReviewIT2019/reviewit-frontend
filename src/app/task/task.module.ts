import { NgModule }      from '@angular/core';
import { RouterModule }      from '@angular/router';

import { routing } from './task.routes';
import { SharedModule } from '../shared';
import { MatRippleModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';

import { TaskDetailsComponent, TasklistComponent } from './';
import { FieldDynModule } from '../field-dyn/field-dyn.module';
import { TaskDashboardService } from './task-dashboard.service'
import { TaskDashboard } from './task-dashboard.component'
import { StagelistComponent } from './stagelist/stagelist.component'
import { StagelistService } from './stagelist/stagelist.service'
import { TaskListService } from './task-list/task-list.service'
import { TaskDetailsService } from './task-details/task-details.service'

@NgModule({
  imports:      [ routing, RouterModule, SharedModule, FieldDynModule, MatRippleModule, MatCardModule ],
  providers:    [ TaskDashboardService, StagelistService, TaskListService, TaskDetailsService ],
  declarations: [ TaskDetailsComponent, TasklistComponent, TaskDashboard, StagelistComponent ],
})
export class TaskModule { }

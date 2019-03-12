import { NgModule }      from '@angular/core';
import { MatRippleModule } from '@angular/material'
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared';
import { StudylistComponent } from './studylist.component';
import { RouterModule } from '@angular/router';
import { StudylistService } from './studylist.service';

@NgModule({
  imports:      [ SharedModule, RouterModule, MatRippleModule, MatCardModule ],
  providers:    [ StudylistService ],
  declarations: [ StudylistComponent ],
  exports:      [ StudylistComponent ]
})
export class StudylistModule { }

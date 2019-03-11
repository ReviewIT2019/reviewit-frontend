import { NgModule }      from '@angular/core';
import { MatRippleModule } from '@angular/material'
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home.component';
import { routing } from './home.routes';
import { SharedModule } from '../shared';
import { StudylistModule } from '../studylist';
import { TestModule } from '../testcomponent/test.module'

@NgModule({
  imports:      [ routing, StudylistModule, SharedModule, MatRippleModule, TestModule, MatCardModule ],
  providers:    [ ],
  declarations: [ HomeComponent ],
})
export class HomeModule { }

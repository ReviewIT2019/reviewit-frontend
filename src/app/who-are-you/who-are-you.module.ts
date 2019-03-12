import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material'
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { WhoAreYouComponent } from './who-are-you.component';
import { WhoAreYouService } from './who-are-you.service'
import { SharedModule } from '../shared';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    MatRippleModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [ WhoAreYouComponent ],
  providers: [ WhoAreYouService ]
})
export class WhoAreYouModule { }

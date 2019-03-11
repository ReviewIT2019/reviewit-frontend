import { NgModule }      from '@angular/core';
import { MatRippleModule } from '@angular/material'

import { TestComponent } from './test.component'
import { TestService } from './test.service'

import { SharedModule } from '../shared'
import { FieldDynModule } from '../field-dyn/field-dyn.module'

import { MatCardModule } from '@angular/material';

@NgModule({
  imports:      [ MatRippleModule, SharedModule, FieldDynModule, MatCardModule ],
  providers:    [ TestService ],
  declarations: [ TestComponent ],
  exports:      [ TestComponent ]
})
export class TestModule { }

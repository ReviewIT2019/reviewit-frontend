import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../../shared';

// 3rd party
import { MatRippleModule } from '@angular/material'
import { InputTextModule, RadioButtonModule, AutoCompleteModule, SliderModule, MessagesModule, ButtonModule, DropdownModule } from 'primeng/primeng';

import { CriteriaconfigService } from './criteriaconfig.service'
import { CriteriaConfigComponent } from './criteriaconfig.component'
// dyn criteria
import { DynCriteriaComponent } from './dyn-criteria.component'
import { BooleanCriteriaComponent } from './dyn-criteria/boolean-criteria.component'
import { NumberCriteriaComponent } from './dyn-criteria/number-criteria.component'
import { StringCriteriaComponent } from './dyn-criteria/string-criteria.component'
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:          [ RouterModule, HttpClientModule, SharedModule, FormsModule, ReactiveFormsModule, MatRippleModule, DropdownModule, InputTextModule, RadioButtonModule, CommonModule, ButtonModule, AutoCompleteModule, SliderModule, MessagesModule ],
  providers:        [ CriteriaconfigService ],
  declarations:     [ CriteriaConfigComponent, DynCriteriaComponent, BooleanCriteriaComponent, NumberCriteriaComponent, StringCriteriaComponent ],
  entryComponents:  [ BooleanCriteriaComponent, NumberCriteriaComponent, StringCriteriaComponent ],
  exports:          [ DynCriteriaComponent ],
})
export class CriteriaconfigModule { }

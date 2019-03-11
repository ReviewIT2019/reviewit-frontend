import { NgModule }      from '@angular/core';

import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from '../shared';

@NgModule({
  imports:      [ SharedModule ],
  providers:    [ ],
  declarations: [ PageNotFoundComponent ],
  exports:      [ PageNotFoundComponent ]
})
export class PageNotFoundModule { }
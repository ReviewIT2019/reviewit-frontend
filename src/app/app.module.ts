import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* App Root */
import { NavbarModule } from './navbar';
import { HttpClientModule } from '@angular/common/http';
import { ReviewITAppComponent } from './app.component';
import { MessagesModule, GrowlModule } from 'primeng/primeng';
import { CoreModule } from './core/core.module';
import { PageNotFoundModule } from './page-not-found'
import { MatRippleModule } from '@angular/material';

/* Feature Modules */
import { routing, routeProviders } from './app.routes'
import { HomeModule } from './home';
import { WhoAreYouModule } from './who-are-you/who-are-you.module'

/* test module */
import { TestModule } from './testcomponent/test.module'


@NgModule({
  declarations: [
    ReviewITAppComponent,
  ],
  imports: [
    FormsModule,
    TestModule,
    HomeModule,
    NavbarModule,
    routing,
    BrowserModule,
    MessagesModule,
    GrowlModule,
    CoreModule,
    HttpClientModule,
    PageNotFoundModule,
    MatRippleModule,
    WhoAreYouModule
  ],
  providers: [
    routeProviders,
  ],
  bootstrap: [ReviewITAppComponent
  ],
})
export class AppModule { }

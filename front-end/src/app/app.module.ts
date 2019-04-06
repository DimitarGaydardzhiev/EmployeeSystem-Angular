import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app/app.component';
import { SharedModule } from './shared';
import { routing } from './shared/app.routing';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  // components, directives and pipes
  declarations: [
    AppComponent,
    HomeComponent
  ],
  // other modules
  imports: [
    BrowserModule,
    SharedModule,
    routing
  ],
  // Register service providers and inject them into components
  providers: [],
  // The root component – used to launch the application
  bootstrap: [AppComponent]
})
export class AppModule { }

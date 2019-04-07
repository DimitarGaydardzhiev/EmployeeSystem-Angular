import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app/app.component';
import { SharedModule } from './shared';
import { routing } from './shared/app.routing';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/store/effects';


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
    routing,
    CoreModule,

    StoreModule.forRoot(reducers, { metaReducers }),

    EffectsModule.forRoot([
      AuthEffects,
    ])
  ],
  // Register service providers and inject them into components
  providers: [],
  // The root component – used to launch the application
  bootstrap: [AppComponent]
})
export class AppModule { }

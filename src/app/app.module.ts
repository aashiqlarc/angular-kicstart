import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http"
import { ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './interceptor';
import { CountersComponent } from './counters/counters.component';
import { CounterOneComponent } from './counters/counter-one/counter-one.component';
import { CounterTwoComponent } from './counters/counter-two/counter-two.component';
import { CounterThreeComponent } from './counters/counter-three/counter-three.component';

@NgModule({
  declarations: [
    AppComponent,
    CountersComponent,
    CounterOneComponent,
    CounterTwoComponent,
    CounterThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

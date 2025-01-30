import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SparshbotComponent } from '../app/sparshbot/sparshbot.component'; // Import Chatbot Component

@NgModule({
  declarations: [
    AppComponent,
    SparshbotComponent // Declare Chatbot Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

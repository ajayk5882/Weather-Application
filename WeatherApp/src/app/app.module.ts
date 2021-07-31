import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForcastListComponent } from './forcast-list/forcast-list.component';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WeatherService } from './weather.service';


@NgModule({
  declarations: [
    AppComponent,
    ForcastListComponent,
    ZipcodeEntryComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserModule, FormsModule , HttpClientModule , AppRoutingModule,ReactiveFormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

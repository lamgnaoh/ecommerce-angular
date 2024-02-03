import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [HomeComponent], // HomeComponent se la component dau tien duoc chay
})
export class AppModule {}

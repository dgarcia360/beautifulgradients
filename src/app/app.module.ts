import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import { ColorPickerModule } from 'ngx-color-picker';
import { GeneratorService } from './services/generator/generator.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatGridListModule,
    ColorPickerModule
  ],
  providers: [GeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

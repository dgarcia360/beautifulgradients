import {Component} from '@angular/core';
import {GeneratorService} from './services/generator/generator.service';
import hexRgb from 'hex-rgb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  primaryColor: string;
  secondaryColor: string;
  steps: number;
  colors: any;
  outputFormat: string;

  constructor(private generatorService: GeneratorService) {
    this.steps = 5;
    this.primaryColor = '#ff4081';
    this.secondaryColor = '#181d27';
    this.outputFormat = 'hex';
    this.generate();
  }

  onChangePrimaryColor(event) {
    this.primaryColor = event;
    this.generate();
  }

  onChangeSlider(event) {
    this.steps = event.value;
    this.generate();
  }

  onChangeSecondaryColor(event) {
    this.secondaryColor = event;
    this.generate();
  }

  swapColors() {
    const aux = this.primaryColor;
    this.primaryColor = this.secondaryColor;
    this.secondaryColor = aux;
    this.generate();
  }

  private generate() {
    this.colors = this.generatorService.convert(hexRgb(this.primaryColor), hexRgb(this.secondaryColor), this.steps);
  }
}

import {Injectable} from '@angular/core';

import rgbHex from 'rgb-hex';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() {
  }


  private checkColorIntegrity(color) {
    color = color > 255 ? 255 : color;
    color = color < 0 ? 0 : color;
    return color;
  }

  convert(color1, color2, steps: number) {
    const result = [];
    for (let _i = 0; _i < steps; _i++) {
      const percent = _i * (steps) / ((steps - 1) * steps);
      const newRed = this.checkColorIntegrity(color1.red + percent * (color2.red - color1.red));
      const newGreen = this.checkColorIntegrity(color1.green + percent * (color2.green - color1.green));
      const newBlue = this.checkColorIntegrity(color1.blue + percent * (color2.blue - color1.blue));
      result.push('#' + rgbHex(newRed, newGreen, newBlue));
    }
    return result;
  }

}

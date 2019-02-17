import {TestBed} from '@angular/core/testing';

import {GeneratorService} from './generator.service';

describe('GeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneratorService = TestBed.get(GeneratorService);
    expect(service).toBeTruthy();
  });

  it('checkColorIntegrity should return black if color is negative', () => {
    const service: GeneratorService = new GeneratorService();
    expect(service['checkColorIntegrity'](-3)).toEqual(0);
  });

  it('checkColorIntegrity should return white if color is bigger than 255', () => {
    const service: GeneratorService = new GeneratorService();
    expect(service['checkColorIntegrity'](256)).toEqual(255);
  });

  it(' convert return array with size steps', () => {
    const service: GeneratorService = new GeneratorService();
    const color1 = {'red': 0, 'green': 0, 'blue': 0};
    const color2 = {'red': 255, 'green': 255, 'blue': 255};
    const steps = 10;
    const gradient = service.convert(color1, color2, steps);
    expect(gradient.length).toEqual(10);
  });


  it(' convert first and last color are equal to color1 and color2', () => {
    const service: GeneratorService = new GeneratorService();
    const color1 = {'red': 0, 'green': 0, 'blue': 0};
    const color2 = {'red': 255, 'green': 255, 'blue': 255};
    const steps = 10;
    const gradient = service.convert(color1, color2, steps);
    expect(gradient[0]).toEqual('#000000');
    expect(gradient[9]).toEqual('#ffffff');

  });

});

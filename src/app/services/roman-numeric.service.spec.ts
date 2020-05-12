import { TestBed, async } from '@angular/core/testing';

import { RomanNumericService } from './roman-numeric.service';

describe('RomanNumericService', () => {
  let service: RomanNumericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('El numero 1 debe ser I', async(() => {
    expect(service.roman(1)).toEqual('I');
  }));
  it('El numero 2 debe ser III', async(() => {
    expect(service.roman(2)).toEqual('II');
  }));
  it('El numero 3 debe ser III', async(() => {
    expect(service.roman(3)).toEqual('III');
  }));
  it('El numero 4 debe ser IV', async(() => {
    expect(service.roman(4)).toEqual('IV');
  }));
  it('El numero 5 debe ser V', async(() => {
    expect(service.roman(5)).toEqual('V');
  }));
  it('El numero 6 debe ser VI', async(() => {
    expect(service.roman(6)).toEqual('VI');
  }));
  it('El numero 7 debe ser VII', async(() => {
    expect(service.roman(7)).toEqual('VII');
  }));
  it('El numero 8 debe ser VIII', async(() => {
    expect(service.roman(8)).toEqual('VIII');
  }));
  it('El numero 9 debe ser IX', async(() => {
    expect(service.roman(9)).toEqual('IX');
  }));
  it('El numero 10 debe ser X', async(() => {
    expect(service.roman(10)).toEqual('X');
  }));
  it('Los Numeros 20, 30, 40, 50, 60, 70, 80, 90 ', async(() => {
    expect(service.roman(10)).toEqual('X');
    expect(service.roman(20)).toEqual('XX');
    expect(service.roman(30)).toEqual('XXX');
    expect(service.roman(40)).toEqual('XL');
    expect(service.roman(50)).toEqual('L');
    expect(service.roman(60)).toEqual('LX');
    expect(service.roman(70)).toEqual('LXX');
    expect(service.roman(80)).toEqual('LXXX');
    expect(service.roman(90)).toEqual('XC');
  }));
  it('El numero 500 debe ser D', async(() => {
    expect(service.roman(500)).toEqual('D');
  }));
  it('El numero 535 debe ser DXXXV', async(() => {
    expect(service.roman(535)).toEqual('DXXXV');
  }));
  it('El numero 800 debe ser DCCC', async(() => {
    expect(service.roman(800)).toEqual('DCCC');
  }));
});

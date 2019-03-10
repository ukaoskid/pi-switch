import { Injectable } from '@nestjs/common';
import { BinaryValue, Gpio } from 'onoff';

@Injectable()
export class GpioService {

  switch(pin: number, value: BinaryValue) {

    const gpio = new Gpio(pin, 'out');
    gpio.writeSync(value);
    gpio.unexport();
  }
}

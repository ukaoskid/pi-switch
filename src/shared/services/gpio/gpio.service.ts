import { Injectable } from '@nestjs/common';
import { Gpio } from 'onoff';

@Injectable()
export class GpioService {

  async onOff(pin: number, ms: number) {

    const gpio = new Gpio(pin, 'out');
    gpio.writeSync(1);
    await this.sleep(ms);
    gpio.writeSync(0);
    gpio.unexport();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

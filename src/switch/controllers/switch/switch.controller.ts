import { Controller, Post } from '@nestjs/common';
import { GpioService } from '../../../shared/services/gpio/gpio.service';

@Controller('switch')
export class SwitchController {

  constructor(private readonly gs: GpioService) { }

  @Post()
  async switch() {
    this.gs.switch(14, 1);
    await this.sleep(500);
    this.gs.switch(14, 0);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

import { Controller, Post } from '@nestjs/common';
import { GpioService } from '../../../shared/services/gpio/gpio.service';

@Controller('switch')
export class SwitchController {

  constructor(private readonly gs: GpioService) { }

  @Post()
  async switch() {
    await this.gs.onOff(14, 500);
    return;
  }
}

import { HttpModule, Module } from '@nestjs/common';
import { GpioService } from './services/gpio/gpio.service';

@Module({
  imports: [HttpModule],
  exports: [

    HttpModule,

    // Services.
    GpioService,
  ],
  providers: [GpioService],
})
export class SharedModule {}

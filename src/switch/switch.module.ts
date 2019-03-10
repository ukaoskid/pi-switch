import { Module } from '@nestjs/common';
import { SwitchController } from './controllers/switch/switch.controller';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [SwitchController],
})
export class SwitchModule {}

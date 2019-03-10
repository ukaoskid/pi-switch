import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwitchModule } from './switch/switch.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [SwitchModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

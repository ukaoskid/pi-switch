import { Test, TestingModule } from '@nestjs/testing';
import { SwitchController } from './switch.controller';

describe('Switch Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SwitchController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SwitchController = module.get<SwitchController>(SwitchController);
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { NoticiaJornalController } from './noticia_jornal.controller';
import { NoticiaJornalService } from './noticia_jornal.service';

describe('NoticiaJornalController', () => {
  let controller: NoticiaJornalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoticiaJornalController],
      providers: [NoticiaJornalService],
    }).compile();

    controller = module.get<NoticiaJornalController>(NoticiaJornalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

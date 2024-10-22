import { Test, TestingModule } from '@nestjs/testing';
import { NoticiaJornalService } from './noticia_jornal.service';

describe('NoticiaJornalService', () => {
  let service: NoticiaJornalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoticiaJornalService],
    }).compile();

    service = module.get<NoticiaJornalService>(NoticiaJornalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

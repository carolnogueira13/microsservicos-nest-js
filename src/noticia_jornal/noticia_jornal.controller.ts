import { Controller, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { NoticiaJornalService } from './noticia_jornal.service';
import { CreateNoticiaJornalDto } from './dto/create-noticia_jornal.dto';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppController } from 'src/app.controller';

@Controller('noticia-jornal')
export class NoticiaJornalController {
  constructor(private readonly noticiaJornalService: NoticiaJornalService) {}

  logger = new Logger(AppController.name)
  @EventPattern('criar-noticia')
  async criarEmpresa(@Payload() createNoticia: CreateNoticiaJornalDto) {
    this.noticiaJornalService.create(createNoticia);
    this.logger.log(`noticia recebida: ${JSON.stringify(createNoticia)}`)
  }

}

import { Module } from '@nestjs/common';
import { NoticiaJornalService } from './noticia_jornal.service';
import { NoticiaJornalController } from './noticia_jornal.controller';
import { PrismaService } from 'src/configuration/prisma/prisma.service';

@Module({
  controllers: [NoticiaJornalController],
  providers: [NoticiaJornalService,PrismaService],
})
export class NoticiaJornalModule {}

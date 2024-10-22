import { Injectable } from '@nestjs/common';
import { CreateNoticiaJornalDto } from './dto/create-noticia_jornal.dto';
import { PrismaService } from 'src/configuration/prisma/prisma.service';

@Injectable()
export class NoticiaJornalService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createNoticiaJornalDto: CreateNoticiaJornalDto) {
    await this.prisma.noticia_jornal.create({data: createNoticiaJornalDto});
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoticiaJornalModule } from './noticia_jornal/noticia_jornal.module';

@Module({
  imports: [NoticiaJornalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

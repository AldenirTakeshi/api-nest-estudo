import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EventModule, MongooseModule.forRoot("mongodb+srv://aldenirtakeshi:261217@cluster0aws.qlmg4ch.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0AWS")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

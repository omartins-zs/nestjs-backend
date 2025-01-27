import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevelopersModule } from './developers/developers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
  TypeOrmModule.forRoot({type:'sqlite',
    database: 'db.sqlite',
    entities: [__dirname + '/**/*.entity{.ts,.js}'], // Ensure this path resolves correctly
    synchronize:true,
  }),
  DevelopersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

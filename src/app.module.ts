import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client/dist'),
      exclude: ['/api*'],
    }),
    PlayersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

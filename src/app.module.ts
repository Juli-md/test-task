import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client/dist'),
      exclude: ['/api*'],
    }),
    PlayersModule,
  ],
})
export class AppModule {}

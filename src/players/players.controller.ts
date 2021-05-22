import { Controller, Get } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
    constructor(private _playersService: PlayersService) {}

    @Get('all')
    async GetAll(): Promise<any> {
      const players = await this._playersService.getPlayers();
      return players;
    }
}

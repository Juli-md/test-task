import { Injectable } from '@nestjs/common';
import * as MOCKED_DATA from './testdata.json'; // or use const inside the controller function

@Injectable()
export class PlayersService {

    private _playersData = MOCKED_DATA;

    getPlayers(): Promise<any> {
       const playersData = new Promise(resolve => {
             resolve(this._playersData);
         });
        return playersData;
    }

}

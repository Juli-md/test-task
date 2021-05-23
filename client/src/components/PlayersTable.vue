<template>
  <div>
    <div class="loading" v-if="isLoading"><p>Загружается...</p></div>
    <table class="table" v-if="!isLoading">
      <tr>
        <th>Место</th>
        <th>ФИО</th>
        <th>Статус</th>
        <th>Опыт</th>
        <th>Монеты</th>
      </tr>
      <tr v-for="player in getPlayersRowData" :key="player.idNode">
        <td>{{ player.place }}</td>
        <td>{{ player.fio }}</td>
        <td>{{ player.level }}</td>
        <td>{{ player.experience }}</td>
        <td>{{ player.money }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { orderBy, pick } from 'lodash';
import { Vue, Options } from 'vue-class-component';
import { IPlayer, IPlayerRow, IResource } from '../models/models';
import PlayersDataService from '../services/PlayersDataService';

@Options({
  watch: {
    $route(to, from) {
      if (to.path === '/top') {
        this.limit = true;
      } else if (to.path === '/full') {
        this.limit = false;
      }
    },
  },
})
export default class PlayersTable extends Vue {
  public limit = false;
  public isLoading = false;
  private playersRowData: IPlayerRow[] = [];

  get getPlayersRowData() {
    return this.limit ? this.playersRowData.slice(0, 5) : this.playersRowData;
  }

  setPlayersData(playersList: IPlayer[]): void {
    const playerRowList = this.setPlayerRowItems(playersList);
    this.playersRowData = this.orderPlayers(playerRowList);
  }

  created() {
    this.limit = this.$route.path === '/top' ? true : false;
    this.fetchPlayersData();
  }

  fetchPlayersData() {
    this.isLoading = true;
    PlayersDataService.getAll()
      .then((response) => {
        this.setPlayersData(response.data);
        this.isLoading = false;
      })
      .catch((e) => {
        if (e.response) {
          console.log(e.response.status);
        } else {
          console.log('error');
        }
      });
  }

  setPlayerRowItems(list: IPlayer[]): IPlayerRow[] {
    const players: IPlayerRow[] = list.map((p: IPlayer) => {
      const player: IPlayerRow = pick(p, ['idNode', 'fio', 'level']);
      const resources: IResource[] = JSON.parse(p.resources);

      player.money = resources.find((r) => r.resource === 'MONEY')?.value ?? 0;
      player.experience =
        (resources.find((r) => r.resource === 'ACTIVERATE')?.value ?? 0) +
        (resources.find((r) => r.resource === 'PASSIVERATE')?.value ?? 0);

      return player;
    });

    return players;
  }

  setPlayerPosition(list: IPlayerRow[]): void {
    let position = 1;
    list[0].place = position;
    for (let i = 1; i < list.length; i++) {
      const currentItem = list[i];
      const previousItem = list[i - 1];
      if (
        currentItem.experience === previousItem.experience &&
        currentItem.money === previousItem.money
      ) {
        currentItem.place = previousItem.place;
      } else {
        position += 1;
        currentItem.place = position;
      }
    }
  }

  orderPlayers(list: IPlayerRow[]): IPlayerRow[] {
    const orderedList: IPlayerRow[] = orderBy(
      list,
      ['experience', 'money'],
      ['desc', 'desc'],
    );
    this.setPlayerPosition(orderedList);

    return orderedList;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table {
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #ddd;
  }
}
.loading {
  color: rgb(139, 51, 51);
}
</style>

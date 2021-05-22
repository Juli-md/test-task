<template>
  <h1 class="layout__text">Главная страница</h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PlayersTable from '../components/PlayersTable.vue';

@Options({
  components: {
    PlayersTable,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss"></style>

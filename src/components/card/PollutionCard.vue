<template>
  <ion-card>
    <ion-searchbar
      type="text"
      debounce="0"
      :value="searchInput"
      @ionInput="
        searchInput = $event.target.value;
        onInput$.next($event.target.value);
      "
      @ionClear="searchCleared($event)"
      placeholder="Digite a cidade"
    >
    </ion-searchbar>
  </ion-card>
  <ion-card v-if="isLoaded">
    <ion-card-header>
      <ion-card-subtitle>Cidade</ion-card-subtitle>
      <ion-card-title>{{ pollutionData.city.name }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-item
          v-for="(data, i) of pollutinData.forecast.daily.o3"
          v-bind:key="i"
        >
          {{ data.avg }}
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSearchbar,
  IonList,
  IonItem,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "PollutionCard",
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonSearchbar,
    IonList,
    IonItem,
  },
  data: () => ({ pollutionData: {}, isLoaded: false }),
  mounted() {
    this.getCity("Jundiai");
  },
  methods: {
    getCity(name) {
      axios
        .get(
          `http://api.waqi.info/feed/${name}/?token=5aec0c4d5d22e411de1c9c28e35562c1c3063bb6`
        )
        .then((response) => {
          this.isLoaded = true;
          this.pollutionData = response.data.data;
        })
        .catch((error) => console.log(error));
    },
  },
});
</script>
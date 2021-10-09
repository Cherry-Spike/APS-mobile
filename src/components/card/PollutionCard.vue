<template>
  <ion-card>
    <ion-searchbar type="text" debounce="0" placeholder="Digite a cidade">
    </ion-searchbar>
  </ion-card>
  <ion-loading
    :is-open="isOpenRef"
    message="Carregando..."
    :duration="isLoaded == false"
    @didDismiss="setOpen(false)"
  >
  </ion-loading>
  <ion-card v-if="isLoaded">
    <ion-card-header>
      <ion-card-subtitle>Cidade</ion-card-subtitle>
      <ion-card-title>{{ pollutionData.city.name }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-list-header>Qualidade atmosférica</ion-list-header>
        <ion-item>
          <ion-label>AQI</ion-label>
          <ion-note slot="end">{{ pollutionData.aqi }}</ion-note>
        </ion-item>
        <ion-list-header>Informações atmosféricas</ion-list-header>
        <ion-item>
          <ion-label>NO2</ion-label>
          <ion-card-subtitle>(Oxido de nitrogênio)</ion-card-subtitle>
          <ion-note slot="end">{{ pollutionData.iaqi.no2.v }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>O3</ion-label>
          <ion-card-subtitle>(Ozônio)</ion-card-subtitle>
          <ion-note slot="end">{{ pollutionData.iaqi.o3.v }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>PM10</ion-label>
          <ion-card-subtitle>(Partículas poluentes)</ion-card-subtitle>
          <ion-note slot="end">{{ pollutionData.iaqi.pm10.v }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>PM25</ion-label>
          <ion-card-subtitle>(Partículas poluentes)</ion-card-subtitle>
          <ion-note slot="end"> {{ pollutionData.iaqi.pm25.v }}</ion-note>
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
  IonListHeader,
  IonNote,
  IonLoading,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
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
    IonListHeader,
    IonNote,
    IonLoading,
  },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state) => (isOpenRef.value = state);

    return { isOpenRef, setOpen };
  },
  data: () => ({ pollutionData: {}, isLoaded: false }),
  mounted() {
    this.setOpen(true);
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
          this.setOpen(false);
          this.pollutionData = response.data.data;
        })
        .catch((error) => console.log(error));
    },
  },
});
</script>
<template>
  <ion-loading
    :is-open="isOpenRef"
    message="Carregando..."
    :duration="timeout"
    @didDismiss="setOpen(false)"
  >
  </ion-loading>
  <ion-card v-if="NoResults == false">
    <ion-card-header color="secondary">
      <ion-card-title>Cidades</ion-card-title>
    </ion-card-header>
    <ion-list v-for="(city, i) in cities" :key="i">
      <ion-item>
        <ion-label>{{ i + 1 }} {{ city.name }}</ion-label>
        <AqiBadge :aqi="city.indice"></AqiBadge>
      </ion-item>
    </ion-list>
  </ion-card>
  <ion-card-content v-else>Cidade não encontrada</ion-card-content>
</template>

<script>
import AqiBadge from "@/components/AqiBadge.vue";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonLoading,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import axios from "axios";
export default defineComponent({
  name: "PollutionCityCard",
  props: {
    countryCode: String,
    timeout: { type: Number, default: 2000 },
  },
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonLoading,
    AqiBadge,
  },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state) => (isOpenRef.value = state);

    return { isOpenRef, setOpen };
  },
  data: () => ({
    country: "",
    cities: [
      {
        name: "",
        stationLocation: "",
        indice: 0,
      },
    ],
    NoResults: true,
  }),
  mounted() {
    this.getRanking();
  },
  methods: {
    getRanking() {
      this.setOpen(true);
      this.NoResults = true;

      axios
        .get(`https://waqi.info/rtdata/ranking/${this.countryCode}.json`)
        .then((response) => {
          this.setOpen(false);
          let cities = response.data.cities;
          this.country = cities[0].country;
          this.cities = cities.map((city) => {
            let cityMap = {
              name: city.city ? city.city : "❓",
              stationLocation: city.station.n ? city.station.n : "❓",
              indice: city.station.a ? city.station.a : "❓",
            };
            return cityMap;
          });

          this.NoResults = false;
        })
        .catch((error) => console.log(error));
    },
  },
});
</script>
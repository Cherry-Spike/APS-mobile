<template>
  <ion-loading
    :is-open="isOpenRef"
    message="Carregando..."
    :duration="timeout"
    @didDismiss="setOpen(false)"
  >
  </ion-loading>
  <ion-card v-if="NoResults == false">
    <ion-list v-for="(country, i) in countries" :key="i">
      <ion-item>
        <ion-label class="ion-text-uppercase">
          {{ i + 1 }} {{ country.flag }} {{ country.name }}</ion-label
        >
        <AqiBadge :aqi="country.indice"></AqiBadge>
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
  IonLoading,
  IonItem,
  IonList,
  IonLabel,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import axios from "axios";
import { countryCodeEmoji } from "country-code-emoji";
export default defineComponent({
  name: "PollutionRankingCard",
  components: {
    IonCard,
    IonCardContent,
    IonLoading,
    IonItem,
    IonList,
    IonLabel,
    AqiBadge,
  },
  props: {
    timeout: { type: Number, default: 2000 },
  },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state) => (isOpenRef.value = state);

    return { isOpenRef, setOpen };
  },
  data: () => ({
    country: "",
    countries: [
      {
        name: "",
        flag: "",
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
        .get(`https://waqi.info/rtdata/ranking/index2.json`)
        .then((response) => {
          this.setOpen(false);
          let countries = response.data.cities;
          this.countries = countries.map((country) => {
            let countryMap = {
              flag: country.country ? countryCodeEmoji(country.country) : "❓",
              name: country.country ? country.country.toLowerCase() : "❓",
              indice: country.aqi ? country.aqi : "❓",
            };
            return countryMap;
          });

          this.NoResults = false;
        })
        .catch((error) => console.log(error));
    },
  },
});
</script>
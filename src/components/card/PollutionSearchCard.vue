<template>
  <ion-searchbar
    type="text"
    debounce="1600"
    @ionChange="getCity($event.target.value)"
    clear-input
    placeholder="Digite a cidade"
  >
  </ion-searchbar>
  <ion-loading
    :is-open="isOpenRef"
    message="Carregando..."
    :duration="timeout"
    @didDismiss="setOpen(false)"
  >
  </ion-loading>
  <ion-card v-if="cityNotFound == false">
    <ion-card-header>
      <ion-card-subtitle>Cidade</ion-card-subtitle>
      <ion-card-title>{{ pollutionData.name }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-list-header>Índice de qualidade do ar</ion-list-header>
        <ion-item>
          <ion-grid>
            <AqiBadge
              class="badge"
              :isLarge="true"
              :aqi="pollutionData.aqi"
              :showLabel="true"
            ></AqiBadge>
          </ion-grid>
        </ion-item>
        <ion-list-header>Informações atmosféricas</ion-list-header>
        <ion-item>
          <ion-label>Co</ion-label>
          <ion-card-subtitle>(Monóxido de carbono)</ion-card-subtitle>
          <ion-note slot="end">{{ pollutionData.co }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>No²</ion-label>
          <ion-card-subtitle>(Óxido de nitrogênio)</ion-card-subtitle>
          <ion-note slot="end">{{ pollutionData.no2 }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>O³</ion-label>
          <ion-card-subtitle>(Ozônio)</ion-card-subtitle>
          <ion-note slot="end">{{ pollutionData.o3 }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>PM10</ion-label>
          <ion-card-subtitle>(Partículas poluentes)</ion-card-subtitle>
          <ion-note slot="end">{{ pollutionData.pm10 }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>PM25</ion-label>
          <ion-card-subtitle>(Partículas cancerígenas)</ion-card-subtitle>
          <ion-note slot="end"> {{ pollutionData.pm25 }}</ion-note>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
  <ion-card-content v-else
    ><span>Cidade não encontrada</span>
    <div id="card-error"></div>
  </ion-card-content>
</template>

<script>
import AqiBadge from "@/components/AqiBadge.vue";
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
  IonLabel,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import axios from "axios";
export default defineComponent({
  name: "PollutionSearchCard",
  components: {
    AqiBadge,
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
    IonLabel,
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
    pollutionData: { name: "", aqi: 0, co: 0, no2: 0, o3: 0, pm10: 0, pm25: 0 },
    cityNotFound: true,
  }),
  mounted() {
    this.getCity("Jundiai");
  },
  methods: {
    getCity(name) {
      try {
        this.setOpen(true);
        this.cityNotFound = true;

        if (name.length < 1) {
          this.setOpen(false);
          return;
        }

        axios
          .get(
            `http://api.waqi.info/feed/${name}/?token=5aec0c4d5d22e411de1c9c28e35562c1c3063bb6`
          )
          .then((response) => {
            this.setOpen(false);
            let data = response.data.data;
            if (response.data.status == "ok") {
              this.pollutionData = {
                name: data.city.name ? data.city.name : "❓",
                aqi: data.aqi ? data.aqi : "❓",
                co: data.iaqi.co ? data.iaqi.co.v : "❓",
                no2: data.iaqi.no2 ? data.iaqi.no2.v : "❓",
                o3: data.iaqi.o3 ? data.iaqi.o3.v : "❓",
                pm10: data.iaqi.pm10 ? data.iaqi.pm10.v : "❓",
                pm25: data.iaqi.pm25 ? data.iaqi.pm25.v : "❓",
              };
              this.cityNotFound = false;
            }
          })
          .catch((error) => {
            document.getElementById(
              "card-error"
            ).innerHTML = `<span>${error}</span>`;
          });
      } catch (error) {
        document.getElementById(
          "card-error"
        ).innerHTML = `<span>${error}</span>`;
      }
    },
  },
});
</script>
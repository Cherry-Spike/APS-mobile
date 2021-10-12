<template>
  <ion-searchbar
    type="text"
    debounce="1000"
    @ionChange="getCity($event.target.value)"
    clear-input
    placeholder="Digite a cidade"
  >
  </ion-searchbar>
  <ion-loading
    :is-open="isOpenRef"
    message="Carregando..."
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
          <div class="centered">
            <ion-badge id="circulo" class="draw-circle">
              <ion-label>{{ pollutionData.aqi }}</ion-label>
            </ion-badge>
          </div>
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
  <ion-card-content v-else>Cidade não encontrada</ion-card-content>
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
  IonLabel,
  IonBadge
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import axios from "axios";
export default defineComponent({
  name: "PollutionSearchCard",
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
    IonLabel,
    IonBadge
  },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state) => (isOpenRef.value = state);

    return { isOpenRef, setOpen };
  },
  data: () => ({
    pollutionData: { name: "", aqi: 0, co: 0, no2: 0, o3: 0, pm10: 0, pm25: 0 },
    ColorRankData: { value: ""},
    cityNotFound: true,
  }),
  mounted() {
    this.getCity("Jundiai");  
  },
  ionViewDidEnter() {
    this.changeColor();
  },
  methods: {
    getCity(name) {
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
          if (data != "Unknown station") {
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
          if (data.aqi <= 50) {
            //document.getElementById('circulo').style.setProperty('--background', '#08f500');
            this.ColorRankData.value = "#00FF00"
            console.log(this.ColorRankData.value)
          }
          if (data.aqi > 50 && data.api <= 100) {
            //document.getElementById('circulo').style.backgroundColor = "#e9f500";
            this.ColorRankData.value = "#e9f500"
          }
          console.log(this.ColorRankData.value)
        })     
        .catch((error) => console.log(error));
    },
    changeColor(){
      document.getElementById("circulo").style.setProperty("--background:", this.ColorRankData.value);
    }
  },
})
</script>

<style scoped>

  .centered{
    margin: auto;
  }

  .draw-circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    top: 50%;
    display: flex;
    align-items: center; 
    justify-content: center;
    font-size: 1.5em;
    margin-bottom: 0.7em;
    }

</style>
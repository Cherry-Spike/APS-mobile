<template>
  <ion-page>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-title>Poluição no mundo 🗺</ion-title>
          </ion-row>
          <ion-row>
            <ion-searchbar
              debounce="600"
              placeholder="Digite a cidade">
            </ion-searchbar>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Poluição no mundo 🗺</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="container">
        <ion-card>
          <img src="../../public/assets/madison.jpg"/>
          <ion-card-header>
            <ion-card-subtitle>Cidade</ion-card-subtitle>
            <ion-card-title>Madison, WI</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
            Madison was named the capital of the Wisconsin Territory in 1836.
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>


    
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSearchbar,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonSearchbar,
  },
});
</script>

<style scoped>

ion-card {
    display: block;
    width: 98%;
    margin: 10px auto;
    text-align: center
}

img{
  height: 200px; 
  width: 300px; 
  object-fit:cover; 
}

ion-title {
  margin:25px;
  text-align: center
}

ion-searchbar{
  text-align: center
}

#container {
  text-align: center;
  margin: 0, auto;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

</style>
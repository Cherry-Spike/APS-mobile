<template>
  <ion-card>
    <ion-searchbar debounce="600" placeholder="Digite a cidade">
    </ion-searchbar>
  </ion-card>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Cidade</ion-card-subtitle>
      <ion-card-title>Madison, WI</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
      Madison was named the capital of the Wisconsin Territory in 1836.
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
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "PollutionCard",
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonSearchbar,
  },
});
</script>
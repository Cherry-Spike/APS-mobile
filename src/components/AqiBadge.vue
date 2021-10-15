<template>
  <ion-row>
    <ion-col v-if="isLarge" size="12" class="ion-text-center">
      <ion-badge class="badge-index" :style="badgeColor">
        <ion-label class="badge-index-label">{{ aqi }}</ion-label></ion-badge
      >
    </ion-col>
    <ion-col v-else size="12" class="ion-text-center">
      <ion-badge :style="badgeColor">
        <ion-label>{{ aqi }}</ion-label></ion-badge
      >
    </ion-col>
    <ion-col size="12" class="ion-text-center">
      <span v-if="showLabel">{{ indexLabel }}</span>
    </ion-col>
  </ion-row>
</template>
<script>
import { defineComponent } from "vue";
import { IonBadge, IonLabel } from "@ionic/vue";
export default defineComponent({
  name: "AqiBadge",
  props: {
    aqi: Number,
    showLabel: Boolean,
    isLarge: Boolean,
  },
  data: () => ({ badgeColor: String, indexLabel: String }),
  components: { IonBadge, IonLabel },

  mounted() {
    this.setBadgeColor(this.aqi);
  },
  methods: {
    setBadgeColor(aqi) {
      if (aqi <= 50) {
        this.badgeColor = { backgroundColor: "#009966" };
        this.indexLabel = "Bom";
      } else if (aqi <= 100) {
        this.badgeColor = { backgroundColor: "#ffde33" };
        this.indexLabel = "Moderado";
      } else if (aqi <= 150) {
        this.badgeColor = { backgroundColor: "#ff9933" };
        this.indexLabel = "Insalubre para grupos sensíveis";
      } else if (aqi <= 200) {
        this.badgeColor = { backgroundColor: "#cc0033" };
        this.indexLabel = "Insalubre";
      } else if (aqi <= 300) {
        this.badgeColor = { backgroundColor: "#660099" };
        this.indexLabel = "Muito Insalubre";
      } else {
        this.badgeColor = { backgroundColor: "#7e0023" };
        this.indexLabel = "Perigoso";
      }
    },
  },
});
</script>
<style scoped>
.badge-index {
  width: 100%;
  font-size: 3em;
  display: inline-block;
}
</style>
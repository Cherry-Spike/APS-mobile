<template>
  <IonBadge id="circulo">
    <IonLabel>{{ aqi }}</IonLabel></IonBadge
  >
</template>
<script>
import { defineComponent } from "vue";
import { IonBadge, IonLabel } from "@ionic/vue";
export default defineComponent({
  name: "AqiBadge",
  props: {
    aqi: Number,
  },
  components: { IonBadge, IonLabel },
  data: () => ({
    badgeColor: String,
  }),
  mounted() {
    this.setBadgeColor(this.aqi);
  },
  methods: {
    setBadgeColor(aqi) {
      if (aqi <= 50) {
        this.changeColor("#00FF00");
      }
      if (aqi > 50 && aqi <= 100) {
        this.changeColor("#e9f500");
      }
    },
    changeColor(color) {
      document.getElementById("circulo").style.background = color;
    },
  },
});
</script>
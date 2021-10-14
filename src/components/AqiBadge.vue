<template>
  <div id="aqibadge"></div>
  <IonBadge id="'idPrefix'">
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
    idPrefix: String
  },
  components: { IonBadge, IonLabel },

  mounted() {
    this.setBadgeColor(this.aqi);
  },
  methods: {
    setBadgeColor(aqi) {
      if (aqi <= 50) {
        this.changeColor("#009966");
      }
      if (aqi > 50 && aqi <= 100) {
        this.changeColor("#ffde33");
      }
      if (aqi > 100 && aqi <= 150) {
        this.changeColor("#ff9933");
      }
      if (aqi > 150 && aqi <= 200) {
        this.changeColor("#cc0033");
      }
      if (aqi > 200 && aqi <= 300) {
        this.changeColor("#660099");
      }
      if (aqi > 300) {
        this.changeColor("#7e0023");
      }
    },
    changeColor(color) {
      document.getElementById("badge-" + this.idPrefix).style.background = color;
    },
  },
});
</script>
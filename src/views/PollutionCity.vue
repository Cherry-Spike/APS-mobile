<template>
  <IonVuePage :title="this.title">
    <PollutionCityCard :countryCode="this.country"></PollutionCityCard>
  </IonVuePage>
</template>

<script>
import PollutionCityCard from "@/components/card/PollutionCityCard.vue";
export default {
  components: {
    PollutionCityCard,
  },
  data: () => ({
    title: `Ranking ${this.country}`,
  }),
};
</script>

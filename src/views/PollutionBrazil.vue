<template>
  <IonVuePage :title="'Ranking do Brasil'">
    <PollutionCityCard :countryCode="'BR'"></PollutionCityCard>
  </IonVuePage>
</template>

<script>
import PollutionCityCard from "@/components/card/PollutionCityCard.vue";
export default {
  components: {
    PollutionCityCard,
  },
};
</script>

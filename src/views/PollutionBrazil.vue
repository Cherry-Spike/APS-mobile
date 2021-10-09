<template>
  <IonVuePage :title="'Ranking do Brasil'">
    <PollutionBrazilCard></PollutionBrazilCard>
  </IonVuePage>
</template>

<script>
import PollutionBrazilCard from "@/components/card/PollutionBrazilCard.vue";
export default {
  components: {
    PollutionBrazilCard,
  },
};
</script>

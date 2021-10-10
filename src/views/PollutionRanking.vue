<template>
  <IonVuePage :title="'Ranking de países'">
    <PollutionRankingCard></PollutionRankingCard>
  </IonVuePage>
</template>

<script>
import PollutionRankingCard from "@/components/card/PollutionRankingCard.vue";
export default {
  components: {
    PollutionRankingCard,
  },
};
</script>

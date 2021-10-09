<template>
  <IonVuePage :title="'Poluição do ar por cidade'">
    <PollutionCard></PollutionCard>
  </IonVuePage>
</template>

<script>
import PollutionCard from "@/components/card/PollutionCard.vue";
export default {
  components: {
    PollutionCard,
  },
};
</script>

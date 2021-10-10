<template>
  <IonVuePage :title="'Poluição do ar por cidade'">
    <PollutionSearchCard></PollutionSearchCard>
  </IonVuePage>
</template>

<script>
import PollutionSearchCard from "@/components/card/PollutionSearchCard.vue";
export default {
  components: {
    PollutionSearchCard,
  },
};
</script>

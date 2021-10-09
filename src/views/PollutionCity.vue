<template>
  <IonVuePage :title="'Poluição por cidade'">
    <div class="container">
      <PollutionCard></PollutionCard>
    </div>
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

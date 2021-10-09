<template>
  <IonVuePage :title="'Poluição no mundo 🗺'" :showBackButton="false">
    <ion-list>
      <ion-item v-for="(page, i) in links" :key="i">
        <ion-router-link color="dark" :to="page.link">{{
          page.title
        }}</ion-router-link>
      </ion-item>
    </ion-list>
  </IonVuePage>
</template>

<script>
export default {
  data() {
    return {
      links: [{ title: "Poluição por cidade", link: "pollution-city" }],
    };
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
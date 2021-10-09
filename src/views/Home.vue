<template>
  <IonVuePage :title="'Poluição no mundo 🗺'" :showBackButton="false">
    <ion-list>
      <ion-item v-for="(page, i) in links" :key="i">
        <router-link :to="page.link">{{ page.title }}</router-link>
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
  color: black;
}
</style>
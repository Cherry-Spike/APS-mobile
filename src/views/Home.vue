<template>
  <IonVuePage :title="'🗺 Índice de poluição do ar'" :showBackButton="false">
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
      links: [
        { title: "Poluição do ar por cidade", link: "pollution-city" },
        {
          title: "Cidades do Brasil com piores índices",
          link: "pollution-brazil",
        },
      ],
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
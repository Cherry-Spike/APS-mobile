<template>
  <IonVuePage :title="'🗺 Índice de poluição do ar'" :showBackButton="false">
    <ion-list>
      <ion-item v-for="(page, i) in links" :key="i">
        <router-link :to="page.link">{{ page.title }}</router-link>
      </ion-item>
    </ion-list>
    <img class="img-world" src="@/../public/assets/world.svg" alt="AQI Index" />
  </IonVuePage>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Poluição do ar por cidade", link: "pollution-search-city" },
        {
          title: "Piores índices por países",
          link: "ranking-countries",
        },
        {
          title: "Piores índices por cidades do Brasil",
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
.aqi-index {
  max-width: 26rem;
}
.img-world {
  width: 100%;
  height: auto;
  margin-top: 2em;
}
</style>
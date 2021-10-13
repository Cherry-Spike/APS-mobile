<template>
  <ion-page class="ion-page" main>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons v-if="showBackButton" slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-content" padding>
      <slot />
    </ion-content>
    <ion-footer>
      <ion-grid>
        <ion-row>
          <ion-col size="6" class="ion-align-self-center">
            <div class="footer-text ion-text-end">Desenvolvido por</div>
          </ion-col>
          <ion-col>
            <a href="https://github.com/Cherry-Spike" target="_blank">
              <img
                src="https://avatars.githubusercontent.com/u/72114262?s=200&v=4"
                class="cherry-spike-logo"
                alt="Cherry Spike Logo"
              />
            </a>
            <span style="font-size: 0.6em">Cherry Spike ©</span>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonFooter,
} from "@ionic/vue";
export default {
  name: "IonVuePage",
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonFooter,
  },
  props: {
    title: { type: String, default: "" },
    showBackButton: { type: Boolean, default: true },
  },
};
</script>


<style scoped>
.footer-text {
  font-size: 1em;
  margin: 10px 0;
}
.cherry-spike-logo {
  width: 3rem;
}
</style>

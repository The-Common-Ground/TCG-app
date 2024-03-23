<template>
  <Nuxtlayout>
    <v-app>
      <page-header></page-header>
      <v-main
        class="d-flex align-center justify-center"
        style="min-height: 300px"
      >
        <Nuxt-page />
      </v-main>
      <page-footer></page-footer>
    </v-app>
  </Nuxtlayout>
</template>

<script>
import PageFooter from "./components/ThePageFooter.vue";
import PageHeader from "./components/ThePageHeader.vue";

export default {
  name: "App",
  components: {
    PageFooter,
    PageHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.primary-colour {
  background-color: #fae3ce;
}
.primary-colour-dark {
  background-color: #f69033;
}
.secondary-colour {
  background-color: #e6f7fb;
}
</style>

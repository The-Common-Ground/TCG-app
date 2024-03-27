<template>
  <v-app>
    <page-header v-if="render" :size="size"></page-header>
    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <Nuxt-page v-if="render" :size="size"> </Nuxt-page>
    </v-main>
    <page-footer v-if="render" :size="size"></page-footer>
  </v-app>
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
  data() {
    return {
      render: false,
      currentSize: null,
    };
  },

  methods: {
    renderEvent() {
      this.width = window.outerWidth;
      this.size = 1100 >= this.width > 0 ? "s" : "l";

      if (this.size != this.currentSize) {
        this.currentSize = this.size;
        this.render = false;
        this.render = true;
        // console.log(this.width, this.size);
      }
    },
  },

  mounted() {
    this.renderEvent();
    window.addEventListener("resize", this.renderEvent);
  },

  unmounted() {
    window.removeEventListener("resize", this.renderEvent);
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

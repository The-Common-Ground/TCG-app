<template>
  <v-app-bar app color="white" density="prominent" elevate-on-scroll>
    <div
      style="
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
      class="d-flex"
    >
      <div class="d-flex px-3">
        <img class="logo" src="/public/logo.png" />
        <p class="my-auto text-h6">The Common Ground</p>
      </div>

      <v-tabs v-if="size === 'l'" align-tabs="center" height="80" class="px-10">
        <v-tab v-for="(page, i) in pages" :to="page.link">{{
          page.name
        }}</v-tab>
      </v-tabs>

      <v-menu v-else>
        <template v-slot:activator="{ props }">
          <v-btn class="my-auto ml-auto px-10" v-bind="props">
            <v-icon size="x-large">mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-btn
          v-for="page in pages"
          :to="page.link"
          variant="outlined"
          class="text-center btn-label"
          style="
            background-color: white;
            padding-top: 20px;
            padding-bottom: 30px;
          "
          >{{ page.name }}</v-btn
        >
      </v-menu>
    </div>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    size: String,
  },

  data() {
    return {
      pages: [
        { name: "Home", link: "/" },
        { name: "Events", link: "/events" },
        { name: "Publicise", link: "/publicise" },
        { name: "About Us", link: "/about" },
        { name: "Contribute", link: "/contribute" },
      ],
    };
  },
};
</script>
<style>
.sign-up-btn {
  margin-top: 2px;
}
.logo {
  position: relative;
  height: 80px;
  width: 80px;
  margin-right: 10px;
}

.btn-label {
  padding-inline: 200px;
}
</style>

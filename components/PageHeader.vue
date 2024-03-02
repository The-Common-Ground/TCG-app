<template>
  <v-app-bar app color="white" density="prominent" elevate-on-scroll>
    <div
      style="
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
      class="d-flex px-10 mx-10"
    >
      <div class="d-flex px-3">
        <img class="logo" src="/public/logo.png" />
        <p class="my-auto text-h6">The Common Ground</p>
      </div>

      <v-tabs align-tabs="center" height="80" class="px-10">
        <v-tab v-for="(page, i) in pages" :to="page.link">{{
          page.name
        }}</v-tab>
      </v-tabs>
    </div>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { name: "Home", link: "/" },
        { name: "Calendar", link: "/calendar" },
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
</style>

<template>
  <v-sheet
    class="d-flex secondary-colour pa-5 mx-16 align-center justify-center"
    elevation="3"
  >
    <img class="event-photo" :src="displayImg" />
    <div class="event-text pa-5">
      <p class="text-h4">{{ name }}</p>
      <p>{{ description }}</p>
      <v-chip
        v-for="(label, i) in toRaw(labels)"
        class="mt-5 mx-1 primary-colour"
        >{{ label }}</v-chip
      >
    </div>
  </v-sheet>
</template>

<script>
export default {
  props: { name: String, description: String, img: String, labels: Array },
  computed: {
    displayImg() {
      if (this.img) {
        return this.img;
      } else {
        return "/default/youth.png";
      }
    },
  },
};
</script>

<style>
.event-text {
  width: 60%;
}
.event-photo {
  width: 400px;
  height: 240px;
}
</style>

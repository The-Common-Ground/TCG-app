<template>
  <div
    class="event-container d-flex pa-5 mx-16 align-center justify-center"
    @click="$router.push(`${title}`)"
  >
    <img class="event-photo" :src="displayImg" />
    <div class="event-text pa-5">
      <p class="text-h4">{{ title }}</p>
      <p>{{ description }}</p>
      <v-spacer></v-spacer>
      <v-chip
        v-for="(label, i) in toRaw(labels)"
        class="mt-5 mx-1 primary-colour"
        >{{ label }}
      </v-chip>
    </div>
  </div>
</template>

<script>
export default {
  props: { title: String, description: String, img: String, labels: Array },
  computed: {
    displayImg() {
      if (this.img) {
        return this.img;
      } else {
        return "/default/placeholder.jpg";
      }
    },
  },
};
</script>

<style>
.event-container:hover {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  background-color: #e6f7fb;
}

.event-text {
  width: 60%;
}
.event-photo {
  width: 400px;
  height: 240px;
}
</style>

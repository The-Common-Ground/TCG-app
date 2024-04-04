<template>
  <v-card color="black" max-width="250px">
    <v-card-title>
      <img class="icon" :src="icon" />
      <v-spacer></v-spacer>
      <a class="text-h5 bold">{{ title }}</a>
      <v-spacer></v-spacer>
      <p class="text-subtitle-2 my-4 text-wrap">{{ subtitle }}</p>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    icon: String,
  },
};
</script>

<style>
.icon {
  width: 50px;
  height: 50px;
}
</style>

<template>
  <v-card color="black" max-width="250px">
    <v-card-title>
      <v-icon>{{ icon }}</v-icon>
      <v-spacer></v-spacer>
      <a class="text-h4 bold">{{ title }}</a>
      <v-spacer></v-spacer>
      <v-container class="pt-1">
        <v-col>
          <a class="text-subtitle-2 text-wrap"> {{ subtitle }}</a>
        </v-col>
      </v-container>
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

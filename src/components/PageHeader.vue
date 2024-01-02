<template>
  <v-app-bar app color="white" elevate-on-scroll>
    <v-tabs align-with-title>
      <v-icon class="logo">mdi-heart</v-icon>
      <v-tab>Home</v-tab>
      <v-tab>About Us</v-tab>
      <v-tab>Join a VIA</v-tab>
      <v-tab>VIA Resources</v-tab>
      <v-tab>Contribute</v-tab>
    </v-tabs>

    <v-spacer></v-spacer>
    <v-btn> Login </v-btn>
    <v-btn class="sign-up-btn" rounded="xl">
      Sign up with google
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script></script>
<style>
.logo {
  box-sizing: border-box;
  padding: 32px;
  padding-right: 50px;
  padding-left: 50px;
}
.sign-up-btn {
  background-color: #4262ff;
  opacity: 1;
  color: white;
}
</style>

<template>
  <v-app-bar app color="white" elevate-on-scroll>
    <v-tabs align-with-title>
      <v-icon class="logo">mdi-heart </v-icon>
      <v-tab to="/home">Home </v-tab>
      <v-tab to="/aboutus">About Us </v-tab>
      <v-tab to="/joinavia">Join a VIA</v-tab>
      <v-tab to="/resources">VIA Resources</v-tab>
      <v-tab to="/contribute">Contribute</v-tab>
    </v-tabs>

    <v-spacer></v-spacer>
    <v-btn to="/login"> Login </v-btn>
    <v-btn to="signup" class="sign-up-btn" rounded="xl">
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

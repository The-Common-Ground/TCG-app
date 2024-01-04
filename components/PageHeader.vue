<template>
  <v-app-bar app color="white" elevate-on-scroll>
    <v-tabs align-with-title>
      <v-icon class="logo">mdi-heart </v-icon>
      <v-tab to="/">Home </v-tab>
      <v-tab to="/aboutus">About Us </v-tab>
      <v-tab to="/joinavia">Join a VIA</v-tab>
      <v-tab to="/resources">VIA Resources</v-tab>
      <v-tab to="/contribute">Contribute</v-tab>
    </v-tabs>

    <v-spacer></v-spacer>
    <v-btn to="/login" rounded="xl"> Login </v-btn>
    <v-sheet color="#0b4e99" rounded="xl" height="40">
      <v-btn to="signup" variant="text" class="sign-up-btn" rounded="xl">
        Sign up with google
        <v-icon class="pb-1 pl-1">mdi-arrow-right</v-icon></v-btn
      >
    </v-sheet>
  </v-app-bar>
</template>

<script></script>
<style>
.sign-up-btn {
  margin-top: 2px;
}
.logo {
  box-sizing: border-box;
  padding: 32px;
  padding-right: 50px;
  padding-left: 50px;
}
</style>

<template>
  <v-footer inset>
    <div class="grid-container footer">
      <a href="https://www.instagram.com/thecommongr0und/">
        <v-icon color="white">mdi-instagram</v-icon>
      </a>

      <div class="footer-info handle-holder">@the_common_ground</div>
    </div>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
  background-color: #050038;
  height: 50px;
  color: white;
  padding-top: 10px;
  width: 100%;
  max-width: 100%;
}

.footer-info {
  display: inline-block;
  vertical-align: middle;
  padding: 4px;
}

.handle {
  font-family: "happy-monkey";
}

.platform-icon {
  width: 25px;
  height: 25px;
}
</style>

<template>
  <v-footer inset>
    <v-sheet width="100%" color="#050038" height="80px">
      <v-container variant="bg-surface-variant">
        <v-col class="text-center"
          ><v-chip start icon="mdi-twitter" variant="text">
            <v-btn max-width="5" variant="text">
              <v-icon href="https://instagram.com">mdi-instagram</v-icon>
            </v-btn>
            <a class="ml-n4">@The Common Ground</a>
          </v-chip></v-col
        >
      </v-container>
    </v-sheet>
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
  font-family: Arial;
}

.platform-icon {
  width: 25px;
  height: 25px;
}
</style>

<template>
  <v-container>
    <v-row class="contribute-ad" justify="center" align="center">
      <v-col>
        <v-card variant="flat">
          <v-card-title class="text-wrap">
            <p class="text-h3 text-left">At TCG, we design, code and manage</p>

            <p class="text-h6 text-subtitle-1 text-left pt-4">
              TCG is built by students, for students. All of our code and
              designs are open-source. If you are an aspiring
              developer/designer, we look forward to welcoming you to our team.
              For enquiries, email the_common_ground@dhs.edu.sg
            </p>
          </v-card-title>
          <v-card-action>
            <v-container>
              <v-row justify="left">
                <v-col cols="auto">
                  <v-btn variant="outlined" class="icon-btn" density="default">
                    <v-icon class="pr-2"> mdi-github</v-icon>
                    Github
                  </v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn variant="outlined" density="default">
                    <v-icon class="pr-2"> mdi-draw </v-icon>
                    Figma
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-action>
        </v-card>
      </v-col>
      <v-col>
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fjoin-us-icon-linear-isolated-thin-vector-34896071&psig=AOvVaw38HCmgsiQqyMy1S24gLjy5&ust=1704296889859000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNC6nuiGv4MDFQAAAAAdAAAAABAl"
        />
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class="tech-stack">
      <v-card width="100%" variant="flat">
        <v-card-title class="text-h3 pb-8 text-centre">
          Our Tech Stack
        </v-card-title>
        <v-carousel show-arrows="hover" hide-delimiter-background>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-card class="rounded-xl" color="black" height="100%" width="100%">
              <v-card-title class="pa-12">
                <v-icon class="pr-4 pb-2">mdi-code-tags</v-icon>
                <a class="text-h4">Frontend</a>
              </v-card-title>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      slides: ["Frontend", "Backend"],
    };
  },
};
</script>
<style>
.contribute-ad {
  box-sizing: border-box;
  padding: 85px;
}

.tech-stack {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>

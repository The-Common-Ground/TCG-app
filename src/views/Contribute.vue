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
              <v-row class="w-50" justify="left">
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
      <v-card width="88%" variant="flat" height="900px">
        <v-card-title class="text-h3 pb-8 text-centre">
          Our Tech Stack
        </v-card-title>
        <v-carousel show-arrows="hover" height="100%" hide-delimiter-background>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-card class="rounded-xl" color="black" height="90%" width="100%">
              <v-card-title class="pa-12">
                <v-icon class="pr-4 pb-2">mdi-code-tags</v-icon>
                <a class="text-h4">{{ slide.name }}</a>
                <v-card class="mt-5 mx-auto" color="black" flex max-width="800">
                  <v-container>
                    <v-row>
                      <v-col v-if="slide.noOfItems >= 1">
                        <tech-card
                          :title="slide.items[0].title"
                          :subtitle="slide.items[0].subtitle"
                          :icon="slide.items[0].icon"
                        >
                        </tech-card>
                      </v-col>
                      <v-col v-if="slide.noOfItems >= 2">
                        <tech-card
                          :title="slide.items[1].title"
                          :icon="slide.items[1].icon"
                          :subtitle="slide.items[1].subtitle"
                        ></tech-card>
                      </v-col>
                      <v-col v-if="slide.noOfItems >= 3">
                        <tech-card
                          :title="slide.items[2].title"
                          :icon="slide.items[2].icon"
                          :subtitle="slide.items[2].subtitle"
                        ></tech-card>
                      </v-col>
                    </v-row>
                    <v-row v-if="slide.noOfItems > 3">
                      <v-col v-if="slide.noOfItems >= 4">
                        <tech-card
                          :title="slide.items[3].title"
                          :icon="slide.items[3].icon"
                          :subtitle="slide.items[3].subtitle"
                        ></tech-card>
                      </v-col>
                      <v-col v-if="slide.noOfItems >= 5">Tech 5</v-col>
                      <v-col v-if="slide.noOfItems >= 6">Tech 6</v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-card-title>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import TechCard from "../components/TechCard.vue";

export default {
  data() {
    return {
      slides: [
        {
          name: "Frontend",
          noOfItems: 4,
          items: [
            {
              icon: "mdi-nodejs",
              title: "JavaScript",
              subtitle: "Programming Language",
            },
            {
              icon: "mdi-vuejs",
              title: "Vue.js",
              subtitle:
                "Vue.js is a common frontend framework for building user interfaces",
            },
            {
              icon: "mdi-language-html5",
              title: "HTML",
              subtitle:
                "Hyper Text Mark-up Language (HTML) dictates the structure of the website",
            },
            {
              icon: "mdi-language-css3",
              title: "CSS",
              subtitle:
                "Cascading Style Sheet (CSS) for element design, styling and transitions",
            },
          ],
        },
        {
          name: "Backend",
          noOfItems: 4,
          items: [
            {
              icon: "mdi-language-python",
              title: "Python",
              subtitle: "Programming Language",
            },
            {
              icon: "mdi-laptop",
              title: "Flask",
              subtitle:
                "Flask is a Python web framework which provides useful tools and features to create apps",
            },
            {
              icon: "mdi-laptop",
              title: "Firebase",
              subtitle:
                "Firebase is a backend cloud computing services and application platform provided by Google",
            },
            {
              icon: "mdi-laptop",
              title: "MongoDB",
              subtitle:
                "MongoDB is a cross-platform document-oriented database program",
            },
          ],
        },
      ],
    };
  },
  components: { TechCard },
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

.icon {
  width: 50px;
  height: 50px;
}
</style>

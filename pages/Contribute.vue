<template>
  <div class="d-flex flex-column">
    <v-card
      variant="flat"
      class="text-center"
      style="margin: 100px"
      max-width="1000"
    >
      <v-card-title class="text-wrap">
        <p class="text-h3 my-10">At TCG, we design, code and manage</p>

        <p class="text-h6 text-subtitle-1 pt-4">
          TCG is built by students, for students. All of our code and designs
          are open-source. If you are an aspiring developer/designer, we look
          forward to welcoming you to our team. For enquiries, email
          the_common_ground@dhs.edu.sg
        </p>
      </v-card-title>

      <div class="my-10">
        <v-btn variant="outlined" density="default" width="150" class="mx-3">
          <v-icon class="pr-2"> mdi-github</v-icon>
          Github
        </v-btn>
        <v-btn variant="outlined" density="default" width="150">
          <v-icon class="pr-2"> mdi-draw </v-icon>
          Figma
        </v-btn>
      </div>
    </v-card>

    <p class="text-h3 pb-8 text-center">Our Tech Stack</p>
    <v-carousel
      show-arrows="hover"
      height="100%"
      width="90%"
      hide-delimiter-background
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-card class="mx-auto text-center" color="black" rounded="xl" flex>
          <div class="d-flex align-center justify-center pt-10">
            <v-icon class="pr-4 pb-2">mdi-code-tags</v-icon>
            <p class="text-h4">{{ slide.name }}</p>
          </div>

          <div class="py-10">
            <div class="d-flex justify-center">
              <tech-card
                v-if="slide.noOfItems >= 1"
                :title="slide.items[0].title"
                :subtitle="slide.items[0].subtitle"
                :icon="slide.items[0].icon"
              >
              </tech-card>

              <tech-card
                v-if="slide.noOfItems >= 2"
                :title="slide.items[1].title"
                :icon="slide.items[1].icon"
                :subtitle="slide.items[1].subtitle"
              ></tech-card>

              <tech-card
                v-if="slide.noOfItems >= 3"
                :title="slide.items[2].title"
                :icon="slide.items[2].icon"
                :subtitle="slide.items[2].subtitle"
              ></tech-card>
            </div>

            <div class="d-flex justify-center">
              <tech-card
                v-if="slide.noOfItems >= 4"
                :title="slide.items[3].title"
                :icon="slide.items[3].icon"
                :subtitle="slide.items[3].subtitle"
              ></tech-card>

              <tech-card
                v-if="slide.noOfItems >= 5"
                :title="slide.items[4].title"
                :icon="slide.items[4].icon"
                :subtitle="slide.items[4].subtitle"
              ></tech-card>

              <tech-card
                v-if="slide.noOfItems >= 6"
                :title="slide.items[5].title"
                :icon="slide.items[5].icon"
                :subtitle="slide.items[5].subtitle"
              ></tech-card>
            </div>
          </div>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </div>
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
              icon: "tech/js.png",
              iconStyle: "normal",
              title: "JavaScript",
              subtitle: "Programming Language",
            },
            {
              icon: "tech/vue.png",
              iconStyle: "normal",
              title: "Vue.js",
              subtitle:
                "In conjunction with nuxt.js and vuetify, vuejs forms the backbone of our frontend",
            },
            {
              icon: "tech/html.png",
              iconStyle: "normal",
              title: "HTML",
              subtitle:
                "Hyper Text Mark-up Language (HTML) dictates the structure of the website",
            },
            {
              icon: "tech/css.png",
              iconStyle: "normal",
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
              icon: "tech/python.png",
              iconStyle: "Python",
              title: "Python",
              subtitle: "Programming Language",
            },
            {
              icon: "tech/flask.png",
              iconStyle: "Flask",
              title: "Flask",
              subtitle:
                "Flask is a Python web framework which provides useful tools and features to create apps",
            },
            {
              icon: "tech/firebase.png",
              iconStyle: "Firebase",
              title: "Firebase",
              subtitle:
                "Firebase is a backend cloud computing services and application platform provided by Google",
            },
            {
              icon: "tech/mongodb.png",
              iconStyle: "normal",
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
  width: 80px;
  height: 80px;
}
</style>

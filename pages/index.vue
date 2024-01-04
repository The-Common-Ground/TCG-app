<template>
  <v-sheet class="home-colour-gradient" height="3000" width="100%">
    <v-container>
      <v-row>
        <v-card class="home-slide" variant="text">
          <v-card-title>
            <a class="text-h3">VIA has never been easier.</a>
          </v-card-title>
          <v-sheet width="350" class="mt-5" color="#00000000">
            <v-card-subtitle>
              <a class="text-wrap"
                >First time starting a VIA? It’s hard. We know that. Fret not.
                Check our our awesome VIA guide and resources.</a
              >
              <v-spacer>
                <v-chip variant="text" class="ml-n3 mt-2">
                  <a href="/resources"> Find out more!</a
                  ><v-icon>mdi-arrow-right</v-icon>
                </v-chip>
              </v-spacer>
              <v-spacer> </v-spacer> </v-card-subtitle
          ></v-sheet>
        </v-card>
      </v-row>

      <v-row no-gutters>
        <v-sheet class="home-slide" color="#00000000" width="100%">
          <a class="text-h3">Built for every VIA</a>
          <v-sheet
            class="mt-5"
            width="100%"
            colour="blue"
            height="500px"
          ></v-sheet>
        </v-sheet>
        <v-sheet
          class="mx-auto text-center text-h4 font-weight-bold"
          width="300"
          height="auto"
          color="#00000000"
        >
          Promote your VIA hassle free
        </v-sheet>
      </v-row>

      <v-row class="home-slide">
        <v-sheet
          color="#00000000"
          class="mx-auto text-center my-10"
          width="1200"
          height="50"
          ><v-container class="" width="100%" height="100px" color="white">
            <v-row no-gutters>
              <v-col>
                <v-card width="300px" class="mx-auto" variant="text">
                  <v-card-title class="my-3 text-left">
                    <a class="font-weight-bold">Recruit volunteers</a>
                    <v-spacer></v-spacer>
                    <a class="text-subtitle-2 text-wrap"
                      >Struggling to find volunteers? TCG is here to help</a
                    ></v-card-title
                  >
                  <v-card-subtitle class="text-wrap"></v-card-subtitle>
                </v-card>
              </v-col>

              <v-col>
                <v-card width="300px" class="mx-auto" variant="text">
                  <v-card-title class="my-3 text-left"
                    ><a class="font-weight-bold">Convenient</a>
                    <v-spacer></v-spacer>
                    <a class="text-subtitle-2 text-wrap"
                      >Within a few clicks, you will have your own VIA page and
                      all the publicity you need. With TGC, you will not have to
                      worry of sending multiple emails</a
                    >
                  </v-card-title>
                </v-card>
              </v-col>

              <v-col>
                <v-card width="300px" class="mx-auto" variant="text">
                  <v-card-title class="my-3 text-left">
                    <a class="font-weight-bold text-center">Simple</a>
                    <v-spacer></v-spacer>
                    <a class="text-subtitle-2 text-wrap"
                      >TCG is easy to setup and use. Your project will be
                      noticed in no time</a
                    >
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-row>

      <v-row>
        <v-card class="home-slide mx-auto mr-16" variant="text">
          <v-card-title>
            <a class="text-h3">Want to contribute?</a>
          </v-card-title>
          <v-sheet width="350" class="mt-5" color="#00000000">
            <v-card-subtitle>
              <a class="text-wrap"
                >The Common Ground (TCG) is a student-led project for students.
                All software and art are open-source</a
              >
              <v-spacer>
                <v-chip variant="text" class="ml-n3 mt-2">
                  <a href="/resources"> Find out more!</a
                  ><v-icon>mdi-arrow-right</v-icon>
                </v-chip>
              </v-spacer>
              <v-spacer> </v-spacer> </v-card-subtitle
          ></v-sheet>
        </v-card>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style>
.home-colour-gradient {
  background: linear-gradient(
    0deg,
    rgba(248, 248, 248, 1) 0%,
    rgba(155, 231, 248, 1) 50%,
    rgba(248, 248, 248, 1) 100%
  );
}

.home-slide {
  margin-top: 200px;
  margin-bottom: 200px;
}
</style>

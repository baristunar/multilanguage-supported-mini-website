<template>
  <v-col xs="12" sm="12" md="12" lg="8" xl="8" class="mx-auto my-auto">
    <v-layout>
      <v-flex row align-center class="mx-auto mt-15 justify-space-around">
        <v-col xs="12" sm="12" md="12" lg="6" xl="6">
          <h1
            class="display-3 info--text font-weight-bold"
            v-html="$t('homepage.title')"
          ></h1>
        </v-col>
        <v-col xs="12" sm="12" md="12" lg="6" xl="6"
          ><v-img
            src="https://img.freepik.com/free-vector/character-illustration-people-holding-speech-bubbles_53876-43081.jpg?size=626&ext=jpg"
        /></v-col>
      </v-flex>
    </v-layout>
    <v-card
      elevation="10"
      outlined
      shaped
      class="pa-5 mt-5 primary white--text"
    >
      <v-card-title>
        <h2>{{ $t("homepage.subTitle") }}</h2>
      </v-card-title>

      <v-card-text>
        <p class="font-weight-bold text-center main-text white--text text-xs">
          {{ $t("homepage.mainText") }}
        </p>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {};
</script>
<style>
@media (max-width: 600px) {
  .main-text {
    font-size: 14px;
  }
}
.main-text {
  line-height: 2;
}
</style>

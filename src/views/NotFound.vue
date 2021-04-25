<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card height="400" color="transparent" flat>
            <div class="text-center d-flex flex-column align-center">
              <h1 class="display-3 mt-5 mb-5">{{ $t("errors.404") }}</h1>

              <v-btn
                class="mt-10"
                color="primary"
                fab
                dark
                large
                elevation="0"
                to="/"
              >
                <v-icon> mdi-arrow-left-circle </v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

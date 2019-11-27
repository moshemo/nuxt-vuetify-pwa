<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click.stop="toggleMainDrawer" />
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    toggleMainDrawer() {
      this.$store.dispatch("toggleMainDrawer");
    }
  }
};
</script>

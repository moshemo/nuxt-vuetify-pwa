<template>
  <v-app>
    <AppBar />
    <Content />
    <Footer />
    <NavDrawer />
  </v-app>
</template>

<script>
import AppBar from "./main/app-bar";
import Content from "./main/content";
import Footer from "./main/footer";
import NavDrawer from "./main/nav-drawer";

export default {
  components: {
    AppBar,
    Content,
    Footer,
    NavDrawer
  }
};
</script>

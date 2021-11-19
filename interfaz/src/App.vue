<template>
  <v-app>
    <v-app-bar
      app
      extended 
      flat
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      color="#D1C4E9"
      class="py-6"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Curriculum Vitae</v-toolbar-title>

      <Menu />
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Menu from '@/components/Menu.vue'
export default {
  name: 'App',

  components: {
    Footer,
    Menu
  },

  data() {
    return {
    }
  },
};
</script>
<style lang="scss">

</style>
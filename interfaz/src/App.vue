<template>
  <v-app>
    <v-app-bar
      app
      extended 
      flat
      elevate-on-scroll
      color="#D1C4E9"
      class="py-6"
    >
      <div>
          <img 
            src="./assets/cv.png" 
            alt="CV"
            width="80"
            height="80"
            @click.stop="!hiddenDrawer"
          >
      </div>

      <Menu />
    </v-app-bar>

    <Drawer v-if="hiddenDrawer"/>

    <v-main>
      <router-view/>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Menu from '@/components/Menu.vue'
import Drawer from '@/components/Drawer.vue'
export default {
  name: 'App',

  components: {
    Footer,
    Menu,
    Drawer
  },

  data() {
    return {
      hiddenDrawer: true
    }
  },
};
</script>
<style lang="scss">

</style>
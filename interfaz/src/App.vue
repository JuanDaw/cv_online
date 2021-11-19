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
            @click.stop="updateHidenDrawer(!hidenDrawer)"
          >
      </div>

      <Menu />
    </v-app-bar>

    <Drawer v-if="viewDrawer()"/>

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

import { mapActions } from "vuex"

export default {
  name: 'App',

  components: {
    Footer,
    Menu,
    Drawer
  },

  data() {
    return {
      selectId: {
        Home: 0,
        Estudios: 1,
        Proyectos: 2,
      },
      windowWidth: 0,
    }
  },

  computed: {
    urlName() {
      return this.$route.name;
    },

    selected: {
      get: function () {
        return this.$store.state.selected;
      },
      set: function (value) {
        this.updateSelected(value);
      },
    },

    hidenDrawer: {
      get: function () {
        return this.$store.state.hidenDrawer;
      },
      set: function (value) {
        this.updateHidenDrawer(value);
      },
    },
  },
  mounted() {
    this.resize();
  },

  methods: {
    ...mapActions(["updateSelected", "updateHidenDrawer"]),

    resize() {
      this.windowWidth = window.innerWidth;
    },

    viewDrawer() {
      return this.hidenDrawer && this.windowWidth < 960;
    },
  },

  watch: {
    selected() {
      this.hidenDrawer = false;
    },

    urlName() {
      this.selected = this.selectId[this.urlName];
    },
  },

};
</script>
<style lang="scss">

</style>
<template>
    <v-navigation-drawer app v-model="hidenDrawer" disable-resize-watcher>
    <v-list nav dense>
      <v-list-item-group v-model="selected" color="primary">
        <v-list-item
          v-for="(item, index) in menu"
          :key="index"
          @click="$router.push(item.view)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
import { mapState, mapActions } from 'vuex'
    export default {
        name: 'Drawer',
        computed: {
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

            ...mapState(["menu"]),
        },
        methods: {
          ...mapActions(["updateSelected", "updateHidenDrawer"]),
        },
    }
</script>

<style lang="scss" scoped>

</style>
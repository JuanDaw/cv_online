<template>
    <v-navigation-drawer app disable-resize-watcher>
    <v-list nav dense>
      <v-list-item-group color="primary">
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
import { mapState } from 'vuex'
    export default {
        name: 'Drawer',
        computed: {
            ...mapState(["menu"]),
        },
    }
</script>

<style lang="scss" scoped>

</style>
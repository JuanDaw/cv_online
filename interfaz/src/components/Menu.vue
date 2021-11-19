<template>
    <v-toolbar
        flat
        color="#D1C4E9"
        class="hidden-sm-and-down py-3 px-5"
      >
        <v-tabs v-model="selected">
          <v-tab
            v-for="(item, index) in menu"
            :key="index"
            @click="$router.push(item.view)"
          >
            <v-icon class="px-2">{{ item.icon }}</v-icon>
            <span>{{ item.text }}</span>
          </v-tab>
        </v-tabs>
    </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'
    export default {
        name: 'Menu',
        computed: {
          selected: {
            get: function () {
              return this.$store.state.selected;
            },
            set: function (value) {
              this.updateSelected(value);
            },
          },
          ...mapState(["menu"]),
        },

        methods: {
          ...mapActions(["updateSelected"]),
        },
    }
</script>

<style lang="scss" scoped>

</style>
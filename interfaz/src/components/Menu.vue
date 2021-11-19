<template>
    <v-toolbar
        flat
        color="#D1C4E9"
        class="hidden-sm-and-down py-3 px-5"
      >
        <v-tabs>
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
import { mapState } from 'vuex'
    export default {
        name: 'Menu',
        data() {
            return {
            }
        },
        computed: {
          ...mapState(["menu"]),
        },
    }
</script>

<style lang="scss" scoped>

</style>
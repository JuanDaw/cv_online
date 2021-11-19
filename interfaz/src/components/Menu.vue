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
    export default {
        name: 'Menu',
        data() {
            return {
                menu: [
                    { icon: "mdi-account", text: "Datos personales", view: "/" },
                    { icon: "mdi-book-open-page-variant-outline", text: "Datos académicos", view: "/estudios" },
                    { icon: "mdi-code-json", text: "Proyectos", view: "/proyectos" },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
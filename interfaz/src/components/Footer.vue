<template>
    <v-row>
        <v-footer
            dark
            fixed
            color="#B39DDB"
            class="justify-end col-12"
        >
            {{ new Date().getFullYear() }} --- <strong class="ml-1">Juan Villoria</strong>
            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                dark
                icon
            >   
                <v-btn 
                    flat 
                    icon
                >
                    <v-icon>{{ icon }}</v-icon>
                </v-btn>
            </v-btn>
        </v-footer>
    </v-row>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                icons: [
                    'mdi-facebook',
                    'mdi-linkedin',
                    'mdi-github'
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>
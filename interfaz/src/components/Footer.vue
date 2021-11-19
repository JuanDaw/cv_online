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
                v-for="(icon, index) in icons"
                :key="index"
                class="mx-4"
                dark
                icon
            >   
                <v-btn 
                    flat 
                    icon
                    link
                    :href="icon.link"
                    target="blank"
                >
                    <v-icon>{{ icon.icon }}</v-icon>
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
                    {icon: 'mdi-github', link: 'https://github.com/JuanDaw/'},
                    {icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/juan-antonio-villoria-del-moral-7937a8180'},
                    {icon: 'mdi-facebook', link: 'https://www.facebook.com/juan.viilloriiadelmoral'},
                    {icon: 'mdi-email', link: 'mailto:juvi.13.13@gmail.com'},
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>
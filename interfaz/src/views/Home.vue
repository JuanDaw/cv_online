<template>
  <v-container fluid>
    <v-row>
      <v-card
        max-width="800"
        class="mx-5 my-2 col-12 col-sm-5"
      >
        <v-img
          rounded
          class="white--text align-end text-overline"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>Juan Antonio Villoria del Moral</v-card-title>
        </v-img>
        <v-card-subtitle 
          class="text-overline"
        >
          Desarrollador Web Junior / Junior Web Developer
        </v-card-subtitle>
        <v-card-text class="text--primary">
          <div>
            <span class="font-weight-bold">
              Teléfono:
            </span>
            672768523
          </div>
          <div>
            <span class="font-weight-bold">Correo:</span>
            <a
              href="mailto:juvi.13.13@gmail.com"
              style="text-decoration: none;"
            >
              juvi.13.13@gmail.com
            </a>
          </div>
          <div>
            <span class="font-weight-bold">Idiomas:</span>
            <v-data-table
              :headers="headers"
              :items="items"
              hide-default-footer
              disable-sort
            >
            </v-data-table>
          </div>
        </v-card-text>
      </v-card>
      <v-card
        max-width="800"
        class="mx-5 my-2 col-12 col-sm-5"
      >
        <v-card-title>
          Persona extrovertida con muchas ganas de vivir experiencias nuevas, afrontar nuevos retos y aprender al máximo de todo lo vivido.
        </v-card-title>
        <v-card-text>
          <v-row class="pa-1">
            <v-list class="col-6">
              <span class="font-weight-medium">Tecnologías (de más a menos utilizadas):</span>
              <v-list-item
                v-for="(tecnologia, index) in tecnologias"
                :key="index"
              >
                <v-list-item-content>
                  <v-list-item-title>> {{ tecnologia }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-list class="col-6">
              <span class="font-weight-medium">Frameworks (de más a menos utilizados):</span>
              <v-list-item
                v-for="(framework, index) in frameworks"
                :key="index"
              >
                <v-list-item-content>
                  <v-list-item-title>> {{ framework }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-row>
        </v-card-text>
        <v-card-text class="pa-2">
          <v-list>
            <span class="font-weight-medium">Aptitudes laborales:</span>
            <v-list-item
              v-for="(capacidad, index) in capacidades"
              :key="index"
            >
              <v-list-item-content>
                <v-list-item-title>> {{ capacidad }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',

    data() {
      return {
        headers: [
          { text: "Idioma", value: "lengua", align: "center" },
          { text: "Nivel hablado", value: "nh", align: "center" },
          { text: "Nivel escrito", value: "ne", align: "center" },
          { text: "Nivel comprensivo", value: "nc", align: "center" },
        ],
        items: [
          {
            lengua: "Español",
            nh: "Nativo",
            ne: "Nativo",
            nc: "Nativo",
          },
          {
            lengua: "Inglés",
            nh: "B2",
            ne: "C1",
            nc: "C1",
          },
        ],
        tecnologias: [
          "JavaScript",
          "Python",
          "HTML",
          "CSS",
          "PHP",
          "TypeScript",
        ],
        frameworks: [
          "Vue",
          "Flask",
          "Django",
          "Yii2",
          "Angular",
          "Librerias: JQuery, Ajax, Vuetify, Vuex, Vue-Router",
        ],
        capacidades: [
          "Adaptación a nuevas tecnologías",
          "Trabajo en equipo",
          "Escuchar sugerencias y cambios",
          "Optimismo",
          "Esfuerzo por sacar el trabajo lo más óptimo posible",
          "Confianza",
          "Cooperación con los objetivos de la empresa",
        ]
      }
    },

    components: {
    },
  }
</script>

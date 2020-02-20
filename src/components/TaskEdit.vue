<template>
  <v-row column justify-center align-center>
    <v-col xs12 sm8 md6>
      <v-text-field
        v-if="task"
        v-model="titre"
        class="headline font-weight-black"
        solo
        flat
        label="Nom de la tâche"
        required
        hide-details
        :rules="[(v) => !!v || 'Le nom de la tâche est requis']"
        @blur="saveTitre"
        @keyup.enter="saveTitre"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    idTask: {
      type: String,
      required: true
    }
  },

  data: () => ({
    // Titre modifié par l'utilisateur
    tempTitre: ''
  }),

  computed: {
    /**
     * Permet de retourner la tâche à partir de l'id en paramètre
     */
    task() {
      return this.getTaskById(this.idTask)
    },

    titre: {
      get() {
        if (this.tempTitre === '') {
          // Si le tempTitre est vide, on met celui de la tâche actuelle
          return this.task.titre
        } else {
          // On met le titre que l'utilisateur est en train de modifier
          return this.tempTitre
        }
      },
      set(newTitre) {
        if (newTitre === '') {
          // Si l'utilisateur supprime, le titre, on remet l'ancien
          this.tempTitre = this.task.titre
        } else {
          // On sauvegarde temporairement le titre en cours de modifs
          this.tempTitre = newTitre
        }
      }
    },

    ...mapGetters({
      getTaskById: 'task/getTaskById'
    })
  },

  methods: {
    /**
     * Permet de sauvegarder le titre
     */
    saveTitre() {
      if (this.tempTitre !== '' && this.tempTitre !== this.task.titre) {
        this.setTaskTitle({ id: this.idTask, titre: this.tempTitre })
      }
    },

    ...mapMutations({
      setTaskTitle: 'task/setTitre'
    })
  }
}
</script>

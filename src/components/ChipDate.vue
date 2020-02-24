<template>
  <v-dialog ref="dialog" v-model="modal" persistent width="290px">
    <!-- Chip -->
    <template v-slot:activator="{ on }">
      <v-chip
        :outlined="primary === true && newDate !== null ? false : true"
        :color="primary === true && newDate !== null ? 'primary' : null"
        :close="closable === true && newDate !== null ? true : false"
        :small="small"
        v-on="on"
        @click:close="reset"
      >
        <v-icon :small="small" left>{{ icon }}</v-icon>
        {{ format }}
      </v-chip>
    </template>

    <!-- Date picker -->
    <v-date-picker
      v-model="newDate"
      scrollable
      first-day-of-week="1"
      locale="fr"
      no-title
      min="2020-02-20"
      color="primary"
    >
      <v-btn v-if="date !== null" text icon color="red" @click="reset">
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="btnAnnuler">Annuler</v-btn>
      <v-btn text color="primary" @click="btnOk">OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    /**
     * Date sélectionnée par défaut
     * --> sync enabled <--
     */
    date: {
      type: String,
      default: null
    } as PropOptions<string | null>,

    /**
     * Message affiché lorsqu'il n'y a aucune date entrée
     */
    label: {
      type: String,
      default: 'Choisir une date'
    } as PropOptions<string>,

    /**
     * Icone affiché à gauche du chip
     */
    icon: {
      type: String,
      default: 'mdi-calendar'
    } as PropOptions<string>,

    /**
     * Fonction qui permet de mettre en forme
     * la date sélectionnée
     */
    formatDate: {
      type: Function,
      default: (date: string) => date
    } as PropOptions<Function>,

    /**
     * Permet d'afficher le chip plus petit
     */
    small: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,

    /**
     * Permet de placer une bouton en croix lorsqu'une date
     * est sélectionnée pour la supprimer
     */
    closable: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>,

    /**
     * Permet de mettre le chip de la couleur primaire
     * lorsqu'une date est sélectionnée
     */
    primary: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },

  data() {
    return {
      newDate: this.date,
      modal: false
    }
  },

  computed: {
    format(): string {
      if (this.newDate === null) {
        return this.label
      } else {
        return this.formatDate(this.newDate)
      }
    }
  },

  methods: {
    /**
     * Lorsqu'on appuie sur le bouton "OK" de la modale
     * On synchronise la date sélectionnée
     */
    btnOk(): void {
      this.saveAndClose()
    },

    /**
     * Lorsqu'on appuie sur le bouton "Annuler" de la modale
     * On efface la modale et on supprime le champ "newDate"
     */
    btnAnnuler(): void {
      this.modal = false
      this.newDate = this.date
    },

    /**
     * Permet de supprimer la date sélectionnée
     */
    reset(): void {
      this.newDate = null
      this.saveAndClose()
    },

    /**
     * Permet de fermer la fenetre et d'enregistrer "newDate"
     */
    saveAndClose() {
      this.modal = false
      this.$emit('update:date', this.newDate)
    }
  }
})
</script>

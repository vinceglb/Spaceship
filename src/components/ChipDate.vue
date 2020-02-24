<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-chip
        :outlined="date !== null ? false : true"
        :color="date !== null ? 'primary' : 'black'"
        :close="date !== null ? true : false"
        class="mr-2"
        v-on="on"
        @click:close="date = null"
      >
        <v-icon left>{{ icone }}</v-icon>
        {{ format }}
      </v-chip>

      <!-- TEST : Au lieu d'un chip, c'est un bouton

      <v-btn rounded outlined small class="text-none salut" v-on="on">
        <v-icon left>{{ icone }}</v-icon>
        {{ format }}
      </v-btn>
      -->
    </template>
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false">Annuler</v-btn>
      <v-btn text color="primary" @click="click">OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    icone: {
      type: String,
      required: true
    },
    formatDate: {
      type: Function,
      required: true
    }
  },

  data: () => ({
    date: null,
    modal: false
  }),

  computed: {
    format() {
      if (this.date === null) {
        return this.label
      } else {
        return this.formatDate(this.date) // this.labelSelection + ' ' + this.date.substr(0, 10)
      }
    }
  },

  methods: {
    click() {
      this.$refs.dialog.save(this.date)
      this.$emit('select-date', this.date)
    },
    reset() {
      this.date = null
      this.click()
    }
  }
}
</script>

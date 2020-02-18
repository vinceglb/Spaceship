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
        :color="date !== null ? 'primary' : null"
        :close="date !== null ? true : false"
        class="mr-2"
        v-on="on"
        @click:close="date = null"
      >
        <v-icon left>{{ icone }}</v-icon>
        {{ bob }}
      </v-chip>
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
    labelSelection: {
      type: String,
      required: true
    },
    icone: {
      type: String,
      required: true
    }
  },

  data: () => ({
    date: null,
    modal: false
  }),

  computed: {
    bob() {
      if (this.date === null) {
        return this.label
      } else {
        return this.labelSelection + ' ' + this.date.substr(0, 10)
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

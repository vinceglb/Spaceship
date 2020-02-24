<template>
  <v-bottom-sheet v-model="sheet">
    <v-sheet class="rounded-card">
      <v-form ref="formTask" v-model="valid" @submit.prevent>
        <v-container>
          <!-- Elements importants -->
          <v-row align="center">
            <v-col cols="1" class="flex-grow-1 flex-shrink-0 textfield">
              <!-- Champ de texte pour le titre -->
              <v-text-field
                v-model="titre"
                solo
                flat
                label="Ajouter une tâche"
                required
                hide-details
                :rules="[(v) => !!v || 'Le nom de la tâche est requis']"
                @keyup.enter="save"
              ></v-text-field>
            </v-col>

            <!-- Bouton enregistrer -->
            <v-col cols="auto" class="flex-grow-0 flex-shrink-0">
              <v-btn fab color="primary" :disabled="!valid" @click="save">
                <v-icon>mdi-arrow-up-box</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <!-- Elements secondaires -->
          <v-row>
            <v-col>
              <v-chip-group column>
                <chip-date
                  ref="chip1"
                  label="Date de début"
                  icone="mdi-calendar-check-outline"
                  :format-date="formatStartDate()"
                  @select-date="startDate = $event"
                />
                <chip-date
                  ref="chip2"
                  label="Date d'échéance"
                  icone="mdi-calendar-text-outline"
                  :format-date="formatEndDate()"
                  @select-date="endDate = $event"
                />
              </v-chip-group>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
import { mapMutations } from 'vuex'
import dateUtil from '../utils/dateUtil'
import ChipDate from '~/components/ChipDate'

export default {
  components: {
    ChipDate
  },

  props: {
    myDay: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({
    valid: true,
    titre: null,
    startDate: null,
    endDate: null,
    sheet: false
  }),

  methods: {
    open() {
      this.sheet = true
    },

    save() {
      if (this.$refs.formTask.validate()) {
        this.sheet = false
        this.saveTask({
          titre: this.titre,
          description: this.description,
          startDate: this.startDate,
          endDate: this.endDate,
          myDay: this.myDay
        })
        this.reset()
      }
    },

    reset() {
      this.$refs.formTask.reset()
      this.$refs.chip1.reset()
      this.$refs.chip2.reset()
    },

    formatStartDate() {
      return function(date) {
        return dateUtil.formatStartDate(date)
      }
    },

    formatEndDate() {
      return function(date) {
        return dateUtil.formatEndDate(date)
      }
    },

    ...mapMutations({
      saveTask: 'task/createTask'
    })
  }
}
</script>

<style scoped>
.rounded-card {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.textfield {
  min-width: 50px;
  max-width: 100%;
}
</style>

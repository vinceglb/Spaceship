<template>
  <bottom-sheet ref="bs">
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
                icon="mdi-calendar-check-outline"
                closable
                primary
                :format-date="formatStartDate()"
                :date.sync="startDate"
              />
              <chip-date
                ref="chip2"
                label="Date d'échéance"
                icon="mdi-calendar-text-outline"
                closable
                primary
                :format-date="formatEndDate()"
                :date.sync="endDate"
              />
            </v-chip-group>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </bottom-sheet>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { mapMutations } from 'vuex'
import dateUtil from '~/utils/dateUtil'
import ChipDate from '~/components/ChipDate.vue'
import BottomSheet from '~/components/BottomSheet.vue'

export default Vue.extend({
  components: {
    ChipDate,
    BottomSheet
  },

  props: {
    myDay: {
      type: Boolean,
      required: true
    } as PropOptions<boolean>
  },

  data: () => ({
    valid: true,
    titre: null,
    startDate: null,
    endDate: null
  }),

  methods: {
    open(): void {
      ;(this.$refs.bs as any).open()
    },

    save(): void {
      if ((this.$refs.formTask as any).validate()) {
        // Ferme le bottom sheet
        ;(this.$refs.bs as any).close()

        // Enregistre la tâche
        this.saveTask({
          titre: this.titre,
          startDate: this.startDate,
          endDate: this.endDate,
          myDay: this.myDay
        })

        // Réinit le formulaire
        this.reset()
      }
    },

    reset(): void {
      const form = this.$refs.formTask as any
      const chip1 = this.$refs.chip1 as any
      const chip2 = this.$refs.chip2 as any
      form.reset()
      chip1.reset()
      chip2.reset()
    },

    formatStartDate: () => (date: string) => dateUtil.formatStartDate(date),

    formatEndDate: () => (date: string) => dateUtil.formatEndDate(date),

    ...mapMutations({
      saveTask: 'task/createTask'
    })
  }
})
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

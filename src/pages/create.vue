<template>
  <v-row column justify-center align-center>
    <v-col xs12 sm8 md6>
      <draggable>
        <transition-group>
          <div v-for="element in tasks2" :key="element.titre">
            <v-card ripple class="mb-2">
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox color="primary" class="ml-2"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ element.titre }}</v-list-item-title>
                  <v-list-item-subtitle class="mt-2">
                    <v-icon small>mdi-calendar</v-icon>
                    {{ formatDate(element.startDate, element.endDate) }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </div>
        </transition-group>
      </draggable>

      <!--
      <v-container style="max-width: 500px">
        <v-text-field
          v-model="task"
          label="What are you working on?"
          solo
          @keydown.enter="create"
        >
          <v-fade-transition v-slot:append>
            <v-icon v-if="task" @click="create">
              add_circle
            </v-icon>
          </v-fade-transition>
        </v-text-field>

        <h2 class="display-1 success--text pl-4">
          Tasks:&nbsp;
          <v-fade-transition leave-absolute>
            <span :key="`tasks-${tasks.length}`">
              {{ tasks.length }}
            </span>
          </v-fade-transition>
        </h2>

        <v-divider class="mt-4"></v-divider>

        <v-row class="my-1" align="center">
          <strong class="mx-4 info--text text--darken-2">
            Remaining: {{ remainingTasks }}
          </strong>

          <v-divider vertical></v-divider>

          <strong class="mx-4 success--text text--darken-2">
            Completed: {{ completedTasks }}
          </strong>

          <v-spacer></v-spacer>

          <v-progress-circular
            :value="progress"
            class="mr-2"
          ></v-progress-circular>
        </v-row>

        <v-divider class="mb-4"></v-divider>

        <v-card v-if="tasks.length > 0">
          <v-slide-y-transition class="py-0" group tag="v-list">
            <template v-for="(task, i) in tasks">
              <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

              <v-list-item :key="`${i}-${task.text}`">
                <v-list-item-action>
                  <v-checkbox
                    v-model="task.done"
                    :color="(task.done && 'grey') || 'primary'"
                  >
                    <template v-slot:label>
                      <div
                        :class="(task.done && 'grey--text') || 'primary--text'"
                        class="ml-4"
                        v-text="task.text"
                      ></div>
                    </template>
                  </v-checkbox>
                </v-list-item-action>

                <v-spacer></v-spacer>

                <v-scroll-x-transition>
                  <v-icon v-if="task.done" color="success">
                    mdi-check
                  </v-icon>
                </v-scroll-x-transition>
              </v-list-item>
            </template>
          </v-slide-y-transition>
        </v-card>
      </v-container>-->

      <v-btn id="fab" large fab dark color="primary" @click="sheet = !sheet">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>

      <v-bottom-sheet v-model="sheet">
        <v-sheet class="rounded-card">
          <v-form ref="formTask" v-model="valid" @submit.prevent>
            <v-container>
              <!-- Elements importants -->
              <v-row align="center">
                <v-col
                  cols="1"
                  style="min-width: 50px; max-width: 100%;"
                  class="flex-grow-1 flex-shrink-0"
                >
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
                      label-selection="Début"
                      icone="mdi-calendar-check-outline"
                      @select-date="startDate = $event"
                    />
                    <chip-date
                      ref="chip2"
                      label="Date d'échéance"
                      label-selection="Échéance"
                      icone="mdi-calendar-text-outline"
                      @select-date="endDate = $event"
                    />
                  </v-chip-group>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-sheet>
      </v-bottom-sheet>
    </v-col>
  </v-row>
</template>

<script>
import draggable from 'vuedraggable'
import ChipDate from '~/components/ChipDate'
import { mapMutations, mapGetters } from 'vuex'
import dateformat from 'dateformat'

export default {
  components: {
    draggable,
    ChipDate
  },

  data: () => ({
    tasks: [
      {
        done: false,
        text: 'Foobar'
      },
      {
        done: false,
        text: 'Fizzbuzz'
      }
    ],
    task: null,

    valid: false,
    titre: '',
    startDate: null,
    endDate: null,
    description: '',
    sheet: false
  }),

  computed: {
    completedTasks() {
      return this.tasks.filter((task) => task.done).length
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks
    },

    ...mapGetters({
      tasks2: 'task/getAllTasks'
    })
  },

  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.task
      })

      this.task = null
    },

    save() {
      if (this.$refs.formTask.validate()) {
        this.sheet = !this.sheet
        this.saveTask({
          titre: this.titre,
          description: this.description,
          startDate: this.startDate,
          endDate: this.endDate
        })
        this.reset()
      }
    },

    reset() {
      this.$refs.formTask.reset()
      this.$refs.chip1.reset()
      this.$refs.chip2.reset()
    },

    formatDate(startDate, endDate) {
      // const d = new Date(date)
      if (startDate && endDate) {
        return (
          dateformat(startDate, 'd mmm.') +
          ' - ' +
          dateformat(endDate, 'd mmm.')
        )
      } else if (startDate) {
        return 'Débute le ' + dateformat(startDate, 'd mmm.')
      } else if (endDate) {
        return 'Pour le ' + dateformat(endDate, 'd mmm.')
      } else {
        return ''
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

#fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>

<template>
  <v-card ripple class="mb-2">
    <v-list-item>
      <!-- Partie de gauche -->
      <v-list-item-action>
        <!-- Checkbox -->
        <v-checkbox
          v-if="addMyDay === false"
          v-model="check"
          color="primary"
          class="ml-2"
        />

        <!-- Bouton pour ajouter à "Ma journée" -->
        <v-btn v-else text icon color="primary" @click="addButtonClicked">
          <v-icon v-if="task.myDay === false">mdi-plus</v-icon>
          <v-icon v-else>mdi-minus</v-icon>
        </v-btn>
      </v-list-item-action>

      <!-- Contenu de la carte -->
      <v-list-item-content>
        <!-- Titre de la tâche -->
        <v-list-item-title @click="onCardClicked">
          {{ task.titre }}
        </v-list-item-title>

        <!-- Sous le titre -->
        <v-list-item-subtitle v-if="afficheDescr" class="mt-2">
          <chip-date
            v-if="startDate !== null"
            small
            icon="mdi-calendar"
            :format-date="formatStartDate()"
            :date.sync="startDate"
          />

          <chip-date
            v-if="endDate !== null"
            small
            icon="mdi-calendar-check"
            :format-date="formatEndDate()"
            :date.sync="endDate"
          />
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { getModule } from 'vuex-module-decorators'
import dateUtil from '~/utils/dateUtil'
import Task from '~/model/Task'
import TaskStore from '~/store/task'
import ChipDate from '~/components/ChipDate.vue'

export default Vue.extend({
  components: {
    ChipDate
  },

  props: {
    /**
     * La tâche a afficher
     */
    task: {
      type: Object,
      required: true
    } as PropOptions<Task>,

    /**
     * Permet de mettre des icones sur la gauche au lieu du check
     */
    addMyDay: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },

  data() {
    return {
      taskStore: getModule(TaskStore, this.$store)
    }
  },

  computed: {
    afficheDescr(): boolean {
      return this.task.startDate != null || this.task.endDate != null
    },

    /**
     * Permet de changer si la tâche est faite ou pas
     */
    check: {
      get(): boolean {
        return this.task.done
      },
      set(): void {
        this.taskStore.setDoneInverse(this.task.id)
      }
    },

    /**
     * Permet de changer la startDate
     */
    startDate: {
      get(): string | null {
        return this.task.startDate
      },
      set(newValue: string): void {
        this.taskStore.setStartDate({ id: this.task.id, startDate: newValue })
      }
    },

    /**
     * Permet de changer la endDate
     */
    endDate: {
      get(): string | null {
        return this.task.endDate
      },
      set(newValue: string): void {
        this.taskStore.setEndDate({ id: this.task.id, endDate: newValue })
      }
    }
  },

  methods: {
    /**
     * Permet d'aller sur la page de la tâche
     * pour voir les détails
     */
    onCardClicked(): void {
      this.$router.push({ path: '/task/' + this.task.id })
    },

    /**
     * Permet d'ajouter la tâche à "Ma journée"
     */
    addButtonClicked(): void {
      this.taskStore.setMyDayInverse(this.task.id)
    },

    /**
     * Permet de formater les dates correctement
     */
    formatStartDate: () => (date: string) => dateUtil.formatStartDate(date),
    formatEndDate: () => (date: string) => dateUtil.formatEndDate(date)
  }
})
</script>

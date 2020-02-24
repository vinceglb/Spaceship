<template>
  <v-card ripple class="mb-2">
    <v-list-item>
      <v-list-item-action>
        <v-checkbox
          v-if="bob === false"
          v-model="check"
          color="primary"
          class="ml-2"
        ></v-checkbox>
        <v-btn v-else text icon color="primary" @click="addButtonClicked">
          <v-icon v-if="task.myDay === false">mdi-plus</v-icon>
          <v-icon v-else>mdi-minus</v-icon>
        </v-btn>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title @click="onCardClicked">{{
          task.titre
        }}</v-list-item-title>
        <v-list-item-subtitle v-if="afficheDescr" class="mt-2">
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                v-if="task.startDate"
                rounded
                outlined
                small
                class="text-none salut"
                v-on="on"
              >
                <v-icon left>mdi-calendar</v-icon>{{ task.formatStartDate() }}
              </v-btn>
            </template>
            <v-date-picker
              v-model="date"
              :show-current="task.startDate"
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">Annuler</v-btn>
              <v-btn text color="primary" @click="todo">OK</v-btn>
            </v-date-picker>
          </v-dialog>

          <!-- TODO -->
          <v-btn
            v-if="task.endDate"
            rounded
            outlined
            small
            class="ml-1 text-none salut"
          >
            <v-icon left>mdi-calendar-check</v-icon>{{ task.formatEndDate() }}
          </v-btn>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { mapMutations } from 'vuex'
import Task from '~/model/Task'

export default Vue.extend({
  props: {
    task: {
      type: Object,
      required: true
    } as PropOptions<Task>,

    bob: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },

  data: () => ({
    date: null,
    modal: false
  }),

  computed: {
    afficheDescr(): boolean {
      return this.task.startDate != null || this.task.endDate != null
    },

    check: {
      get(): boolean {
        return this.task.done
      },
      set() {
        this.checkAction()
      }
    }
  },

  methods: {
    checkAction() {
      this.setDoneInverse(this.task.id)
    },

    onCardClicked() {
      this.$router.push({ path: '/task/' + this.task.id })
    },

    addButtonClicked() {
      this.setMyDayInverse(this.task.id)
    },

    todo() {
      this.modal = false
      this.setStartDate({ id: this.task.id, startDate: this.date })
    },

    ...mapMutations({
      setDoneInverse: 'task/setDoneInverse',
      setMyDayInverse: 'task/setMyDayInverse',
      setStartDate: 'task/setStartDate'
    })
  }
})
</script>

<style scoped>
.salut {
  letter-spacing: normal;
}
</style>

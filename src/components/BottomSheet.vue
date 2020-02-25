<template>
  <v-bottom-sheet v-model="sheet" scrollable :retain-focus="false">
    <v-card id="rounded-card2">
      <v-card-title v-if="titre !== null">{{ titre }}</v-card-title>
      <v-card-text id="v-card-text-style">
        <slot />
      </v-card-text>
    </v-card>
    <!--<v-sheet class="rounded-card">
      <slot />
    </v-sheet>-->
  </v-bottom-sheet>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
export default Vue.extend({
  props: {
    titre: {
      type: String,
      default: null
    } as PropOptions<string | null>
  },

  data: () => ({
    sheet: false
  }),

  methods: {
    open(): void {
      this.sheet = true
    },
    close(): void {
      this.sheet = false
    }
  }
})
</script>

<style scoped>
.rounded-card {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

#rounded-card2 {
  border-radius: 15px 15px 0 0;
}

#v-card-text-style {
  height: 70%;
  padding: 16px;
}
</style>

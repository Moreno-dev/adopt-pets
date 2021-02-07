<template>
  <b-container>
    <b-row>
      <b-col>
        <b-table responsive striped hover :items="flights">
          <template #cell(Date)="data">
            <router-link :to="`/flight/${data.index}`">
              {{ data.value }}
            </router-link>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'flights'
    ])
  }
}
</script>

<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>{{ species }} for Adoption</h1>
        <b-table striped hover :items="pets">
          <template #cell(name)="data">
            <router-link :to="`/pets/cats/${data.date}`">
              {{ data.value }}
            </router-link>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  }
}
</script>

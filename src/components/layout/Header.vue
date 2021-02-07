<template>
  <b-container fluid class="p-0">
    <b-row>
      <b-col>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/flights">Flights</b-nav-item>

            <b-nav-item-dropdown text="User" right>
              <b-dropdown-item href="#">Account</b-dropdown-item>
              <b-dropdown-item href="#">Settings</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>

<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card>
          <h1>Your Flight</h1>
          <h3>{{ flight.Date }}</h3>
          <b-row>
            <b-card-text>
              Departure: {{ flight.DeparturePlace }} @ {{flight.DepartureTime}}UTC
            </b-card-text>
            <b-card-text>
              Arrrival: {{ flight.ArrivalPlace }} @ {{flight.ArrivalTime}}UTC
            </b-card-text>
          </b-row>
          <b-row>
            <b-card-text>Registration: {{ flight.AircraftRegistration }}</b-card-text>
            <b-card-text>Landings: {{ totalLandings }}</b-card-text>
          </b-row>
          <b-row>
            <b-card-text>Total Time of Flight: {{ flight.TotalTimeOfFlight }}</b-card-text>
            <b-card-text>Remarks {{ flight.Remarks }}</b-card-text>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      flight: []
    }
  },
  computed: {
    ...mapState([
      'flights'
    ]),
    totalLandings () {
      return this.flight.LandingsDay + this.flight.LandingsNight
    }
  },
  mounted () {
    const flight = this.flights[this.$route.params.id]
    this.flight = flight
  }
}
</script>

<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Your Flights Dashboard</h1>
        <h2>You have {{ flightsCount }} flights</h2>
        <h2>and a total of {{totalFlightTime}} hours</h2>
        <b-button @click="toggleFlightForm">Add New Flight</b-button>
        <b-form @submit.prevent="handleSubmit" v-if="showFlightForm">

          <b-row>

            <b-col>

              <b-form-group id="input-group-1"
                            label="Departure"
                            label-for="input-1">
                <b-form-input id="input-1"
                              v-model="formData.DeparturePlace"
                              placeholder="ICAO Code"
                              required>
                </b-form-input>
              </b-form-group>

              <b-input-group class="mb-3">
                <b-form-input id="DepartureTime"
                              v-model="formData.DepartureTime"
                              type="text"
                              placeholder="UTC Dep. Time">
                </b-form-input>
                <b-input-group-append>
                  <b-form-timepicker v-model="formData.DepartureTime"
                                     button-only right>
                  </b-form-timepicker>
                </b-input-group-append>
              </b-input-group>

            </b-col>

            <b-col>

              <label for="flight-datepicker">Flight Date</label>
              <b-form-datepicker id="flight-datepicker"
                                 v-model="formData.Date"
                                 class="mb-2">
              </b-form-datepicker>

            </b-col>

            <b-col>

              <b-form-group id="input-group-2" label="Arrival" label-for="input-2">
                <b-form-input id="input-2"
                              v-model="formData.ArrivalPlace"
                              placeholder="ICAO Code"
                              required>
                </b-form-input>
              </b-form-group>

              <b-input-group class="mb-3">
                <b-form-input id="ArrivalTime"
                              v-model="formData.ArrivalTime"
                              type="text"
                              placeholder="UTC Arr. Time">
                </b-form-input>
                <b-input-group-append>
                  <b-form-timepicker v-model="formData.ArrivalTime"
                                     button-only>
                  </b-form-timepicker>
                </b-input-group-append>
              </b-input-group>

            </b-col>

          </b-row>

          <b-row>

            <b-form-group id="input-group-3"
                          label="Aircraft Model"
                          label-for="input-3">
              <b-form-input id="input-3"
                            v-model="formData.AircraftModel"
                            placeholder="ICAO model"
                            required>
              </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4"
                          label="Aircraft Registration"
                          label-for="input-4">
              <b-form-input id="input-4"
                            v-model="formData.AircraftRegistration"
                            placeholder="Registration"
                            required>
              </b-form-input>
            </b-form-group>

            <b-form-group label="Pilot Time">
              <b-form-radio-group id="radio-group-1"
                                  v-model="formData.PilotTime"
                                  name="radio-sub-component"
                                  stacked>
                <b-form-radio value="SinglePilotSE">Single Pilot SE</b-form-radio>
                <b-form-radio value="SinglePilotME">Single Pilot ME</b-form-radio>
                <b-form-radio value="MultiPilot">Multi Pilot</b-form-radio>
              </b-form-radio-group>
            </b-form-group>

          </b-row>

          <b-row>

            <b-form-group id="input-group-5"
                          label="PIC Name"
                          label-for="input-5">
              <b-form-input id="input-5"
                            v-model="formData.NamePIC"
                            placeholder="PIC Name"
                            required>
              </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6"
                          label="Remarks"
                          label-for="input-5">
              <b-form-input id="input-6"
                            v-model="formData.Remarks"
                            placeholder="Enter your remarks"
                            required>
              </b-form-input>
            </b-form-group>

          </b-row>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>

        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      showFlightForm: false,
      formData: {
        DeparturePlace: '',
        DepartureTime: '',
        Date: '',
        ArrivalPlace: '',
        ArrivalTime: '',
        AircraftModel: '',
        AircraftRegistration: '',
        PilotTime: '',
        NamePIC: '',
        Remarks: ''
      },
      DepartureTime: '',
      ArrivalTime: ''
    }
  },
  computed: {
    ...mapGetters([
      'flightsCount',
      'totalFlightTime'
    ])
  },
  methods: {
    ...mapActions([
      'addFlight'
    ]),
    toggleFlightForm () {
      this.showFlightForm = !this.showFlightForm
    },
    handleSubmit () {
      const payload = this.formData
      this.addFlight(payload)
      //  Reset form after submit
      this.formData = {
        DeparturePlace: '',
        DepartureTime: '',
        Date: '',
        ArrivalPlace: '',
        ArrivalTime: '',
        AircraftModel: '',
        AircraftRegistration: '',
        PilotTime: '',
        NamePIC: '',
        Remarks: ''
      }
      //  this.toggleFlightForm()
      alert('Flight Added!')
    }
  }
}
</script>

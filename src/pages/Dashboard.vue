<template lang="html">
  <div class="columns">
    <div class="column is-one-third">
      <div class="header">
        <b-field label="From">
            <b-autocomplete
                v-model="name"
                placeholder="Where are you ?"
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="filteredDataObj"
                field="user.first_name"
                @select="option => selected = option">
            </b-autocomplete>
        </b-field>
        
        <b-field label="To">
            <b-autocomplete
                v-model="name"
                placeholder="Where do you want to go ?"
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="filteredDataObj"
                field="user.first_name"
                @select="option => selected = option">
            </b-autocomplete>
        </b-field>
        
        
        <b-field label="Select time">
            <b-timepicker v-model="time"
                placeholder="Click to select...">

                <button class="button is-primary"
                    @click="time = new Date()">
                    <b-icon icon="clock"></b-icon>
                    <span>Now</span>
                </button>

                <button class="button is-danger"
                    @click="time = null">
                    <b-icon icon="close"></b-icon>
                    <span>Clear</span>
                </button>
            </b-timepicker>
        </b-field>
        
        
        <b-button type="is-primary">Search</b-button>
      </div>
      <div class="body">
      <hr>
      <div class="list-result is-flex">
        <div class="is-flex time">
          <div class="time-moving">
            18:00 -> 19:00
          </div>
          <span class="tag is-light">30p</span>
        </div>
        <div class="line">
          <span class="tag is-warning is-medium">Chuo Line</span>
        </div>
        <div class="price is-flex">
          <div class="yen-price">
            200 yen
          </div>
          <div class="token">
            0.05 ETH
          </div>
        </div>
        <div class="">
          <span class="tag is-success">Normal</span>
        </div>
      </div>
      <hr>
      <div class="list-result is-flex">
        <div class="is-flex time">
          <div class="time-moving">
            18:00 -> 19:00
          </div>
          <span class="tag is-light">30p</span>
        </div>
        <div class="line">
          <span class="tag is-warning is-medium">Chuo Line</span>
        </div>
        <div class="price is-flex">
          <div class="yen-price">
            200 yen
          </div>
          <div class="token">
            0.1 ETH
          </div>
        </div>
        <div class="">
          <span class="tag is-warning">Crowd</span>
        </div>
      </div>
      <hr>
      <div class="list-result is-flex">
        <div class="is-flex time">
          <div class="time-moving">
            18:00 -> 19:00
          </div>
          <span class="tag is-light">30p</span>
        </div>
        <div class="line">
          <span class="tag is-warning is-medium">Chuo Line</span>
        </div>
        <div class="price is-flex">
          <div class="yen-price">
            200 yen
          </div>
          <div class="token">
            0.2 ETH
          </div>
        </div>
        <div class="">
          <span class="tag is-danger">Very Crowd</span>
        </div>
      </div>
    </div>
  </div>
    <div class="column map">
      <div>
        <div>
          <h2>Search and add a pin</h2>
          <label>
            <gmap-autocomplete
              @place_changed="setPlace">
            </gmap-autocomplete>
            <button @click="addMarker">Add</button>
          </label>
          <br/>

        </div>
        <br>
        <gmap-map
          :center="center"
          :zoom="12"
          style="width:100%;  height: 500px;"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      time: new Date()
    };
  },

  mounted() {
    this.geolocate();
  },
  // computed: {
  //   filteredDataObj() {
  //     return this.data.filter((option) => {
  //       return option.user.first_name
  //           .toString()
  //           .toLowerCase()
  //           .indexOf(this.name.toLowerCase()) >= 0
  //     })
  //   }
  // },

  methods: {
    
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
}
</script>

<style lang="scss">
.header {
  padding: 20px;
  // background-image: linear-gradient(to right, #f15c41, #d34836);
}
.body {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
}
.list-result {
  flex-direction: column;
}
.price {
  justify-content: space-between;
}
.time {
  justify-content: space-between;
}
</style>

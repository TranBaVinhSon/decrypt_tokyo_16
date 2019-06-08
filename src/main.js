import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCwhXottIC8il2u7N6uN9d2wGkVNPFpT8w",
    libraries: "places"
  }
});

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
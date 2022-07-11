import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faBars, faClose, faChevronUp, faGamepad, faMusic, faFutbol, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faTwitterSquare, faInstagramSquare, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(
  faBars, 
  faClose, 
  faGithubSquare,
  faTwitterSquare,
  faInstagramSquare,
  faLinkedin,
  faChevronUp,
  faGamepad,
  faMusic,
  faFutbol,
  faEnvelope,
  faWhatsapp
)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

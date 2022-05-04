<template>
  <div id="app">
    <header>
      <Navbar/>
    </header>
    <article>
      <Home/>
    </article>
    <article>
      <About/>
    </article>
    <article>
      <Portfolio/>
    </article>
    <article>
      <Contact/>
    </article>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Portfolio,
    Contact
  },
  mounted() {
    document.body.style.setProperty('--navbar-text', window.innerWidth < 768 ? '#121212' : 'white');
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;600&display=swap');
@import './assets/sass.scss';

:root {
  --primary-text: rgb(15, 15, 15);
  --secondary-text: rgb(240, 240, 240);
  --navbar-text: white;
}

body {
  width: 100vw;
  overflow-x: hidden;
}

* {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

.left-spacer {
  @include lateralSpacer('l', 7px)
}
</style>

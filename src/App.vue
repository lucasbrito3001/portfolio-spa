<template>
  <div id="app">
    <header>
      <Navbar/>
    </header>
    <article id="/">
      <Home/>
    </article>
    <article id="about">
      <About/>
    </article>
    <article id="skills">
      <Skills/>
    </article>
    <article id="portfolio">
      <Portfolio/>
    </article>
    <article id="contact">
      <Contact/>
    </article>
    <a href="#/">
      <div class="scroll-to-top">
        <font-awesome-icon icon="fa-solid fa-chevron-up" class="menu"/>
      </div>
    </a>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Skills from './components/Skills.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Skills,
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
  --dark-bg: rgb(12, 12, 12);
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
  scroll-behavior: smooth;
}

article {
  position: relative;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 15px;
}

.general-title {
  color: rgb(20, 20, 20);
  margin-bottom: 10px;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  border-radius: 10px;
  background-color: var(--dark-bg);
  box-shadow: 1px 1px 20px 1px #202020;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  @include lg {
    display: none;
  }
}
</style>

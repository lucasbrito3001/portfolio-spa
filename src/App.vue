<template>
  <div id="app">
    <header>
      <Navbar/>
    </header>
    <article>
      <Home/>
    </article>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Home
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;600&display=swap');

:root {
  --primary-text: rgb(15, 15, 15);
  --secondary-text: rgb(240, 240, 240);
  --navbar-text: white;
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
</style>

<template>
    <div id="app">
        <header>
            <Navbar />
        </header>
        <article id="/">
            <Home />
        </article>
        <article id="about" class="article-about">
            <About />
        </article>
        <article id="skills">
            <Skills />
        </article>
        <article id="portfolio">
            <Portfolio />
        </article>
        <article id="blog">
            <Blog />
        </article>
        <article id="contact">
            <Contact />
        </article>
        <footer id="footer">
            <Footer />
        </footer>
        <a href="#/">
            <div class="scroll-to-top">
                <font-awesome-icon icon="fas-solid fa-chevron-up" class="menu"/>
            </div>
        </a>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Portfolio from "./components/Portfolio.vue";
import Blog from "./components/Blog.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    components: {
        Navbar,
        Home,
        About,
        Skills,
        Portfolio,
        Blog,
        Contact,
        Footer
    },
    mounted() {
        document.body.style.setProperty(
            "--navbar-text",
            window.innerWidth < 768 ? "#121212" : "white"
        );
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100;300;400;600&family=Teko:wght@600&display=swap");
@import "./assets/sass.scss";

:root {
    --primary-text: rgb(15, 15, 15);
    --secondary-text: rgb(236, 236, 236);
    --navbar-text: white;
    --light-gray: #313236;
    --dark: rgb(12, 12, 12);
    --dark-purple: rgb(18, 2, 31);
    --purple-text: #4508a8;
}

body {
    width: 100vw;
    overflow-x: hidden;
}

* {
    padding: 0;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

article {
    position: relative;
}

.article-about {
    background-color: rgb(250, 250, 250);
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 15px;
}

.general-title {
    color: rgb(20, 20, 20);
    margin-bottom: 10px;
    font-family: "Bebas Neue", sans-serif;
    font-size: 34px;
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
    background-color: var(--dark);
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

.card-transition {
    &:before {
        position: absolute;
        width: 0px;
        height: 100%;
        top: 0;
        left: 0;
        transition: width .2s;
        transition-timing-function: ease-out;
        content: "";
    }

    &:hover:before {
        width: 100%;
    }
}
</style>

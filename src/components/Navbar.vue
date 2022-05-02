<template>
    <nav>
        <span class="menu-sdw">
            <font-awesome-icon icon="fa-solid fa-bars" class="menu"/>
        </span>
        <ul class="menu-list">
            <a v-for="(item, key) in navItems" :key="key" :href="item.href">
                <li>{{ item.text }}</li>
            </a>
        </ul>
    </nav>
</template>

<script>
export default {
    data: () => ({
        navItems: [
            { href: '', text: 'Inicio' },
            { href: '#about', text: 'Sobre' },
            { href: '#portfolio', text: 'Portfolio' },
            { href: '#contact', text: 'Contatos' },
        ]
    })
}
</script>

<style scoped lang="scss">
@import '../assets/sass.scss';

nav {
    padding: 10px;
    background-color: transparent;
    position: absolute;
    z-index: 10;
    width: 100vw;

    .menu-sdw {
        display: none;

        .menu {
            color: white;
            font-size: 28px;
        }

        @include md {
            display: block;
        }
    }

    .menu-list {
        display: block;

        @include md {
            display: none;
        }
    }
}

a {
    color: var(--navbar-text);
}

ul {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;

    li:nth-child(n + 1) {
        margin-left: 10px;
    }
}
</style>
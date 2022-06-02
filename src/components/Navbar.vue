<template>
    <header>
        <div class="menu-sdw" :class="setAnimationMenuSdw">
            <font-awesome-icon icon="fa-solid fa-bars" class="menu" @click="toggleShowMenu"/>
        </div>
        <nav ref="menuList" :class="setAnimationMenu">
            <ul class="menu-list">
                <li class="menu-close">
                    <span>
                        <font-awesome-icon icon="fa-solid fa-close" class="menu" @click="toggleShowMenu"/>
                    </span>
                </li>
                <!-- <hr v-if="windowWidth < 768"> -->
                <a v-for="(item, key) in navItems" :key="key" :href="item.href" @click="toggleShowMenu">
                    <li>{{ item.text }}</li>
                </a>
                <a href="https://github.com/lucasbrito3001" target="_blank" v-if="windowWidth < 768" @click="toggleShowMenu">
                    <li>
                        <font-awesome-icon icon="fa-brands fa-github-square" class="github-icon"/> Meu GitHub
                    </li>
                </a>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data: () => ({
        navItems: [
            { href: '#', text: 'Inicio' },
            { href: '#about', text: 'Sobre' },
            { href: '#skills', text: 'Profissional' },
            { href: '#portfolio', text: 'Portfolio' },
            { href: '#posts', text: 'Publicações' },
            { href: '#contact', text: 'Contatos' },
        ],
        isShowingMenu: false,
        windowWidth: 0,
        isActiveAnimations: false
    }),
    computed: {
        setAnimationMenu() {
            if(this.windowWidth > 992) return ''
            else if(!this.isActiveAnimations) return 'initialStateMenuMobile'
            else if(this.isShowingMenu) return 'showMenu'
            else return 'hideMenu'
        },
        setAnimationMenuSdw() {
            if(this.windowWidth > 992) return ''
            else if(!this.isShowingMenu) return 'showMenuSdw'
            else return 'hideMenuSdw'
        }
    },
    mounted() {
        this.windowWidth = window.innerWidth;
    },
    methods: {
        toggleShowMenu: function () {
            if(!this.isActiveAnimations) this.isActiveAnimations = true;
            this.isShowingMenu = !this.isShowingMenu;
        }
    }
}
</script>

<style scoped lang="scss">
@import '../assets/sass.scss';
.menu-sdw {
    display: none;

    .menu {
        color: rgb(0, 0, 0);
        font-size: 28px;
    }

    @include lg {
        position: fixed;
        top: 20px;
        left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: white;
        box-shadow: 1px 1px 30px 1px #c2c0c0;
        width: 50px;
        height: 50px;
        z-index: 1000;
    }
}

nav {
    padding: 20px 40px;
    background-color: transparent;
    position: absolute;
    z-index: 500;
    width: 100vw;

    @include lg {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        height: 100vh;
        width: 55vw;
        background: rgb(255, 255, 255);
        padding: 0px;

        a:last-of-type {
            position: absolute;
            bottom: 0;
        }
    }

    .menu-list {
        display: flex;
        align-items: center;

        @include lg {
            display: block;
        }


        a {
            color: var(--navbar-text);
            display: inline;
            padding: 10px;
            transition: .4s;


            &:hover {
                background-color: rgba(44, 43, 43, 0.678);
                color: white;
                border-radius: 5px;
            }

            @include lg {
                display: block;

                .github-icon {
                    font-size: 28px;
                    margin-right: 10px;
                }

                &:hover {
                    background-color: rgb(0, 0, 0);
                }   
            }
        }

        li {
            padding: 5px 10px;
            font-weight: 700;

            @include lg {
                display: flex;
                align-items: center;
                font-size: 22px;
            }
        }

        .menu-close {
            display: none;

            @include lg {
                display: block;
                font-size: 32px;
                padding: 10px 20px;
            }
        }

        hr {
            margin: 0 5px;
            height: 1px;
            border: 1px solid rgb(226, 226, 226);
        }
    }
}

.initialStateMenuMobile {
    transform: translateX(-55vw);
    box-shadow: none;
}

.showMenu {
    animation: showMenu .5s ease-in-out forwards;
    box-shadow: 1px 1px 10px 1px rgb(228, 228, 228);
}

.showMenuSdw {
    animation: showMenuSdw .6s ease-in-out forwards;
}

.hideMenu {
    animation: hideMenu .5s ease-in-out forwards;
    box-shadow: none;
}

.hideMenuSdw {
    animation: hideMenuSdw .2s ease-in-out forwards;
}

@keyframes showMenu {
    from {
        transform: translateX(-55vw);
    } to {
        transform: translateX(0px);
    }
}

@keyframes showMenuSdw {
    from {
        transform: scale(.5);
        opacity: 0;
    } to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes hideMenu {
    from {
        transform: translateX(0px);
    } to {
        transform: translateX(-60vw);
    }
}

@keyframes hideMenuSdw {
    from {
        transform: scale(1);
        opacity: 1;
    } to {
        transform: scale(.6);
        opacity: 0;
    }
}
</style>
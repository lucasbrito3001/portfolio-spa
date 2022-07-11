<template>
    <div class="container">
        <div class="container-content">
            <h1 class="general-title" v-if="windowWidth <= 992">Quem sou eu?</h1>
            <div class="about-image">
                <img :src="require(`../assets/about-image.svg`)">
            </div>
            <div class="about-text">
                <h1 class="general-title" v-if="windowWidth > 992">Quem sou eu?</h1>
                <p>
                    Um jovem apaixonado por inovações, desafios, tecnologia, código e principalmente café!
                    E é isso que me faz gostar tanto da área de desenvolvimento e programação.
                </p>
                <p>
                    A ascensão constante da tecnologia me traz muita curiosidade,
                    e foi um dos fatores determinantes para o meu ingresso na área.
                </p>
            </div>
        </div>

        <section class="hobbies">
            <h2 class="general-title">Hobbies</h2>
            <ul class="hobbies-list">
                <li class="hobbies-list-item" v-for="(hobby, key) in hobbies" :key="key">
                    <img :src="hobby.image" :alt="hobby.imageAlt">
                    <p>{{  hobby.name }}</p>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    data: () =>({
        windowWidth: 0,
        hobbies: [
            { name: 'Games', image: require('../assets/game.svg'), imageAlt: 'imagem com uma pessoa jogando games no computador' },
            { name: 'Música', image: require('../assets/music.svg'), imageAlt: 'imagem com uma pessoa tocando violao' },
            { name: 'Esportes', image: require('../assets/sport.svg'), imageAlt: 'imagem com uma pessoa jogando futebol' },
            { name: 'Natureza', image: require('../assets/nature.svg'), imageAlt: 'imagem com uma pessoa jogando futebol' },
        ],
    }),
    mounted() {
        this.windowWidth = window.innerWidth
    }
};
</script>

<style scoped lang="scss">
@import "../assets/sass.scss";

.container {
    
    .general-title {
        font-size: 42px;
    }

    .container-content {
        margin-top: -50px;
        position: relative;
        width: 100%;

        box-shadow: 1px 1px 40px 1px rgb(100, 100, 100);
        background-color: rgb(255, 255, 255);

        border-radius: 10px;
        padding: 100px;

        @include lg {
            padding: 25px;
        }

        .about-text {
            width: calc(100% - 280px);
            margin-left: 250px;

            @include lg {
                width: 100%;
                margin-left: 0px;
            }

            p {
                line-height: 1.75;
                font-size: 20px;
                font-weight: 300;
                margin-bottom: 10px;
            }
        }

        .about-image {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 300px;

            @include lg {
                position: relative;
                height: 190px;
                width: 70%;
                margin: 20px auto;
            }

            img {
                display: block;
                margin: auto;
                width: 240px;
                height: 100%;
                border-radius: 10px 0 0 10px;

                @include lg {
                    border-radius: 10px;
                }
            }
        }
    }

    .hobbies {
        width: 100%;
        margin-top: 30px;
        padding-bottom: 10px;

        .hobbies-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: start;

            .hobbies-list-item {
                width: 25%;
                color: var(--primary-text);
                font-size: 20px;
                font-weight: 700;
                border-radius: 3px;
                padding: 10px;
                text-align: center;

                img {
                    width: 180px;

                    @include md {
                        width: 120px;
                    }
                }

                @include lg {
                    font-size: 20px;
                }

                @include md {
                    width: 50%;
                    font-size: 18px;
                }
            }

        }
    }
}
</style>

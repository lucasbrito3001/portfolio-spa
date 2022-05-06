<template>
    <div class="container">
        <div class="container-content">
            <h1 class="general-title" v-if="windowWidth <= 992">Quem sou eu?</h1>
            <div class="about-image">
                <img :src="require(`../assets/${windowWidth > 992 ? 'perfil-desk' : 'perfil' }.jpeg`)" alt="">
            </div>
            <div class="about-text">
                <h1 class="general-title" v-if="windowWidth > 992">Quem sou eu?</h1>
                <p>
                    Um jovem apaixonado por inovações, desafios e tecnologia,
                    e é isso que me faz gostar tanto da área de desenvolvimento e programação.
                </p>
                <p>
                    A ascensão constante da tecnologia me traz muita curiosidade,
                    e foi um dos fatores determinantes para o meu ingreso na área.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () =>({
        windowWidth: 0
    }),
    mounted() {
        this.windowWidth = window.innerWidth
    }
};
</script>

<style scoped lang="scss">
@import "../assets/sass.scss";

.container {
    margin-top: -75px;
    // z-index: 100;

    .container-content {
        position: relative;
        z-index: 100;
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
            margin-left: 280px;

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
            width: 280px;

            @include lg {
                position: relative;
                height: 190px;
                width: 70%;
                margin: 20px auto;
            }

            img {
                width: 100%;
                height: 100%;
                border-radius: 10px 0 0 10px;

                @include lg {
                    border-radius: 10px;
                }
            }
        }
    }
}
</style>

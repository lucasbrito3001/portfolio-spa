<template>
    <div class="container-portfolio">
        <h1 class="general-title">PORTFOLIO</h1>
        <div class="container">
            <ul class="projects-list">
                <li
                    class="projects-list-item"
                    v-for="(project, key) in projects"
                    :key="key"
                >
                    <a :href="`https://github.com/lucasbrito3001/${project.repo}`" target="_blank">
                        <figure>
                            <img :src="project.image" width="100%" height="200">
                            <figcaption>
                                {{ project.name }}
                            </figcaption>
                        </figure>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        projects: [
            { name: 'Conversor de cryptomoedas', image: require('../assets/portfolio/crypto-converter.png'), repo: 'cryptos-wallet' },
            { name: 'Busca de bandeiras', image: require('../assets/portfolio/flags.png'), repo: 'countries-nuxt-vuetify' },
            { name: 'Portfolio 2', image: require('../assets/portfolio/portfolio2.png'), repo: 'new-portfolio' },
            { name: 'Simulação de app bancário', image: require('../assets/portfolio/simubank.png'), repo: 'simubank-study' },
            { name: 'Site projeto extensão', image: require('../assets/portfolio/inception3d.png'), repo: 'inception3d-cp' },
            { name: 'Portfolio 1', image: require('../assets/portfolio/portfolio1.png'), repo: 'cryptos-wallet' },
        ],
    })
};
</script>

<style scoped lang="scss">
@import "../assets/sass.scss";

.container-portfolio {
    position: relative;
    padding: 50px 0;
    background: rgb(31, 31, 31);

    .container {
        min-height: 50vh;

        .projects-list {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            
            .projects-list-item {
                z-index: 100;
                width: 30%;
                transition: .3s;
                opacity: .8;

                &:hover {
                    z-index: 200;
                    transform: scale(1.1);
                    opacity: 1;

                    @include lg {
                        transform: scale(1.03);
                    }
                }

                figure {
                    position: relative;

                    figcaption {
                        opacity: 0;
                        transition: .3s;
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 100%;
                        padding: 20px 20px;
                        background-color: rgba(0, 0, 0, 0.788);
                        color: white;
                        font-weight: 700;
                    }

                    &:hover figcaption {
                        opacity: 1;
                    }
                }

                @include md {
                    width: 100%;
                    margin-top: 10px;
                }
            }
        }
    }

    h1 {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 15px;
        text-align: center;
        font-size: 130px;
        font-weight: 700;
        color: var(--purple-text);
        writing-mode: vertical-rl;
        margin-bottom: 0px;

        @include lg {
            margin-bottom: 5px;
            writing-mode: horizontal-tb;
            font-size: 58px;
            right: 0;
            top: 10px;
            left: 0;
        }
    }

    .general-title {
        margin-bottom: 0;
    }
}
</style>

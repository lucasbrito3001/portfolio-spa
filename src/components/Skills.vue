<template>
    <div class="container-skills">
        <div class="section-title">
            <h1 class="general-title">Informações pessoais e habilidades</h1>
        </div>
        <div class="container">
            <section class="professional-xp">
                <h2 class="general-title">Experiência profissional</h2>
                <hr>
                <ul class="xp-list">
                    <li class="xp-list-item">
                        <h1 class="xp-list-item-title">MOVA P2P</h1>

                        <div class="group-xp-position">
                            <h2>APR 2021 ~ AGO 2021 - Desenvolvedor Front-end Jr.</h2>
                            <p>
                                Manutenção e desenvolvimento de páginas web responsivas com NuxtJS.
                            </p>
                        </div>
                    </li>
                    <li class="xp-list-item">
                        <h1 class="xp-list-item-title">Lexart labs</h1>

                        <div class="group-xp-position">
                            <h2>MAR 2022 - Jr. Software Architect</h2>
                            <p>
                                Manutenção e desenvolvimento de páginas web responsivas, API's REST e gerenciamento de projetos fullstack.
                            </p>
                        </div>

                        <div class="group-xp-position">
                            <h2>DEZ 2021 ~ MAR 2022 - Fullstack Developer</h2>
                            <p>
                                Manutenção e desenvolvimento de páginas web responsivas e API's REST.
                            </p>
                        </div>
                        
                        <div class="group-xp-position">
                            <h2>JUN 2021 ~ DEZ 2022 - Frontend Developer</h2>
                            <p>
                                Manutenção e desenvolvimento de páginas web responsivas.
                            </p>
                        </div>

                    </li>
                </ul>
            </section>

            <section class="skills">
                <h2 class="general-title">Skills</h2>
                <hr>
                <ul
                    class="skills-list"
                >
                    <li 
                        class="skills-list-item card-transition"
                        v-for="(skill, key) in skills"
                        :key="key"
                    >
                        <span>{{ skill }}</span>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        skills: [
            "JavaScript",
            "ECMAScript 6+",
            "Vue",
            "Nuxt",
            "React",
            "Next",
            "Axios",
            "Fetch",
            "Ajax",
            "Promises",
            "NodeJs",
            "Express",
            "TypeScript",
            "Lumen",
            "MySQL",
            "SQL",
            "phpMyAdmin",
            "CSS",
            "SASS",
            "Bootstrap",
            "Vuetify",
            "Animations",
            "Transitions",
            "Flexbox",
            "Grid",
            "Responsividade",
            "Git",
            "GitHub",
            "GitLab",
            "BitBucket",
            "Google Maps API",
            "OpenStreetMap API",
            "Google Recaptcha",
            "Google Domains",
            "CoinMarketCap API",
            "JWT",
            "Linux",
            "LAMP",
            "WAMP",
            "NPM",
            "MVC",
            "Heroku",
            "Vercel",
            "Trello",
            "Slack",
            "Comunicação",
            "Empatia",
            "Organização",
            "Liderança",
            "Responsabilidade",
            "Honestidade",
            "Proatividade",
        ],
    }),
};
</script>

<style scoped lang="scss">
@import "../assets/sass.scss";

.container-skills {
    // background-color: rgb(255, 255, 255);
    // margin-top: 50px;
    color: var(--primary-text);
    background-color: var(--dark);
    background-position: left 10px;


    .section-title {
        background-color: var(--dark);
        width: 100%;
        height: 20vh;
        display: flex;
        align-items: center;
        justify-content: center;

        .general-title {
            font-size: 72px;
            margin: 0;
            color: rgb(75, 75, 75);
            padding: 0 15px;

            @include lg {
                font-size: 40px;
            }
        }
    }

    .general-title {
        color: var(--secondary-text);
        margin-top: 10px;
    }

    .professional-xp {
        margin-top: 30px;

        .xp-list-item {
            color: white;
            width: 70%;
            margin-left: auto;
            margin-bottom: 20px;
            

            .xp-list-item-title {
                font-weight: 700;
                color: var(--purple-text);
                font-size: 26px;

                @include lg {
                    font-size: 24px;
                }

                @include md {
                    font-size: 22px;
                }
            }

            .group-xp-position {
                margin-top: 15px;

                h2 {
                    font-weight: 700;
                    font-size: 24px;
                    color: var(--secondary-text);
    
                    @include lg {
                        font-size: 22px;
                    }
    
                    @include md {
                        font-size: 18px;
                    }
                }
    
                p {
                    font-size: 20px;
                    color: rgb(110, 110, 110);
                    margin-top: 5px;
    
                    @include lg {
                        font-size: 18px;
                    }
    
                    @include md {
                        font-size: 16px;
                    }
                }
            }

            @include lg {
                width: 80%;
            }

            @include md {
                width: 100%;
            }

        }
    }

    .skills {
        .skills-list {
            position: relative;
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 10px;
    
            flex-direction: row;
            flex-wrap: wrap;
            width: 80%;
            margin: auto;
            padding: 30px 0;
            border-radius: 5px;
    
            .skills-list-item {
                position: relative;
                display: flex;
                align-items: center;
                background: var(--light-gray);
                border-radius: 3px;
                padding: 7px 12px;
                color: white;
                transition: .5s;

                span {
                    z-index: 100;
                    font-weight: 700;
                    font-size: 14px;
                }
            }
    
            .card-transition {
    
                &:before {
                    background: rgb(255, 255, 255);
                    border-radius: 3px;
                }
    
                &:hover {
                    :before {
                        width: 100%;
                    }
    
                    &.skills-list-item {
                        color: var(--light-gray);
                    }
                }
            }
    
            @include lg {
                width: 100%;
                padding: 0px;
            }
        }
    }

    hr {
        border: 1px solid rgb(14, 14, 14);
        margin-bottom: 20px;
    }

}
</style>

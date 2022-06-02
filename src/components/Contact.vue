<template>
    <div class="container-contacts">
        <div class="bg-alternative">
            <div class="container">
                <h1 class="general-title">VAMOS CONVERSAR</h1>
                <p class="contact-desc">
                    Agora você me conhece melhor! Se eu puder te ajudar de alguma forma, ou tenha se interessado pelos meus serviços, 
                    entra em contato comigo pelos caminhos listados abaixo, e bora trocar essa ideia.
                </p>

                <div class="contacts-lists">
                    <div class="container-list">
                        <h2>Links para mensagem</h2>
                        <ul class="message">
                            <a target="_blank" href="mailto:devlucasmail@gmail.com">
                                <li >
                                    <b>e-mail: </b><em>devlucasmail@gmail.com</em>
                                </li>
                            </a>
                            <a target="_blank" href="https://wa.me/+5518997351747?text=Olá Lucas, te encontrei pelo seu portfolio, gostaria de conversar com você!">
                                <li >
                                    <b>WhatsApp: </b><em>(18) 99735 - 1747</em>
                                </li>
                            </a>
                        </ul>
                    </div>

                    <div class="container-list">
                        <h2>Redes sociais</h2>
                        <ul class="social-networks">
                            <a :href="social.href" v-for="(social, key) in socialNetworks" :key="key" target="_blank">
                                <li >
                                    <font-awesome-icon :icon="social.icon" class="contacts-icons"/>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        socialNetworks: [
            { icon: 'fa-brands fa-github-square', href: "https://github.com/lucasbrito3001" },
            { icon: 'fa-brands fa-twitter-square', href: "https://twitter.com/brito3001" },
            { icon: 'fa-brands fa-instagram-square', href: "https://www.instagram.com/lucasdebrito12/" },
            { icon: 'fa-brands fa-linkedin', href: "https://www.linkedin.com/in/webdevbrito/" },
        ]
    })
};
</script>

<style scoped lang="scss">
@import "../assets/sass.scss";
.container-contacts {
    width: 100%;
    height: 100%;
    background: white;
}

.bg-alternative {
    position: relative;
    min-height: 50vh;
    background-color: var(--dark-purple);
    clip-path: polygon(0 20%, 50% 0, 100% 20%, 100% 100%, 0 100%);
    padding-top: 100px;
    color: white;
    text-align: center;

    .general-title {
        color: var(--secondary-text);
        font-size: 48px;

        @include md {
            font-size: 36px;
        }
    }

    .contact-desc {
        width: 75%;
        margin: auto;
        text-align: left;
        line-height: 1.5;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
        color: rgb(226, 214, 37);
        
        @include lg {
            width: 90%
        }

        @include md {
            width: 100%;
        }
    }

    .contacts-lists {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: space-evenly;

        @include md {
            flex-direction: column;
        }

        a {
            color: rgb(214, 214, 214);
            padding: 10px;
        }

        .container-list {
            width: 100%;
            margin-top: 20px;
        }

        .social-networks {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .contacts-icons {
            font-size: 44px;
            transition: .3s;

            &:hover {
                transform: scale(1.1);
                color: rgb(255, 255, 255);
            }
        }
    }

    @include md {
        clip-path: polygon(0 10%, 50% 0, 100% 10%, 100% 100%, 0 100%);
        padding-top: 60px;
    }

    em {
        text-decoration: underline; 
    }
}
</style>

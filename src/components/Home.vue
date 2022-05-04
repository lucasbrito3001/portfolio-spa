<template>
    <div class="home-article">
        <h2 class="typing" v-if="showLine >= 1">Olá, seja bem-vindo! <span class="left-spacer"></span> </h2>
        <h1 class="typing" v-if="showLine >= 2">Meu nome é Lucas de Brito <span class="left-spacer"></span> </h1>
        <h2 class="typing" v-if="showLine >= 3">E eu sou um desenvolvedor web! <span class="left-spacer"></span> </h2>
    </div>
</template>

<script>
export default {
    data: () => ({
        showLine: 1,
        stopBlink: false
    }),
    mounted () {
        setTimeout(() => {
            this.showLine++;
            setTimeout(() => {
                this.showLine++;
            }, 2000)    
        }, 1500)
    }
}
</script>

<style scoped lang="scss">
@import '../assets/sass.scss';

.home-article {
    position: relative;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--secondary-text);
    width: 100vw;

    h1 {
        font-size: 38px;

        @include md {
            font-size: 26px;
        }
    }

    h2 {
        font-size: 32px;
        font-weight: 500;

        @include md {
            font-size: 20px;
        }
    }

    .typing {
        animation: typingText 4s linear both, blinkCursor .5s steps(40) infinite normal;
        overflow-x: hidden;
        white-space: nowrap;

        @include md {
            animation: typingText 2s linear both, blinkCursor .5s steps(40) infinite normal;
        }
    }
    
    @include md {
        height: 50vh;
    }

    @keyframes blinkCursor {
        from {
            border-right: 2px solid var(--secondary-text);
        } to {
            border-right: 2px solid transparent;
        }
    }

    @keyframes typingText {
        from {
            max-width: 0;
        } to {
            max-width: 100%;
        }
    }
}
</style>
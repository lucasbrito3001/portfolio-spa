<template>
    <div class="home-article">
        <div class="home-title">
            <h2>Olá, seja bem-vindo,</h2>
            <h2>Meu nome é</h2>
            <strong>
                <h1 class="lucas">Lucas de Brito</h1>
            </strong>
            <h2 class="web-developer">E eu sou um <strong>desenvolvedor web!</strong></h2>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import '../assets/sass.scss';

.home-article {
    position: relative;
    height: 100vh;
    width: 100vw;
    
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    color: var(--secondary-text);
    background-size: cover;
    padding: 20px;

    background-image: url('../assets/bg-1.jpg');
    // background-attachment: fixed;
    background-color: black;

    .home-title {
        position: relative;
        width: 50vw;

        @include lg {
            width: 100vw;
        }
    }

    h1 {
        font-size: 72px;

        @include lg {
            font-size: 48px;
        }
    }

    h2 {
        font-size: 32px;
        font-weight: 500;

        @include lg {
            font-size: 26px;
        }
    }

    .web-developer {
        margin-top: 20px;
    }
    
    @include lg {
        height: 100vh;
    }
}
</style>
<template>
    <div class="container-blog">
        <h1 class="general-title">Publicações</h1>
        <div class="container">
            <ul class="posts-list">
                <li
                    class="posts-list-item"
                    v-for="(post, key) in posts"
                    :key="key"
                >
                    <div class="post-list-item-img">
                        <img :src="post.image" width="100%" height="100%" />
                    </div>
                    <div class="post-list-item-text">
                        <h1> {{ post.title }} </h1>
                        <p class="desc"> {{ post.desc }} </p>
                        <p class="intro"> {{ post.intro }} </p>
                        <a :href="post.link" target="_blank"><button class="btn-link">Ler publicação</button></a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        posts: [
            {
                title: "Manipulação de Arrays JavaScript ES6",
                desc: "Funções filter, find, map, reduce, some, e every.",
                intro: "O ECMAScript 6 ou ECMAScript 2015 ou ES6, é uma padronização da linguagem JavaScript, que trouxe várias novas funcionalidades, como declaração de variáveis com let e const, as arrow functions, e também as funções de manipulação de arrays...",
                link: "https://medium.com/@lucasdbrito/manipula%C3%A7%C3%A3o-de-arrays-javascript-es6-dd25cb1da380",
                image: "https://miro.medium.com/max/1400/0*lvnxwANZKndhkFah",
            },
        ],
    }),
};
</script>

<style scoped lang="scss">
@import "../assets/sass.scss";

.general-title {
    font-size: 72px;
    margin: 0;
    color: var(--dark);
    padding: 0 15px;
    text-align: center;
    padding-top: 20px;

    @include lg {
        font-size: 40px;
    }
}

.container-blog {
    background-color: white;
}

.posts-list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-self: center;
    margin: 0 0 40px 0;

    .posts-list-item {
        width: 100%;
        box-shadow: 0px 0px 40px 2px rgb(221, 221, 221);
        padding: 12px;
        border-radius: 3px;
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin-top: 10px;

        @include md {
            flex-direction: column;
        }

        .post-list-item-img {
            width: 30%;

            @include lg {
                width: 50%;
            }

            @include md {
                width: 100%;
            }
        }

        .post-list-item-text {
            width: 70%;
            
            @include lg {
                width: 50%;
            }

            @include md {
                width: 100%;
            }
        }
    }
}

.desc {
    color: rgb(22, 22, 22);
}

.intro {
    margin-top: 15px;
    color: rgb(155, 155, 155);
}

.btn-link {
    padding: 8px;
    border-radius: 5px;
    border: none;
    background-color: var(--dark);
    color: white;
    margin-top: 30px;
}
</style>

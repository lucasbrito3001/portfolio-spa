<template>
    <div class="container-skills">
        <div class="container">
            <h1>Minhas habilidades</h1>

            <div class="hard-skills">
                <div
                    class="card-hard-skill"
                    v-for="(card, key) in skills"
                    :key="key"
                >
                    <font-awesome-icon
                        :icon="card.icon"
                        class="github-icon"
                        style="font-size: 36px"
                    />
                    <p>{{ card.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        skills: [
            { name: "Vue", icon: "fa-brands fa-vuejs" },
            { name: "React", icon: "fa-brands fa-react" },
            { name: "JavaScript" },
            { name: "NodeJs", icon: "fa-brands fa-node-js" },
            { name: "CSS3" },
        ],
    }),
};
</script>

<style scoped lang="scss">
@import "../assets/sass.scss";

.container-skills {
    background-color: rgb(255, 255, 255);
    margin-top: 50px;
    padding: 20px 0;
    color: var(--primary-text);

    .hard-skills {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 20px;
        width: 100%;

        .card-hard-skill {
            position: relative;
            display: inline;
            width: calc(20% - 10px);
            background: rgb(6, 5, 24);
            border-radius: 5px;
            padding: 10px 15px;
            color: white;

            @include md {
                width: calc(50% - 5px);
            }
        }
    }
}
</style>

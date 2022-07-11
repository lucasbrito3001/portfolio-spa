<template>
  <div class="wrapper">
    <div class="container">
      <div class="column">
        <h2 class="general-title">Vamos conversar</h2>
        <p class="contacts-text">
          Agora você me conhece melhor, se eu puder te ajudar de alguma forma,
          ou tenha se interessado pelos meus serviços, fique a vontade para me chamar em 
          qualquer um dos canais listados aqui. Será um prazer trocar essa ideia!
        </p>
      </div>

      <div class="column">
        <h2 class="general-title">Contatos</h2>
        <ul class="message">
          <li class="contacts-list-item">
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              class="contacts-icons"
            />
            <span>devlucasmail@gmail.com</span>
          </li>
          <br />
          <li class="contacts-list-item">
            <font-awesome-icon
              icon="fa-brands fa-whatsapp"
              class="contacts-icons"
            />
            <span>+55 (18) 99735 - 1747</span>
          </li>
          
        </ul>
      </div>

      <div class="column">
        <h2 class="general-title">Redes sociais</h2>
        <ul class="social-networks">
          <a
            :href="social.href"
            v-for="(social, key) in socialNetworks"
            :key="key"
            target="_blank"
          >
            <li>
              <font-awesome-icon :icon="social.icon" class="social-networks-icons" />
            </li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    socialNetworks: [
      {
        icon: "fa-brands fa-github-square",
        href: "https://github.com/lucasbrito3001",
      },
      {
        icon: "fa-brands fa-twitter-square",
        href: "https://twitter.com/brito3001",
      },
      {
        icon: "fa-brands fa-linkedin",
        href: "https://www.linkedin.com/in/webdevbrito/",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
@import "../assets/sass.scss";

.container {
  display: flex;
  gap: 20px;

  @include md {
    flex-direction: column;
    gap: 40px;
  }
}

.contacts-text,
.contacts-list-item {
  color: var(--secondary-text);
  line-height: 1.5;
}

.wrapper {
  background-color: var(--dark-purple);
  padding: 40px 20px;
}

.general-title {
  color: white;
}

.contacts-list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.contacts-list-item span {
  margin-left: 15px;
}

.contacts-icons {
  width: 20px;
  height: 20px;
}

.social-networks {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.social-networks-icons {
  width: 36px;
  height: 36px;
  background: transparent;
  color: white;
  transition: .4s;
}

.social-networks-icons:hover {
  transform: scale(1.3);
}

.column:first-child {
  width: 45%;

  @include md {
    width: 100%;
  }
}

.column:not(:first-child) {
  width: 27.5%;

  @include md {
    width: 100%;
  }
}
</style>
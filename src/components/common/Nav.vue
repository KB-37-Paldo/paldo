<template>
  <nav class="nav">
    <input type="checkbox" class="nav-checkbox" id="nav-toggle" />
    <label for="nav-toggle" class="nav-button">
      <span class="nav-icon">&nbsp;</span>
    </label>
    <div class="nav-bg">&nbsp;</div>
    <div class="nav-body">
      <ul class="nav-list">
        <li
          class="nav-item"
          :class="[toActive === 'PortfolioPage' ? 'active' : '']"
        >
          <a class="nav-link" @click="goPage('PortfolioPage')">
            <span><i class="fas fa-wallet"></i></span>포트폴리오
          </a>
        </li>
        <li
          class="nav-item"
          :class="[toActive === 'SpendingPage' ? 'active' : '']"
        >
          <a @click="goPage('SpendingPage')" class="nav-link">
            <span><i class="fas fa-dollar-sign"></i></span>지출관리
          </a>
        </li>
        <li
          class="nav-item"
          :class="[toActive === 'SubscribePage' ? 'active' : '']"
        >
          <a class="nav-link" @click="showAlert">
            <span><i class="fas fa-calendar-alt"></i></span>구독관리
          </a>
        </li>
        <li
          class="nav-item"
          :class="[toActive === 'RecommendPage' ? 'active' : '']"
        >
          <a class="nav-link">
            <span><i class="fas fa-compass"></i></span>금융상품추천
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      fromActive: "",
      toActive: "",
    };
  },
  watch: {
    $route(to, from) {
      this.fromActive = from.name;
      this.toActive = to.name;
      // console.log(this.fromActive, this.toActive);
    },
  },
  computed: {},
  methods: {
    goPage(idName) {
      this.$router.push({
        name: idName,
      });
      const bg = document.querySelector(".nav-checkbox");
      bg.checked = false;
    },
    showAlert(){
      this.$swal({
        title: '죄송합니다',
        text: '구독관리 페이지는 \n 다음 버전에 업데이트 될 예정입니다.',
        imageUrl: require('../../assets/images/runa.png'),
        imageWidth: 150,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      const bg = document.querySelector(".nav-checkbox");
      bg.checked = false;
    }
  },
};
</script>

<style></style>

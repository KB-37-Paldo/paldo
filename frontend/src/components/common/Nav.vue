<template>
  <nav class="nav">
    <input type="checkbox" class="nav-checkbox" id="nav-toggle" />
    <label for="nav-toggle" class="nav-button">
      <span class="nav-icon">&nbsp;</span>
    </label>
    <div class="nav-bg">&nbsp;</div>
    <div class="nav-body">
      <ul class="nav-list">
        <li class="nav-item">
          <a class="nav-link">
            <span><i class="fas fa-search"></i></span>포트폴리오
          </a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">
            <span><i class="fas fa-car"></i></span>지출관리
          </a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">
            <span><i class="fas fa-car"></i></span>구독관리
          </a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">
            <span><i class="fas fa-car"></i></span>금융상품추천
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isShow() {
      if (this.$route.name !== "Main") {
        return false;
      }
      return true;
    }
  },
  methods: {
  }
}
</script>

<style></style>

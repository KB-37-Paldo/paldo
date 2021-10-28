<template>
  <div class="portfolio__div">
    <!-- mt__ten -->
    <div class="">
      <span class="block mb__five title__font">
        {{userInfo.name}}님,
      </span>
      <span class="block mb__five title__font">
        포트폴리오가 없습니다.
      </span>
      <span class="title__font">
        생성하시겠습니까?
      </span>
    </div>
    <div class="mt__twenty  mb__five">
      <span class="mb__five title__font">
        네, 만들래요!
      </span>
      <span class="color__yellow right pointer" @click="createPort">
        <i class="fas fa-arrow-alt-circle-right"></i>
      </span>
    </div>
    <div>
      <span 
      
      class="title__font">
        다음에 하겠습니다.
      </span>
      <span @click="showAlert" class="color__gray right pointer">
        <i class="fas fa-times-circle"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
      ...mapState({
      userInfo : state => state.portfolio.userInfo
    })
  },
  methods: {
    createPort() {
      this.$router.push({ name: "PortfolioCreatePage" });
    },
    showAlert(){
      this.$swal({
        title: '부탁드립니다',
        text: '다음에 시작하지 \n 말아주세요...',
        imageUrl: require('../../assets/images/runa.png'),
        imageWidth: 150,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
  },

};
</script>

<style scoped></style>

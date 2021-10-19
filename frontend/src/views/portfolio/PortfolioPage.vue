<template>
  <div>
    <!-- 포트폴리오 있을 때 -->
    <template v-if="isPort">
      <PortfolioItem/>
    </template>
    <!-- 포트폴리오 없을 때 -->
    <template v-else>
      <div class="mt__ten">
        <span class="block mb__five title__font">
          포트폴리오가 없습니다.
        </span>
        <span class="title__font">
          생성하시겠습니까?
        </span>
      </div>
      <div class="mt__ten mb__five">
        <span class=" mb__five title__font">
          네, 만들래요!
        </span>
        <span class="color__yellow button__right">
          <i class="fas fa-arrow-alt-circle-right"></i>
        </span>
      </div>
      <div>
        <span class="title__font">
          다음에 하겠습니다.
        </span>
        <span class="color__gray button__right">
          <i class="fas fa-times-circle"></i>
        </span>
      </div>
    </template>
  </div>
</template>

<script>
import PortfolioItem from '@/components/porfolio/PortfolioItem.vue'
export default {
  data() {
    return {
      isPort : false
    }
  },
  components: { PortfolioItem },

}
</script>

<style>

</style>
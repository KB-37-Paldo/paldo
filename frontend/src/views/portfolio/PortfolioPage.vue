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
      <div>
        <span>
          네, 만들래요!
        </span>
        <span>
          <i class="fas fa-arrow-circle-right"></i>
        </span>
        <span>
          다음에 하겠습니다.
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
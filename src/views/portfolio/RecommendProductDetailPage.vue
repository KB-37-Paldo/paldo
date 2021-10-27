<template>
  <div>
    <div>
      <span class="color__gray pointer" @click="goPortHome">
        <i class="fas fa-arrow-left"></i>
      </span>
    </div>
      <div class="pl__ten pr__ten">
    <div class="main__money__font">{{productName}} 추천</div>
    
    <hr />
    </div>
    <RecommendItem :productInfo="productInfo"/>
  </div>
</template>

<script>
import RecommendItem from '../../components/porfolio/RecommendItem.vue';
export default {
  props:['productInfo','productName'],
  components: {  RecommendItem },
  data() {
    return {
    }
  },
  created() {
  },
  methods:{
    goPortHome() {
      this.$router.push({
        name: "PortfolioRecommendPage",
      });
    },
  }

}
</script>

<style>

</style>
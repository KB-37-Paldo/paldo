<template>
  <div class="portfolio__div">
    <div class="recommendType">
      <span class="sub__font">
        {{productName}}
      </span>
    </div>
    <div v-for="(product,index) in productInfo" :key="index" v-show="index < 2" class="recommendType mt__five">
      <span class="sub__font">
      {{product.assetType}}
      </span>
      <span class="sub__font color__gray">
      {{product.detailType}}
      </span>
    </div>
    <span @click="goRecommendDetail" class="mini__font category-floating-right  pointer color__gray" >더보기</span>
  </div>
</template>

<script>
export default {
  props: ['productInfo','productType'],
  data() {
    return {
      productName:'자산이름'
    }
  },
  created() {
    this.fetchProduct()
  },
  methods: {
    goRecommendDetail() {
      this.$router.push({
        name:'RecommendProductDetailPage',
        params:{
          productName:this.productName,
         productInfo:this.productInfo
        }
      })
    },
    fetchProduct() {
      // console.log('들어는가니?', this.productType,this.productInfo)
      if (this.productType == 'cash') {
        this.productName = '금융상품'
      } else if (this.productType == 'invest') {
        this.productName = '투자상품'
      } 
    }
  }

}
</script>

<style>

</style>
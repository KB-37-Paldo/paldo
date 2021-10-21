<template>
  <div class="portfolio__div">
    <div class="recommendType">
      <span class="sub__font">
        {{productName}}
      </span>
    </div>
    <div v-for="(product,index) in productInfo" :key="index" class="recommendType mt__five">
      <span class="sub__font">
      {{product.product_name}}
      </span>
      <span class="sub__font color__gray">
      {{product.product_description}}
      </span>
    </div>
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
    fetchProduct() {
      console.log('들어는가니?', this.productType,this.productInfo)
      if (this.productType == 'cards') {
        console.log('너는뭐니')
        this.productName = '카드상품'
      } else if (this.productType == 'insurances') {
        this.productName = '보험상품'
      } 
    }
  }

}
</script>

<style>

</style>
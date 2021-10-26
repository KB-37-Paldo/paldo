<template>
  <div class="mt__five context__font portfolio__div">
    <span class="sub__font">
      전국구님의 총자산
    </span>
    <p class="title__font__large">{{changeMoney(userAssetList.totAmount)}}원</p>
  </div>
</template>

<script>
export default {
  props:['userAssetList'],
  data() {
    return {
      userAsset:'1,000,000,000'
    }
  },
  methods :{
    changeMoney(amount) {
      return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
  }

}
</script>

<style>

</style>
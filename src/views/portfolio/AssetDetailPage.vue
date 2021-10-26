<template>
  <div>
    <div>
      <span class="color__gray pointer" @click="goPortHome">
        <i class="fas fa-arrow-left"></i>
      </span>
    </div>
      <div class="pl__ten pr__ten">
    <div class="main__money__font">{{assetName}}</div>
    <div class="main__money__font category-floating-right">
      총 {{assetTotal}}원
    </div>
    <br />
    <hr />
    </div>
    <AssetDetailItem :assetInfo="assetInfo"/>
  </div>
</template>

<script>
import AssetDetailItem from '../../components/porfolio/AssetDetailItem.vue'
export default {
  props:['assetTotal','assetInfo','assetName'],
  components: { AssetDetailItem },
  data() {
    return {
      totalAmount:0,
      assetList: []
    }
  },
  created() {
    this.fetchAssetInfo()
  },
  methods:{
    fetchAssetInfo() {
      this.totalAmount = this.assetTotalt
    },
    goPortHome() {
      this.$router.push({
        name: "PortfolioPage",
      });
    },
  }

}
</script>

<style>

</style>
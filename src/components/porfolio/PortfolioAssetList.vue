<template>
  <div class="portfolio__div">
    <div class="assetType">
      <span class="sub__font">
        {{assetName}}
      </span>
      <span class="mini__font color__gray__light">
        {{changeMoney(assetTotal)}}원
      </span>
    </div>
    <div v-for="(asset,index) in assetList" :key="index" v-show="index < 2" class="assetType mt__five">
      <span class="textOver sub__font">
      {{asset.detailType}}
      </span>
      <span class="sub__font color__gray">
      {{changeMoney(asset.amount)}}
      </span>
    </div>
    <span @click="goAssetDetail" class="mini__font category-floating-right  pointer color__gray" >더보기</span>
  </div>
</template>

<script>
export default {
  props: ['assetInfo','assetType'],
  data() {
    return {
      assetTotal : 0,
      assetName:'자산이름',
      assetList:[]
    }
  },
  created() {
    this.fetchAsset()
  },
  methods: {
    goAssetDetail() {
      this.$router.push({
        name:'AssetDetailPage',
        params:{
          assetInfo:this.assetList,
          assetName:this.assetName,
          assetTotal:this.changeMoney(this.assetTotal)
        }
      })
    },
    changeMoney(amount) {
      return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    fetchAsset() {
      if (this.assetType == 'cash') {
        this.assetName = '현금성자산'
        this.assetList = this.assetInfo.cash.data
        this.assetTotal = this.assetInfo.cash.totAmount
      } else if (this.assetType == 'stock') {
        this.assetName = '주식'
        this.assetList = this.assetInfo.stock.data
        this.assetTotal = this.assetInfo.stock.totAmount
      } else if (this.assetType == 'bond') {
        this.assetName = '채권'
        this.assetList = this.assetInfo.bond.data
        this.assetTotal = this.assetInfo.bond.totAmount
      } else if (this.assetType == 'fund') {
        this.assetName = '펀드'
        this.assetList = this.assetInfo.fund.data
        this.assetTotal = this.assetInfo.fund.totAmount
      } else if (this.assetType == 'realEstate') {
        this.assetName = '부동산'
        this.assetList = this.assetInfo.realEstate.data
        this.assetTotal = this.assetInfo.realEstate.totAmount
      } else if (this.assetType == 'realAssets') {
        this.assetName = '실물자산'
        this.assetList = this.assetInfo.realAssets.data
        this.assetTotal = this.assetInfo.realAssets.totAmount
      }
    }
  }

}
</script>

<style>

</style>
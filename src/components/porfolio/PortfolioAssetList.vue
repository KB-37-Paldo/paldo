<template>
  <div class="portfolio__div">
    <div>
      <span class="sub__font">
        {{assetName}}
      </span>
      <span class="mini__font">
        {{assetTotal}}
      </span>
    </div>
    <div v-for="(asset,index) in assetInfo" :key="index">
      {{asset.type}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['assetInfo','assetType'],
  data() {
    return {
      assetTotal : 0,
      assetName:'자산이름'
    }
  },
  created() {
    this.fetchAsset()
  },
  methods: {
    fetchAsset() {
      if (this.assetType == 'cashAssets') {
        this.assetName = '현금성자산'
      } else if (this.assetType == 'stock') {
        this.assetName = '주식'
      } else if (this.assetType == 'bond') {
        this.assetName = '채권'
      } else if (this.assetType == 'fund') {
        this.assetName = '펀드'
      } else if (this.assetType == 'realEstate') {
        this.assetName = '부동산'
      } else if (this.assetType == 'realAssets') {
        this.assetName = '실물자산'
      }
    }
  }

}
</script>

<style>

</style>
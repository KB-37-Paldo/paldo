<template>
  <div class="bgColor__lightgray">
    <!-- 포트폴리오 있을 때 -->
    <template v-if="isPort" >
      <PortfolioItem/>
      <PortfolioChallenge/>
      <PortfolioUserAsset/>
      <div v-for="(assetInfo,index) in userAssetInfoList" :key="index">
        <PortfolioAssetList :assetInfo="assetInfo"/>
      </div>
    </template>
    <!-- 포트폴리오 없을 때 -->
    <template v-else>
      <PortfolioNone/>
    </template>
  </div>
</template>

<script>
import PortfolioItem from '@/components/porfolio/PortfolioItem.vue'
import PortfolioNone from '../../components/porfolio/PortfolioNone.vue'
import PortfolioChallenge from '../../components/porfolio/PortfolioChallenge.vue'
import PortfolioUserAsset from '../../components/porfolio/PortfolioUserAsset.vue'
import PortfolioAssetList from '../../components/porfolio/PortfolioAssetList.vue'
export default {
  data() {
    return {
      isPort : true,
      userAssetInfoList:{
        cashAssets : [
    {
      type: 'KB현금성자산',
      amount: 1000
    }
  ], 
  stock : [
    {
      type: 'KB증권',
      amount: 1000
    }
  ],
  realAssets: [
    {
      type: 'KB실물자산',
      amount: 1000
    }
  ],
  bond : [
    {
      type: 'KB채권',
      amount: 1000
    }
  ],
  fund : [
    {
      type: 'KB펀드',
      amount: 1000
    }
  ],
  realEstate : [
    {
      type: 'KB부동산',
      amount: 1000
    }
  ]
}
    }
  },
  components: { PortfolioItem,PortfolioNone, PortfolioChallenge, PortfolioUserAsset, PortfolioAssetList },

}
</script>

<style>

</style>
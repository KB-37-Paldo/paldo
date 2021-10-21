<template>
  <div class="bgColor__lightgray">
    <!-- 포트폴리오 있을 때 -->
    <template v-if="isPort" >
      <PortfolioItem/>
      <PortfolioChallenge/>
      <PortfolioUserAsset/>
      <div v-for="(assetType,index) in amountTypeList" :key="index">
        <PortfolioAssetList :assetInfo="userAssetInfoList[assetType]"
        :assetType="assetType"/>
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
      amountTypeList:['cashAssets','stock','bond','fund','realEstate','realAssets'],
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
  created() {
    // this.fetchAssetType()
  },
  methods: {
    fetchAssetType() {
        // console.log('들어왓니', this.userAssetInfoList)

    //   this.userAssetInfoList=[];
    //   for (let i = 0; i < this.userAssetInfoList.length; i++) {
    //     const element = this.userAssetInfoList[i];
    //     this.amountTypeList.push(element);
    //     console.log(element)
    //  }
    }
  }

}
</script>

<style>

</style>
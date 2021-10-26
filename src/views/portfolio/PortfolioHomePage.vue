<template>
  <div class="bgColor__lightgray">
    <!-- 포트폴리오 있을 때 -->
    <template v-if="userInfo.portfolio" >
      <PortfolioItem />
      <PortfolioChallenge />
      <PortfolioUserAsset :userAssetList="userAssetList"/>
      <div v-for="(assetType,index) in amountTypeList" :key="index">
        <PortfolioAssetList :assetInfo="userAssetList"
        :assetType="assetType"/>
      </div>
      <PortfolioSideBar />
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
import PortfolioSideBar from "../../components/porfolio/PortfolioSideBar.vue";
import { mapState } from 'vuex';


export default {
    components: { PortfolioItem,PortfolioNone, PortfolioChallenge, PortfolioUserAsset, PortfolioAssetList,PortfolioSideBar },
  data() {
    return {
      amountTypeList:['cash','stock','bond','fund','realEstate','realAssets'],
    }
  },


  created() {
    this.$store.dispatch('fetchRecommendPortfolioInfo')
    this.$store.dispatch('fetchSharePortfolioInfo')
    this.$store.dispatch('fetchUserAssetInfo')

  },
  computed: {
    ...mapState({
      userInfo : state => state.portfolio.userInfo,
      userAssetList: state => state.portfolio.userAssetList

    })
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
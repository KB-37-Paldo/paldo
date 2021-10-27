<template>
  <div class="bgColor__lightgray mt__minusTen">
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
// import bus from "@/utils/bus";


export default {
    components: { PortfolioItem,PortfolioNone, PortfolioChallenge, PortfolioUserAsset, PortfolioAssetList,PortfolioSideBar },
  data() {
    return {
      amountTypeList:['cash','stock','bond','fund','realEstate','realAssets'],
    }
  },


  created() {
    // this.goReload();
    // bus.$emit("on:progress");
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
    goReload() {
      if (this.$route.params.reload) {
        window.scrollTo(0, 0);
        // bus.$emit("on:progress");
        window.location.reload();
      }
    },
  }

}
</script>

<style>

</style>
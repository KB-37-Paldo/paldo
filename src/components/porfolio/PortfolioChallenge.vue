<template>
  <div class="mt__five title__font portfolio__div">
      <span class="sub__font">목표금액 
       달성률 {{getProgress}}%</span>
      <span class="block sub__font">
        목표일까지 {{changeMoney(remainDate)}}일 남았습니다.
      </span>
      <div class="color__yellow">
      <meter class="meter color__yellow w-100" min="0" max="100" :value="getProgress"></meter>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      targetProgress:'70%',
      targetPrice:70,
      targetDate:'2021-10-18',
      remainDate:'2026-12-31'
    }
  },
  created() {
    this.getDate();
  },
  computed: {
    ...mapState({
      userAssetList: state => state.portfolio.userAssetList

    }),
    getProgress() {
      return Math.round(this.userAssetList.totAmount / this.userAssetList.targetPrice * 100)
    },
  },
  methods: {
    changeMoney(amount) {
      return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    getDate() {
      let now = new Date();
      let target = this.userAssetList.targetDate.split("-");
      let stDate = now;
      let endDate = new Date(target[0],target[1],target[2]);
      let btMs = endDate.getTime() - stDate.getTime();
      let btDay = btMs / (1000*60*60*24);
      this.remainDate = Math.floor(btDay)
       
    },
  }

}
</script>

<style>

</style>
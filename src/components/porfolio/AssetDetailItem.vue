<template>
  <div class="pl__ten pr__ten">
    <div
      class="daily-spending-section"
      v-for="(asset, index) in assetInfo"
      :key="index"
    >
      <div
        class="spending-element">
        <div class="category-budget">
          <span class="mini__font">{{ asset.detailType }}</span>
        </div>
        <div class="category-floating-right">
          <span class="mini__font">{{ changeMoney(asset.amount) }}원</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["assetInfo"],
  methods: {
    changeMoney(amount) {
      return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
  },
 
};
</script>

<style></style>

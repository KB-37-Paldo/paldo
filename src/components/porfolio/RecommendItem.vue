<template>
  <div class="pl__ten pr__ten">
    <div
      class="daily-spending-section"
      v-for="(product, index) in productInfo"
      :key="index"
    >
      <div
        class="spending-element">
        <div class="category-budget">
          <span class="mini__font">{{ product.assetType }}</span>
        </div>
        <div class="category-floating-right">
          <span class="mini__font">{{product.detailType }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productInfo"],
 
};
</script>

<style></style>

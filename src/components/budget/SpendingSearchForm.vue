<template>
  <div style="position:relative; left: 8px">
    <div class="search-field">
      <v-text-field
        label="내역을 검색해주세요."
        style="width: 90%;"
      ></v-text-field>
    </div>
    <div class="spending-menu-section category-floating-right">
      <span class="spending-icon-padding">
        <i class="fas fa-search category__font" style="cursor: pointer"></i>
      </span>
      <span class="spending-icon-padding" @click="spendingUpdate">
        <i class="fas fa-plus category__font" style="cursor: pointer"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

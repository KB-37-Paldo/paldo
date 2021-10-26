<template>
  <div>
    <!-- 지출내역 검색/추가 -->
    <div class="search-section">
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

    <br />
    <!-- 월 지출 내역 -->
    <div
      class="daily-spending-section"
      v-for="(dayList, index) in spendingList"
      :key="index"
    >
      <div class="category-budget">
        <span class="mini__font daily-spending-text">{{ dayList.day }}일</span>
      </div>
      <div class="category-floating-right">
        <span class="mini__font daily-spending-text">원</span>
      </div>
      <hr />
      <div
        class="spending-element"
        v-for="(spend, index) in dayList.expenseResponses"
        :key="index"
      >
        <div
          class="category__font category-icon-section"
          v-if="spend.category === '식비'"
        >
          <i class="fas fa-utensils"></i>
        </div>
        <div
          class="category__font category-icon-section"
          v-if="spend.category === '쇼핑'"
        >
          <i class="fas fa-shopping-bag"></i>
        </div>
        <div
          class="category__font category-icon-section"
          v-if="spend.category === '카페'"
        >
          <i class="fas fa-coffee"></i>
        </div>
        <div
          class="category__font category-icon-section"
          v-if="spend.category === '교통'"
        >
          <i class="fas fa-bus"></i>
        </div>
        <div
          class="category__font category-icon-section"
          v-if="spend.category === '문화'"
        >
          <i class="fas fa-chess-pawn"></i>
        </div>
        <div
          class="category__font category-icon-section"
          v-if="spend.category === '경조'"
        >
          <i class="fas fa-envelope"></i>
        </div>
        <div
          class="category__font category-icon-section"
          v-if="spend.category === '생활'"
        >
          <i class="fas fa-shopping-basket"></i>
        </div>
        <div
          class="category__font category-icon-section"
          v-if="spend.category === '교육'"
        >
          <i class="fas fa-book"></i>
        </div>
        <div
          class="category__font category-icon-section"
          v-if="spend.category === '의료'"
        >
          <i class="fas fa-hospital"></i>
        </div>

        <div class="category-budget">
          <span class="mini__font">{{ spend.source }}</span>
        </div>
        <div class="category-floating-right">
          <span class="mini__font">{{ spend.amount }}원</span>
        </div>
        <!-- <div style="position: relative; bottom: 23px">
          <span class="micro__font" style="color: gray">{{
            spend.paymentMethod
          }}</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["spendingList"],
  methods: {
    spendingUpdate() {
      this.$router.push({ name: "SpendingUpdatePage" });
    },
  },
};
</script>

<style></style>

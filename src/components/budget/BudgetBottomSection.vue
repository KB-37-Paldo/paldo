<template>
  <div>
    <div class="category-section">
      <div class="sub__font category-start-section">
        <span>카테고리별 예산</span>
      </div>
      <div
        class="category__font category"
        v-for="(category, index) in categoryList"
        :key="index"
      >
        <div
          v-if="
            category.category === '식비' ||
              category.category === '쇼핑' ||
              category.category === '카페' ||
              category.category === '교통' ||
              category.category === '문화' ||
              category.category === '경조' ||
              category.category === '생활' ||
              category.category === '교육' ||
              category.category === '의료'
          "
        >
          <div
            class="category__font category-icon-section"
            v-if="category.category === '식비'"
          >
            <i class="fas fa-utensils"></i>
          </div>
          <div
            class="category__font category-icon-section"
            v-if="category.category === '쇼핑'"
          >
            <i class="fas fa-shopping-bag"></i>
          </div>
          <div
            class="category__font category-icon-section"
            v-if="category.category === '카페'"
          >
            <i class="fas fa-coffee"></i>
          </div>
          <div
            class="category__font category-icon-section"
            v-if="category.category === '교통'"
          >
            <i class="fas fa-bus"></i>
          </div>
          <div
            class="category__font category-icon-section"
            v-if="category.category === '문화'"
          >
            <i class="fas fa-chess-pawn"></i>
          </div>
          <div
            class="category__font category-icon-section"
            v-if="category.category === '경조'"
          >
            <i class="fas fa-envelope"></i>
          </div>
          <div
            class="category__font category-icon-section"
            v-if="category.category === '생활'"
          >
            <i class="fas fa-shopping-basket"></i>
          </div>
          <div
            class="category__font category-icon-section"
            v-if="category.category === '교육'"
          >
            <i class="fas fa-book"></i>
          </div>
          <div
            class="category__font category-icon-section"
            v-if="category.category === '의료'"
          >
            <i class="fas fa-hospital"></i>
          </div>
          <span>{{ category.category }}</span>
          <span
            class="micro__font category-floating-right"
            style="cursor: pointer"
            @click="goDetail(category.category)"
            >▶</span
          >
          <div class="color__yellow" v-if="category.amount === 0">
            <meter
              class="meter w-100"
              min="0"
              :max="1"
              :value="category.outlay"
            ></meter>
          </div>
          <div class="color__yellow" v-else>
            <meter
              class="meter w-100"
              min="0"
              :max="category.amount"
              :value="category.outlay"
            ></meter>
          </div>
          <div class="category-budget">
            <span class="micro__font">예산 {{ category.amount }}원</span>
          </div>
          <div class="category-floating-right">
            <span class="micro__font"
              >남은 예산 {{ category.amount - category.outlay }}원</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categoryList"],
  components: {},
  methods: {
    settingBud() {
      this.$router.push({
        name: "BudgetSettingPage",
      });
    },
    goDetail(category) {
      this.$router.push({
        name: "CategoryDetailPage",
        params: { category },
      });
    },
  },
};
</script>

<style></style>

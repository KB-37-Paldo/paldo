<template>
  <div class="mt__ten">
    <div class="sub__font">10월 예산</div>
    <div class="main__money__font">
      <span>{{ changeMoney(categoryList.totalAmount) }}원</span>
    </div>

    <hr style="margin-top: 14px" />
    <div class="setting-section">
      <div>
        <div class="category-budget">
          <span class="mini__font">카테고리별 예산</span>
        </div>
        <div class="category-floating-right">
          <span class="mini__font"
            >{{
              changeMoney(categoryList.totalAmount - categoryList.totalOutlay)
            }}원 남음</span
          >
        </div>
      </div>
      <span class="category-floating-right micro__font"
        >전체 예산 {{ changeMoney(categoryList.totalAmount) }}원</span
      >
      <form>
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
              v-if="category.category === '의료'"
            >
              <i class="fas fa-hospital"></i>
            </div>
            <span>{{ category.category }}</span>
            <div class="category-floating-right">
              <v-text-field
                class="setting-text-area"
                :label="changeMoney(category.amount)"
              ></v-text-field>
            </div>
            <div>
              <div class="category-budget">
                <span class="micro__font"
                  >지난달 {{ changeMoney(category.outlay) }}원</span
                >
              </div>
            </div>
          </div>
        </div>
        <v-btn
          class="setting-button"
          style="background-color: rgb(253,185,19); color: white"
          elevation="2"
          @click="updateBud"
          >설 정</v-btn
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categoryList"],
  created() {
    console.log(this.categoryList);
  },
  methods: {
    updateBud() {
      this.$swal({
        title: "예산 수정 완료",
        icon: "success",
      });
      this.$router.push({
        name: "BudgetPage",
      });
    },
    changeMoney(amount) {
      return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>

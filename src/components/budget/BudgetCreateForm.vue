<template>
  <div class="mt__ten">
    <div class="sub__font">이번 달 추천 예산</div>
    <div class="main__money__font">
      <span>{{ changeMoney(categoryList.totalAmount) }}원</span>
    </div>

    <hr style="margin-top: 14px" />
    <div class="setting-section">
      <div class="category-budget">
        <span class="mini__font">카테고리별 예산</span>
      </div>

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
                  >지난달 {{ changeMoney(category.lastAmount) }}원</span
                >
              </div>
            </div>
          </div>
        </div>
        <v-btn
          class="setting-button"
          style="background-color: rgb(253,185,19); color: white"
          elevation="2"
          @click="createBud"
          >생 성</v-btn
        >
      </form>
    </div>
  </div>
</template>

<script>
import { fetchCreateData, createBudget } from "@/api/budget";

export default {
  created() {
    this.getCreateData();
  },
  methods: {
    async getCreateData() {
      const create = await fetchCreateData(1).then((res) => {
        this.categoryList = res.data;
      });
      console.log(create);
    },
    createBud() {
      const createInfo = {
        userId: 1,
        cafe: this.categoryList.cafe.amount,
        congratulations: this.categoryList.congratulations.amount,
        culture: this.categoryList.culture.amount,
        food: this.categoryList.food.amount,
        life: this.categoryList.life.amount,
        medical: this.categoryList.medical.amount,
        shopping: this.categoryList.shopping.amount,
        traffic: this.categoryList.traffic.amount,
      };
      const create = createBudget(createInfo).then((res) => {
        if (res.status === 201) {
          this.$swal({
            title: "예산 생성 완료",
            icon: "success",
          });
          this.$router.push({
            name: "BudgetPage",
          });
        } else {
          this.$swal({
            title: "내역 추가 실패",
            icon: "warning",
          });
        }
      });
      console.log(create);
    },
    changeMoney(amount) {
      return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  data() {
    return {
      categoryList: [],
    };
  },
};
</script>

<style></style>

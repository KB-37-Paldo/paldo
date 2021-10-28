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
          v-for="[category, value] of Object.entries(categoryList)"
          :key="category"
        >
          <div
            v-if="
              value.category === '식비' ||
                value.category === '쇼핑' ||
                value.category === '카페' ||
                value.category === '교통' ||
                value.category === '문화' ||
                value.category === '경조' ||
                value.category === '생활' ||
                value.category === '의료'
            "
          >
            <div
              class="category__font category-icon-section"
              v-if="value.category === '식비'"
            >
              <i class="fas fa-utensils"></i>
            </div>
            <div
              class="category__font category-icon-section"
              v-if="value.category === '쇼핑'"
            >
              <i class="fas fa-shopping-bag"></i>
            </div>
            <div
              class="category__font category-icon-section"
              v-if="value.category === '카페'"
            >
              <i class="fas fa-coffee"></i>
            </div>
            <div
              class="category__font category-icon-section"
              v-if="value.category === '교통'"
            >
              <i class="fas fa-bus"></i>
            </div>
            <div
              class="category__font category-icon-section"
              v-if="value.category === '문화'"
            >
              <i class="fas fa-chess-pawn"></i>
            </div>
            <div
              class="category__font category-icon-section"
              v-if="value.category === '경조'"
            >
              <i class="fas fa-envelope"></i>
            </div>
            <div
              class="category__font category-icon-section"
              v-if="value.category === '생활'"
            >
              <i class="fas fa-shopping-basket"></i>
            </div>
            <div
              class="category__font category-icon-section"
              v-if="value.category === '의료'"
            >
              <i class="fas fa-hospital"></i>
            </div>
            <span>{{ value.category }}</span>
            <div class="category-floating-right">
              <v-text-field
                :id="category"
                class="setting-text-area"
                :label="changeMoney(value.amount)"
                @change="changeValue(category)"
              ></v-text-field>
            </div>
            <div>
              <div class="category-budget">
                <span class="micro__font"
                  >지난달 {{ changeMoney(value.outlay) }}원</span
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
import { updateBudget } from "@/api/budget";
export default {
  props: ["categoryList"],
  created() {},
  methods: {
    updateBud() {
      console.log(this.updateInfo);
      const update = updateBudget(this.updateInfo).then((res) => {
        if (res.status === 200) {
          this.$swal({
            title: "예산 수정 완료",
            icon: "success",
          });
          this.$router.push({
            name: "BudgetPage",
          });
        } else {
          this.$swal({
            title: "예산 수정 실패",
            icon: "warning",
          });
        }
      });
      console.log(update);
    },
    changeMoney(amount) {
      return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    changeValue(category) {
      if (category === "food") {
        this.updateInfo.food = document.querySelector(`#${category}`).value;
      } else if (category === "shopping") {
        this.updateInfo.shopping = document.querySelector(`#${category}`).value;
      } else if (category === "congratulations") {
        this.updateInfo.congratulations = document.querySelector(
          `#${category}`
        ).value;
      } else if (category === "culture") {
        this.updateInfo.culture = document.querySelector(`#${category}`).value;
      } else if (category === "life") {
        this.updateInfo.life = document.querySelector(`#${category}`).value;
      } else if (category === "medical") {
        this.updateInfo.medical = document.querySelector(`#${category}`).value;
      } else if (category === "traffic") {
        this.updateInfo.traffic = document.querySelector(`#${category}`).value;
      } else if (category === "cafe") {
        this.updateInfo.cafe = document.querySelector(`#${category}`).value;
      }
    },
  },
  data() {
    return {
      updateInfo: {
        userId: 1,
        cafe: this.categoryList.cafe.amount,
        congratulations: this.categoryList.congratulations.amount,
        culture: this.categoryList.culture.amount,
        food: this.categoryList.food.amount,
        life: this.categoryList.life.amount,
        medical: this.categoryList.medical.amount,
        shopping: this.categoryList.shopping.amount,
        traffic: this.categoryList.traffic.amount,
      },
    };
  },
};
</script>

<style></style>

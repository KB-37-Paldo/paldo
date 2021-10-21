<template>
  <div style="">
    <SpendingSearchForm />

    <br />

    <div
      class="daily-spending-section"
      v-for="(dayList, index) in monthSpendList"
      :key="index"
    >
      <div class="category-budget">
        <span class="mini__font daily-spending-text">{{ dayList.day }}일</span>
      </div>
      <div class="category-floating-right">
        <span class="mini__font daily-spending-text"
          >{{ dayList.dayTotal }}원</span
        >
      </div>
      <hr />
      <div
        class="spending-element"
        v-for="(spend, index) in dayList.spendList"
        :key="index"
      >
        <div
          class="category__font category-icon-section"
          v-html="spend.icon"
        ></div>

        <div class="category-budget">
          <span class="mini__font">{{ spend.store }}</span>
        </div>
        <div class="category-floating-right">
          <span class="mini__font">{{ spend.amount }}원</span>
        </div>
        <div style="position: relative; bottom: 23px">
          <span class="micro__font" style="color: gray">{{ spend.bank }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpendingSearchForm from "@/components/budget/SpendingSearchForm.vue";
export default {
  components: {
    SpendingSearchForm,
  },
  data() {
    return {
      monthSpendList: [
        {
          day: 1,
          dayTotal: "-9,000",
          spendList: [
            {
              icon: '<i class="fas fa-shopping-basket"></i>',
              store: "세븐일레븐 합정역본",
              amount: "-4,500",
              bank: "카카오뱅크 입출금통장",
            },
            {
              icon: '<i class="fas fa-shopping-basket"></i>',

              store: "세븐일레븐 합정역본",
              amount: "-4,500",
              bank: "카카오뱅크 입출금통장",
            },
          ],
        },
        {
          day: 2,
          dayTotal: "-9000",
          spendList: [
            {
              icon: '<i class="fas fa-shopping-basket"></i>',

              store: "세븐일레븐 합정역본",
              amount: "-4,500",
              bank: "카카오뱅크 입출금통장",
            },
            {
              icon: '<i class="fas fa-shopping-basket"></i>',

              store: "세븐일레븐 합정역본",
              amount: "-4,500",
              bank: "카카오뱅크 입출금통장",
            },
          ],
        },
      ],
    };
  },
  methods: {
    spendingUpdate() {
      this.$router.push({ name: "SpendingUpdatePage" });
    },
  },
};
</script>

<style></style>

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
export default {
  methods: {
    spendingUpdate() {
      this.$router.push({ name: "SpendingUpdatePage" });
    },
  },
  data() {
    return {
      monthSpendList: [
        {
          day: 4,
          dayTotal: "-12,000",
          spendList: [
            {
              icon: '<i class="fas fa-shopping-basket"></i>',
              store: "세븐일레븐 합정역본",
              amount: "-4,500",
              bank: "카카오뱅크 입출금통장",
            },
            {
              icon: '<i class="fas fa-shopping-basket"></i>',

              store: "GS25 보정동점",
              amount: "-7,500",
              bank: "카카오뱅크 입출금통장",
            },
          ],
        },
        {
          day: 3,
          dayTotal: "-58,000",
          spendList: [
            {
              icon: '<i class="fas fa-shopping-basket"></i>',

              store: "황소곱창",
              amount: "-52,000",
              bank: "카카오뱅크 입출금통장",
            },
            {
              icon: '<i class="fas fa-shopping-basket"></i>',

              store: "가보자 순대국밥",
              amount: "-6,000",
              bank: "카카오뱅크 입출금통장",
            },
          ],
        },
        {
          day: 2,
          dayTotal: "-49,500",
          spendList: [
            {
              icon: '<i class="fas fa-shopping-basket"></i>',

              store: "세븐일레븐 합정역본",
              amount: "-4,500",
              bank: "카카오뱅크 입출금통장",
            },
            {
              icon: '<i class="fas fa-shopping-basket"></i>',

              store: "미스터피자",
              amount: "-45,000",
              bank: "카카오뱅크 입출금통장",
            },
          ],
        },
        {
          day: 1,
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
};
</script>

<style></style>

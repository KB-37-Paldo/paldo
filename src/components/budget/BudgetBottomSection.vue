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
        <span class="category-icon-section" v-html="category.icon"></span>
        <span id="category">{{ category.category }}</span>
        <span
          class="micro__font category-floating-right"
          style="cursor: pointer"
          id="category.category"
          @click="goDetail"
          >▶</span
        >
        <div class="color__yellow">
          <meter
            class="meter w-100"
            min="0"
            :max="category.settingValue"
            :value="category.currentValue"
          ></meter>
        </div>
        <div class="category-budget">
          <span class="micro__font">예산 {{ category.budget }}만원</span>
        </div>
        <div class="category-floating-right">
          <span class="micro__font"
            >남은 예산 {{ category.leftBudget }}만원</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    settingBud() {
      this.$router.push({
        name: "BudgetSettingPage",
      });
    },
    goDetail() {
      let category = document.getElementById("category").innerText;
      this.$router.push({
        name: "CategoryDetailPage",
        params: { category },
      });
    },
  },
  //      data() {
  //          return {
  //              chartData : [2],
  //              barChart:""
  //          }
  //      },
  //        mounted() {
  //     this.fetchChart()
  //   },
  //         methods: {
  //              fetchChart() {
  //                  const ctx = this.$refs.barChart.getContext('2d');
  //                 const myBarChart =  new this.$_Chart(ctx, {
  //         type: 'bar',
  //         data: {
  //             labels: ["1등급"],
  //             datasets: [{
  //             label: "해당등급 명수",
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.2)',
  //             ],
  //             data: this.chartData,
  //             barPercentage: .75,
  //             categoryPercentage: .5,
  //             }]
  //         },
  //         options: {
  //             indexAxis: 'y',
  //              elements: {
  //       bar: {
  //         borderWidth: 2,
  //       }
  //     },
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: 'right',
  //       },
  //       title: {
  //         display: true,
  //         text: 'Chart.js Horizontal Bar Chart'
  //       }
  //     }
  //         }
  //         });
  //         this.barChart = myBarChart
  //         }
  //     }
  data() {
    return {
      categoryList: [
        {
          icon: '<i class="fas fa-utensils"></i>',
          category: "식비",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-shopping-bag"></i>',
          category: "쇼핑",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-coffee"></i>',
          category: "카페",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-bus"></i>',
          category: "교통",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-chess-pawn"></i>',
          category: "문화",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-envelope"></i>',
          category: "경조",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-shopping-basket"></i>',
          category: "생활",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-book"></i>',
          category: "교육",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-hospital"></i>',
          category: "의료",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
      ],
    };
  },
};
</script>

<style></style>

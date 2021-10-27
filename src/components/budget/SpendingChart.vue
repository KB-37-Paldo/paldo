<template>
  <div class="chart">
    <canvas
      width="400"
      height="400"
      ref="spendingChart"
      id="spendingChart"
    ></canvas>
  </div>
</template>

<script>
export default {
  props: ["spendingType", "categoryList"],
  created() {
    this.totalAmount =
      this.categoryList.cafe.amount +
      this.categoryList.congratulations.amount +
      this.categoryList.culture.amount +
      this.categoryList.food.amount +
      this.categoryList.shopping.amount +
      this.categoryList.traffic.amount +
      this.categoryList.life.amount +
      this.categoryList.medical.amount;
    this.cafeAmount = this.categoryList.cafe.amount;
    this.congratulationsAmount = this.categoryList.congratulations.amount;
    this.cultureAmount = this.categoryList.culture.amount;
    this.foodAmount = this.categoryList.food.amount;
    this.shoppingAmount = this.categoryList.shopping.amount;
    this.trafficAmount = this.categoryList.traffic.amount;
    this.lifeAmount = this.categoryList.life.amount;
    this.medicalAmount = this.categoryList.medical.amount;
    this.chartData[0] = (this.cafeAmount / this.totalAmount) * 100;
    this.chartData[1] = (this.congratulationsAmount / this.totalAmount) * 100;
    this.chartData[2] = (this.cultureAmount / this.totalAmount) * 100;
    this.chartData[3] = (this.foodAmount / this.totalAmount) * 100;
    this.chartData[4] = (this.shoppingAmount / this.totalAmount) * 100;
    this.chartData[5] = (this.trafficAmount / this.totalAmount) * 100;
    this.chartData[6] = (this.lifeAmount / this.totalAmount) * 100;
    this.chartData[7] = (this.medicalAmount / this.totalAmount) * 100;
  },
  data() {
    return {
      totalAmount: "",
      spendingChart: "",
      mainColor: "rgb(100, 91, 76)",
      chartData: [],
      fontFamily: '"Hanna", fantasy;',
      cafeAmount: "",
      congratulationsAmount: "",
      cultureAmount: "",
      foodAmount: "",
      shoppingAmount: "",
      trafficAmount: "",
      lifeAmount: "",
      medicalAmount: "",
    };
  },
  mounted() {
    if (this.spendingType == "users") {
      this.fetchChart();
    }
  },
  methods: {
    fetchChart() {
      const ctx = this.$refs.spendingChart.getContext("2d");

      // 차트 font
      this.$_Chart.defaults.global.defaultFontFamily = "Hanna";
      this.$_Chart.defaults.global.defaultFontSize = 16;

      // 차트
      const mySpendingChart = new this.$_Chart(ctx, {
        type: "doughnut",
        data: {
          labels: [
            "식비",
            "쇼핑",
            "카페",
            "교통",
            "문화",
            "경조",
            "생활",
            "의료",
          ],
          datasets: [
            {
              label: "지출",
              backgroundColor: [
                "rgba(255, 99, 132)",
                "rgba(255, 159, 64)",
                "rgba(255, 205, 86)",
                "rgba(75, 192, 192)",
                "rgba(54, 162, 235)",
                "rgba(153, 102, 255)",
                "rgba(255, 255, 102)",
                "rgba(255, 000, 255)",
                "rgba(000, 204, 000)",
                "rgba(000, 000, 255)",
              ],
              // borderColor: this.mainColor,
              hoverBackgroundColor: this.mainColor,
              hoverBorderColor: this.mainColor,
              data: this.chartData,
              barPercentage: 0.75,
              categoryPercentage: 0.5,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                let label = data.labels[tooltipItem.index] || "";
                let labelData =
                  data.datasets[tooltipItem.datasetIndex].data[
                    tooltipItem.index
                  ] || 0;
                if (label) {
                  label += ": " + labelData + "%";
                }
                // label += Math.round(tooltipItem.yLabel * 100) / 100;
                return label;
              },
            },
          },
        },
      });

      this.spendingChart = mySpendingChart;
    },
  },
};
</script>

<style></style>

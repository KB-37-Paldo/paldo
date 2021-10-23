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
  props: ["spendingType"],
  data() {
    return {
      spendingChart: "",
      mainColor: "rgb(100, 91, 76)",
      chartData: [20, 20, 20, 20, 10, 10, 30, 10, 20, 20],
      fontFamily: '"Hanna", fantasy;',
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
            "금융",
            "생활",
            "교육",
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

<template>
  <div class="chart">
    <canvas width="400" height="400" ref="portChart" id="portChart"></canvas>
  </div>
</template>

<script>
export default {
  props:['portType','portfolioInfo'],
  data() {
    return {
      portChart:'',
      mainColor:'rgb(100, 91, 76)',
      chartData:[20,20,20,20,10,10],
      fontFamily:'"Hanna", fantasy;'
    }
  },
  mounted() {
    this.fetchChart()
    // if (this.portType == "users") {
    //   this.fetchChart()
    // } else if (this.portType == "recommend") {
    //   this.fetchChart()
    // } else if (this.portType == "age") {
    //   this.fetchChart()
    // } else if (this.portType == "money") {
    //   this.fetchChart()
    // } else if (this.portType == "investType") {
    //   this.fetchChart()
    // }
  },
  methods : {
    fetchChart() {
      this.chartData[0] = this.portfolioInfo.cashAmount;
      this.chartData[1] = this.portfolioInfo.stockAmount;
      this.chartData[2] = this.portfolioInfo.goldAmount;
      this.chartData[3] = this.portfolioInfo.bondAmount;
      this.chartData[4] = this.portfolioInfo.fundAmount;
      this.chartData[5] = this.portfolioInfo.realEstateAmount;
      const ctx = this.$refs.portChart.getContext('2d');
      
      // 차트 font
      this.$_Chart.defaults.global.defaultFontFamily = 'Hanna';
      this.$_Chart.defaults.global.defaultFontSize = 16;

      // 차트
      const myportChart =  new this.$_Chart(ctx, {
      type: 'pie',
      // type: 'doughnut',
      data: {
        labels: ["현금성자산", "주식", "실물자산", "채권", "펀드", "부동산"],
        datasets: [{
          label: "자산",
          backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(255, 159, 64)',
            'rgba(255, 205, 86)',
            'rgba(75, 192, 192)',
            'rgba(54, 162, 235)',
            'rgba(153, 102, 255)'
          ],
          // borderColor: this.mainColor,
          hoverBackgroundColor: this.mainColor,
          hoverBorderColor: this.mainColor,
          data: this.chartData,
          barPercentage: .75,
          categoryPercentage: .5
        }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
          tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    let label = data.labels[tooltipItem.index] || '';
                    let labelData = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] || 0;
                    if (label) {
                        label += ': ' +labelData + '%';
                    }
                    // label += Math.round(tooltipItem.yLabel * 100) / 100;
                    return label;
                }
            }
        }
        }
      });
      this.portChart = myportChart
      }
    }
}
</script>

<style>

</style>
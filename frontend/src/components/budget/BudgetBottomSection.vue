<template>
    <div>
        <div>
            <span style="font-size: 25px">한 달 예산</span>
        </div>
        <div>
            <span style="font-size: 30px">390,000원 남음</span>
        </div>
        <div class="budget-setting-button-section">
            <v-btn style="background-color: rgb(253,185,19); color: white;" elevation="2">예산 설정</v-btn>
        </div>

         <div style="background-color: red">
            Chart Section
        </div>
        <div>
            <span style="font-size: 15px; position: relative; left: 218px;">총 예산 1,000,000원</span>
        </div>
    </div>
</template>

<script>
 export default {
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
  
}
</script>



<style scoped>
.budget-setting-button-section {
  position: relative;
  left: 252px;
  bottom: 60px;
}
</style>
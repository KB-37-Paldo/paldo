<template>
  <div>
    <div>
      <div>
        <span style="font-size: 25px">지출 </span>
        <span style="font-size: 30px">{{ myData.spending }}원</span>
      </div>
      <div>
        <span style="font-size: 25px">수입 </span>
        <span style="font-size: 30px">{{ myData.income }}원</span>
      </div>
      <div class="anaysis-button-section">
        <v-btn
          style="background-color: rgb(253,185,19); color: white; cursor: pointer"
          elevation="2"
          >분석</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myData: {
        spending: "600,000",
        income: "100,000",
      },
    };
  },
};
</script>

<style></style>

<template>
  <div>
    <div class="mini__font">{{ month }}월 지출</div>
    <div class="main__money__font">
      {{ changeMoney(categoryList.totalOutlay) }}원
    </div>
    <hr style=" margin-top: 10px;" />
  </div>
</template>

<script>
export default {
  props: ["month", "categoryList"],
  methods: {
    changeMoney(amount) {
      return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style></style>

<template>
  <div class="mt__five title__font portfolio__div">
      <span>
        목표금액 달성률
      </span>
      <span>{{targetProgress}}</span>
      <div class="color__yellow">
      <meter class="meter color__yellow w-100" min="0" max="100" :value="targetPrice"></meter>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetProgress:'70%',
      targetPrice:70
    }
  },

}
</script>

<style>

</style>
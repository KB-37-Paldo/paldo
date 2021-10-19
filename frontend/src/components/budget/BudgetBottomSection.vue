<template>
    <div>
        <span>한 달 예산</span>
        <div>
            390,000원 남음
        </div>
        <v-btn elevation="2">예산 설정</v-btn>
        <vue-gauge :refid="'type-unique-id'" :option="{'needleValue': 30, 'arcDelimiters': 99}"></vue-gauge>
    </div>
</template>

<script>
import VueGauge from 'vue-gauge';
  export default {
      components: {VueGauge}
  }
</script>

<style>

</style>
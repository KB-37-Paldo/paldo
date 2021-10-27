<template>
  <div>
    <div class="pb__ten">
      구독관리 서비스는
    </div>
    <div class="pb__fifty">머니마니 서비스</div>
    <div >
      <v-btn
      elevation="2"
      x-large
      class="button__about"
    >시작하기</v-btn>
    </div>
    <img class="mt__twenty" :src="imgURL" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      imgURL:require('../../assets/images/runa.png')
    }
  },
}
</script>

<style>

</style>
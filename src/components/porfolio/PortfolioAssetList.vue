<template>
  <div>
    <div v-for="(asset,index) in assetInfo" :key="index">
      {{asset.type}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['assetInfo']

}
</script>

<style>

</style>
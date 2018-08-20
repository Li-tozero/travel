<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import DetailBanner from './components/banner.vue'
import DetailHeader from './components/header.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>

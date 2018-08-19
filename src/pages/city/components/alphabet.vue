<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
  .list
    display: flex
    flex-direction: column
    justify-content:center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    /*background: red*/
   .item
    line-height: .4rem
    text-align: center
    color: $bgColor
</style>

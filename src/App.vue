<template>
  <div id="app">
    <!--exclude="Detail"直接加入会有问题，detail-header的头部滚动后不会出现-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

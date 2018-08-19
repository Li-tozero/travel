<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script type="text/ecmascript-6">
import CityHeader from './components/header.vue'
import CitySearch from './components/search.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="stylus" scoped>
</style>

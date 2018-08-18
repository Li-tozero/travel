<template>
 <div class="wrapper">
   <swiper :options="swiperOption">
     <!-- slides -->
     <swiper-slide v-for="item of swiperList" :key="item.id">
       <img class="swiper-img" :src="item.imgUrl"/>
     </swiper-slide>
     <!-- Optional controls -->
     <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
 </div>
</template>

<script type="text/ecmascript-6">
export default{
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop:true
      },
      swiperList:[
        {
          id:'0001',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1805/e8/14b75b1c81fbe702.jpg_750x200_e6d4f1f1.jpg'
        },
        {
          id:'0002',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1808/2f/6ab88adea2619c02.jpg_750x200_675e9cf2.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%
    .swiper-img
      width: 100%
</style>

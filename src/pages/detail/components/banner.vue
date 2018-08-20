<template>
  <div>
    <div class="banner" @click="handleBannerGallary">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_600x330_cd2e3bf7.jpg"/>
      <div class="banner-info">
        <div class="banner-title">
          广州长隆旅游度假区(AAAAA景区)
        </div>
        <div class="banner-number banner-icon">
          <span class="iconfont">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <CommonGallary
      :imgs="imgs"
      v-if="showGallary"
      @close="handleGallaryClose"
    ></CommonGallary>
  </div>
</template>

<script type="text/ecmascript-6">
import CommonGallary from 'common/gallary/gallary.vue'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/201405/29/b5d02d4967e16b8cbc40f1dbd8186e6f.jpg_r_800x800_504fbd5c.jpg',
        'http://img1.qunarzz.com/sight/p0/201405/29/b5d02d4967e16b8cbc40f1dbd8186e6f.jpg_r_800x800_504fbd5c.jpg'
      ]
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerGallary () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        line-height: .32rem
        height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, 0.8)
        font-size: .24rem
        margin-top: 0.14rem
        .banner-icon
          font-size: .24rem
</style>

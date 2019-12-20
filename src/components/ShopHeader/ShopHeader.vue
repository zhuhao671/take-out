<template>
  <div class="shop-header">
    <nav class="shop-nav"
         style="background-image: url('https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png');">
      <a class="back">
        <i class="iconfont icon-jiantouzuo"/>
      </a>
    </nav>
    <div class="shop-content">
      <img src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" class="content-image">
      <div class="header-content">
        <h2 class="content-title">
          <span class="content-tag">
            <span class="mini-tag">品牌</span>
          </span>
          <span class="content-name">嘉禾一品（温都水城）</span>
          <i class="content-icon"></i>
        </h2>
        <div class="shop-message">
          <span class="shop-message-detail">5</span>
          <span class="shop-message-detail">月售90单</span>
          <span class="shop-message-detail">
            硅谷专送
            <span>约28分钟</span>
          </span>
          <span class="shop-message-detail">距离1000m</span>
        </div>
        <p class="shop-notice">是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今</p>
      </div>
    </div>
    <div class="shop-header-discounts">
      <div class="discounts-left">
        <div class="activity activity-green">
          <span class="content-tag">
            <span class="mini-tag">首单</span>
          </span>
          <span class="activity-content">新用户下单立减17元</span>
        </div>
      </div>
      <div class="discounts-right">
        3个优惠
      </div>
    </div>
    <div class="shop-brief-modal" style="display: none;">
      <div class="brief-modal-content">
        <h2 class="content-title">
          <span class="content-tag">
            <span class="mini-tag">品牌</span>
          </span>
          <span class="content-name">嘉禾一品（温都水城）</span>
        </h2>
        <ul class="brief-modal-msg">
          <li>
            <h3>3.5</h3>
            <p>评分</p>
          </li>
          <li>
            <h3>90单</h3>
            <p>月售</p>
          </li>
          <li>
            <h3>硅谷专送</h3>
            <p>约28分钟</p>
          </li>
          <li>
            <h3>4元</h3>
            <p>配送费用</p>
          </li>
          <li>
            <h3>1000m</h3>
            <p>距离</p>
          </li>
        </ul>
        <h3 class="brief-modal-title">
          <span>公告</span></h3>
          <div class="brief-modal-notice">
            是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今
          </div>
        <div class="mask-footer">
          <span class="iconfont icon-close"></span>
        </div>
      </div>
      <div class="brief-modal-cover"></div>
    </div>
    <div class="activity-sheet" style="display: none;">
      <div class="activity-sheet-content">
        <h2 class="activity-sheet-title">
        优惠活动</h2>
        <ul class="list">
          <li class="activity-item activity-green">
            <span class="content-tag">
              <span class="mini-tag">首单</span>
            </span>
            <span class="activity-content">新用户下单立减17元(不与其它活动同享)</span>
          </li>
          <li class="activity-item activity-red">
            <span class="content-tag">
              <span class="mini-tag">满减</span>
            </span>
            <span class="activity-content">满35减19，满65减35</span>
          </li>
          <li class="activity-item activity-orange">
            <span class="content-tag">
              <span class="mini-tag">特价</span>
            </span>
            <span class="activity-content">【立减19.5元】欢乐小食餐</span>
          </li>
        </ul>
        <div class="activity-sheet-close">
          <span class="iconfont icon-close"></span>
        </div>
      </div>
      <div class="activity-sheet-cover"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   @import "../../common/stylus/mixins.styl"

  .shop-header
    height 100%
    position relative
    background #fff
    color #fff
    overflow hidden
    .shop-nav
      background-size cover
      background-repeat no-repeat
      height 40px
      padding 5px 10px
      position relative
      &::before
        content ""
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        background-color rgba(119, 103, 137, .43)
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-jiantouzuo
          display: block
          padding: 5px
          font-size: 20px
          color: #fff

    .shop-content
      padding 30px 20px 5px 20px
      position relative
      display flex
      background #fff
      text-align center
      img
        box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, .2);
        position: absolute;
        top: 0;
        left: 50%;
        width: 66px
        height: 66px
        border-radius: 2px
        margin-left -33px
        margin-top -40px
      .header-content
        flex 1
        width 72%
        .content-title
          font-size 20px
          line-height 24px
          font-weight 700
          white-space nowrap
          position relative
          display flex
          align-items center
          justify-content center
          color #333
          .content-tag
            border-radius 2px
            background-image linear-gradient(90deg, #fff100, #ffe339)
            width 36px
            height: 18px
            margin-right 10px
            color #6a3709
            font-style normal
            font-weight 700
            position relative
            .mini-tag
              position absolute
              left 0
              top 0
              right -100%
              bottom -100%
              font-size 24px
              font-weight 600
              transform scale(.5)
              transform-origin 0 0
              display flex
              align-items center
              justify-content center
          .content-name
            font-weight 700
            text-align left
            overflow hidden
            text-overflow ellipsis
          .content-icon
            width 20px
            position relative
            height 16px
            &::after
              content ""
              border-style solid
              border-width: 6px 0 6px 7px
              border-color transparent transparent transparent rgba(0, 0, 0, .67)
              position absolute
              left 8px
              top 3px
 
</style>

<template>
  <div class="banner d-flex">
    <div class="container">
      <div class="banner-text text-white">
        <div class="fw-bold fs-3">有很多壓力需要發洩嗎?</div>
        <div class="fw-bold fs-1">減肥的事明天再說!</div>
        <div class="fw-bold fs-48">
          <span class="text-orange">歡迎光臨 </span
          ><span class="font-family-indie-flower">CHILLBURGER</span>
        </div>
      </div>
      <a href="#" class="btn-custom hvr-bounce-to-right mt-5">點我前往</a>
    </div>
  </div>
  <div class="about py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="aboutImg bg-cover"></div>
        </div>
        <div
          class="col-lg-6 d-flex flex-column justify-content-between aboutContent align-items-center fw-bold"
        >
          <h2 class="text-primary fw-bold">堅持品質 · 安心保證</h2>
          <p class="pt-5">
            我們是一群跟你一樣，喜歡透過大吃大喝來消除壓力的同好，但隨著年紀的增長，總會開始擔心起自己的健康，不經開始想外面的食物真的健康嗎?畢竟細節的部份我們並不清楚，抱持著這樣的相法，終於迎來了好的時機，<span
              class="fs-3 text-primary font-family-indie-flower"
              >CHILLBURGER</span
            >就這樣誕生了。
          </p>
          <p class="mt-3">
            嚴謹把關高品質食材提供合理的價錢讓消費者使用的安心且開心
            全台首創使用洽富氣冷生產技術的氣冷雞及嚴選優質安心油品
            從選料、設備到製程標準與美國同步一致，
            要讓每位顧客在台灣就能感受到方便的外送文化， 享受到原汁原味的的正宗美式漢堡！
          </p>
          <a href="#" class="btn-custom hvr-bounce-to-right">了解更多</a>
        </div>
      </div>
    </div>
  </div>
  <div class="indexProduct py-3">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h2 class="text-primary fw-bold text-start mb-5">熱銷TOP</h2>
          <swiper
            :space-between="10"
            loop
            :autoplay='{
              delay:3000
            }'
            :breakpoints='{
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              }
            }'
           >
            <swiper-slide>
                <img src="https://upload.cc/i1/2021/07/07/KzpvDF.jpg" alt="" />
                <div class="imgHover">
                <a href="#" class="btn-detail">了解更多</a>
                </div>
            </swiper-slide>
            <swiper-slide>
              <img src="https://upload.cc/i1/2021/07/07/4SLoTG.jpg" alt="">
              <div class="imgHover">
                <a href="#" class="btn-detail">了解更多</a>
                </div>
            </swiper-slide>
            <swiper-slide>
              <img src="https://upload.cc/i1/2021/07/07/LBwJIM.jpg" alt="">
              <div class="imgHover">
                <a href="#" class="btn-detail">了解更多</a>
                </div>
            </swiper-slide>
            <swiper-slide>
              <img src="https://upload.cc/i1/2021/07/07/LBwJIM.jpg" alt="">
              <div class="imgHover">
                <a href="#" class="btn-detail">了解更多</a>
                </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
SwiperCore.use([Navigation, Pagination, Autoplay])

export default {
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

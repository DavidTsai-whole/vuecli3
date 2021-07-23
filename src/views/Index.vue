<template>
  <div class="index">
    <div class="banner d-flex">
      <div class="container">
        <div class="banner-text text-white">
          <div class="fw-bold fs-3">有很多壓力需要發洩嗎?</div>
          <div class="fw-bold fs-1">減肥的事明天再說!</div>
          <div class="fw-bold fs-7">
            <span class="text-orange">歡迎光臨 </span
            ><span class="font-family-indie-flower">CHILLBURGER</span>
          </div>
        </div>
        <a href="#/products" class="btn-custom hvr-bounce-to-right mt-5">點我前往</a>
        <div
          class="down text-center animate__animated animate__bounce animate__infinite infinite"
        >
          <i class="bi bi-chevron-double-down text-white fs-1"></i>
        </div>
      </div>
    </div>
    <aos-vue animation="fade-down" :once="true">
    <div class="news pt-5">
      <div class="container">
        <div class="col">
          <h2 class="fw-bold mb-3">最新消息</h2>
          <div>
            <ul class="list-unstyled mb-0">
            <li class="d-flex align-items-center">
            <p class="text-primary me-2">2021/05/30</p>
            <p>任何訂單結帳時輸入 :<span class="text-orange"> yes777</span> 即享7折優惠。</p>
            </li>
            <hr>
            <li class="d-flex align-items-center">
            <p class="text-primary me-2">2021/06/02</p>
            <p>配合政府防疫政策，全面禁止內用。</p>
            </li>
            <hr>
            <li class="d-flex align-items-center">
            <p class="text-primary me-2">2021/06/02</p>
            <p>只要來店裡外帶，均可獲得精美小禮物。</p>
            </li>
            <hr>
            <li class="d-flex align-items-center">
            <p class="text-primary me-2">2021/06/15</p>
            <p>內部整修中，敬請期待!</p>
            </li>
            <hr>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </aos-vue>
<aos-vue animation="fade-right" :once="true">
<div class="about pb-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 ">
            <div class="aboutImg bg-cover"></div>
          </div>
          <div
            class="col-lg-6 d-flex flex-column justify-content-between aboutContent align-items-center fw-bold"
          >
            <h2 class="text-primary fw-bold mt-md-0 mt-2">堅持品質 · 安心保證</h2>
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
              要讓每位顧客在台灣就能感受到方便的外送文化，
              享受到原汁原味的的正宗美式漢堡！
            </p>
            <a href="#/about" class="btn-custom hvr-bounce-to-right mt-md-0 mt-2">了解更多</a>
          </div>
        </div>
      </div>
    </div>
</aos-vue>

  </div>
</template>

<script>
export default {
  data () {
    return {
      classList: {
        bg: '',
        text: ''
      }
    }
  },
  inject: ['emitter'],
  mounted () {
    window.addEventListener('scroll', () => {
      if (scrollY > 0) {
        this.classList.bg = 'bg-orange'
        this.classList.text = 'text-primary'
      } else {
        this.classList.bg = ''
        this.classList.text = ''
      }
    })
    this.emitter.emit('pushNavbar', this.classList)
  }
}
</script>

<script setup>
import { ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const deliveryPrev = ref(null);
const deliveryNext = ref(null);
</script>
<template>
  <div class="content__examples">
    <h2 class="title-block">Пример грузоперевозок</h2>
    <button
      ref="deliveryPrev"
      class="swiper-button-prev slick-prev slick-arrow"
    ></button>
    <button
      ref="deliveryNext"
      class="swiper-button-next slick-next slick-arrow"
    ></button>
    <swiper
      :modules="[Navigation]"
      :navigation="{ prevEl: deliveryPrev, nextEl: deliveryNext }"
      :spaceBetween="30"
      :loop="true"
      :breakpoints="{
        '0': {
          slidesPerView: 1,
        },
        '768': {
          slidesPerView: 2,
        },
      }"
      class="content__examples-inner"
    >
      <swiper-slide class="content__examples-card">
        <div class="content__examples-imgBl" style="overflow: hidden">
          <router-link
            :to="{name: 'DeliveryExamples'}"
            tabindex="0"
            ><picture
              ><source
                srcset="/images/1a9f031e99394ccecfe44a1b69a5ace4.jpg"
                type="image/webp" />
              <img
                src="/images/1a9f031e99394ccecfe44a1b69a5ace4.jpg"
                alt="clothers" /></picture
          ></router-link>
        </div>
        <h3 class="content__examples-title">
          <router-link
            :to="{name: 'DeliveryExamples'}"
            tabindex="0"
            >Доставка одежды из Китая в Россию оптом</router-link
          >
        </h3>
        <router-link
          :to="{ name: 'DeliveryExamples' }"
          class="content__examples-btn"
          tabindex="0"
          >Подробнее</router-link
        >
      </swiper-slide>
      <swiper-slide class="content__examples-card">
        <div class="content__examples-imgBl" style="overflow: hidden">
          <a href="/msk/examples/dostavka-oborudovaniya-iz-kitaya/" tabindex="0"
            ><picture
              ><source
                srcset="/images/3d91cb3fd624f6f0ce26cf8f3ddfa7af.jpg"
                type="image/webp" />
              <img
                src="/images/3d91cb3fd624f6f0ce26cf8f3ddfa7af.jpg"
                alt="clothers" /></picture
          ></a>
        </div>
        <h3 class="content__examples-title">
          <a href="/images/dostavka-oborudovaniya-iz-kitaya/" tabindex="0"
            >Доставка оборудования из Китая</a
          >
        </h3>
        <a
          href="/msk/examples/dostavka-oborudovaniya-iz-kitaya/"
          class="content__examples-btn"
          tabindex="0"
          >Подробнее</a
        >
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
.content__examples {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.content__examples .slick-arrow.slick-prev {
  background-image: url(../images/arrow-prev.webp);
  background-repeat: no-repeat;
  background-position: center;
  right: 48px;
  left: unset;
}

.slick-arrow.slick-prev,
.slick-arrow.slick-next {
  background-color: transparent !important;
}

.content__examples .slick-arrow {
  cursor: pointer;
  position: absolute;
  background-color: transparent;
  top: 24px;
  right: 0;
  font-size: 0;
  width: 30px;
  height: 30px;
}

.content__examples .slick-arrow.slick-next {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  background-image: url(../images/arrow-prev.webp);
  background-repeat: no-repeat;
  background-position: center;
}

.content__examples-imgBl img {
  height: auto;
  object-fit: unset;
}

.content__examples-inner {
  max-width: 837px;
  width: 100%;
}

@media (max-width: 630px) {
  .content__examples .title-block {
    font-size: 22px;
  }

  .content__examples-imgBl img {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .content__examples .title-block {
    font-size: 16px;
  }

  .content__examples .slick-arrow {
    top: 20px;
  }
}
</style>

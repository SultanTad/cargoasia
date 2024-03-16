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
    <button ref="deliveryPrev" class="swiper-button-prev"></button>
    <button ref="deliveryNext" class="swiper-button-next"></button>
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
      <swiper-slide class="content__examples">
        <div class="content__examples-imgBl" style="overflow: hidden">
          <a
            href="/msk/examples/dostavka-odezhdy-iz-kitaya-v-rossiyu-optom/"
            tabindex="0"
            ><picture
              ><source
                srcset="/images/1a9f031e99394ccecfe44a1b69a5ace4.jpg"
                type="image/webp" />
              <img
                src="/images/1a9f031e99394ccecfe44a1b69a5ace4.jpg"
                alt="clothers" /></picture
          ></a>
        </div>
        <h3 class="content__examples-title">
          <a
            href="/msk/examples/dostavka-odezhdy-iz-kitaya-v-rossiyu-optom/"
            tabindex="0"
            >Доставка одежды из Китая в Россию оптом</a
          >
        </h3>
        <router-link
          :to="{ name: 'DeliveryExamples' }"
          class="content__examples-btn"
          tabindex="0"
          >Подробнее</router-link
        >
      </swiper-slide>
      <swiper-slide class="content__examples">
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

.content__examples-imgBl img {
  height: auto;
  object-fit: unset;
}

.content__examples-inner {
  max-width: 837px;
}
</style>

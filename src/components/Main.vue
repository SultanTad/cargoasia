<script setup>
import { ref, reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const calcVarning = ref(false);
const activeStepTwo = ref(false);
const activeStepThree = ref(false);
const deactiveStepOne = ref(false);
const deactiveStepTwo = ref(false);
const prev = ref(null);
const next = ref(null);

const calcStepOne = reactive({
  from: "",
  to: "",
  weight: "",
  volume: "",
});

const calcStepTwo = reactive({
  name: "",
  phone: "",
  comment: "",
});

const formQuestions = reactive({
  name: "",
  phone: "",
  email: "",
  question: "",
});

const errors = {
  name: false,
  phone: false,
  email: false,
  question: false,
};

const validateStepOne = () => {
  for (let key in calcStepOne) {
    if (calcStepOne[key].length === 0) {
      calcVarning.value = true;
    } else if (calcStepOne[key].length !== 0) {
      activeStepTwo.value = true;
      deactiveStepOne.value = true;
    }
  }
};

const validateStepTwo = () => {
  for (let key in calcStepTwo) {
    if (calcStepTwo[key].length === 0) {
      calcVarning.value = true;
    } else if (calcStepTwo[key].length !== 0) {
      activeStepTwo.value = false;
      activeStepThree.value = true;
      deactiveStepTwo.value = true;
    }
  }
};

const validEmail = (email) => {
  let res =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  return phoneRegex.test(phone);
};

const validateFormQuestions = () => {
  if (formQuestions.question.length === 0) {
    errors.question = true;
  } else {
    errors.question = false;
  }

  if (!validatePhone(formQuestions.phone) && !validEmail(formQuestions.email)) {
    errors.phone = true;
    errors.email = true;
  } else {
    errors.phone = false;
    errors.email = false;
  }
};

const goBackStepOne = () => {
  activeStepTwo.value = false;
  deactiveStepOne.value = true;
};
</script>

<template>
  <section class="promo">
    <swiper
      :pagination="{
        clickable: true,
        bulletActiveClass: 'promo-bullet-active',
        bulletClass: 'promo-bullet',
      }"
      :autoplay="{
        delay: 6000,
        disableOnInteraction: false,
      }"
      :modules="[Autoplay, Pagination]"
      class="promo-swiper"
    >
      <swiper-slide
        style="
          background-image: url(/images/e39f65d4ccbcf1c2ba0151fe8601087e.jpg);
        "
      >
        <div class="container">
          <div class="slider-item__wrapper">
            <h2 class="slider-item__title">Гарантируем сроки!</h2>
            <p class="slider-item__subtitle">
              Если мы не уложимся в обозначенные сроки, <br />
              доставка груза со&nbsp;<i>скидкой до 90%</i>
            </p>
            <div class="slider-item__arrow">
              <picture
                ><source srcset="/images/down-arrow.webp" type="image/webp" />
                <img
                  src="/images/down-arrow.webp"
                  alt="arrow-down"
                  class="slider-item__arrow-img"
              /></picture>
            </div>
          </div></div
      ></swiper-slide>
      <swiper-slide
        style="
          background-image: url(/images/36b791ef7c13bb95bfc276b6b7759505.jpg);
        "
      >
        <div class="container">
          <div class="slider-item__wrapper">
            <h2 class="slider-item__title">Гарантируем сроки!</h2>
            <p class="slider-item__subtitle">
              Если мы не уложимся в обозначенные сроки, <br />
              доставка груза со&nbsp;<i>скидкой до 90%</i>
            </p>
            <div class="slider-item__arrow">
              <picture
                ><source srcset="/images/down-arrow.webp" type="image/webp" />
                <img
                  src="/images/down-arrow.webp"
                  alt="arrow-down"
                  class="slider-item__arrow-img"
              /></picture>
            </div>
          </div></div
      ></swiper-slide>
      <swiper-slide
        style="
          background-image: url(/images/45996ed4da258d9fe21ec412dfba9828.jpg);
        "
      >
        <div class="container">
          <div class="slider-item__wrapper">
            <h2 class="slider-item__title">Гарантируем сроки!</h2>
            <p class="slider-item__subtitle">
              Если мы не уложимся в обозначенные сроки, <br />
              доставка груза со&nbsp;<i>скидкой до 90%</i>
            </p>
            <div class="slider-item__arrow">
              <picture
                ><source srcset="/images/down-arrow.webp" type="image/webp" />
                <img
                  src="/images/down-arrow.webp"
                  alt="arrow-down"
                  class="slider-item__arrow-img"
              /></picture>
            </div>
          </div></div
      ></swiper-slide>
      <swiper-slide
        style="
          background-image: url(/images/cc5780b47c0777e1213d2d7fb3aef9c9.jpg);
        "
      >
        <div class="container">
          <div class="slider-item__wrapper">
            <h2 class="slider-item__title">Гарантируем сроки!</h2>
            <p class="slider-item__subtitle">
              Если мы не уложимся в обозначенные сроки, <br />
              доставка груза со&nbsp;<i>скидкой до 90%</i>
            </p>
            <div class="slider-item__arrow">
              <picture
                ><source srcset="/images/down-arrow.webp" type="image/webp" />
                <img
                  src="/images/down-arrow.webp"
                  alt="arrow-down"
                  class="slider-item__arrow-img"
              /></picture>
            </div>
          </div></div
      ></swiper-slide>

      <div class="slider-soft">
        <a href="#calc" class="slider-item__btn main-btn"
          >Рассчитать стоимость</a
        >
      </div>
    </swiper>
  </section>

  <section class="info">
    <div class="container">
      <div class="info__wrapper">
        <div class="info__card">
          <div class="info__img-bl">
            <picture
              ><source srcset="/images/cargo.webp" type="image/webp" />
              <img
                src="/images/cargo.webp"
                alt="Transportation"
                class="info__img"
            /></picture>
          </div>
          <p class="info__text">Перевозка груза от 20 кг до контейнера</p>
        </div>
        <div class="info__card">
          <div class="info__img-bl">
            <picture
              ><source srcset="/images/track.webp" type="image/webp" />
              <img src="/images/track.webp" alt="Кoute" class="info__img"
            /></picture>
          </div>
          <p class="info__text">Подбираем выгодный маршрут доставки</p>
        </div>
        <div class="info__card">
          <div class="info__img-bl">
            <picture
              ><source srcset="/images/pay.webp" type="image/webp" />
              <img src="/images/pay.webp" alt="pay" class="info__img"
            /></picture>
          </div>
          <p class="info__text">
            Оплата на р/с в РФ , на р/с Китай, на банковскую карту.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="calc" class="calc">
    <div class="container">
      <div class="calc__wrapper">
        <div class="calc__cost">
          <h2 class="calc__cost-title">
            Получить рассчет стоимости доставки вашего груза
          </h2>
          <form action="#" class="calc__form" novalidate="" @submit.prevent>
            <div class="calc__check-wrap">
              <span class="calc__check check1 check_active">1</span>
              <span class="calc__check check2">2</span>
              <span class="calc__check check3"></span>
            </div>
            <div class="calc__step1" :class="{ disabled: deactiveStepOne }">
              <div class="calc__inp-wrapp">
                <div class="calc__inp-wrap-wrap">
                  <input
                    type="text"
                    required=""
                    class="calc__step1-inp inp-warning calc-inp"
                    placeholder="Откуда *"
                    v-model="calcStepOne.from"
                  />
                  <input
                    type="text"
                    data-rule="from"
                    class="calc__step1-inp calc-inp"
                    placeholder="Куда *"
                    required=""
                    v-model="calcStepOne.to"
                  />
                </div>
                <div class="calc__inp-wrap-wrap">
                  <input
                    type="text"
                    required=""
                    class="calc__step1-inp calc-inp"
                    placeholder="Вес груза, кг"
                    v-model="calcStepOne.weight"
                  />
                  <input
                    type="text"
                    required=""
                    class="calc__step1-inp calc-inp"
                    placeholder="Объем груза, м3"
                    v-model="calcStepOne.volume"
                  />
                </div>
              </div>
              <button @click="validateStepOne" class="calc__step1-btn main-btn">
                Следующий шаг
              </button>
              <span class="calc-varning" :class="{ varning: calcVarning }"
                >Заполните пропущенный блок *</span
              >
            </div>
            <div
              class="calc__step2"
              :class="{ active: activeStepTwo, disabled: deactiveStepTwo }"
            >
              <div class="calc__inp-wrapp">
                <div class="calc__inp-wrap-wrap">
                  <input
                    type="text"
                    data-rule="name"
                    class="calc__step2-inp calc-inp"
                    placeholder="Имя *"
                    required=""
                    v-model="calcStepTwo.name"
                  />
                  <input
                    type="tel"
                    data-rule="tel"
                    class="calc__step2-inp calc-inp"
                    placeholder="Номер телефона *"
                    required=""
                    v-model="calcStepTwo.phone"
                  />
                </div>
                <textarea
                  rows="3"
                  class="calc__step2-comment"
                  placeholder="Коментарий"
                  v-model="calcStepTwo.comment"
                ></textarea>
                <div class="personal-data__wrap">
                  <label
                    ><input
                      type="checkbox"
                      id="personal-data_calc"
                      checked=""
                    />
                    <span style="color: black"
                      >Я согласен на обработку
                      <a href="/krasnodar/personal-data/"
                        >персональных данных</a
                      ></span
                    ></label
                  >
                </div>
              </div>
              <button
                class="calc__step1-btn main-btn btn-reverse"
                @click="goBackStepOne"
              >
                Назад
              </button>
              <button class="calc__step2-btn main-btn" @click="validateStepTwo">
                Отправить</button
              ><span class="calc-varning" :class="{ varning: calcVarning }"
                >Заполните пропущенный блок *</span
              >
            </div>
            <div class="calc__step3" :class="{ active: activeStepThree }">
              <div class="calc__step3-wrapper">
                <p class="calc__step3-text">
                  Спасибо за заявку. Мы обязатальено свяжемся с вами
                </p>
                <span class="calc__step3-subtext"
                  >Так же для вас может быть полезно:</span
                >
                <ul class="calc__step3-list">
                  <li class="calc__step3-item">
                    <a href="/services/" class="calc__step3-link">Услуги</a>
                  </li>
                  <li class="calc__step3-item">
                    <a href="/gruzoperevozki/" class="calc__step3-link"
                      >Примеры грузоперевозок</a
                    >
                  </li>
                  <!--                <li class="calc__step3-item"><a href="/services/poisk-produktsii-v-kitae/" class="calc__step3-link">Поиск товаров в Китае</a></li>-->
                </ul>
              </div>
            </div>
          </form>
        </div>
        <div class="calc__imgBl">
          <picture
            ><source srcset="/images/calc-img.webp" type="image/webp" />
            <img src="/images/calc-img.webp" alt="track" class="calc__img"
          /></picture>
        </div>
      </div>
    </div>
  </section>

  <section class="trust">
    <div class="container">
      <div class="trust__wrapper">
        <h2 class="title-block">
          Почему нам можно доверять перевозку и доставку грузов из Китая в
          Россию?
        </h2>
        <div class="trust__cards">
          <div class="trust__card card-anim-1 fadeInDown1">
            <div class="trust__card-imgBl">
              <picture
                ><source srcset="/images/trust-img_1.webp" type="image/webp" />
                <img
                  src="/images/trust-img_1.webp"
                  alt="trust"
                  class="trust__card-img"
              /></picture>
            </div>
            <div class="trust__card-content">
              <h3 class="trust__card-title">Офисы в России и Китае</h3>
              <p class="trust__card-subtitle">
                Офисы и склады в Москве, ИУ, Маньчжурии, Гуанчжоу.
              </p>
            </div>
          </div>
          <div class="trust__card card-anim-2 fadeInDown2">
            <div class="trust__card-imgBl">
              <picture
                ><source srcset="/images/trust-img_2.webp" type="image/webp" />
                <img
                  src="/images/trust-img_2.webp"
                  alt="trust"
                  class="trust__card-img"
              /></picture>
            </div>
            <div class="trust__card-content">
              <h3 class="trust__card-title">Подготовка всех документов</h3>
              <p class="trust__card-subtitle">
                Подготовим документы на перевозку груза из Китая в Россию
              </p>
            </div>
          </div>
          <div class="trust__card card-anim-3 fadeInDown3">
            <div class="trust__card-imgBl">
              <picture
                ><source srcset="/images/trust-img_3.webp" type="image/webp" />
                <img
                  src="/images/trust-img_3.webp"
                  alt="trust"
                  class="trust__card-img"
              /></picture>
            </div>
            <div class="trust__card-content">
              <h3 class="trust__card-title">
                Осуществляем контроль и доставку
              </h3>
              <p class="trust__card-subtitle">
                Отслеживаем груз от завода до пункта выдачи в вашем городе.
              </p>
            </div>
          </div>
          <div class="trust__card card-anim-4 fadeInDown4">
            <div class="trust__card-imgBl">
              <picture
                ><source srcset="/images/trust-img_4.webp" type="image/webp" />
                <img
                  src="/images/trust-img_4.webp"
                  alt="trust"
                  class="trust__card-img"
              /></picture>
            </div>
            <div class="trust__card-content">
              <h3 class="trust__card-title">Таможенное оформление груза</h3>
              <p class="trust__card-subtitle">
                Большой опыт позволяет провести быстро таможенное оформление
                любых грузов.
              </p>
            </div>
          </div>
          <div class="trust__card card-anim-5 fadeInDown5">
            <div class="trust__card-imgBl">
              <picture
                ><source srcset="/images/trust-img_5.webp" type="image/webp" />
                <img
                  src="/images/trust-img_5.webp"
                  alt="trust"
                  class="trust__card-img"
              /></picture>
            </div>
            <div class="trust__card-content">
              <h3 class="trust__card-title">Страхования груза</h3>
              <p class="trust__card-subtitle">
                Страхование груза от 1 кг. Низкая цена, страхования срока
                доставки, потерю или порчу товара.
              </p>
            </div>
          </div>
          <div class="trust__card card-anim-6 fadeInDown6">
            <div class="trust__card-imgBl">
              <picture
                ><source srcset="/images/trust-img_6.webp" type="image/webp" />
                <img
                  src="/images/trust-img_6.webp"
                  alt="trust"
                  class="trust__card-img"
              /></picture>
            </div>
            <div class="trust__card-content">
              <h3 class="trust__card-title">Склады временного хранения</h3>
              <p class="trust__card-subtitle">
                Складирование и консолидация ваших грузов на собственных складах
                временного хранения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="options">
    <div class="container">
      <div class="options__wrapper">
        <h2 class="options__title title-block">
          Варианты доставки грузов из Китая
        </h2>
        <swiper
          class="options-swiper"
          :modules="[Navigation]"
          :navigation="true"
          :slides-per-view="auto"
        >
          <swiper-slide>
            <div class="options__card-imgBl">
              <picture
                ><source
                  srcset="/images/f0bee3ebcc0c70213138210007d1cbea.jpg"
                  type="image/webp" />
                <img
                  src="/images/f0bee3ebcc0c70213138210007d1cbea.jpg"
                  alt="tir train"
                  class="options__card-img"
              /></picture>
            </div>
            <div class="options__card-content">
              <span class="options__card-variables">Ж/д</span>
              <div class="options__card-sending">
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/box.webp" type="image/webp" />
                    <img
                      src="/images/box.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">100 кг</span>
                </div>
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/calendar.webp" type="image/webp" />
                    <img
                      src="/images/calendar.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">30-40 дней </span>
                </div>
              </div>
              <div class="options__price">
                <span class="options__price-item1">от</span>
                <span class="options__price-item2">1</span>
                <span class="options__price-item3">$/кг</span>
              </div>
            </div>
            <a href="#" class="options__btn raschet_btn" tabindex="-1"
              >Оставить заявку</a
            >
          </swiper-slide>

          <swiper-slide>
            <div class="options__card-imgBl">
              <picture
                ><source
                  srcset="/images/29f7336700789e83318f2465c4aa08a5.jpg"
                  type="image/webp" />
                <img
                  src="/images/29f7336700789e83318f2465c4aa08a5.jpg"
                  alt="tir train"
                  class="options__card-img"
              /></picture>
            </div>
            <div class="options__card-content">
              <span class="options__card-variables">Авто</span>
              <div class="options__card-sending">
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/box.webp" type="image/webp" />
                    <img
                      src="/images/box.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">50кг</span>
                </div>
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/calendar.webp" type="image/webp" />
                    <img
                      src="/images/calendar.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">25-30 дней</span>
                </div>
              </div>
              <div class="options__price">
                <span class="options__price-item1">от</span>
                <span class="options__price-item2">1.5</span>
                <span class="options__price-item3">$/кг</span>
              </div>
            </div>
            <a href="#" class="options__btn raschet_btn" tabindex="-1"
              >Оставить заявку</a
            >
          </swiper-slide>

          <swiper-slide>
            <div class="options__card-imgBl">
              <picture
                ><source
                  srcset="/images/4f23375e7dc8f42fe65572816459ed79.jpg"
                  type="image/webp" />
                <img
                  src="/images/4f23375e7dc8f42fe65572816459ed79.jpg"
                  alt="tir train"
                  class="options__card-img"
              /></picture>
            </div>
            <div class="options__card-content">
              <span class="options__card-variables">Авиа</span>
              <div class="options__card-sending">
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/box.webp" type="image/webp" />
                    <img
                      src="/images/box.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">20 кг</span>
                </div>
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/calendar.webp" type="image/webp" />
                    <img
                      src="/images/calendar.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">7 дней</span>
                </div>
              </div>
              <div class="options__price">
                <span class="options__price-item1">от</span>
                <span class="options__price-item2">7</span>
                <span class="options__price-item3">$/кг</span>
              </div>
            </div>
            <a href="#" class="options__btn raschet_btn" tabindex="-1"
              >Оставить заявку</a
            >
          </swiper-slide>

          <swiper-slide>
            <div class="options__card-imgBl">
              <picture
                ><source
                  srcset="/images/9101490d48bba1e2cfb6fbf70e2f8e29.jpg"
                  type="image/webp" />
                <img
                  src="/images/9101490d48bba1e2cfb6fbf70e2f8e29.jpg"
                  alt="tir train"
                  class="options__card-img"
              /></picture>
            </div>
            <div class="options__card-content">
              <span class="options__card-variables">Авто экспресс</span>
              <div class="options__card-sending">
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/box.webp" type="image/webp" />
                    <img
                      src="/images/box.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">20кг</span>
                </div>
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/calendar.webp" type="image/webp" />
                    <img
                      src="/images/calendar.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">15-25 дней</span>
                </div>
              </div>
              <div class="options__price">
                <span class="options__price-item1">от</span>
                <span class="options__price-item2">2</span>
                <span class="options__price-item3">$/кг</span>
              </div>
            </div>
            <a href="#" class="options__btn raschet_btn" tabindex="0"
              >Оставить заявку</a
            >
          </swiper-slide>

          <swiper-slide>
            <div class="options__card-imgBl">
              <picture
                ><source
                  srcset="/images/f0bee3ebcc0c70213138210007d1cbea.jpg"
                  type="image/webp" />
                <img
                  src="/images/f0bee3ebcc0c70213138210007d1cbea.jpg"
                  alt="tir train"
                  class="options__card-img"
              /></picture>
            </div>
            <div class="options__card-content">
              <span class="options__card-variables">Ж/д</span>
              <div class="options__card-sending">
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/box.webp" type="image/webp" />
                    <img
                      src="/images/box.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">100 кг</span>
                </div>
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/calendar.webp" type="image/webp" />
                    <img
                      src="/images/calendar.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">30-40 дней </span>
                </div>
              </div>
              <div class="options__price">
                <span class="options__price-item1">от</span>
                <span class="options__price-item2">1</span>
                <span class="options__price-item3">$/кг</span>
              </div>
            </div>
            <a href="#" class="options__btn raschet_btn" tabindex="0"
              >Оставить заявку</a
            >
          </swiper-slide>

          <swiper-slide>
            <div class="options__card-imgBl">
              <picture
                ><source
                  srcset="/images/29f7336700789e83318f2465c4aa08a5.jpg"
                  type="image/webp" />
                <img
                  src="/images/29f7336700789e83318f2465c4aa08a5.jpg"
                  alt="tir train"
                  class="options__card-img"
              /></picture>
            </div>
            <div class="options__card-content">
              <span class="options__card-variables">Авто</span>
              <div class="options__card-sending">
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/box.webp" type="image/webp" />
                    <img
                      src="/images/box.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">50кг</span>
                </div>
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/calendar.webp" type="image/webp" />
                    <img
                      src="/images/calendar.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">25-30 дней</span>
                </div>
              </div>
              <div class="options__price">
                <span class="options__price-item1">от</span>
                <span class="options__price-item2">1.5</span>
                <span class="options__price-item3">$/кг</span>
              </div>
            </div>
            <a href="#" class="options__btn raschet_btn" tabindex="0"
              >Оставить заявку</a
            >
          </swiper-slide>

          <swiper-slide>
            <div class="options__card-imgBl">
              <picture
                ><source
                  srcset="/images/4f23375e7dc8f42fe65572816459ed79.jpg"
                  type="image/webp" />
                <img
                  src="/images/4f23375e7dc8f42fe65572816459ed79.jpg"
                  alt="tir train"
                  class="options__card-img"
              /></picture>
            </div>
            <div class="options__card-content">
              <span class="options__card-variables">Авиа</span>
              <div class="options__card-sending">
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/box.webp" type="image/webp" />
                    <img
                      src="/images/box.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">20 кг</span>
                </div>
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/calendar.webp" type="image/webp" />
                    <img
                      src="/images/calendar.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">7 дней</span>
                </div>
              </div>
              <div class="options__price">
                <span class="options__price-item1">от</span>
                <span class="options__price-item2">7</span>
                <span class="options__price-item3">$/кг</span>
              </div>
            </div>
            <a href="#" class="options__btn raschet_btn" tabindex="-1"
              >Оставить заявку</a
            >
          </swiper-slide>

          <swiper-slide>
            <div class="options__card-imgBl">
              <picture
                ><source
                  srcset="/images/9101490d48bba1e2cfb6fbf70e2f8e29.jpg"
                  type="image/webp" />
                <img
                  src="/images/9101490d48bba1e2cfb6fbf70e2f8e29.jpg"
                  alt="tir train"
                  class="options__card-img"
              /></picture>
            </div>
            <div class="options__card-content">
              <span class="options__card-variables">Авто экспресс</span>
              <div class="options__card-sending">
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/box.webp" type="image/webp" />
                    <img
                      src="/images/box.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">20кг</span>
                </div>
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/calendar.webp" type="image/webp" />
                    <img
                      src="/images/calendar.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">15-25 дней</span>
                </div>
              </div>
              <div class="options__price">
                <span class="options__price-item1">от</span>
                <span class="options__price-item2">2</span>
                <span class="options__price-item3">$/кг</span>
              </div>
            </div>
            <a href="#" class="options__btn raschet_btn" tabindex="-1"
              >Оставить заявку</a
            >
          </swiper-slide>

          <swiper-slide>
            <div class="options__card-imgBl">
              <picture
                ><source
                  srcset="/images/f0bee3ebcc0c70213138210007d1cbea.jpg"
                  type="image/webp" />
                <img
                  src="/images/f0bee3ebcc0c70213138210007d1cbea.jpg"
                  alt="tir train"
                  class="options__card-img"
              /></picture>
            </div>
            <div class="options__card-content">
              <span class="options__card-variables">Ж/д</span>
              <div class="options__card-sending">
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/box.webp" type="image/webp" />
                    <img
                      src="/images/box.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">100 кг</span>
                </div>
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/calendar.webp" type="image/webp" />
                    <img
                      src="/images/calendar.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">30-40 дней </span>
                </div>
              </div>
              <div class="options__price">
                <span class="options__price-item1">от</span>
                <span class="options__price-item2">1</span>
                <span class="options__price-item3">$/кг</span>
              </div>
            </div>
            <a href="#" class="options__btn raschet_btn" tabindex="-1"
              >Оставить заявку</a
            >
          </swiper-slide>

          <swiper-slide>
            <div class="options__card-imgBl">
              <picture
                ><source
                  srcset="/images/29f7336700789e83318f2465c4aa08a5.jpg"
                  type="image/webp" />
                <img
                  src="/images/29f7336700789e83318f2465c4aa08a5.jpg"
                  alt="tir train"
                  class="options__card-img"
              /></picture>
            </div>
            <div class="options__card-content">
              <span class="options__card-variables">Авто</span>
              <div class="options__card-sending">
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/box.webp" type="image/webp" />
                    <img
                      src="/images/box.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">50кг</span>
                </div>
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/calendar.webp" type="image/webp" />
                    <img
                      src="/images/calendar.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">25-30 дней</span>
                </div>
              </div>
              <div class="options__price">
                <span class="options__price-item1">от</span>
                <span class="options__price-item2">1.5</span>
                <span class="options__price-item3">$/кг</span>
              </div>
            </div>
            <a href="#" class="options__btn raschet_btn" tabindex="-1"
              >Оставить заявку</a
            >
          </swiper-slide>

          <swiper-slide>
            <div class="options__card-imgBl">
              <picture
                ><source
                  srcset="/images/4f23375e7dc8f42fe65572816459ed79.jpg"
                  type="image/webp" />
                <img
                  src="/images/4f23375e7dc8f42fe65572816459ed79.jpg"
                  alt="tir train"
                  class="options__card-img"
              /></picture>
            </div>
            <div class="options__card-content">
              <span class="options__card-variables">Авиа</span>
              <div class="options__card-sending">
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/box.webp" type="image/webp" />
                    <img
                      src="/images/box.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">20 кг</span>
                </div>
                <div class="options__sending-row">
                  <picture
                    ><source srcset="/images/calendar.webp" type="image/webp" />
                    <img
                      src="/images/calendar.webp"
                      alt="ico"
                      class="options__sending-item1"
                  /></picture>
                  <span class="options__sending-item2">от</span>
                  <span class="options__sending-item3">7 дней</span>
                </div>
              </div>
              <div class="options__price">
                <span class="options__price-item1">от</span>
                <span class="options__price-item2">7</span>
                <span class="options__price-item3">$/кг</span>
              </div>
            </div>
            <a href="#" class="options__btn raschet_btn" tabindex="-1"
              >Оставить заявку</a
            >
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <section class="order" style="background-image: url(/images/order-bg.jpg)">
    <div class="container">
      <div class="order__wrapper">
        <h2 class="order__title">
          Не знаете какой вариант доставки вам подходит ?
        </h2>
        <p class="order__subtitle">
          Опытный логист подберёт для вас оптимальный вариант доставки вашего
          груза из Китая в Россию
        </p>
        <a href="" class="order__btn main-btn raschet_btn"
          >Получить консультацию</a
        >
      </div>
    </div>
  </section>

  <section class="services">
    <div class="container">
      <div class="services__wrapper">
        <h2 class="services__title title-block">Дополнительные услуги</h2>
        <div class="services__inner">
          <button
            ref="prev"
            class="swiper-button-prev slick-prev slick-arrow"
          ></button>
          <swiper
            class="services-slider"
            :modules="[Navigation]"
            :navigation="{ prevEl: prev, nextEl: next }"
            :loop="true"
            :slides-per-view="auto"
            :space-between="30"
          >
            <swiper-slide class="services__card">
              <picture
                ><source
                  srcset="/images/630bc2ebc069ac20a0f7a22700c1aca0.jpg"
                  type="image/webp" />
                <img
                  src="/images/630bc2ebc069ac20a0f7a22700c1aca0.jpg"
                  alt="cargo insurance"
                  class="services__card-img" /></picture
              ><a
                href="/msk/services/arenda-sklada/"
                class="services__link"
                tabindex="0"
                >Аренда склада</a
              >
            </swiper-slide>
            <swiper-slide class="services__card">
              <picture
                ><source
                  srcset="/images/5651fc0a295e02a481f9a31b33812501.jpg"
                  type="image/webp" />
                <img
                  src="/images/5651fc0a295e02a481f9a31b33812501.jpg"
                  alt="cargo insurance"
                  class="services__card-img" /></picture
              ><a
                href="/msk/services/poisk-postavshchika-v-kitae/"
                class="services__link"
                tabindex="0"
                >Поиск поставщика в Китае</a
              >
            </swiper-slide>
            <swiper-slide class="services__card">
              <picture
                ><source
                  srcset="/images/3f213dd6e70e6c689f44acdeba838f80.jpg"
                  type="image/webp" />
                <img
                  src="/images/3f213dd6e70e6c689f44acdeba838f80.jpg"
                  alt="cargo insurance"
                  class="services__card-img" /></picture
              ><a
                href="/msk/services/strakhovanie-gruza/"
                class="services__link"
                tabindex="0"
                >Страхование груза</a
              >
            </swiper-slide>
            <swiper-slide class="services__card">
              <picture
                ><source
                  srcset="/images/523bad58a866bbca0427bac458c2c21a.jpg"
                  type="image/webp" />
                <img
                  src="/images/523bad58a866bbca0427bac458c2c21a.jpg"
                  alt="cargo insurance"
                  class="services__card-img" /></picture
              ><a
                href="/msk/services/inspektsiya-fabriki-postavshchika/"
                class="services__link"
                tabindex="-1"
                >Инспекция фабрики поставщика</a
              >
            </swiper-slide>
            <swiper-slide class="services__card">
              <picture
                ><source
                  srcset="/images/07b3a1a51bfacce185259f13e2b202d4.gif"
                  type="image/webp" />
                <img
                  src="/images/07b3a1a51bfacce185259f13e2b202d4.gif"
                  alt="cargo insurance"
                  class="services__card-img" /></picture
              ><a
                href="/msk/services/vykup-tovara-s-alibaba/"
                class="services__link"
                tabindex="-1"
                >Выкуп товара с Алибаба</a
              >
            </swiper-slide>
            <swiper-slide class="services__card">
              <picture
                ><source
                  srcset="/images/9a035b92600dc8b5e64f92a5d179069c.jpg"
                  type="image/webp" />
                <img
                  src="/images/9a035b92600dc8b5e64f92a5d179069c.jpg"
                  alt="cargo insurance"
                  class="services__card-img" /></picture
              ><a
                href="/msk/services/vykup-tovara-s-taobao/"
                class="services__link"
                tabindex="-1"
                >Выкуп товара с Таобао</a
              >
            </swiper-slide>
            <swiper-slide class="services__card">
              <picture
                ><source
                  srcset="/images/5066a0fdd53706c4ae9a4e1913aa0788.jpg"
                  type="image/webp" />
                <img
                  src="/images/5066a0fdd53706c4ae9a4e1913aa0788.jpg"
                  alt="cargo insurance"
                  class="services__card-img" /></picture
              ><a
                href="/msk/services/upakovka-gruza/"
                class="services__link"
                tabindex="-1"
                >Упаковка груза</a
              >
            </swiper-slide>
            <swiper-slide class="services__card">
              <picture
                ><source
                  srcset="/images/a84d86c1480087e7b2a939d574ac989e.jpg"
                  type="image/webp" />
                <img
                  src="/images/a84d86c1480087e7b2a939d574ac989e.jpg"
                  alt="cargo insurance"
                  class="services__card-img" /></picture
              ><a
                href="/msk/services/posrednik-taobao/"
                class="services__link"
                tabindex="-1"
                >Посредник ТаоБао</a
              >
            </swiper-slide>
            <swiper-slide class="services__card">
              <picture
                ><source
                  srcset="/images/a71816c9a9e3b9e4d06cfb8562113d9e.jpg"
                  type="image/webp" />
                <img
                  src="/images/a71816c9a9e3b9e4d06cfb8562113d9e.jpg"
                  alt="cargo insurance"
                  class="services__card-img" /></picture
              ><a
                href="/msk/services/proizvodstvo-tovara-pod-svoim-brendom-v-kitae/"
                class="services__link"
                tabindex="-1"
                >Производство товара под своим брендом в Китае</a
              >
            </swiper-slide>
          </swiper>
          <button
            ref="next"
            class="swiper-button-next slick-next slick-arrow"
          ></button>
        </div>
        <div class="services__content">
          <div class="services__column-left">
            <div class="services__left-text">
              <h2 class="services__left-title">
                Азия Карго - Карго Китай-Россия, доставка грузов из Китая в
                Россию
              </h2>
              <p class="services__left-subtitle">
                Компания Азия Карго - это полный комплекс логистических услуг по
                доставке грузов из Китая в Россию - сборные грузы и цельные
                товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия.
                Для вашего удобства есть тарифы на лёгкий и тяжелый куб. Мы
                работаем на рынке более 5 лет, а руководители компании
                занимаются логистикой уже более 11 лет. Мы стремимся
                предоставить лучшие условия доставки и лучший сервис своим
                клиентам. Выбирая нас - вы выбираете качественную доставку
                оптимальную по цене и времени! Убедитесь в этом сами!
              </p>
            </div>
            <div class="services__left-numbers">
              <div class="services__numbers-card">
                <span class="services__numbers-number">1 817</span>
                <span class="services__numbers-text"
                  >Ежедневно доставляем грузов</span
                >
              </div>
              <div class="services__numbers-card">
                <span class="services__numbers-number">0</span>
                <span class="services__numbers-text">Грузов потеряно</span>
              </div>
              <div class="services__numbers-card">
                <span class="services__numbers-number">1 216</span>
                <span class="services__numbers-text">Клиентов обслужено</span>
              </div>
            </div>
          </div>
          <div class="services__column-right">
            <h2 class="services__right-title">География доставки</h2>
            <div class="services__right-wrap">
              <ul class="services__right-list">
                <li class="services__right-item">Москва</li>
                <li class="services__right-item">Санкт-Петербург</li>
                <li class="services__right-item">Новосибирск</li>
                <li class="services__right-item">Челябинск</li>
                <li class="services__right-item">Омск</li>
                <li class="services__right-item">Самара</li>
              </ul>
              <ul class="services__right-list">
                <li class="services__right-item">Ростов-на-Дону</li>
                <li class="services__right-item">Красноярск</li>
                <li class="services__right-item">Волгоград</li>
                <li class="services__right-item">Екатиринбург</li>
                <li class="services__right-item">Нижний Новгород</li>
                <li class="services__right-item">Казань</li>
              </ul>
            </div>
            <a href="#" class="services__right-link"
              >Все города доставки и адреса терминалов..</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="questions">
    <div class="container">
      <div class="questions__wrapper">
        <div class="questions__column-left">
          <h2 class="title-block questions__title">Часто задаваемые вопросы</h2>
          <div class="questions__accardeon">
            <div class="questions__tab">
              <input type="radio" id="tab1" name="tab-group" />
              <label for="tab1" class="questions__tab-title"
                >Как рассчитывается стоимость доставки?</label
              >
              <p class="questions__tab-content">
                Стоимость зависит от объема, веса и способа доставки.
              </p>
            </div>
            <div class="questions__tab">
              <input type="radio" id="tab2" name="tab-group" />
              <label for="tab2" class="questions__tab-title"
                >Как происходит оплата за доставку груза?</label
              >
              <p class="questions__tab-content">
                После уточнения всех параметров мы выставим вам счёт, и вы
                сможет его оплатить любым удобным способом.
              </p>
            </div>
            <div class="questions__tab">
              <input type="radio" id="tab3" name="tab-group" />
              <label for="tab3" class="questions__tab-title"
                >Как быстро оформить заказ на доставку из Китая в Россию?</label
              >
              <p class="questions__tab-content">
                Напишите нам в мессенджер параметры груза и мы подберем для вам
                оптимальный вариант доставки из Китая в Россию.
              </p>
            </div>
            <div class="questions__tab">
              <input type="radio" id="tab4" name="tab-group" />
              <label for="tab4" class="questions__tab-title"
                >Можно ли через вас оплатить товар поставщику?</label
              >
              <p class="questions__tab-content">
                Да, мы предоставляем такую услугу, мы можем взять оплату товара
                в Китае на себя. Если у вас нет валютного счёта, то можете
                оплатить товар в рублях на наш счет в России.
              </p>
            </div>
            <div class="questions__tab">
              <input type="radio" id="tab5" name="tab-group" />
              <label for="tab5" class="questions__tab-title"
                >В чём особенность КАРГО доставки из Китая</label
              >
              <p class="questions__tab-content">
                Карго доставка является комплексом услуг, которые также включает
                логистику, таможенное оформление, консолидацию и хранение. Карго
                позволит вам заказать практически любые товары из Китая и не
                беспокоиться о таможенном оформлении.
              </p>
            </div>
            <div class="questions__tab">
              <input type="radio" id="tab6" name="tab-group" />
              <label for="tab6" class="questions__tab-title"
                >Какой срок доставки из Китая?</label
              >
              <p class="questions__tab-content">
                Время доставки зависит от многих факторов. В среднем от 15 до 40
                дней. На срок могут повлиять выбор транспортного средства (авиа,
                авто, жд и тд.), праздники, загруженность пунктов пропуска
                таможни.
              </p>
            </div>
            <div class="questions__tab">
              <input type="radio" id="tab7" name="tab-group" />
              <label for="tab7" class="questions__tab-title"
                >Какой процент за выкуп товара с ТаоБао?</label
              >
              <p class="questions__tab-content">
                Комиссия за выкуп составляет от 0% до 3%. Точные условия
                уточняйте у наших менеджеров.
              </p>
            </div>
          </div>
        </div>
        <div class="questions__column-right">
          <div class="questions__right-wrapper">
            <h2 class="questions__right-title">Остались вопросы ?</h2>
            <p class="questions__right-subtitle">
              Оставьте заявку и наш менеджер ответит вам в ближайшее время
            </p>
            <form action="" class="questions__right-form" @submit.prevent>
              <input type="text" value="" style="display: none" />
              <input
                v-if="
                  formQuestions.name.length === 0
                    ? (errors.name = true)
                    : (errors.name = false)
                "
                type="text"
                required=""
                class="questions__form-inp"
                :class="{ err: errors.name }"
                placeholder="Имя *"
                v-model="formQuestions.name"
              />
              <input
                v-if="
                  !validatePhone(formQuestions.phone)
                    ? (errors.phone = true)
                    : (errors.phone = false)
                "
                type="tel"
                data-rule="tel"
                required=""
                class="questions__form-inp"
                :class="{ err: errors.phone }"
                placeholder="Телефон *"
                v-model="formQuestions.phone"
              />
              <input
              v-if="
                  !validatePhone(formQuestions.email)
                    ? (errors.email = true)
                    : (errors.email = false)
                "
                type="email"
                required=""
                class="questions__form-inp"
                :class="{ err: errors.email }"
                placeholder="e-mail почта"
                v-model="formQuestions.email"
              />
              <textarea
                v-if="
                  formQuestions.question.length === 0
                    ? (errors.question = true)
                    : (errors.question = false)
                "
                class="questions__form-inp"
                :class="{ err: errors.question }"
                rows="4"
                placeholder="Ваш вопрос"
                v-model="formQuestions.question"
              ></textarea>
              <div class="personal-data__wrap">
                <label>
                  <input
                    type="checkbox"
                    id="personal-data__que"
                    checked=""
                  /><span style="font-size: 15px"
                    >Я согласен на обработку
                    <a href="/krasnodar/personal-data/"
                      >персональных данных</a
                    ></span
                  >
                </label>
              </div>
              <button class="questions__form-btn main-btn">
                Отправить вопрос
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="seo_block"
    style="
      border-bottom: 1px solid #ececec;
      padding-top: 20px;
      padding-bottom: 20px;
    "
  >
    <div class="container">
      <p class="services__left-subtitle"></p>
      <h1>Грузоперевозки из Китая в Москву.</h1>
      <p>
        Компания « Азия Карго» работает с грузоперевозками уже более 4 лет. За
        время нашей работы созданы эффективные логистические схемы, используются
        только максимально удобные методы транспортировки из Китая в Москву, а
        так же в другие регионы страны. Мы всегда следим за ситуацией на таможне
        и строим маршруты с учётом эпидемиологической обстановки для оптимизации
        сроков поставки.
      </p>
      <h2>Хотите заказать грузоперевозку из Китая в Россию?</h2>
      <p>
        Тогда воспользуйтесь нашими услугами, мы предлагаем быструю и
        качественную доставка по оптимальной цене.
      </p>
      <p>
        «Азия Карго» - это перевозка и доставка груза из Китая в Москве, а также
        и в другие города страны.
      </p>
      <p>
        Наша задача помочь малому и среднему бизнесу с помощью быстрой и
        недорогой доставки товаров и оборудования из Китая. Наш опыт позволяет
        договариваться о выгодных условиях поставки с продавцами и заводами в
        Китае. После отправки на центральный склад в России, мы можем отправить
        ваш груз в Москву, а также в другие регионы России.
      </p>
      <h2>КАРГО из Китая в Россию</h2>
      Если у вас небольшие партии, то КАРГО&nbsp;- это лучшее решение. Мы
      доставим весь ваш товар под ключ. Мы сами оформим все документы и проведем
      переговоры с продавцами, вам нужно будет только забрать товар в России.
      Доставка из Китая КАРГО&nbsp;наилучшим образом подходит, когда вы
      самостоятельно не можете оформить сертификаты на продукцию и другие
      документы. При этом
      <b
        >цена на КАРГО выходит порой выгоднее обычного таможенного
        оформления.</b
      >
      КАРГО доставка из Китая в Москву - одна из ключевых наших
      специализаций.<br />
      <br />
      <h2>Доставка грузов из Китая</h2>
      <p>
        Наш принцип работы - это сделать процесс доставки максимально удобным и
        понятным. Мы можем взять на себя всю бумажную волокиту и все вопросы
        связанные с таможней. Доставляя груз из Китая в Россию, мы используем
        деловые связи с международными партнёрами и благодаря этому весь процесс
        доставки максимально оптимизирован.
      </p>
      Мы ставим в приоритет сохранность вашего груза при транспортировке и
      соблюдения сроков доставки.
      <p></p>
      <h2>Почему Азия Карго?</h2>
      <ul>
        <li>
          «Азия Карго» транспортная компания с отличной репутацией, мы стремимся
          оказать лучший сервис - всегда на связи, находит оптимальные и
          взаимовыгодные варианты сотрудничества.
        </li>
        <li>Доставляем любыми видами транспорта.</li>
        <li>
          У нас есть свои отработанные схемы по перевозкам, что минимизирует
          транспортные расходы.
        </li>
        <li>
          Наши менеджеры отслеживают товар из Китая на протяжении всего маршрута
          до конечной точки прибытия.
        </li>
      </ul>
      <p>
        <b
          >Мы предоставляем услуги, которые может получить каждый наш клиент
          :</b
        >
      </p>
      <ul>
        <li>Конфиденциальность.</li>
        <li>КАРГО переводзки по выгодной цене.</li>
        <li>Контейнерные грузоперевозки.</li>
        <li>Сборные грузы из Китая в Россию.</li>
        <li>Доставка из Китая цельных товарных партий.</li>
        <li>Индивидуальный расчет вашего заказа.</li>
        <li>Доставка в Россию без лишних международных договоров.</li>
        <li>Таможенном оформление груза.</li>
        <li>
          Возьмем на себя поиск поставщиков, а также контроль качества товара.
        </li>
        <li>Возможность отслеживать груз в любое время.</li>
        <li>
          Упаковка, переупаковка, паллетирование груза к международной
          перевозке.
        </li>
        <li>Помощь в проведении переговоров с заводами.</li>
        <li>По вашему запросу выезд на фабрику, инспекция товара.</li>
        <li>Оценка надежности продавцов в Китае.&nbsp;</li>
        <li>Ответственное хранение груза.</li>
        <li>Помощь в оплате товара.</li>
        <li>
          Юридическое сопровождение и защита интересов наших клиентов в спорных
          ситуациях с заводами и фабриками.
        </li>
        <li>Для постоянных клиентов есть рассрочка платежей за товар.</li>
        <li>Заказ груза не только в Москве, но и в другие регионы России.</li>
      </ul>
      <h2>Нужна консультация или расчёт стоимости доставки груза из Китая?</h2>
      <span
        >По любым вопросам пишите нам сразу в мессенджеры
        вайбер/вацап/телеграм</span
      >
      <a href="tel:+7(964)546-83-68">+7(964)546-83-68</a
      ><span>(Иркутское время, +5 к МСК).</span>
      <p></p>
    </div>
  </section>
</template>

<style>
.promo-swiper {
  width: 100%;
  height: 100%;
}

.slider-item__wrapper {
  min-height: 450px;
  margin-top: 80px;
  padding-bottom: 80px;
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

.slider-item__title {
  font-family: "Montserrat-ExtraBold";
  line-height: 1.2;
  font-size: 58px;
  color: #fff;
  max-width: 50%;
  margin-bottom: 20px;
}

.slider-item__subtitle {
  color: #fff;
  font-size: 22px;
  line-height: 1.8;
  max-width: 70%;
  margin-bottom: 45px;
}
.promo-swiper .swiper-slide {
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
}

.promo-swiper .swiper-pagination {
  display: flex;
  gap: 0 20px;
  padding-left: calc((100% - 1280px) / 2);
  bottom: 8%;
}

.promo-swiper .swiper-wrapper {
  max-height: 530px;
}

.promo-bullet {
  width: 45px;
  height: 4px;
  margin: 10px;
  background-color: #f0f0f0;
  display: block;
  cursor: pointer;
}

.promo-bullet.promo-bullet-active {
  position: relative;
}

.promo-bullet.promo-bullet-active::before {
  top: 0;
  left: 0;
  position: absolute;
  content: "";
  height: 100%;
  background-color: #ffb900;
  -webkit-animation: wid 6s linear 1;
  animation: wid 6s linear 1;
}

.slider-soft {
  display: inline-block;
  z-index: 1000;
  bottom: 110px;
  left: 50%;
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  transform: translate(-50%);
  position: absolute;
  width: 1280px;
}

@-webkit-keyframes wid {
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
}

@keyframes wid {
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
}

.slider-item__arrow-img {
  -webkit-animation: top-down 1.8s infinite ease;
  animation: top-down 1.8s infinite ease;
}

@-webkit-keyframes top-down {
  from {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  to {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
  }
}

@keyframes top-down {
  from {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  to {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
  }
}

.slider-item__arrow {
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 50px;
  bottom: 0;
  position: absolute;
  -ms-flex-item-align: center;
  align-self: center;
}

.main-btn {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  border-radius: 7px;
  font-family: "Montserrat-SemiBold";
  color: #fff;
  padding: 15px 70px 15px 30px;
  background-color: #ffb900;
  background-image: url(/images/arrow-btn.webp);
  background-repeat: no-repeat;
  background-position: 95% center;
}

.main-btn:hover {
  background-position: 98% center;
}

.main-btn {
  overflow: hidden;
  cursor: pointer;
}

.info__wrapper {
  margin: 30px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.info__card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 33.333%;
  flex: 0 1 33.333%;
}

.info__img-bl {
  margin-right: 15px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.info__text {
  line-height: 2;
  font-size: 16px;
  max-width: 60%;
  font-family: "Montserrat-Medium";
}

.calc {
  background-color: #f7f7f7;
}

.calc::before {
  display: block;
  content: "";
  height: 200px;
  margin: -200px 0 0 0;
}

.calc__wrapper {
  margin-top: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 150px;
}

.calc__cost {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
}

.calc__step2.disabled {
  display: none;
}

.calc__step1.disabled {
  display: none;
}

.calc__step1 {
  max-width: none;
}

.calc__cost-title {
  max-width: 90%;
  font-size: 34px;
  font-family: "Montserrat-Bold";
}

.calc__check-wrap {
  margin: 30px 0 40px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.calc__check {
  color: #fff;
  font-family: "Montserrat-Bold";
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #e1e1e1;
  width: 50px;
  height: 50px;
  border-radius: 7px;
}

.calc__check:not(:first-child) {
  margin-left: 100px;
}

.calc__check:not(:first-child)::after {
  content: "";
  top: 50%;
  left: -170%;
  position: absolute;
  width: 70px;
  height: 2px;
  background-color: #e1e1e1;
}

.calc__check:last-child {
  background-image: url(/images/confirm.webp);
  background-repeat: no-repeat;
  background-position: center;
}

.calc__check.check_active {
  border: 1px solid #fff;
  background-color: #ffb900;
}

.calc__step3.active {
  display: block;
}

.calc__step2.active {
  display: block;
}

.calc__inp-wrap-wrap :first-child {
  margin-right: 30px;
}

.calc__inp-wrapp {
  margin-bottom: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
}

.calc__inp-wrapp::before {
  position: absolute;
  left: 48.5%;
  top: 30px;
  height: 20px;
  width: 20px;
  background-image: url(/images/arrow-inp.webp);
  background-repeat: no-repeat;
  background-position: center;
}

input:valid {
  border-right: 7px solid #f40000;
}

input:valid {
  border-right: 7px solid #26de81;
}

input:focus:valid {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  border-right: 7px solid #26de81;
}

input:focus:invalid {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  border-right: 7px solid #f40000;
}

input:focus:required:valid {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  border-right: 7px solid #26de81;
}

input:focus:required:invalid {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  border-right: 7px solid #f40000;
}

.calc__step2-comment {
  min-width: 492px;
  margin: 15px 0;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 100%;
  flex: 0 1 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 10px 2px rgba(201, 201, 201, 0.62);
  box-shadow: 0 0 10px 2px rgba(201, 201, 201, 0.62);
  padding: 20px 25px;
}

.calc__step2-comment::-webkit-input-placeholder {
  font-family: "Montserrat-Regular";
  color: #999;
}

.calc__step2-comment::-moz-placeholder {
  font-family: "Montserrat-Regular";
  color: #999;
}

.calc__step2-comment:-ms-input-placeholder {
  font-family: "Montserrat-Regular";
  color: #999;
}

.calc__step2-comment::-ms-input-placeholder {
  font-family: "Montserrat-Regular";
  color: #999;
}

.calc__step2-comment::placeholder {
  font-family: "Montserrat-Regular";
  color: #999;
}

.calc-inp {
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 10px 2px rgba(201, 201, 201, 0.62);
  box-shadow: 0 0 10px 2px rgba(201, 201, 201, 0.62);
  margin-top: 20px;
  max-width: 250px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40%;
  flex: 0 0 40%;
  background-color: #fff;
  padding: 20px 25px;
}

.calc-inp::-webkit-input-placeholder {
  color: #999;
}

.calc-inp::-moz-placeholder {
  color: #999;
}

.calc-inp:-ms-input-placeholder {
  color: #999;
}

.calc-inp::-ms-input-placeholder {
  color: #999;
}

.calc-inp::placeholder {
  color: #999;
}

.calc-varning {
  margin-left: 25px;
  color: red;
  letter-spacing: normal;
  font-size: 16px;
  display: none;
}

.varning {
  display: inline;
}

.calc__step2 {
  color: #fff;
  display: none;
}

.calc__step2 .calc-inp {
  max-width: 230px;
}

.calc__step2 .calc__inp-wrapp {
  max-width: 80%;
  margin-bottom: 25px;
}

.calc__step3 {
  display: none;
}

.calc__step3-wrapper {
  border-radius: 10px;
  -webkit-box-shadow: 0 0 10px 1px #c9c9c9;
  box-shadow: 0 0 10px 1px #c9c9c9;
  max-width: 100%;
  background-color: #fff;
  padding: 20px 10px 30px 50px;
}

.calc__step3-text {
  max-width: 90%;
  font-size: 20px;
  font-family: "Montserrat-Bold";
  position: relative;
}

.calc__step3-text::after {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  left: -50px;
  background-image: url(../images/tick.webp);
  background-repeat: no-repeat;
  background-position: center;
}

.calc__step3-subtext {
  font-family: "Montserrat-Medium";
  display: block;
  margin-top: 40px;
}

.calc__step3-list {
  padding-left: 20px;
}

.calc__step3-item {
  color: #ffb900;
  list-style: disc;
}

.calc__step3-link {
  font-size: 14px;
  color: #999;
  font-family: "Montserrat-Light";
  display: inline-block;
  margin-top: 8px;
}

.calc__imgBl {
  position: absolute;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  top: 50%;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 40%;
  flex: 0 1 40%;
}

.calc__inp-wrap-wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.calc__step1 {
  min-height: 300px;
}
.calc__step2 {
  min-height: 300px;
}
.calc__step3 {
  min-height: 300px;
}
.calc__inp-wrapp {
  height: 217px;
}
.calc__step2 .calc__inp-wrapp {
  height: 232px;
}
.calc__step3-wrapper {
  height: 300px;
}

.trust__wrapper {
  margin: 115px 0 60px;
}

.title-block {
  margin-bottom: 20px;
  font-family: "Montserrat-Bold";
  font-size: 32px;
  max-width: 70%;
}

.trust__cards {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.animation-left {
  -webkit-animation: animation-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: animation-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.trust__card {
  overflow: hidden;
  margin-top: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 50%;
  flex: 0 1 50%;
}

@-webkit-keyframes fadeInDown6 {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 6;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInDown6 {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 6;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInDown6 {
  -webkit-animation: fadeInDown6 0.5s ease 1s;
  animation: fadeInDown6 0.5s ease 1s;
}

@keyframes fadeInDown6 {
  0% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0) scale(0.7);
    transform: translateX(0) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

.fadeInDown5 {
  -webkit-animation: fadeInDown5 0.5s ease 0.8s;
  animation: fadeInDown5 0.5s ease 0.8s;
}

@-webkit-keyframes fadeInDown5 {
  0% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0) scale(0.7);
    transform: translateX(0) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeInDown5 {
  0% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0) scale(0.7);
    transform: translateX(0) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

.fadeInDown4 {
  -webkit-animation: fadeInDown4 0.5s ease 0.6s;
  animation: fadeInDown4 0.5s ease 0.6s;
}

@-webkit-keyframes fadeInDown4 {
  0% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0) scale(0.7);
    transform: translateX(0) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeInDown4 {
  0% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0) scale(0.7);
    transform: translateX(0) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

.fadeInDown3 {
  -webkit-animation: fadeInDown3 0.5s ease 0.6s;
  animation: fadeInDown3 0.5s ease 0.6s;
}

@-webkit-keyframes fadeInDown3 {
  0% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0) scale(0.7);
    transform: translateX(0) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeInDown3 {
  0% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0) scale(0.7);
    transform: translateX(0) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

.fadeInDown2 {
  -webkit-animation: fadeInDown2 0.5s ease 0.4s;
  animation: fadeInDown2 0.5s ease 0.4s;
}

@-webkit-keyframes fadeInDown2 {
  0% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0) scale(0.7);
    transform: translateX(0) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeInDown2 {
  0% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0) scale(0.7);
    transform: translateX(0) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

.fadeInDown1 {
  -webkit-animation: fadeInDown1 0.5s ease 0.2s;
  animation: fadeInDown1 0.5s ease 0.2s;
}

@-webkit-keyframes fadeInDown1 {
  0% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0) scale(0.7);
    transform: translateX(0) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeInDown1 {
  0% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0) scale(0.7);
    transform: translateX(0) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

.backInLeft {
  -webkit-animation-name: backInLeft;
  animation-name: backInLeft;
}

.trust__card-imgBl {
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  margin-right: 25px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30%;
  flex: 0 0 30%;
  border-radius: 10px;
}

.trust__card-imgBl picture {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.trust__card-img {
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  border-radius: 10px;
  height: 100%;
}

.trust__card-title {
  font-family: "Montserrat-Bold";
}

.trust__card-subtitle {
  line-height: 2;
  font-size: 15px;
  max-width: 80%;
  margin-top: 20px;
}

.options {
  background-color: #f7f7f7;
}

.options__title {
  margin: 50px 0;
}

.options__wrapper {
  margin-bottom: 50px;
  padding: 0 50px;
}

.options-swiper .swiper-slide {
  border-radius: 10px;
  overflow: hidden;
  max-width: 359px;
  margin-right: 25px;
}

.options__card-img {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.options__card-content {
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
  padding: 25px;
}

.options__card-variables {
  font-size: 18.8px;
  font-family: "Montserrat-Medium";
  margin: 20px 0;
}

.options__sending-row {
  margin: 15px 0;
}

.options__sending-item2 {
  margin-left: 7px;
  color: #707070;
}

.options__sending-item3 {
  font-size: 17px;
  font-family: "Montserrat-Medium";
  margin-left: 5px;
}

.options__price {
  margin: 30px 0 0 15px;
}

.options__price-item1 {
  font-size: 30px;
  color: #707070;
}

.options__price-item2 {
  font-family: "Montserrat-Medium";
  color: #000;
  font-size: 55px;
}

.options__price-item3 {
  font-family: "Montserrat-Medium";
  color: #000;
  font-size: 30px;
}

.options__btn {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  color: #fff;
  font-size: 18.8px;
  font-family: "Montserrat-Medium";
  padding: 15px;
  text-align: center;
  display: block;
  width: 100%;
  background-color: #ffbe2e;
}

.options__btn:hover {
  background-color: #fbca5f;
}

.options .slick-arrow {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.options .slick-arrow:hover {
  right: -5px !important;
}

.options .slick-arrow.slick-prev {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.options .slick-arrow.slick-prev:hover {
  left: -5px !important;
}

.options__card-content {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.options__card-content:hover {
  background-color: #fff;
}

.options .slick-arrow {
  cursor: pointer;
  z-index: 3;
  background-color: transparent;
  top: 50%;
  margin: -25px 0 0 0;
  position: absolute;
  font-size: 0;
  background-color: 0;
  width: 50px;
  height: 50px;
}

.options .slick-arrow.slick-prev {
  left: 0;
  background-image: url(../images/prev.png);
  background-repeat: no-repeat;
  background-position: center;
}

.options .slick-arrow.slick-prev:hover {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  background-image: url(../images/next.png);
}

.webp .options .slick-arrow.slick-prev {
  background-image: url(../images/prev.webp);
}

.webp .options .slick-arrow.slick-prev:hover {
  background-image: url(../images/next.webp);
}

.webp .options .slick-arrow.slick-next {
  background-image: url(../images/prev.webp);
}

.webp .options .slick-arrow.slick-next:hover {
  background-image: url(../images/next.webp);
}

.webp .order__btn.main-btn {
  background-image: url(../images/black-arrow.webp);
}

.options .slick-arrow.slick-next {
  right: 0;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  background-image: url(../images/prev.png);
  background-repeat: no-repeat;
  background-position: center;
}

.options .slick-arrow.slick-next:hover {
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  background-image: url(../images/next.png);
}

.order {
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
}

.order__wrapper {
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

.order__title {
  margin-top: 50px;
  margin-bottom: 30px;
  max-width: 50%;
  color: #fff;
  font-size: 40px;
  font-family: "Montserrat-Bold";
  line-height: 1.3;
}

.order__subtitle {
  font-family: "Montserrat-Medium";
  color: #fff;
  font-size: 20px;
  max-width: 50%;
  line-height: 1.7;
  margin-bottom: 40px;
}

.order__btn {
  background-color: #000;
  margin-bottom: 40px;
}

.order__btn.main-btn {
  background-image: url(../images/black-arrow.png);
}

.order__btn {
  background-color: #c52626;
}

.order__btn:hover {
  background-color: #000 !important;
}

.services-slider {
  max-width: 1160px;
}

.services__wrapper {
  margin-bottom: 70px;
}

.services__inner {
  padding: 0 30px;
}

.services__card {
  /* margin: 0 15px; */
  position: relative;
  max-width: 367px;
}

.services__link {
  line-height: normal;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  font-family: "Montserrat-Medium";
  color: #1d1d1d;
  padding: 5px 15px;
  background-color: #fff;
  border-radius: 0 5px 0 0;
  display: inline-block;
  font-size: 15px;
  left: 0;
  bottom: 0;
  position: absolute;
}

.services__link:hover {
  color: #ffb900;
}

.services__content {
  margin-top: 70px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.services__column-left {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 60%;
  flex: 0 1 60%;
}

.services__left-title {
  font-family: "Montserrat-Medium";
  margin-bottom: 40px;
  font-size: 17px;
}

.services__left-subtitle {
  max-width: 89%;
  font-size: 15px;
  line-height: 2;
}

.services__left-numbers {
  margin-top: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.services__numbers-card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 33.33%;
  -ms-flex: 33.33%;
  flex: 33.33%;
}

.services__numbers-number {
  font-size: 20px;
  font-family: "Montserrat-Bold";
}

.services__title {
  margin: 70px 0 30px;
}

.services__numbers-text {
  font-size: 17px;
  margin-top: 20px;
  max-width: 80%;
}

.services__column-right {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 40%;
  flex: 0 1 40%;
}

.services__right-title {
  font-family: "Montserrat-Medium";
  margin-bottom: 40px;
  font-size: 17px;
}

.services__right-wrap {
  max-width: 80%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.services__right-item {
  font-size: 15px;
  line-height: 2.2;
}

.services__right-link {
  font-size: 17px;
  display: inline-block;
  color: #5f95bf;
  margin-top: 35px;
  padding-right: 20px;
  background-image: url(../images/next-link.webp);
  background-repeat: no-repeat;
  background-position: right center;
}

.services__right-link:hover {
  text-decoration: underline;
}

.services .slick-arrow {
  cursor: pointer;
  z-index: 2;
  background-color: transparent;
  top: 18%;
  position: absolute;
  font-size: 0;
  width: 50px;
  height: 50px;
}

.services .slick-arrow {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.services .slick-arrow.slick-prev {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.services .slick-arrow.slick-prev:hover {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  background-image: url(../images/next.webp);
}

.services .slick-arrow.slick-prev {
  left: 0;
  background-image: url(../images/prev.webp);
  background-repeat: no-repeat;
  background-position: center;
}

.services .slick-arrow.slick-next {
  right: 0;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  background-image: url(../images/prev.webp);
  background-repeat: no-repeat;
  background-position: center;
}

.services .slick-arrow.slick-next:hover {
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  background-image: url(../images/next.webp);
}

.swiper-button-next:after,
.swiper-button-prev:after {
  content: unset;
}

.questions {
  background-color: #f7f7f7;
}

.questions__wrapper {
  margin: 30px 0 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.questions__column-left {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 50%;
  flex: 0 1 50%;
}

.questions__tab-title {
  position: relative;
  font-size: 17px;
  font-family: "Montserrat-Medium";
  display: inline-block;
  padding: 10px 40px 10px 100px;
  background-color: #fff;
  width: 100%;
}

.questions__tab-title::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  left: 30px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background-image: url(../images/tab-arrow.webp);
  background-repeat: no-repeat;
  background-position: center;
}

.questions__tab-content {
  padding: 10px 10px 10px 100px;
  max-width: 90%;
  font-family: "Montserrat-Light";
  color: #3c3c3c;
  font-size: 15px;
}

.questions__column-right {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 50%;
  flex: 0 1 50%;
}

.questions__title {
  margin-top: 70px;
  margin-bottom: 40px;
  max-width: none;
}

.questions__right-wrapper {
  padding: 50px;
  max-width: 80%;
  margin: 0 auto;
  border: 1px solid #e2e2e2;
}

.questions__right-title {
  font-size: 19px;
  margin-bottom: 20px;
  font-family: "Montserrat-Bold";
}

.questions__right-subtitle {
  font-family: "Montserrat-Light";
  font-size: 15px;
  line-height: 1.7;
}

.questions__form-inp {
  font-size: 16px;
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 10px 2px rgba(201, 201, 201, 0.62);
  box-shadow: 0 0 10px 2px rgba(201, 201, 201, 0.62);
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 25px;
}

.questions__form-inp::-webkit-input-placeholder {
  font-family: "Montserrat-Regular";
}

.questions__form-inp::-moz-placeholder {
  font-family: "Montserrat-Regular";
}

.questions__form-inp:-ms-input-placeholder {
  font-family: "Montserrat-Regular";
}

.questions__form-inp::-ms-input-placeholder {
  font-family: "Montserrat-Regular";
}

.questions__form-inp::placeholder {
  font-family: "Montserrat-Regular";
}

.questions__tab {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  margin-top: 5px;
}

.questions__form-btn {
  font-size: 17px;
  margin-top: 20px;
}

.questions__tab input,
.questions__tab-content {
  display: none;
}

.questions__tab-title {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;
}

.questions__tab-title:hover {
  -webkit-box-shadow: 0 0 10px 2px rgba(201, 201, 201, 0.62);
  box-shadow: 0 0 10px 2px rgba(201, 201, 201, 0.62);
}

.questions__tab-title::after {
  margin-top: -10px;
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.questions__tab :checked ~ .questions__tab-title::after {
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
}

.questions__tab :checked ~ .questions__tab-content {
  display: block;
}

.err {
  border: 1px solid red !important;
}

.personal-data__wrap {
  margin-top: 20px;
}

.personal-data__wrap label a {
  color: rgb(0, 0, 238);
}

.seo_block p {
  margin-bottom: 20px;
  font-size: 15px;
}

.seo_block ul {
  margin-bottom: 20px;
}

.seo_block ul,
.seo_block ul li {
  list-style-type: disc;
}

.seo_block,
.seo_block ol li {
  list-style-type: decimal;
}

.seo_block ul,
.seo_block ol {
  padding-left: 20px;
}

.seo_block h1,
.seo_block h2 {
  margin-bottom: 20px;
}

.seo_block h1 {
  font-size: 30px;
}

.seo_block h2 {
  font-size: 22.5px;
}

.seo_block a {
  color: rgb(0, 0, 238);
  margin: 0 5px;
  font-size: 15px;
}

.seo_block span {
  font-size: 15px;
}

@media (max-width: 1280px) {
  .slider-soft {
    width: 100%;
  }
}
</style>

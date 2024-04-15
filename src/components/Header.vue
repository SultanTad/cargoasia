<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

import ModalCities from "./ModalCities.vue";
import ModalForm from "./ModalForm.vue";
import ModalSuccess from "./ModalSuccess.vue";

const headerFixed = ref(false);
const burgerActive = ref(false);
const burgerBtnActive = ref(false);
const activeCity = ref(false);
const modalForm = ref(false);
const modalSuccess = ref(false);
const menu = ref([]);
const finalMenu = ref([]);
const cargoTransportation = ref([]);
const route = useRoute();
const city = ref("");

const scrollHeaderFixed = () => {
  let windowCenter = window.pageYOffset || document.documentElement.scrollTop;
  windowCenter >= 145
    ? (headerFixed.value = true)
    : (headerFixed.value = false);
};

const formQuestions = reactive({
  name: "",
  phone: "",
  email: "",
  question: "",
});

const errors = reactive({
  name: false,
  phone: false,
  email: false,
  question: false,
});

const titleModalForm = reactive([{ title: "Заполните форму" }]);

const btnModalForm = reactive([{ btn: "Отправить" }]);

const validatePhone = (phone) => {
  const phoneRegex = /^(?:[0-9] ?){6,14}[0-9]$/;
  return phoneRegex.test(phone);
};

const validateFormQuestions = () => {
  if (formQuestions.name.length === 0) {
    errors.name = true;
  } else {
    errors.name = false;
  }

  if (!validatePhone(formQuestions.phone)) {
    errors.phone = true;
  } else {
    errors.phone = false;
  }

  if (formQuestions.question.length === 0) {
    errors.question = true;
  } else {
    errors.question = false;
  }

  if (
    errors.name == false &&
    errors.phone == false &&
    errors.question == false
  ) {
    modalSuccess.value = true;
    modalForm.value = false;
    document.body.style.overflow = "hidden";
  }
};

const burgerToggle = () => {
  burgerActive.value = !burgerActive.value;
  burgerBtnActive.value = !burgerBtnActive.value;
  if (burgerActive.value) {
    document.body.style.overflow = "hidden";
  } else if (!burgerActive.value) {
    document.body.style.overflow = "inherit";
  }
};

const switchOffBurger = () => {
  burgerActive.value = false;
  burgerBtnActive.value = false;
  document.body.style.overflow = "inherit";
};

const activeCityModal = () => {
  activeCity.value = true;
  document.body.style.overflow = "hidden";
};

const deactiveCityModal = () => {
  activeCity.value = false;
  document.body.style.overflow = "inherit";
};

const activeModalForm = () => {
  modalForm.value = true;
  document.body.style.overflow = "hidden";
};

const deactiveModalForm = () => {
  modalForm.value = false;
  document.body.style.overflow = "inherit";
};

const deactiveModalSuccess = () => {
  modalSuccess.value = false;
  document.body.style.overflow = "inherit";
};

const changeCity = (event) => {
  city.value = event;
  console.log(city.value);
};

const getNavMenu = async () => {
  const { data } = await axios("https://api.waix.ru/site/navigate/?project=2");
  menu.value = data.result.main;
  let pageNames = [
    "CargoTransportation",
    "Services",
    "AboutCompany",
    "CreateOrder",
    "Contacts",
  ];
  let newMenu = menu.value;
  for (let key in newMenu) {
    newMenu[key]["pageName"] = pageNames[key];
  }
  finalMenu.value = newMenu;
};

const getCargoTransportation = async () => {
  const { data } = await axios("https://api.waix.ru/site/navigate/?project=2");
  cargoTransportation.value = data.result.gruzoperevozki;
};

onMounted(async () => {
  window.addEventListener("scroll", scrollHeaderFixed);
  await getNavMenu();
  await getCargoTransportation();
});

</script>
<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top-wrapper">
          <div class="header__city-block">
            <span
              v-if="route.params.city === 'msk'"
              class="header__city-prev"
              @click="activeCityModal"
              >г. Москва</span
            >
            <span
              v-else-if="route.params.city !== 'msk'"
              class="header__city-prev"
              @click="activeCityModal"
              >г. {{ city }}</span
            >
            <ModalCities
              v-if="activeCity"
              @close="deactiveCityModal"
              @getCityName="changeCity($event)"
            />
          </div>
          <div class="header__numbers">
            <a href="tel:88047004223" class="header__numbers-tel"
              ><picture
                ><source srcset="/images/tel-russia.webp" type="image/webp" />
                <img
                  src="/images/tel-russia.webp"
                  alt="Russia"
                  class="header__numbers-ico" /></picture
              >8 804 700-4223</a
            >
            <a href="tel:+8617800696877" class="header__numbers-tel"
              ><picture
                ><source srcset="/images/tel-china.webp" type="image/webp" />
                <img
                  src="/images/tel-china.webp"
                  alt="China"
                  class="header__numbers-ico" /></picture
              >+86 17800696877</a
            >
          </div>
          <div class="header__cab">
            <a rel="nofollow" href="https://lk.cargoasia.info/profile/">
              <div class="header__cab-svg">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 0a4.9 4.9 0 0 0-1.84.38c-.09.03-.17.05-.25.09-.04.01-.06.04-.1.06-.2.1-.4.22-.6.34-.02.02-.06.02-.09.04l-.15.12c-.16.11-.32.22-.47.35-.13.12-.25.27-.38.4-.42.44-.79.9-1.09 1.44-.51.9-.9 1.92-1.06 2.97a.42.42 0 0 0-.22 0c-.53.17-.65 1.17-.31 2.22.2.61.53 1.1.87 1.37A7.47 7.47 0 0 0 9 13.97V15l-1 1-2 1-4.84 2.4C.26 19.96-.1 21 0 22c.04.63-.18 1.43.44 1.84.59.3 1.3.11 1.93.16H23.1c.76-.05.97-.86.9-1.5.01-.93.07-1.98-.66-2.69-.59-.6-1.43-.84-2.15-1.25-1.06-.52-2.13-1.03-3.19-1.56l-2-1-1-1v-1.03a7.47 7.47 0 0 0 2.69-4.19c.34-.27.67-.76.87-1.37.34-1.05.21-2.05-.31-2.22a.42.42 0 0 0-.22 0 8.77 8.77 0 0 0-1.06-2.97c-.3-.54-.67-1-1.1-1.44-.12-.13-.24-.28-.37-.4h-.03A5.69 5.69 0 0 0 12.8.05h-.06C12.5.02 12.25 0 12 0z"
                  ></path>
                  <path
                    d="M0 23c.03.3.13.6.44.8.59.3 1.3.1 1.94.2H23.1c.57-.1.84-.5.9-1H0z"
                  ></path>
                </svg>
              </div>
              <span class="header__cab-text">Кабинет</span>
            </a>
          </div>
          <div class="header__soc">
            <span class="header__soc-text">Напиши нам</span>
            <!--<a href="viber://chat?number=79645468368" class="header__soc-link"><picture><source srcset="/bitrix/templates/car/img/soc-viber.webp" type="image/webp"><img src="/bitrix/templates/car/img/soc-viber.webp" alt="Viber" class="header__soc-ico"></picture></a>-->
            <!--<a href="https://api.whatsapp.com/send?phone=79645468368" class="header__soc-link"><picture><source srcset="/bitrix/templates/car/img/soc-watssup.webp" type="image/webp"><img src="/bitrix/templates/car/img/soc-watssup.webp" alt="Whatssup" class="header__soc-ico"></picture></a>-->
            <a href="https://t.me/cargoasiabot" class="header__soc-link"
              ><picture
                ><source srcset="/images/soc-telegram.webp" type="image/webp" />
                <img
                  src="/images/soc-telegram.webp"
                  alt="Telegram"
                  class="header__soc-ico" /></picture
            ></a>
            <a href="https://vk.com/club198703643" class="header__soc-link"
              ><picture
                ><source srcset="/images/soc-vk.webp" type="image/webp" />
                <img
                  src="/images/soc-vk.webp"
                  alt="Vk"
                  class="header__soc-ico" /></picture
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="header__content" :class="{ header_fixed: headerFixed }">
      <div class="container">
        <div class="header__content-wrapper">
          <div class="header__logo">
            <router-link
              :to="{ name: 'Home', params: { city: route.params.city } }"
              ><picture
                ><source srcset="/images/logo.webp" type="image/webp" />
                <img
                  src="/images/logo.webp"
                  title="Азия Карго | Карго Китай"
                  alt="Азия Карго | Карго Китай"
                  class="header__logo-img" /></picture
            ></router-link>
          </div>
          <div class="header__number-list">
            <div class="header__number-listWrapp">
              <a href="tel:88047004223" class="header__number-item"
                ><picture
                  ><source srcset="/images/tel-russia.webp" type="image/webp" />
                  <img
                    src="/images/tel-russia.webp"
                    alt="Russia"
                    class="header__numbers-ico" /></picture
                >8 804 700-4223</a
              >
              <a
                href="tel:+8617800696877"
                class="header__number-item number-item-active"
                ><picture
                  ><source srcset="/images/tel-china.webp" type="image/webp" />
                  <img
                    src="/images/tel-china.webp"
                    alt="China"
                    class="header__numbers-ico" /></picture
                >+86 17800696877</a
              >
            </div>
            <div class="hidden"></div>
          </div>
          <nav class="header__nav" :class="{ nav_active: burgerActive }">
            <ul class="header__list">
              <li class="header__item" v-for="menuItem in finalMenu">
                <router-link
                  :to="{
                    name: menuItem.pageName,
                    params: { city: route.params.city },
                  }"
                  @click="switchOffBurger"
                  class="header__nav-link active nav-link-tap gruz_click"
                  >{{ menuItem.title }}</router-link
                >
                <ul class="header__dropdown">
                  <ul
                    class="header__dropdown1"
                    v-for="dropList in cargoTransportation"
                  >
                    <li class="header__dropdown-item">
                      <div class="header__dropdown-linkTitle">
                        {{ dropList.title }}
                      </div>
                    </li>

                    <li
                      class="header__dropdown-item"
                      v-for="dropItem in dropList.sub"
                    >
                      <router-link
                        :to="{
                          name: 'DeliveryFromCities',
                          params: { id: dropItem.url },
                        }"
                        class="header__dropdown-link"
                        >{{ dropItem.title }}</router-link
                      >
                    </li>
                  </ul>
                </ul>
              </li>
            </ul>

            <div class="header__menu-bottom">
              <div class="header__numbers">
                <a
                  href="tel:88047004223"
                  class="header__numbers-tel menu-bottom-tel"
                  ><picture
                    ><source
                      srcset="/images/tel-russia.webp"
                      type="image/webp" />
                    <img
                      src="/images/tel-russia.webp"
                      alt="Russia"
                      class="header__numbers-ico" /></picture
                  >88047004223</a
                >
                <a
                  href="tel:+8617800696877"
                  class="header__numbers-tel menu-bottom-tel"
                  ><picture
                    ><source
                      srcset="/images/tel-china.webp"
                      type="image/webp" />
                    <img
                      src="/images/tel-china.webp"
                      alt="China"
                      class="header__numbers-ico" /></picture
                  >+86 17800696877</a
                >
              </div>
              <div
                @click="activeModalForm"
                class="header__btn-wrap btn-wrap-menu"
              >
                <div class="header__btn btn-wrap-menu">Заказать звонок</div>
              </div>
            </div>
          </nav>
          <div @click="activeModalForm" class="header__btn-wrap">
            <div class="header__btn">Заказать звонок</div>
          </div>
          <div class="header-bottom__cab">
            <a rel="nofollow" href="https://lk.cargoasia.info/profile/">
              <div class="header__cab-svg">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 0a4.9 4.9 0 0 0-1.84.38c-.09.03-.17.05-.25.09-.04.01-.06.04-.1.06-.2.1-.4.22-.6.34-.02.02-.06.02-.09.04l-.15.12c-.16.11-.32.22-.47.35-.13.12-.25.27-.38.4-.42.44-.79.9-1.09 1.44-.51.9-.9 1.92-1.06 2.97a.42.42 0 0 0-.22 0c-.53.17-.65 1.17-.31 2.22.2.61.53 1.1.87 1.37A7.47 7.47 0 0 0 9 13.97V15l-1 1-2 1-4.84 2.4C.26 19.96-.1 21 0 22c.04.63-.18 1.43.44 1.84.59.3 1.3.11 1.93.16H23.1c.76-.05.97-.86.9-1.5.01-.93.07-1.98-.66-2.69-.59-.6-1.43-.84-2.15-1.25-1.06-.52-2.13-1.03-3.19-1.56l-2-1-1-1v-1.03a7.47 7.47 0 0 0 2.69-4.19c.34-.27.67-.76.87-1.37.34-1.05.21-2.05-.31-2.22a.42.42 0 0 0-.22 0 8.77 8.77 0 0 0-1.06-2.97c-.3-.54-.67-1-1.1-1.44-.12-.13-.24-.28-.37-.4h-.03A5.69 5.69 0 0 0 12.8.05h-.06C12.5.02 12.25 0 12 0z"
                  ></path>
                  <path
                    d="M0 23c.03.3.13.6.44.8.59.3 1.3.1 1.94.2H23.1c.57-.1.84-.5.9-1H0z"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div
            class="header__burger"
            :class="{ burger_active: burgerBtnActive }"
            @click="burgerToggle"
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <ModalForm
    @validateBtn="validateFormQuestions"
    v-if="modalForm"
    @close="deactiveModalForm"
    :titleModalForm="titleModalForm"
    :btnModalForm="btnModalForm"
  >
    <template #modal-form>
      <input type="text" value="" style="display: none" />
      <input
        type="text"
        required=""
        class="questions__form-inp"
        :class="{ err: errors.name }"
        placeholder="Имя"
        v-model="formQuestions.name"
        @input="errors.name = false"
      />
      <input
        type="tel"
        data-rule="tel"
        required=""
        class="questions__form-inp"
        :class="{ err: errors.phone }"
        placeholder="Телефон"
        v-model="formQuestions.phone"
        @input="errors.phone = false"
      />
      <textarea
        class="questions__form-inp"
        :class="{ err: errors.question }"
        rows="4"
        placeholder="Комментарии"
        v-model="formQuestions.question"
        @input="errors.question = false"
      ></textarea>
    </template>
  </ModalForm>
  <ModalSuccess v-if="modalSuccess" @close="deactiveModalSuccess" />
</template>

<style>
.header__btn-wrap {
  cursor: pointer;
}

.header__top {
  font-size: 15px;
  background-color: #f4f4f4;
}

.header__top-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header__city-item a {
  color: #3b3b3b;
}

.header__city-item a:hover {
  color: #3b3b3b;
  text-decoration: underline;
}

.header__city-item {
  font-size: 16px;
  color: #000;
  font-family: "Montserrat-Medium";
}

.header__content {
  font-size: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e9e9e9;
}

.header__content-wrapper {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 92px;
}

.header__logo {
  width: 180px;
}

.header__nav {
  -ms-flex-item-align: center;
  align-self: center;
}

.header__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.header__nav {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.header__item {
  height: 92.8px;
  display: flex;
  align-items: center;
}

.header__item:not(:last-child) {
  margin-right: 55px;
}

.header_fixed .header__item:not(:last-child) {
  margin-right: 40px;
}

.header__dropdown {
  width: 50%;
  display: none;
  padding: 20px 40px;
  background-color: #fff;
  top: 92px;
  font-size: 16px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: absolute;
  z-index: 5;
}

.header__dropdown1 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  margin-right: 40px;
}

.header__dropdown-linkTitle {
  font-size: 14px;
  margin-bottom: 10px;
  color: #000;
  font-family: Montserrat-Medium;
}

.header__dropdown-link {
  color: #3b3b3b;
  font-size: 14px;
  font-family: Montserrat-Light;
}

.header__dropdown-item {
  margin: 15px 0;
}

.header__dropdown2 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
}

.header__btn {
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  display: block;
  line-height: normal;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  padding: 13px 30px;
  background-color: #ffb900;
}

.header__menu-bottom {
  display: none;
}

.header__nav.nav_active {
  opacity: 1;
  visibility: visible;
}

.header__city-close {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: transparent;
}

.header__city-close::after,
.header__city-close::before {
  content: "";
  width: 30px;
  height: 1px;
  background-color: #ffb900;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -15px;
  margin-top: -1px;
}

.header__city-close::before {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.header__city-close::after {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.header__city-block {
  border: none;
  line-height: 2.1;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-left: 25px;
  font-size: 18px;
  background-color: transparent;
  margin-left: 7px;
  background-image: url(/images/location.webp);
  background-repeat: no-repeat;
  background-position: left center;
}

.header__city-block {
  font-size: 16px;
}

.header__city-block {
  padding: 10px 0 10px 20px;
}

.webp .header__city-block {
  background-image: url(/images/location.webp);
}

.header__city-prev {
  cursor: pointer;
  font-size: 15px;
}

.lock {
  overflow: hidden;
}

.header__btn {
  font-weight: bold;
}

.slider-item__subtitle {
  font-weight: bold;
}

.header__number-listWrapp a {
  font-size: 15px;
}

.header__number-listWrapp::after {
  top: 20px;
}

.header__number-listWrapp::after {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  content: "";
  width: 15px;
  height: 10px;
  position: absolute;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  top: 20px;
  right: 10px;
  background-image: url(../images/number-arrov.webp);
  background-repeat: no-repeat;
  background-position: center;
}

.header__number-listWrapp {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  border-radius: 10px;
  padding: 15px 20px;
  background-color: #fff;
  z-index: 10;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: absolute;
  top: -10px;
  right: 0;
  left: 0;
}

.header__nav-link {
  line-height: 1.5;
  position: relative;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  font-size: 16px;
  color: #000;
}

.header__nav-link:not(:first-child) {
  margin-left: 40px;
}

.header__nav-link::after {
  cursor: default;
  position: absolute;
  content: "";
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  width: 0;
  height: 1px;
  background-color: #ffb900;
  bottom: -33px;
  left: 0;
}

.header__city-content {
  border: 1px solid #f9c647;
}

.header__city-content {
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 450px;
  z-index: 10;
  top: 50%;
  left: 50%;
  padding: 40px;
  border-radius: 5px;
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.header__city-list:first-child {
  margin-right: 30px;
}

.header__dropdown {
  border: 1px solid #eeeeee;
}

.header__number-list {
  display: none;
}

.header__number-list {
  width: 200px;
  margin-top: -13px;
}

.header__number-list {
  padding: 10px 0;
  position: relative;
}

.number-item-active {
  display: none;
  padding: 10px 0;
  margin-right: 6px;
}

.number-item-active.active {
  display: block;
}

.header__number-item {
  font-family: "Montserrat-Medium";
  color: #000;
}

.header_fixed {
  top: 0;
  width: 100%;
  position: fixed;
  background: #fff;
  z-index: 1000;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.header_fixed .header__number-list {
  display: block;
}

.header_fixed .header__number-listWrapp.active {
  -webkit-box-shadow: 0 0 11px 3px rgba(13, 42, 18, 0.17);
  box-shadow: 0 0 11px 3px rgba(13, 42, 18, 0.17);
}

.header_fixed .header__number-listWrapp.active::after {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

header.header {
  min-height: 146px;
}

.header__dropdown-linkTitle {
  cursor: default;
}

.header__cab {
  flex: 0.2 auto;
}

.header__cab a {
  display: flex;
  align-items: center;
}

.header__cab-text {
  line-height: 2.2;
  font-family: "Montserrat-Light";
  color: black;
}

.header__cab-svg {
  background: #fdb913;
  width: 21px;
  height: auto;
  margin-right: 4px;
  border: 1px solid #fdb913;
  border-radius: 50%;
  text-align: center;
  margin-right: 10px;
}

.header__cab-svg svg {
  fill: #fff;
  stroke: transparent;
  stroke-width: 0px;
  height: 15px;
  width: 15px;
  margin: 2px;
}

.header-bottom__cab {
  display: none;
}

.header-bottom__cab .header__cab-svg {
  width: 35px;
}

.header-bottom__cab .header__cab-svg svg {
  height: 30px;
  width: 30px;
}

.header__city-content {
  max-width: 1150px;
  width: 100%;
}

.header__city-list {
  max-width: 100%;
}

.header__city-list {
  font-size: 15px;
  position: relative;
  display: block;
  width: 100%;
}

.header__city {
  z-index: 10000;
}

.header__city {
  position: fixed;
  left: 50%;
  z-index: 10;
  display: block;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  top: 0;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100vw;
  height: 100vh;
}

.header__numbers {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

.header__numbers-tel {
  display: inline-block;
  line-height: normal;
  font-family: "Montserrat-Medium";
  color: #000;
}

.header__numbers-tel picture {
  display: inline-block;
}

.header__numbers-tel:first-of-type {
  margin-left: 25%;
  margin-right: 30px;
}

.header__numbers-ico {
  margin-right: 5px;
  display: inline-block;
  width: 18px;
  padding-bottom: 2.2px;
}

.header__soc {
  margin: 0 0 0 auto;
}

.webp .header__soc-text {
  background-image: url(/images/text-arrow.webp);
}

.header__soc-text {
  line-height: 2.2;
  font-family: "Montserrat-Light";
  color: rgba(0, 0, 0, 0.82);
  padding-right: 40px;
  background-image: url(/images/text-arrow.webp);
  background-repeat: no-repeat;
  background-position: right center;
  margin-right: 20px;
}

.header__soc-link {
  display: inline-block;
  margin: 0 5px;
}

.active_li_a {
  color: #0b0b0b !important;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
}

.header__burger {
  cursor: pointer;
  display: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffb900;
  position: relative;
}

.header__burger span {
  position: absolute;
  position: relative;
  display: block;
  width: 30px;
  height: 1.5px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.header__burger span::after,
.header__burger span::before {
  content: "";
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  position: absolute;
  width: 30px;
  height: 1.5px;
  background-color: #fff;
}

.header__burger span::before {
  top: -7px;
}

.header__burger span::after {
  top: 7px;
}

.burger_active span {
  height: 0;
}

.burger_active span::before {
  top: 0;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.burger_active span::after {
  top: 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

@media (min-width: 1081px) {
  .header__item:first-child:hover .header__dropdown {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}

@media (min-width: 1024px) {
  .active_li_a:hover {
    color: #e31e24 !important;
  }

  li:hover .header__nav-link {
    color: #ffc733;
  }

  li:hover .header__nav-link::after {
    width: 100%;
  }

  .header__city-prev:hover {
    text-decoration: underline;
  }

  .header__dropdown-link:hover {
    font-family: "Montserrat-Regular";
    color: #272626;
  }

  .header_fixed .header__number-listWrapp:hover {
    -webkit-box-shadow: 0 0 11px 3px rgba(13, 42, 18, 0.17);
    box-shadow: 0 0 11px 3px rgba(13, 42, 18, 0.17);
  }

  .header_fixed .header__number-listWrapp:hover .number-item-active {
    display: block;
  }

  .header_fixed .header__number-listWrapp:hover::after {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }

  .header__numbers-tel:hover {
    text-decoration: underline;
  }
}

@media (max-width: 1024px) {
  .header__city-block {
    margin: 0 auto 0 0;
  }

  .header__top-wrapper {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .header__city-list {
    margin: 0 auto 0 0;
  }

  .header__numbers {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }

  .header__numbers-tel:first-of-type {
    margin: 0 20px 0 0;
  }

  .header__cab {
    flex: unset;
    margin: 0 0 0 auto;
  }

  .header__soc {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
  }
}

@media screen and (max-width: 1080px) {
  .header__dropdown.active {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .header__nav {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 65.5px;
  }

  .header__burger {
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    order: 3;
    display: block;
  }

  .header__nav {
    -webkit-transform: translatex(100%);
    -ms-transform: translatex(100%);
    transform: translatex(100%);
    height: 100vh !important;
    width: 100vw;
    overflow: auto;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    visibility: hidden;
    opacity: 0;
    right: -15px;
    top: 25px;
    z-index: 2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .header__nav.nav_active {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }

  .header__nav-link .active::before {
    content: "";
    position: absolute;
  }

  .header__list {
    margin-bottom: 80px;
  }

  .header__item {
    margin: 0 !important;
  }

  .header__dropdown {
    text-align: center;
    margin: 0 auto;
    width: 100%;
    padding: 0;
    top: 0;
    position: relative;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .header__dropdown1 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 100%;
    flex: 0 1 100%;
    margin: 0;
  }

  .header__dropdown2 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 100%;
    flex: 0 1 100%;
  }

  .header__item {
    text-align: center;
    height: auto;
    font-size: 20px;
    padding: 20px;
  }

  .header__list {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .header__nav-link::after {
    display: none;
  }
}

@media (max-width: 768px) {
  .header-bottom__cab {
    display: block;
  }

  header.header {
    min-height: auto;
    position: fixed;
    z-index: 2;
    width: 100%;
    top: 0;
  }

  .header__nav {
    background-color: #fff;
  }
  .header__list {
    align-items: baseline;
  }
  .header__dropdown {
    border: 0;
    padding-left: 15px;
  }

  .header__top {
    display: none;
  }

  .header__city-content {
    width: 100% !important;
    overflow: auto;
    height: 100%;
  }
  .header__city-list {
    columns: 2 !important;
  }

  .header__city-block {
    display: block !important;
  }
}
</style>

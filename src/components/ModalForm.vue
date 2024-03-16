<script setup>
defineProps({
  titleModalForm: Array,
  btnModalForm: Array,
});
</script>
<template>
  <div class="popup">
    <div class="popup__content">
      <h3 class="popup__title" v-for="item in titleModalForm">
        {{ item.title }}
      </h3>
      <button class="popup__close" @click="$emit('close')"></button>
      <p class="popup__subtitle">
        Оставьте заявку нам менеджер ответит вам в ближайшее время
      </p>
      <form action="" class="questions__right-form" @submit.prevent>
        <slot name="modal-form"></slot>
        <div class="personal-data__wrap">
          <label>
            <input type="checkbox" id="personal-data__que" checked="" /><span
              style="font-size: 15px"
              >Я согласен на обработку
              <a href="/krasnodar/personal-data/">персональных данных</a></span
            >
          </label>
        </div>
        <button
          class="questions__form-btn main-btn"
          @click="$emit('validateBtn')"
          v-for="item in btnModalForm"
        >
          {{ item.btn }}
        </button>
      </form>
    </div>
  </div>
</template>

<style>
.popup {
  background: rgba(0, 0, 0, 0.63);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: visible;
  opacity: 1;
  transition: all 0.3s ease-in-out;
}

.popup__content {
  background-color: rgb(243, 243, 246);
  max-width: 444px;
  width: 100%;
  padding: 50px 15px 15px 15px;
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.popup__close {
  position: absolute;
  right: 23px;
  top: 18px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  padding: 0;
  background: transparent;
}

.popup__close::before {
  transform: rotate(45deg);
  content: "";
  position: absolute;
  left: 50%;
  margin-left: -15px;
  top: 50%;
  background-color: #ffb900;
  height: 1px;
  width: 30px;
}

.popup__close::after {
  transform: rotate(-45deg);
  content: "";
  position: absolute;
  left: 50%;
  margin-left: -15px;
  top: 50%;
  background-color: #ffb900;
  height: 1px;
  width: 30px;
}

.popup__title {
  position: relative;
  font-size: 20px;
  font-family: "Montserrat-Bold";
}

.popup__subtitle {
  margin-top: 10px;
  max-width: 70%;
  font-family: "Montserrat-Light";
  font-size: 16px;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .popup__content {
    max-width: unset;
    height: 100%;
    padding: 15px;
  }
}

@media (max-width: 430px) {
  .popup__subtitle {
    max-width: unset;
  }
}
</style>

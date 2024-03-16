<template>
    <div class="popup-success">
        <div class="popup-success__inner">
            <h3>Спасибо! Ваша заявка принята.</h3>
            <button class="popup__close" @click="$emit('close')"></button>
            <p>Наши менеджеры свяжутся с вами в ближайшее время</p>
        </div>
    </div>
</template>

<style>
.popup-success {
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

.popup-success__inner {
    background-color: #fff;
    padding: 50px 15px 15px 15px;
    position: relative;
}

.popup-success__inner h3 {
    font-size: 20px;
    font-family: "Montserrat-Bold";
}

.popup-success__inner p {
    margin-top: 10px;
    max-width: 70%;
    font-family: "Montserrat-Light";
    font-size: 16px;
    line-height: 1.8;
}
</style>
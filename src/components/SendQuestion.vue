<script setup>
import { reactive } from "vue";

const formQuestions = reactive({
  name: "",
  phone: "",
  email: "",
});

const errors = reactive({
  name: false,
  phone: false,
  email: false,
});

const validEmail = (email) => {
  let res =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(email);
};

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

  if (!validEmail(formQuestions.email)) {
    errors.email = true;
  } else {
    errors.email = false;
  }
};
</script>
<template>
  <div class="send" style="background-image: url(/images/send-bg.png)">
    <div class="container">
      <div class="send__wrapper">
        <h2 class="send__title">Остались вопросы ?</h2>
        <p class="send__subtitle">
          Оставьте заявку нам менеджер ответит вам в ближайшее время
        </p>
        <form action="#" class="send__form" @submit.prevent>
          <input type="text" value="" style="display: none" />
          <input
            type="text"
            required=""
            placeholder="Имя"
            class="send__form-inp"
            :class="{ err: errors.name }"
            v-model="formQuestions.name"
            @input="errors.name = false"
          />
          <input
            type="email"
            required=""
            placeholder="e-mail почта"
            class="send__form-inp"
            :class="{ err: errors.email }"
            v-model="formQuestions.email"
            @input="errors.email = false"
          />
          <input
            type="tel"
            required=""
            placeholder="Телефон"
            class="send__form-inp"
            :class="{ err: errors.phone }"
            v-model="formQuestions.phone"
            @input="errors.phone = false"
          />
          <button
            class="send__form-btn main-btn"
            @click="validateFormQuestions"
          >
            Получить консультацию
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.send {
  background-size: contain;
}

.send {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}

.send__title {
  color: #3f3d3d;
  margin-top: 70px;
  font-size: 33px;
  max-width: 50%;
  font-family: "Montserrat-Bold";
}

.send__subtitle {
  color: #3f3d3d;
  max-width: 50%;
}

.send__form {
  margin-top: 40px;
}

.send__form-inp {
  color: #000;
  margin-right: 20px;
  border-radius: 10px;
  padding: 15px;
  max-width: 200px;
}

.send__form-inp::-webkit-input-placeholder {
  font-family: "Montserrat-Regular";
  font-size: 16px;
  color: #090909;
}

.send__form-inp::-moz-placeholder {
  font-family: "Montserrat-Regular";
  font-size: 16px;
  color: #090909;
}

.send__form-inp:-ms-input-placeholder {
  font-family: "Montserrat-Regular";
  font-size: 16px;
  color: #090909;
}

.send__form-inp::-ms-input-placeholder {
  font-family: "Montserrat-Regular";
  font-size: 16px;
  color: #090909;
}

.send__form-inp::placeholder {
  font-family: "Montserrat-Regular";
  font-size: 16px;
  color: #090909;
}

.send__form-inp ::last-child {
  display: block;
}

.send__form-btn {
  font-size: 15px;
  margin: 40px 0;
  display: block;
  background-color: #c52626;
}

.send__form-btn:hover {
  background-color: #000 !important;
}

.err {
  border: 1px solid red !important;
}

@media (max-width: 768px) {
  .send__wrapper {
    text-align: center;
    padding: 20px 0;
  }

  .send__form-inp {
    max-width: none;
    display: inline-block !important;
  }
  
  .send__form-inp {
    margin: 20px 0 0 0;
  }

  .send__form {
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  .send__title,
  .send__subtitle {
    max-width: unset;
  }

  .send__form-btn {
    display: unset;
  }
}

@media (max-width: 330px) {
  .send__form-btn {
    font-size: 14px;
  }
}
</style>

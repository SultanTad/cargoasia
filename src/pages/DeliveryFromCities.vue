<script setup>
import { reactive } from "vue";

import AsideTabs from "../components/AsideTabs.vue";
import SendQuestion from "../components/SendQuestion.vue";
import DeliveryExamples from "../components/DeliveryExamples.vue";

const tabItems = reactive([
  {
    title: "Доставка грузов",
    activeTab: false,
    items: [
      { name: "Доставка из Гуанчжоу", url: "" },
      { name: "Авто-доставка из Китая", url: "" },
      { name: "Доставка из ИУ", url: "" },
      { name: "Авиа доставка из Китая", url: "" },
    ],
  },
  {
    title: "Доставка товаров",
    activeTab: false,
    items: [{ name: "Посылка из Китая", url: "" }],
  },
]);
</script>
<template>
  <div class="main-content">
    <div class="container">
      <h1 class="main-content__title">Доставка из Гуанчжоу</h1>
    </div>
    <div class="container">
      <div class="main-content__wrapper">
        <AsideTabs :tabItems="tabItems" class="delivery-aside" />
        <div class="content">
          <ul class="content__links">
            <li class="content__item">
              <a href="/msk/" class="content__link">Главная</a>
            </li>
            <li class="content__item">\</li>
            <li class="content__item">
              <a href="/msk/gruzoperevozki/" class="content__link"
                >Грузоперевозки</a
              >
            </li>
            <li class="content__item" style="margin: 0 15px">\</li>
            <li class="content__item">Доставка из Гуанчжоу</li>
          </ul>
          <div class="content__wrapper">
            <div class="content__top">
              <div class="content__top-imgBl">
                <picture
                  ><source
                    srcset="/images/4c7bed11aa824b4d3fe8806b7f5ba905.jpg"
                    type="image/webp" />
                  <img
                    src="/images/4c7bed11aa824b4d3fe8806b7f5ba905.jpg"
                    alt="tir"
                    class="content__top-img"
                /></picture>
              </div>
              <p class=""></p>
              <h3>
                <b
                  >Компания Азия карго осуществляет доставку груза из Гуанчжоу
                  по всей России.</b
                ><br />
              </h3>
              <p>
                Перевозка выполняется в минимальные сроки, по выгодным тарифам.
                Карго из Гуанчжоу по всей стране пользуется популярностью.
                Специалисты нашей компании утверждают что, каждый, кто хоть раз
                сталкивался с
                <a href="https://cargoasia.info/msk/"
                  >доставкой груза из Китая</a
                >
                знает, что залог отличной доставки это - стабильная работа
                транспорта и логистического отдела.&nbsp;
              </p>
              <p>
                Весь регион Гуанчжоу является огромной транспортной развязкой и
                логистическим центром, именно оттуда происходит самая большая
                поставка разнообразных товаров в Москву и другие регионы России.
                По планам экономического развития страны, масштабы работы будут
                только расти, как и поток инвестиций, которые обеспечивают
                наилучшую работу всей системы доставки грузов&nbsp;из Гуанчжоу.
              </p>
              <p>
                <b>Самые популярные доставляемые товары</b>
              </p>
              <p></p>
              <ul>
                <li>
                  <p>Электроника и гаджеты;</p>
                </li>
                <li>
                  <p>Бытовая техника;</p>
                </li>
                <li>
                  <p>Одежда и аксессуары;</p>
                </li>
                <li>
                  <p>Мебель и фурнитура;</p>
                </li>
                <li>
                  <p>Посуда и предметы интерьера;</p>
                </li>
              </ul>
              <p></p>
              <p>
                Менеджеры нашей компании Азия карго оформляют доставку сборных
                грузов.
              </p>
              <p>
                Расположение Гуанчжоу в глубине материка не как не сказалось на
                доставке груза, основным способом трансфера между Китаем и
                Россией является автомобильный и железнодорожный
                транспорт.&nbsp;<span style="text-align: center"
                  >Так же мы осуществляем доставку по морю, но такая доставка не
                  всегда экономически оправдана, так как сначала будет&nbsp;
                  произведена перевозка с материка в портовый регион Китая, и
                  лишь затем отправка морским транспортом - это выгодной для
                  перевозки груза большого веса</span
                ><span style="text-align: center">.&nbsp;</span>В нашем арсенале
                есть и авиационный транспорт, но мы рекомендовали бы вам
                воспользоваться им в&nbsp;том случае когда, речь идет о
                скоропортящемся товаре на качество которого влияет каждый лишний
                час.
              </p>
              <p>
                Клиенты компании могут воспользоваться всеми преимуществами
                нашей компании:
              </p>
              <p></p>
              <ul>
                <li>
                  <p>
                    Специалисты Азия карго возьмут на себя надзор качества и
                    количества товара, на складах Китая а, так же подготовят всю
                    сопроводительную документацию;
                  </p>
                </li>
                <li>
                  <p>
                    Мы предложим вам самые удобные маршруты доставки, которые
                    сократят транспортные расходы и время вашего товара в пути,
                    это распространяется на отправку по всей России;
                  </p>
                </li>
                <li>
                  <p>
                    При расчете стоимости мы подбираем индивидуальные тарифы,
                    которые учитывают специфику вашего груза;
                  </p>
                </li>
                <li>
                  <p>
                    Наша компания возьмет на себя страхование и таможенное
                    оформление вашего товара;
                  </p>
                </li>
                <li>
                  <p>
                    Все наши клиенты могут воспользоваться акциями и
                    специальными предложениями;
                  </p>
                </li>
              </ul>
              <h2 style="text-align: center">
                <br />
                <br />
                <br />
              </h2>
              <p></p>
              <p></p>
            </div>
            <DeliveryExamples />
          </div>
        </div>
      </div>
    </div>
  </div>
  <SendQuestion />
</template>

<style>
.main-content__wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.content__links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
}

.content__item {
  font-size: 17px;
  color: #8c8c8c;
  font-family: "Montserrat-Medium";
  margin-bottom: 20px;
}

.content__item:nth-child(2) {
  margin: 0 15px;
}

.content__link {
  color: #8c8c8c;
}

.content__top {
  margin-bottom: 30px;
}

.content__top h3 {
  margin-top: 20px;
}

.content__top h3 b {
  font-size: 15px;
}

.content__top p {
  font-size: 15px;
}

.content__top span {
  font-size: 15px;
}

.content__wrapper .content__examples-btn {
  margin-top: 20px;
}

.content__wrapper p a {
  color: rgb(0, 0, 238);
}

.content__wrapper p {
  margin-bottom: 20px;
  color: #101010;
}

.content__wrapper ul,
.content__wrapper ol {
  padding-left: 20px;
}

.content__wrapper ul,
.content__wrapper ul li {
  list-style-type: disc;
}

.content__top-subtitle {
  line-height: 2;
  color: #8c8c8c;
  margin-top: 30px;
  font-size: 17px;
  font-family: "Montserrat-Light";
}

.delivery-aside .aside__tab-title {
  max-width: 200px;
}
</style>

<script setup>
import { reactive } from "vue";
import AsideTabs from "../components/AsideTabs.vue";
import SendQuestion from "../components/SendQuestion.vue";

const tabItems = reactive([
  {
    title: "География грузов",
    items: [
      { name: "Доставка собраных грузов", url: "" },
      { name: "Доставка авто", url: "" },
      { name: "Доставка авиа", url: "" },
      { name: "Доставка морем", url: "" },
      { name: "Доставка поездом", url: "" },
      { name: "Мультимодальные перевозки", url: "" },
    ],
  },
  {
    title: "Доставка товаров",
    items: [
      { name: "Доставка оборудования", url: "" },
      { name: "Доставка грузов от 1 до 5 кг.", url: "" },
      { name: "Доставка мелких грузов", url: "" },
      { name: "Доставка морем", url: "" },
      { name: "Доставка поездом", url: "" },
    ],
  },
  {
    title: "География перевозок",
    items: [
      { name: "Доставка", url: "" },
      { name: "Доставка", url: "" },
      { name: "Доставка", url: "" },
    ],
  },
  {
    title: "Наши грузы",
    items: [
      { name: "Доставка", url: "" },
      { name: "Доставка", url: "" },
      { name: "Доставка", url: "" },
    ],
  },
  {
    title: "Наши услуги",
    items: [
      { name: "Доставка", url: "" },
      { name: "Доставка", url: "" },
      { name: "Доставка", url: "" },
    ],
  },
]);
</script>
<template>
  <div class="main-content">
    <div class="container">
      <h1 class="main-content__title">
        Доставка одежды из Китая в Россию оптом
      </h1>
    </div>
    <div class="container">
      <div class="main-content__wrapper">
        <AsideTabs :tabItems="tabItems" />
        <div class="content">
          <ul class="content__links">
            <li class="content__item">
              <a href="/msk/" class="content__link">Главная</a>
            </li>
            <li class="content__item">\</li>
            <li class="content__item">
              <a href="/msk/examples/" class="content__link"
                >Примеры грузоперевозок</a
              >
            </li>
            <li class="content__item" style="margin: 0 15px">\</li>
            <li class="content__item">
              Доставка одежды из Китая в Россию оптом
            </li>
          </ul>
          <div class="content__wrapper">
            <div class="content__top">
              <div class="content__top-imgBl">
                <picture
                  ><source
                    srcset="/images/1a0e0859a2527be583c4679eb713b81a.jpg"
                    type="image/webp" />
                  <img
                    src="/images/1a0e0859a2527be583c4679eb713b81a.jpg"
                    alt="tir"
                    class="content__top-img"
                /></picture>
              </div>
              <p class="content__top-subtitle">
                <b
                  >Мы перевозим очень много грузов из Китая в Россию, и одним из
                  популярных видов товаров конечно является одежда.&nbsp;</b
                ><br />
                <br />
                У многих начинающих предпринимателей возникала идея: а не
                заняться ли продажей одежды и открыть интернет-магазин или
                торгую точку. И вопрос закупа товара по выгодной цене является
                одним из наиболее значимых, при этом одежда должна продаваться
                нужной целевой аудитории с выгодной маржой. При этом необходим
                баланс качества и стоимости продукции.<br />
                <br />
                &nbsp;Есть обычно 2 варианта - искать поставщиков в России и
                покупать одежду уже с оптовой наценкой или же выйти напрямую на
                производителей в Китае. <i>Второй вариант конечно выгоднее</i>,
                но требует немного навыков, которые легко получить за достаточно
                короткий промежуток времени.<br />
                <br />
                <img
                  width="800"
                  alt="7-800x541.jpg"
                  src="/images/8773e2cdb51bf5b2480f39434135e01d.jpg"
                  height="541"
                  title="7-800x541.jpg"
                /><br />
                <i>Фото. Фабрика одежды в Китае</i><br />
                <br />
                Итак, если предприниматель уже понимает, что покупать одежку в
                Китае выгодно, то нужно найти поставщика и
                <a href="https://cargoasia.info/msk/services/posrednik-taobao/"
                  >посредника ТаоБао</a
                >, который поможет доставить товар в Россию.<br />
                <br />
                На торговых площадках по типу ТаоБао, 1688 и других можно
                увидеть на сколько богат рынок Китая, можно выбрать продукцию
                для любой целевой аудитории. Широкий ассортимент, разное
                качество от эконом до премиум, множество фасонов&nbsp; - это
                действительно то, что выбирают миллионы бизнесменов, которые
                работают с Китаем.<br />
              </p>
              <h2>
                Работать с Китаем при помощи Азия Карго действительно выгодно и
                удобно
              </h2>
              <br />
              <ul>
                <li>
                  Наша компания можем помочь с выбором поставщика и договориться
                  о скидке.
                </li>
                <li>
                  У нас большой опыт работы с фабриками и заводами. Выкуп товара
                  происходит в день оплаты.
                </li>
                <li>
                  У нас работают носители языка, что позволяет
                  <b
                    >договариваться с поставщиками на действительно выгодных
                    условиях</b
                  >, ведь известно, что китайцу с китайцев договориться проще.
                </li>
                <li>
                  Мы проверяем качество и комплектацию перед отправкой в Россию,
                  при необходимости можем вернуть товар или сделать замену.
                </li>
              </ul>
              <br />
              <b
                >Пример расчёта доставки 100кг одежды из Китая в Москву (данные
                актуальны в 21.10.2020)</b
              >
              <br />
              <br />
              <span>
                Мы доставляем одежду из Китая обычно либо автоперевозками, либо
                ж/д.&nbsp;
              </span>
              <br />
              <span>
                Большинство клиентов выбирает автоперевозку - она оптимальная по
                соотношению цена/время. Если срок не так важен, то можно
                использовать ж/д, если срок имеет решающее значение, то есть
                ускоренная автодоставка в Россию, а также авиадоставка.
              </span>
              <br />
              <br />
              <span>
                При стандартном тарифе на автодоставку, срок доставки составляет
                25-30 дней, а стоимость $3.15 за 1кг.&nbsp; Чем больше кг в
                одной партии, тем дешевле стоимость 1кг.
              </span>
              <br />
              <br />
              <b>Страховка</b><br />
              <span>
                Чтобы быть в уверенности, что ваш груз не будет повреждён при
                транспортировке, и вы не потеряете при этом деньги, мы страхуем
                грузы. Страховка на товары категории одежда составляет 1%.
              </span>
              <br />
              <br />
              <b
                >Итого, если вы заказываете доставку 100кг одежды из Китая,
                стоимость грузоперевозки составит всего $315!<br /> </b
              ><br />
              <br />
              <b
                ><i
                  >Мы готовы с радостью взять на себя все вопросы по общению с
                  продавцом, выкупу товара и доставки в Россию.</i
                ></b
              ><br />
              <b
                ><i>
                  Пишите нам в онлайн
                  чат/вайбер/вацап/телеграм&nbsp;+7(964)546-83-68&nbsp;</i
                ></b
              >
              <br />
              <br />
              <br />
              <p></p>
            </div>
            <div class="content__rates">
              <h2 class="title-block">Тарифы доставки</h2>
              <div class="content__rates-wrapper">
                <div class="content__rates-card">
                  <span
                    class="content__card-title"
                    style="padding: 4px 0; padding-left: 20px"
                    >Авто-доставка экспресс</span
                  >
                  <span class="content__card-text">Срок: 15-20 дней</span>
                  <span class="content__card-text"
                    >Стоимость: От $2,5 за кг</span
                  >
                </div>
                <div class="content__rates-card">
                  <span class="content__card-title">Авто-доставка</span>
                  <span class="content__card-text">Срок: 25-30 дней</span>
                  <span class="content__card-text">Стоимость: От $1,4</span>
                </div>
                <div class="content__rates-card">
                  <span class="content__card-title card-title-vip"
                    >Ж/Д доставка</span
                  >
                  <span class="content__card-text">Срок: 30-35 дней</span>
                  <span class="content__card-text">Стоимость: От $1</span>
                </div>
              </div>
            </div>
            <div class="content__examples">
              <h2 class="title-block">Другие примеры грузоперевозок</h2>
              <div class="content__examples-imgBl" style="overflow: hidden">
                <a
                  href="/msk/examples/dostavka-oborudovaniya-iz-kitaya/"
                  tabindex="0"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SendQuestion />
</template>

<style>
.content__top li,
.content__top b {
  font-size: 15px;
}

.content__rates {
  width: 100%;
  margin-bottom: 30px;
}

.content__rates-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.content__rates-card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 33.333%;
  flex: 0 1 33.333%;
}

.content__card-title {
  font-size: 23px;
  padding: 20px 0;
  font-family: "Montserrat-Medium";
  border: 1px solid #cfcfcf;
  padding-left: 20px;
}

.content__card-text {
  color: #555;
  font-size: 17px;
  padding: 10px 0;
  font-family: "Montserrat-Light";
  border: 1px solid #cfcfcf;
  padding-left: 20px;
}

.content__card-text b {
  color: #000;
  margin: 0 5px;
}

.card-title-vip {
  background-color: #ffb900;
}

.title-block {
  margin-bottom: 20px;
  font-family: "Montserrat-Bold";
  font-size: 32px;
  max-width: 70%;
}
</style>

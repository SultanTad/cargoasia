<script setup>
import { reactive } from "vue";

import AsideTabs from "../components/AsideTabs.vue";
import SendQuestion from "../components/SendQuestion.vue";

const tabItems = reactive([
  {
    title: "Другие услуги",
    items: [
      { name: "Поиск поставщика в Китае", url: "" },
      { name: "Страхование груза", url: "" },
      { name: "Инспекция фабрики поставщика", url: "" },
      { name: "Выкуп товара с Алибаба", url: "" },
      { name: "Выкуп товара с Таобао", url: "" },
      { name: "Упаковка груза", url: "" },
      { name: "Посредник ТаоБао", url: "" },
      { name: "Производство товара под своим брендом в Китае", url: "" },
      { name: "Контейнерные грузоперевозки из Китая", url: "" },
    ],
  },
]);
</script>
<template>
  <div class="main-content">
    <div class="container">
      <h1 class="main-content__title">Аренда склада</h1>
    </div>
    <div class="container">
      <div class="main-content__wrapper">
        <AsideTabs :tabItems="tabItems" class="service-aside" />
        <div class="content">
          <ul
            class="content__links"
            itemscope=""
            itemtype="https://schema.org/BreadcrumbList"
          >
            <li
              class="content__item"
              itemprop="itemListElement"
              itemscope=""
              itemtype="https://schema.org/ListItem"
            >
              <a href="/msk/" class="content__link home" itemprop="item"
                >Главная</a
              >
              <span itemprop="name">Москва</span>
              <meta itemprop="position" content="1" />
            </li>
            <li class="content__item">\</li>
            <li
              class="content__item"
              itemprop="itemListElement"
              itemscope=""
              itemtype="https://schema.org/ListItem"
            >
              <a href="/msk/services/" class="content__link" itemprop="item">
                <span itemprop="name">Услуги</span>
              </a>
              <meta itemprop="position" content="2" />
            </li>
            <li class="content__item" style="margin: 0 15px">\</li>
            <li
              class="content__item"
              itemprop="itemListElement"
              itemscope=""
              itemtype="https://schema.org/ListItem"
            >
              <a href="" class="content__link" itemprop="item">
                <span itemprop="name">Аренда склада</span>
              </a>
              <meta itemprop="position" content="3" />
            </li>
          </ul>
          <div class="content__wrapper">
            <div class="content__top">
              <p class="">
                Наша компания, Азия Карго, предлагает<b>
                  широкий спектр складских услуг</b
                >
                для хранения грузов перед отправкой в Россию. Мы понимаем
                важность надежного хранения товаров, поэтому наши склады созданы
                с учетом высоких стандартов безопасности и комфорта.<br />
                <br />
                Наши складские помещения предоставляют<b>
                  возможность консолидировать ваши товары от различных
                  поставщиков</b
                >, что позволяет сократить затраты на логистику и обеспечить
                эффективную упаковку и организацию грузов. Мы принимаем на
                хранение различные виды товаров - от одежды и обуви до
                крупногабаритных грузов.<br />
                <br />
                Одним из ключевых преимуществ наших складов является
                <b>наличие теплых крытых помещений</b>. Это гарантирует, что
                ваши товары будут защищены от неблагоприятных погодных условий,
                сохраняя свою целостность и качество.<br />
                <br />
                Мы придаем большое значение безопасности грузов, поэтому наши
                <b
                  >склады оборудованы круглосуточной охраной и системой
                  видеонаблюдения</b
                >. Вы можете быть уверены, что ваш груз находится под надежной
                защитой и будет сохранен в идеальном состоянии до момента
                отправки.<br />
                <br />
                Доверьтесь нам с хранением ваших грузов на наших складах. Мы
                предоставим вам надежное и безопасное решение для консолидации и
                хранения товаров, обеспечивая
                <b>оптимальные условия и сохранность вашего груза</b> во время
                его пребывания на наших складах в Китае.<br />
              </p>
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
              <h2 class="title-block">Пример грузоперевозок</h2>
              <div class="content__examples-inner">
                <div class="content__examples">
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
                </div>
                <div class="content__examples">
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
                    <a
                      href="/images/dostavka-oborudovaniya-iz-kitaya/"
                      tabindex="0"
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
    </div>
  </div>
  <SendQuestion />
</template>

<style>
.home {
  margin-right: 5px;
}

.content__item {
  font-size: 15px;
}

.service-aside .aside__tab-title {
  max-width: 170px;
}
</style>

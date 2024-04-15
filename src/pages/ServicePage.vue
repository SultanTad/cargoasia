<script setup>
import { reactive, ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();

import AsideTabs from "../components/AsideTabs.vue";
import SendQuestion from "../components/SendQuestion.vue";
import DeliveryExamples from "../components/DeliveryExamples.vue";

const urls = ref([]);
const services = ref([]);

const getServices = async () => {
  const { data } = await axios.get(
    "https://api.waix.ru/site/navigate/?project=2"
  );
  urls.value = data.result.services;
  console.log(urls);
  let pageId = [];
  urls.value.filter((item) => {
    "/" + route.params.city + item.url == route.path
      ? pageId.push(item.id)
      : "No";
    console.log(route.params.city + item.url == route.path);
  });
  const res = await axios.get(
    `https://api.waix.ru/site/pages/${pageId}?project=2`
  );
  services.value = res.data.result;
  console.log(res);
};

onMounted(async () => {
  await getServices();
});

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
      <h1 class="main-content__title">{{ services.title }}</h1>
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
            <div v-html="services.content"></div>
            <DeliveryExamples />
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

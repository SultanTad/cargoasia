<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import axios from "axios";

import AsideTabs from "../components/AsideTabs.vue";
import SendQuestion from "../components/SendQuestion.vue";
import DeliveryExamples from "../components/DeliveryExamples.vue";

const deliveries = ref([])
const urls = ref([])
const route = useRoute()

const getDeliveryCities = async () => {
  const {data} = await axios.get('https://api.waix.ru/site/navigate/?project=2')
  urls.value = data.result.gruzoperevozki
  let objUrls = []
  let pageId = []
  urls.value.forEach(element => {
    for(let key in element.sub) {
      objUrls.push(element.sub[key])
    }
  });
  objUrls.filter(item => {
    item.url == route.params.id ? pageId.push(item.page_id) : "No"
  })
  const res = await axios.get(`https://api.waix.ru/site/pages/${pageId}?project=2`)
  deliveries.value = res.data.result
  console.log(res)
}

const tabItems = reactive([
  {
    title: "Доставка грузов",
    items: [
      { name: "Доставка из Гуанчжоу", url: "" },
      { name: "Авто-доставка из Китая", url: "" },
      { name: "Доставка из ИУ", url: "" },
      { name: "Авиа доставка из Китая", url: "" },
    ],
  },
  {
    title: "Доставка товаров",
    items: [{ name: "Посылка из Китая", url: "" }],
  },
]);

onMounted(async () => {
  await getDeliveryCities();
});
</script>
<template>
  <div class="main-content">
    <div class="container">
      <h1 class="main-content__title">{{ deliveries.title }}</h1>
    </div>
    <div class="container">
      <div class="main-content__wrapper">
        <AsideTabs :tabItems="tabItems" class="delivery-aside" />
        <div class="content">
          <ul class="content__links">
            <li class="content__item">
              <router-link :to="{path: '/'}" class="content__link">Главная</router-link>
            </li>
            <li class="content__item">\</li>
            <li class="content__item">
              <router-link :to="{path:'/gruzoperevozki'}" class="content__link"
                >Грузоперевозки</router-link
              >
            </li>
            <li class="content__item" style="margin: 0 15px">\</li>
            <li class="content__item">
                {{ deliveries.title }}
            </li>
          </ul>
          <div class="content__wrapper">
           
            <div v-html="deliveries.content"></div>
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

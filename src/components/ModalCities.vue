<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

defineEmits(["deactiveCityModal"]);

</script>
<template>
  <div class="header__city">
    <div class="header__city-content">
      <ul class="header__city-list" style="columns: 5">
        <li class="header__city-item">
          <router-link :to="{name: route.name, params: {city: 'spb'} }">Санкт-Петербург</router-link>
        </li>
        <li class="header__city-item">
          <a href="/nsk/">Новосибирск</a>
        </li>
        <li class="header__city-item">
          <a href="/chelyabinsk/">Челябинск</a>
        </li>
        <li class="header__city-item"><a href="/omsk/">Омск</a></li>
        <li class="header__city-item">
          <a href="/samara/">Самара</a>
        </li>
        <li class="header__city-item">
          <a href="/rnd/">Ростов-на-Дону</a>
        </li>
        <li class="header__city-item">
          <a href="/krasnoyarsk/">Красноярск</a>
        </li>
        <li class="header__city-item">
          <a href="/volgograd/">Волгоград</a>
        </li>
        <li class="header__city-item">
          <a href="/ekb/">Екатеринбург</a>
        </li>
        <li class="header__city-item">
          <a href="/nn/">Нижний Новгород</a>
        </li>
        <li class="header__city-item"><a href="/kzn/">Казань</a></li>
        <li class="header__city-item"><a href="/irk/">Иркутск</a></li>
        <li class="header__city-item">
          <a href="/Cheboksary/">Чебоксары</a>
        </li>
        <li class="header__city-item">
          <a href="/Balashikha/">Балашиха</a>
        </li>
        <li class="header__city-item">
          <a href="/Kaliningrad/">Калининград</a>
        </li>
        <li class="header__city-item"><a href="/Tula/">Тула</a></li>
        <li class="header__city-item"><a href="/Kursk/">Курск</a></li>
        <li class="header__city-item">
          <a href="/Sevastopol/">Севастополь</a>
        </li>
        <li class="header__city-item"><a href="/Sochi/">Сочи</a></li>
        <li class="header__city-item"><a href="//">Ставрополь</a></li>
        <li class="header__city-item">
          <a href="/Ulan-Ude/">Улан-Удэ</a>
        </li>
        <li class="header__city-item"><a href="/Tver/">Тверь</a></li>
        <li class="header__city-item">
          <a href="/Magnitogorsk/">Магнитогорск</a>
        </li>
        <li class="header__city-item">
          <a href="/Ivanovo/">Иваново</a>
        </li>
        <li class="header__city-item">
          <a href="/Bryansk/">Брянск</a>
        </li>
        <li class="header__city-item">
          <a href="/Belgorod/">Белгород</a>
        </li>
        <li class="header__city-item">
          <a href="/surgut/">Сургут</a>
        </li>
        <li class="header__city-item">
          <a href="/Vladimir/">Владимир</a>
        </li>
        <li class="header__city-item">
          <a href="/nizhniy-tagil/">Нижний Тагил</a>
        </li>
        <li class="header__city-item"><a href="/Chita/">Чита</a></li>
        <li class="header__city-item">
          <a href="/Arkhangelsk/">Архангельск</a>
        </li>
        <li class="header__city-item">
          <a href="/Simferopol/">Симферополь</a>
        </li>
        <li class="header__city-item">
          <a href="/Kaluga/">Калуга</a>
        </li>
        <li class="header__city-item">
          <a href="/Smolensk/">Смоленск</a>
        </li>
        <li class="header__city-item">
          <a href="/Volzhsky/">Волжский</a>
        </li>
        <li class="header__city-item">
          <a href="/Yakutsk/">Якутск</a>
        </li>
        <li class="header__city-item">
          <a href="/Saransk/">Саранск</a>
        </li>
        <li class="header__city-item">
          <a href="/Cherepovets/">Череповец</a>
        </li>
        <li class="header__city-item">
          <a href="/Kurgan/">Курган</a>
        </li>
        <li class="header__city-item">
          <a href="/Vologda/">Вологда</a>
        </li>
        <li class="header__city-item"><a href="//">Орел</a></li>
        <li class="header__city-item">
          <a href="/Vladikavkaz/">Владикавказ</a>
        </li>
        <li class="header__city-item">
          <a href="/Podolsk/">Подольск</a>
        </li>
        <li class="header__city-item">
          <a href="/Grozny/">Грозный</a>
        </li>
        <li class="header__city-item">
          <a href="/Murmansk/">Мурманск</a>
        </li>
        <li class="header__city-item">
          <a href="/Tambov/">Тамбов</a>
        </li>
        <li class="header__city-item">
          <a href="/Petrozavodsk/">Петрозаводск</a>
        </li>
        <li class="header__city-item">
          <a href="/Sterlitamak/">Стерлитамак</a>
        </li>
        <li class="header__city-item">
          <a href="/nizhnevartovsk/">Нижневартовск</a>
        </li>
        <li class="header__city-item">
          <a href="/kostroma/">Кострома</a>
        </li>
        <li class="header__city-item">
          <a href="/novorossiysk/">Новороссийск</a>
        </li>
        <li class="header__city-item">
          <a href="/yoshkar-Ola/">Йошкар-Ола</a>
        </li>
        <li class="header__city-item">
          <a href="/khimki/">Химки</a>
        </li>
        <li class="header__city-item">
          <a href="/krasnodar/">Краснодар</a>
        </li>
        <li class="header__city-item">
          <a href="/tyumen/">Тюмень</a>
        </li>
        <li class="header__city-item">
          <a href="/tolyatti/">Тольятти</a>
        </li>
        <li class="header__city-item">
          <a href="/izhevsk/">Ижевск</a>
        </li>
        <li class="header__city-item">
          <a href="/barnaul/">Барнаул</a>
        </li>
        <li class="header__city-item">
          <a href="/ulyanovsk/">Ульяновск</a>
        </li>
        <li class="header__city-item">
          <a href="/khabarovsk/">Хабаровск</a>
        </li>
        <li class="header__city-item">
          <a href="/yaroslavl/">Ярославль</a>
        </li>
        <li class="header__city-item">
          <a href="/vladivostok/">Владивосток</a>
        </li>
        <li class="header__city-item">
          <a href="/makhachkala/">Махачкала</a>
        </li>
        <li class="header__city-item"><a href="/tomsk/">Томск</a></li>
        <li class="header__city-item">
          <a href="/orenburg/">Оренбург</a>
        </li>
        <li class="header__city-item">
          <a href="/kemerovo/">Кемерово</a>
        </li>
        <li class="header__city-item">
          <a href="/novokuznetsk/">Новокузнецк</a>
        </li>
        <li class="header__city-item">
          <a href="/ryazan/">Рязань</a>
        </li>
        <li class="header__city-item">
          <a href="/astrakhan/">Астрахань</a>
        </li>
        <li class="header__city-item">
          <a href="/naberezhnye-chelny/">Набережные-Челны</a>
        </li>
        <li class="header__city-item"><a href="/penza/">Пенза</a></li>
        <li class="header__city-item"><a href="/kirov/">Киров</a></li>
        <li class="header__city-item">
          <a href="/lipetsk/">Липецк</a>
        </li>
        <li class="header__city-item">
          <a href="/saratov/">Саратов</a>
        </li>
        <li class="header__city-item"><a href="/msk/">Москва</a></li>
      </ul>
      <div class="header__city-close" @click="$emit('close')"></div>
    </div>
  </div>
</template>

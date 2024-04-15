<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const cityNames = [
  {slug: 'spb', cityName: 'Санкт-Петербург'},
  {slug: 'nsk', cityName: 'Новосибирск'},
  {slug: 'chelyabinsk', cityName: 'Челябинск'},
  {slug: 'omsk', cityName: 'Омск'},
  {slug: 'samara', cityName: 'Самара'},
  {slug: 'rnd', cityName: 'Ростов-на-Дону'},
  {slug: 'krasnoyarsk', cityName: 'Красноярск'},
  {slug: 'volgograd', cityName: 'Волгоград'},
  {slug: 'ekb', cityName: 'Екатеринбург'},
  {slug: 'nn', cityName: 'Нижний Новгород'},
  {slug: 'kzn', cityName: 'Казань'},
  {slug: 'irk', cityName: 'Иркутск'},
  {slug: 'Cheboksary', cityName: 'Чебоксары'},
  {slug: 'Balashikha', cityName: 'Балашиха'},
  {slug: 'Kaliningrad', cityName: 'Калининград'},
  {slug: 'Tula', cityName: 'Тула'},
  {slug: 'Kursk', cityName: 'Курск'},
  {slug: 'Sevastopol', cityName: 'Севастополь'},
  {slug: 'Sochi', cityName: 'Сочи'},
  {slug: '', cityName: 'Ставрополь'},
  {slug: 'Ulan-Ude', cityName: 'Улан-Удэ'},
  {slug: 'Tver', cityName: 'Тверь'},
  {slug: 'Magnitogorsk', cityName: 'Магнитогорск'},
  {slug: 'Ivanovo', cityName: 'Иваново'},
  {slug: 'Bryansk', cityName: 'Брянск'},
  {slug: 'Belgorod', cityName: 'Белгород'},
  {slug: 'surgut', cityName: 'Сургут'},
  {slug: 'Vladimir', cityName: 'Владимир'},
  {slug: 'nizhniy-tagil', cityName: 'Нижний Тагил'},
  {slug: 'Chita', cityName: 'Чита'},
  {slug: 'Arkhangelsk', cityName: 'Архангельск'},
  {slug: 'Simferopol', cityName: 'Симферополь'},
  {slug: 'Kaluga', cityName: 'Калуга'},
  {slug: 'Smolensk', cityName: 'Смоленск'},
  {slug: 'Volzhsky', cityName: 'Волжский'},
  {slug: 'Yakutsk', cityName: 'Якутск'},
  {slug: 'Saransk', cityName: 'Саранск'},
  {slug: 'Cherepovets', cityName: 'Череповец'},
  {slug: 'Kurgan', cityName: 'Курган'},
  {slug: 'Vologda', cityName: 'Вологда'},
  {slug: '', cityName: 'Орел'},
  {slug: 'Vladikavkaz', cityName: 'Владикавказ'},
  {slug: 'Podolsk', cityName: 'Подольск'},
  {slug: 'Grozny', cityName: 'Грозный'},
  {slug: 'Murmansk', cityName: 'Мурманск'},
  {slug: 'Tambov', cityName: 'Тамбов'},
  {slug: 'Petrozavodsk', cityName: 'Петрозаводск'},
  {slug: 'Sterlitamak', cityName: 'Стерлитамак'},
  {slug: 'nizhnevartovsk', cityName: 'Нижневартовск'},
  {slug: 'kostroma', cityName: 'Кострома'},
  {slug: 'novorossiysk', cityName: 'Новороссийск'},
  {slug: 'yoshkar-Ola', cityName: 'Йошкар-Ола'},
  {slug: 'khimki', cityName: 'Химки'},
  {slug: 'krasnodar', cityName: 'Краснодар'},
  {slug: 'tyumen', cityName: 'Тюмень'},
  {slug: 'tolyatti', cityName: 'Тольятти'},
  {slug: 'izhevsk', cityName: 'Ижевск'},
  {slug: 'barnaul', cityName: 'Барнаул'},
  {slug: 'ulyanovsk', cityName: 'Ульяновск'},
  {slug: 'khabarovsk', cityName: 'Хабаровск'},
  {slug: 'yaroslavl', cityName: 'Ярославль'},
  {slug: 'vladivostok', cityName: 'Владивосток'},
  {slug: 'makhachkala', cityName: 'Махачкала'},
  {slug: 'tomsk', cityName: 'Томск'},
  {slug: 'orenburg', cityName: 'Оренбург'},
  {slug: 'kemerovo', cityName: 'Кемерово'},
  {slug: 'novokuznetsk', cityName: 'Новокузнецк'},
  {slug: 'ryazan', cityName: 'Рязань'},
  {slug: 'astrakhan', cityName: 'Астрахань'},
  {slug: 'naberezhnye-chelny', cityName: 'Набережные-Челны'},
  {slug: 'penza', cityName: 'Пенза'},
  {slug: 'kirov', cityName: 'Киров'},
  {slug: 'lipetsk', cityName: 'Липецк'},
  {slug: 'saratov', cityName: 'Саратов'},
  {slug: 'msk', cityName: 'Москва'},
]

defineEmits(['deactiveCityModal', 'getCityName']);

</script>
<template>
  <div class="header__city">
    <div class="header__city-content">
      <ul class="header__city-list" style="columns: 5">
        <li class="header__city-item" v-for="city in cityNames">
          <router-link @click="$emit('getCityName', city.cityName)" :to="{name: route.name, params: {city: city.slug} }">{{ city.cityName }}</router-link>
        </li>
      </ul> 
      <div class="header__city-close" @click="$emit('close')"></div>
    </div>
  </div>
</template>

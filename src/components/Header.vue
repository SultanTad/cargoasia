<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top-wrapper">
          <div class="header__city-block">
            <span class="header__city-prev">г. Москва</span>
            <div class="header__city">
              <div class="header__city-content">
                <!-- <ul class="header__city-list" style="columns: 5">
                  <li class="header__city-item">
                    <a href="/spb/">Санкт-Петербург</a>
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
                </ul> -->
                <div class="header__city-close"></div>
              </div>
            </div>
          </div>
          <div class="header__numbers">
            <a href="tel:88047004223" class="header__numbers-tel"
              ><picture
                ><source
                  srcset="/images/tel-russia.webp"
                  type="image/webp" />
                <img
                  src="/images/tel-russia.webp"
                  alt="Russia"
                  class="header__numbers-ico" /></picture
              >8 804 700-4223</a
            >
            <a href="tel:+8617800696877" class="header__numbers-tel"
              ><picture
                ><source
                  srcset="/images/tel-china.webp"
                  type="image/webp" />
                <img
                  src="/images/tel-china.webp"
                  alt="China"
                  class="header__numbers-ico" /></picture
              >+86 17800696877</a
            >
          </div>
          <div class="header__cab">
            <a rel="nofollow" href="https://lk.cargoasia.info/profile/">
              <div class="header__cab-svg">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 0a4.9 4.9 0 0 0-1.84.38c-.09.03-.17.05-.25.09-.04.01-.06.04-.1.06-.2.1-.4.22-.6.34-.02.02-.06.02-.09.04l-.15.12c-.16.11-.32.22-.47.35-.13.12-.25.27-.38.4-.42.44-.79.9-1.09 1.44-.51.9-.9 1.92-1.06 2.97a.42.42 0 0 0-.22 0c-.53.17-.65 1.17-.31 2.22.2.61.53 1.1.87 1.37A7.47 7.47 0 0 0 9 13.97V15l-1 1-2 1-4.84 2.4C.26 19.96-.1 21 0 22c.04.63-.18 1.43.44 1.84.59.3 1.3.11 1.93.16H23.1c.76-.05.97-.86.9-1.5.01-.93.07-1.98-.66-2.69-.59-.6-1.43-.84-2.15-1.25-1.06-.52-2.13-1.03-3.19-1.56l-2-1-1-1v-1.03a7.47 7.47 0 0 0 2.69-4.19c.34-.27.67-.76.87-1.37.34-1.05.21-2.05-.31-2.22a.42.42 0 0 0-.22 0 8.77 8.77 0 0 0-1.06-2.97c-.3-.54-.67-1-1.1-1.44-.12-.13-.24-.28-.37-.4h-.03A5.69 5.69 0 0 0 12.8.05h-.06C12.5.02 12.25 0 12 0z"
                  ></path>
                  <path
                    d="M0 23c.03.3.13.6.44.8.59.3 1.3.1 1.94.2H23.1c.57-.1.84-.5.9-1H0z"
                  ></path>
                </svg>
              </div>
              <span class="header__cab-text">Кабинет</span>
            </a>
          </div>
          <div class="header__soc">
            <span class="header__soc-text">Напиши нам</span>
            <!--<a href="viber://chat?number=79645468368" class="header__soc-link"><picture><source srcset="/bitrix/templates/car/img/soc-viber.webp" type="image/webp"><img src="/bitrix/templates/car/img/soc-viber.webp" alt="Viber" class="header__soc-ico"></picture></a>-->
            <!--<a href="https://api.whatsapp.com/send?phone=79645468368" class="header__soc-link"><picture><source srcset="/bitrix/templates/car/img/soc-watssup.webp" type="image/webp"><img src="/bitrix/templates/car/img/soc-watssup.webp" alt="Whatssup" class="header__soc-ico"></picture></a>-->
            <a href="https://t.me/cargoasiabot" class="header__soc-link"
              ><picture
                ><source
                  srcset="/images/soc-telegram.webp"
                  type="image/webp" />
                <img
                  src="/images/soc-telegram.webp"
                  alt="Telegram"
                  class="header__soc-ico" /></picture
            ></a>
            <a href="https://vk.com/club198703643" class="header__soc-link"
              ><picture
                ><source
                  srcset="/images/soc-vk.webp"
                  type="image/webp" />
                <img
                  src="/images/soc-vk.webp"
                  alt="Vk"
                  class="header__soc-ico" /></picture
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="header__content">
      <div class="container">
        <div class="header__content-wrapper">
          <div class="header__logo">
            <a href="/msk/"
              ><picture
                ><source
                  srcset="/images/logo.webp"
                  type="image/webp" />
                <img
                  src="/images/logo.webp"
                  title="Азия Карго | Карго Китай"
                  alt="Азия Карго | Карго Китай"
                  class="header__logo-img" /></picture
            ></a>
          </div>
          <div class="header__number-list">
            <div class="header__number-listWrapp">
              <a href="tel:88047004223" class="header__number-item"
                ><picture
                  ><source
                    srcset="/images/tel-russia.webp"
                    type="image/webp" />
                  <img
                    src="/images/tel-russia.webp"
                    alt="Russia"
                    class="header__numbers-ico" /></picture
                >8 804 700-4223</a
              >
              <a
                href="tel:+8617800696877"
                class="header__number-item number-item-active"
                ><picture
                  ><source
                    srcset="/images/tel-china.webp"
                    type="image/webp" />
                  <img
                    src="/images/tel-china.webp"
                    alt="China"
                    class="header__numbers-ico" /></picture
                >+86 17800696877</a
              >
            </div>
            <div class="hidden"></div>
          </div>
          <nav class="header__nav">
            <ul class="header__list">
              <li class="header__item">
                <a
                  href="/msk/gruzoperevozki/"
                  class="header__nav-link active nav-link-tap gruz_click"
                  >Грузоперевозка</a
                >
                <ul class="header__dropdown">
                  <ul class="header__dropdown1">
                    <li class="header__dropdown-item">
                      <a href="#" class="header__dropdown-linkTitle"
                        >Доставка грузов</a
                      >
                    </li>

                    <li class="header__dropdown-item">
                      <a
                        href="/msk/gruzoperevozki/dostavka-iz-guanchzhou/"
                        class="header__dropdown-link"
                        >Доставка из Гуанчжоу</a
                      >
                    </li>

                    <li class="header__dropdown-item">
                      <a
                        href="/msk/gruzoperevozki/avto-dostavka-iz-kitaya/"
                        class="header__dropdown-link"
                        >Авто-доставка из Китая</a
                      >
                    </li>

                    <li class="header__dropdown-item">
                      <a
                        href="/msk/gruzoperevozki/dostavka-iz-iu/"
                        class="header__dropdown-link"
                        >Доставка из ИУ</a
                      >
                    </li>

                    <li class="header__dropdown-item">
                      <a
                        href="/msk/gruzoperevozki/avia-dostavka/"
                        class="header__dropdown-link"
                        >Авиа доставка из Китая</a
                      >
                    </li>
                  </ul>
                  <ul class="header__dropdown2">
                    <li class="header__dropdown-item">
                      <a href="#" class="header__dropdown-linkTitle"
                        >Доставка товаров</a
                      >
                    </li>
                    <li class="header__dropdown-item">
                      <a
                        href="/msk/gruzoperevozki/posylka-iz-kitaya/"
                        class="header__dropdown-link"
                        >Посылка из Китая</a
                      >
                    </li>
                  </ul>
                </ul>
              </li>

              <li class="header__item">
                <a href="/msk/services/" class="header__nav-link">Услуги</a>
              </li>

              <li class="header__item">
                <a href="/msk/about/" class="header__nav-link">О компании</a>
              </li>

              <li class="header__item">
                <a href="/msk/lk.php" class="header__nav-link">Создать заказ</a>
              </li>

              <li class="header__item">
                <a href="/msk/contacts/" class="header__nav-link">Контакты</a>
              </li>
            </ul>

            <div class="header__menu-bottom">
              <div class="header__numbers">
                <a
                  href="tel:88047004223"
                  class="header__numbers-tel menu-bottom-tel"
                  ><picture
                    ><source
                      srcset="/images/tel-russia.webp"
                      type="image/webp" />
                    <img
                      src="/images/tel-russia.webp"
                      alt="Russia"
                      class="header__numbers-ico" /></picture
                  >88047004223</a
                >
                <a
                  href="tel:+8617800696877"
                  class="header__numbers-tel menu-bottom-tel"
                  ><picture
                    ><source
                      srcset="/images/tel-china.webp"
                      type="image/webp" />
                    <img
                      src="/images/tel-china.webp"
                      alt="China"
                      class="header__numbers-ico" /></picture
                  >+86 17800696877</a
                >
              </div>
              <div class="header__btn-wrap btn-wrap-menu">
                <a href="#" class="header__btn btn-wrap-menu"
                  >Заказать звонок</a
                >
              </div>
            </div>
          </nav>
          <div class="header__btn-wrap">
            <a href="#" class="header__btn">Заказать звонок</a>
          </div>
          <div class="header-bottom__cab">
            <a rel="nofollow" href="https://lk.cargoasia.info/profile/">
              <div class="header__cab-svg">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 0a4.9 4.9 0 0 0-1.84.38c-.09.03-.17.05-.25.09-.04.01-.06.04-.1.06-.2.1-.4.22-.6.34-.02.02-.06.02-.09.04l-.15.12c-.16.11-.32.22-.47.35-.13.12-.25.27-.38.4-.42.44-.79.9-1.09 1.44-.51.9-.9 1.92-1.06 2.97a.42.42 0 0 0-.22 0c-.53.17-.65 1.17-.31 2.22.2.61.53 1.1.87 1.37A7.47 7.47 0 0 0 9 13.97V15l-1 1-2 1-4.84 2.4C.26 19.96-.1 21 0 22c.04.63-.18 1.43.44 1.84.59.3 1.3.11 1.93.16H23.1c.76-.05.97-.86.9-1.5.01-.93.07-1.98-.66-2.69-.59-.6-1.43-.84-2.15-1.25-1.06-.52-2.13-1.03-3.19-1.56l-2-1-1-1v-1.03a7.47 7.47 0 0 0 2.69-4.19c.34-.27.67-.76.87-1.37.34-1.05.21-2.05-.31-2.22a.42.42 0 0 0-.22 0 8.77 8.77 0 0 0-1.06-2.97c-.3-.54-.67-1-1.1-1.44-.12-.13-.24-.28-.37-.4h-.03A5.69 5.69 0 0 0 12.8.05h-.06C12.5.02 12.25 0 12 0z"
                  ></path>
                  <path
                    d="M0 23c.03.3.13.6.44.8.59.3 1.3.1 1.94.2H23.1c.57-.1.84-.5.9-1H0z"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div class="header__burger"><span></span></div>
        </div>
      </div>

      <!-- <div class="popup">
      <div class="popup__overlay">
        <div class="popup__content">
          <h3 class="popup__title">Заполните форму</h3>
          <p class="popup__subtitle">Оставьте заявку нам менеджер ответит вам в ближайшее время</p>
          <form action="#" class="popup__form" novalidate>
            <input type="text" required placeholder="Имя" class="popup__inp" name="name">
            <input type="tel" required placeholder="Телефон" class="popup__inp" name="phone">
            <textarea rows="4" placeholder="Коментарии" class="popup__inp" name="comment"></textarea>
            <div class="popup__wrap">
              <button class="popup__btn main-btn">Отправить</button><span class="popup__varning">введите имя</span>
            </div>
          </form>
          <div class="popup__close"></div>
        </div>
      </div>
    </div> -->
    </div>
  </header>
</template>

<style>
.header__top {
  font-size: 15px;
  background-color: #f4f4f4;
}

.header__top-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header__city-item a {
  color: #3b3b3b;
}

.header__city-item a:hover {
  color: #3b3b3b;
  text-decoration: underline;
}

.header__city-item {
  font-size: 16px;
  color: #000;
  font-family: "Montserrat-Medium";
}

.header__content {
  font-size: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e9e9e9;
}

.header__content-wrapper {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 92px;
}

.header__logo {
  width: 180px;
}

.header__nav {
  -ms-flex-item-align: center;
  align-self: center;
}

.header__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.header__nav {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 65.5px;
}

.header__item {
  height: 100%;
}

.header__item:not(:last-child) {
  margin-right: 55px;
}

.header__dropdown {
  width: 50%;
  display: none;
  padding: 20px 40px;
  background-color: #fff;
  top: 92px;
  font-size: 16px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: absolute;
  z-index: 5;
}

.header__dropdown1 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  margin-right: 40px;
}

.header__dropdown-linkTitle {
  font-size: 14px;
  margin-bottom: 10px;
  color: #000;
  font-family: Montserrat-Medium;
}

.header__dropdown-link {
  color: #3b3b3b;
  font-size: 14px;
  font-family: Montserrat-Light;
}

.header__dropdown-item {
  margin: 15px 0;
}

.header__dropdown2 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
}

.header__btn {
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  display: block;
  line-height: normal;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  padding: 13px 30px;
  background-color: #ffb900;
}

.header__menu-bottom {
  display: none;
}

.header__nav.nav_active {
  opacity: 1;
  visibility: visible;
}

.header__city-close {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: transparent;
}

.header__city-close::after,
.header__city-close::before {
  content: "";
  width: 30px;
  height: 1px;
  background-color: #ffb900;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -15px;
  margin-top: -1px;
}

.header__city-close::before {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.header__city-close::after {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.header__city-block {
  border: none;
  line-height: 2.1;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-left: 25px;
  font-size: 18px;
  background-color: transparent;
  margin-left: 7px;
  background-image: url(/images/location.webp);
  background-repeat: no-repeat;
  background-position: left center;
}

.header__city-block {
  font-size: 16px;
}

.header__city-block {
  padding: 10px 0 10px 20px;
}

.webp .header__city-block {
  background-image: url(/images/location.webp);
}

.header__city-prev {
  cursor: pointer;
  font-size: 15px;
}

.lock {
  overflow: hidden;
}

.header__btn {
  font-weight: bold;
}

.slider-item__subtitle {
  font-weight: bold;
}

.header__number-listWrapp a {
  font-size: 15px;
}

.header__number-listWrapp::after {
  top: 20px;
}

.header__number-listWrapp::after {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  content: "";
  width: 15px;
  height: 10px;
  position: absolute;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  top: 14px;
  right: 10px;
  background-image: url(../img/number-arrov.webp);
  background-repeat: no-repeat;
  background-position: center;
}

.header__number-listWrapp {
  padding-top: 10px;
  padding-left: 10px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  border-radius: 10px;
  padding: 15 20px;
  background-color: #fff;
  z-index: 10;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: absolute;
  top: -10px;
  right: 0;
  left: 0;
}

li:hover .header__nav-link {
  color: #ffc733;
}

li:hover .header__nav-link::after {
  width: 100%;
}

.header__nav-link {
  line-height: 1.5;
  position: relative;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  font-size: 16px;
  color: #000;
}

.header__nav-link:not(:first-child) {
  margin-left: 40px;
}

.header__nav-link::after {
  cursor: default;
  position: absolute;
  content: "";
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  width: 0;
  height: 1px;
  background-color: #ffb900;
  bottom: -38px;
  left: 0;
}

.header__city-content {
  border: 1px solid #f9c647;
}

.header__city-content {
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 450px;
  z-index: 10;
  top: 50%;
  left: 50%;
  padding: 40px;
  border-radius: 5px;
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.header__city-list:first-child {
  margin-right: 30px;
}

.header__dropdown {
  border: 1px solid #eeeeee;
}

.header__number-list {
  display: none;
}

.header__number-list {
  width: 200px;
  margin-top: -13px;
}

.header__number-list {
  padding: 10px 0;
  width: 170px;
  position: relative;
}

.number-item-active {
    display: none;
    padding: 10px 0;
    margin-right: 6px
}

.number-item-active.active {
    display: block
}

.header__number-item {
    font-family: "Montserrat-Medium";
    color: #000
}

.header_fixed {
  top: 0;
  width: 100%;
  position: fixed;
  background: #fff;
  z-index: 1000;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.header_fixed .header__number-list {
  display: block;
}

.header_fixed .header__number-listWrapp.active {
  -webkit-box-shadow: 0 0 11px 3px rgba(13, 42, 18, 0.17);
  box-shadow: 0 0 11px 3px rgba(13, 42, 18, 0.17);
}

.header_fixed .header__number-listWrapp.active::after {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

header.header {
  min-height: 146px;
}

.header__dropdown-linkTitle {
  cursor: default;
}

.header__cab {
  flex: 0.2 auto;
}

.header__cab a {
  display: flex;
  align-items: center;
}

.header__cab-text {
  line-height: 2.2;
  font-family: "Montserrat-Light";
  color: black;
}

.header__cab-svg {
  background: #fdb913;
  width: 21px;
  height: auto;
  margin-right: 4px;
  border: 1px solid #fdb913;
  border-radius: 50%;
  text-align: center;
  margin-right: 10px;
}

.header__cab-svg svg {
  fill: #fff;
  stroke: transparent;
  stroke-width: 0px;
  height: 15px;
  width: 15px;
  margin: 2px;
}

.header-bottom__cab {
  display: none;
}

.header-bottom__cab .header__cab-svg {
  width: 35px;
}

.header-bottom__cab .header__cab-svg svg {
  height: 30px;
  width: 30px;
}

.header__city-content {
  width: 1150px;
}

.header__city-list {
  max-width: 100%;
}

.header__city-list {
  font-size: 15px;
  position: relative;
  display: block;
  width: 100%;
  max-width: 160px;
}

.header__city {
  z-index: 10000;
}

.header__city {
  position: fixed;
  left: 50%;
  z-index: 10;
  display: none;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  top: 0;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100vw;
  height: 100vh;
}

.header__numbers {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

.header__numbers-tel {
  display: inline-block;
  line-height: normal;
  font-family: "Montserrat-Medium";
  color: #000;
}

.header__numbers-tel picture {
  display: inline-block;
}

.header__numbers-tel:first-of-type {
  margin-left: 25%;
  margin-right: 30px;
}

.header__numbers-ico {
  margin-right: 5px;
  display: inline-block;
  width: 18px;
  padding-bottom: 2.2px;
}

.header__soc {
  margin: 0 0 0 auto;
}

.webp .header__soc-text {
  background-image: url(/images/text-arrow.webp);
}

.header__soc-text {
  line-height: 2.2;
  font-family: "Montserrat-Light";
  color: rgba(0, 0, 0, 0.82);
  padding-right: 40px;
  background-image: url(/images/text-arrow.webp);
  background-repeat: no-repeat;
  background-position: right center;
  margin-right: 20px;
}

.header__soc-link {
  display: inline-block;
  margin: 0 5px;
}

.active_li_a {
  color: #0b0b0b !important;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
}

.header__burger {
  cursor: pointer;
  display: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffb900;
  position: relative;
}

.header__burger span {
  position: absolute;
  position: relative;
  display: block;
  width: 30px;
  height: 1.5px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.header__burger span::after,
.header__burger span::before {
  content: "";
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  position: absolute;
  width: 30px;
  height: 1.5px;
  background-color: #fff;
}

.header__burger span::before {
  top: -7px;
}

.header__burger span::after {
  top: 7px;
}

.burger_active span {
  height: 0;
}

.burger_active span::before {
  top: 0;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.burger_active span::after {
  top: 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

@media (min-width: 1024px) {
    .active_li_a:hover {
    color: #e31e24 !important;
  }

  .header__city-prev:hover {
    text-decoration: underline;
  }

  .header__dropdown-link:hover {
    font-family: "Montserrat-Regular";
    color: #272626;
  }

  .header_fixed .header__number-listWrapp:hover {
    -webkit-box-shadow: 0 0 11px 3px rgba(13, 42, 18, 0.17);
    box-shadow: 0 0 11px 3px rgba(13, 42, 18, 0.17);
  }

  .header_fixed .header__number-listWrapp:hover .number-item-active {
    display: block;
  }

  .header_fixed .header__number-listWrapp:hover::after {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

@media (max-width: 1024px) {
  .header__city-block {
    margin: 0 auto 0 0;
  }

  .header__top-wrapper {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .header__city-list {
    margin: 0 auto 0 0;
  }

  .header__numbers {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }

  .header__numbers-tel:first-of-type {
    margin: 0 20px 0 0;
  }

  .header__cab {
    flex: unset;
    margin: 0 0 0 auto;
  }

  .header__soc {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
  }

}
</style>

<script setup>
</script>
<template>
  <section class="main-content">
    <div class="container">
      <h1 class="main-content__title">Грузоперевозки</h1>
    </div>
    <div class="container">
      <div class="content">
        <ul class="content__links">
          <li class="content__item">
            <a href="/msk/" class="content__link">Главная</a>
          </li>
          <li class="content__item">\</li>
          <li class="content__item">Грузоперевозки</li>
        </ul>
        <div class="content__examples">
          <div class="row">
            <div class="col-md-4">
              <div class="content__examples-card">
                <div class="content__examples-imgBl">
                  <router-link :to="{name: 'DeliveryFromCities'}"
                    ><picture
                      ><source
                        srcset="/images/ddc5a0913829b84936cc3d49a059616f.jpg"
                        type="image/webp" />
                      <img
                        src="/images/ddc5a0913829b84936cc3d49a059616f.jpg"
                        alt="clothers" /></picture
                  ></router-link>
                </div>
                <h3 class="content__examples-title">
                  <router-link :to="{name: 'DeliveryFromCities'}"
                    >Доставка из Гуанчжоу</router-link
                  >
                </h3>
                <router-link
                  :to="{ name:'DeliveryFromCities' }"
                  class="content__examples-btn"
                  >Подробнее</router-link
                >
              </div>
            </div>
            <div class="col-md-4">
              <div class="content__examples-card">
                <div class="content__examples-imgBl">
                  <a href="/msk/gruzoperevozki/avto-dostavka-iz-kitaya/"
                    ><picture
                      ><source
                        srcset="/images/f6c4aaf54a677c16c08bb0409b93d3b9.jpg"
                        type="image/webp" />
                      <img
                        src="/images/f6c4aaf54a677c16c08bb0409b93d3b9.jpg"
                        alt="clothers" /></picture
                  ></a>
                </div>
                <h3 class="content__examples-title">
                  <a href="/msk/gruzoperevozki/avto-dostavka-iz-kitaya/"
                    >Авто-доставка из Китая</a
                  >
                </h3>
                <a
                  href="/msk/gruzoperevozki/avto-dostavka-iz-kitaya/"
                  class="content__examples-btn"
                  >Подробнее</a
                >
              </div>
            </div>
            <div class="col-md-4">
              <div class="content__examples-card">
                <div class="content__examples-imgBl">
                  <a href="/msk/gruzoperevozki/dostavka-iz-iu/"
                    ><picture
                      ><source
                        srcset="/images/07aa8c5d46dc6b17d0f96cd89015fd17.jpg"
                        type="image/webp" />
                      <img
                        src="/images/07aa8c5d46dc6b17d0f96cd89015fd17.jpg"
                        alt="clothers" /></picture
                  ></a>
                </div>
                <h3 class="content__examples-title">
                  <a href="/msk/gruzoperevozki/dostavka-iz-iu/"
                    >Доставка из ИУ</a
                  >
                </h3>
                <a
                  href="/msk/gruzoperevozki/dostavka-iz-iu/"
                  class="content__examples-btn"
                  >Подробнее</a
                >
              </div>
            </div>
            <div class="col-md-4">
              <div class="content__examples-card">
                <div class="content__examples-imgBl">
                  <a href="/msk/gruzoperevozki/avia-dostavka/"
                    ><picture
                      ><source
                        srcset="/images/0a50a3b5085f426ef8737b6b2212b55f.jpg"
                        type="image/webp" />
                      <img
                        src="/images/0a50a3b5085f426ef8737b6b2212b55f.jpg"
                        alt="clothers" /></picture
                  ></a>
                </div>
                <h3 class="content__examples-title">
                  <a href="/msk/gruzoperevozki/avia-dostavka/"
                    >Авиа доставка из Китая</a
                  >
                </h3>
                <a
                  href="/msk/gruzoperevozki/avia-dostavka/"
                  class="content__examples-btn"
                  >Подробнее</a
                >
              </div>
            </div>
            <div class="col-md-4">
              <div class="content__examples-card">
                <div class="content__examples-imgBl">
                  <a href="/msk/gruzoperevozki/posylka-iz-kitaya/"
                    ><picture
                      ><source
                        srcset="/images/6c613ba5fcebde29ed40974dd694ece2.jpg"
                        type="image/webp" />
                      <img
                        src="/images/6c613ba5fcebde29ed40974dd694ece2.jpg"
                        alt="clothers" /></picture
                  ></a>
                </div>
                <h3 class="content__examples-title">
                  <a href="/msk/gruzoperevozki/posylka-iz-kitaya/"
                    >Посылка из Китая</a
                  >
                </h3>
                <a
                  href="/msk/gruzoperevozki/posylka-iz-kitaya/"
                  class="content__examples-btn"
                  >Подробнее</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.content__examples-imgBl {
  width: 100%;
  min-height: 170px;
  max-height: 170px;
}

.col-md-4 .content__examples-imgBl {
  height: 238px;
}

.col-md-4 .content__examples-imgBl img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-content__title {
  margin: 30px 0;
  font-family: "Montserrat-Bold";
  font-size: 45px;
}

.content__examples-title {
  margin: 15px 0 10px 0;
  font-family: "Montserrat-Bold";
  font-size: 15px;
}

.content {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 67%;
  flex: 0 1 67%;
  margin-left: auto;
}

.content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
}


.content {
  min-width: 0;
}

.content__examples {
  margin-bottom: 50px;
  position: relative;
}

.content__examples-card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  min-height: 328px;
  justify-content: space-between;
}

.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  width: 100%;
}

.row .content__examples-card .content__examples-btn {
  padding: 8px 25px;
}

.content__examples-btn {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.content__examples-btn {
  margin-top: 75px;
  border-radius: 7px;
  padding: 15px 30px;
  background-color: #ffb900;
  color: #fff;
  font-size: 15px;
}

</style>

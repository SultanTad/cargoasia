<template>
  <div class="main-content">
    <div class="container">
      <h1 class="main-content__title">Услуги</h1>
    </div>
    <div class="container">
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
            <a href="/msk/" class="content__link" itemprop="item">
              <span itemprop="name">Главная</span>
            </a>
            <meta itemprop="position" content="1" />
          </li>
          <li class="content__item">\</li>
          <li
            class="content__item"
            itemprop="itemListElement"
            itemscope=""
            itemtype="https://schema.org/ListItem"
          >
            <span itemprop="name">Услуги</span>
            <meta itemprop="position" content="2" />
          </li>
        </ul>
        <div class="content__examples">
          <div class="row service-page">
            <div class="col-md-4">
              <div class="content__examples-card">
                <div class="content__examples-imgBl">
                  <router-link :to="{ name: 'ServicePage' }"
                    ><picture
                      ><source
                        srcset="/images/630bc2ebc069ac20a0f7a22700c1aca0.jpg"
                        type="image/webp" />
                      <img
                        src="/images/630bc2ebc069ac20a0f7a22700c1aca0.jpg"
                        alt="clothers" /></picture
                  ></router-link>
                </div>
                <h3 class="content__examples-title">
                  <router-link :to="{ name: 'ServicePage' }"
                    >Аренда склада</router-link
                  >
                </h3>
                <p class="content__examples-subtitle"></p>
                <ul></ul>
                <p></p>
                <router-link
                  :to="{ name: 'ServicePage' }"
                  class="content__examples-btn"
                  >Подробнее</router-link
                >
              </div>
            </div>
            <div class="col-md-4">
              <div class="content__examples-card">
                <div class="content__examples-imgBl">
                  <a href="/msk/services/poisk-postavshchika-v-kitae/"
                    ><picture
                      ><source
                        srcset="/images/5651fc0a295e02a481f9a31b33812501.jpg"
                        type="image/webp" />
                      <img
                        src="/images/5651fc0a295e02a481f9a31b33812501.jpg"
                        alt="clothers" /></picture
                  ></a>
                </div>
                <h3 class="content__examples-title">
                  <a href="/msk/services/poisk-postavshchika-v-kitae/"
                    >Поиск поставщика в Китае</a
                  >
                </h3>
                <p class="content__examples-subtitle"></p>
                <a
                  href="/msk/services/poisk-postavshchika-v-kitae/"
                  class="content__examples-btn"
                  >Подробнее</a
                >
              </div>
            </div>
            <div class="col-md-4">
              <div class="content__examples-card">
                <div class="content__examples-imgBl">
                  <a href="/msk/services/strakhovanie-gruza/"
                    ><picture
                      ><source
                        srcset="/images/3f213dd6e70e6c689f44acdeba838f80.jpg"
                        type="image/webp" />
                      <img
                        src="/images/3f213dd6e70e6c689f44acdeba838f80.jpg"
                        alt="clothers" /></picture
                  ></a>
                </div>
                <h3 class="content__examples-title">
                  <a href="/msk/services/strakhovanie-gruza/"
                    >Страхование груза</a
                  >
                </h3>
                <p class="content__examples-subtitle">Страхование груза</p>
                <a
                  href="/msk/services/strakhovanie-gruza/"
                  class="content__examples-btn"
                  >Подробнее</a
                >
              </div>
            </div>
            <div class="col-md-4">
              <div class="content__examples-card">
                <div class="content__examples-imgBl">
                  <a href="/msk/services/inspektsiya-fabriki-postavshchika/"
                    ><picture
                      ><source
                        srcset="/images/523bad58a866bbca0427bac458c2c21a.jpg"
                        type="image/webp" />
                      <img
                        src="/images/523bad58a866bbca0427bac458c2c21a.jpg"
                        alt="clothers" /></picture
                  ></a>
                </div>
                <h3 class="content__examples-title">
                  <a href="/msk/services/inspektsiya-fabriki-postavshchika/"
                    >Инспекция фабрики поставщика</a
                  >
                </h3>
                <p class="content__examples-subtitle"></p>
                <a
                  href="/msk/services/inspektsiya-fabriki-postavshchika/"
                  class="content__examples-btn"
                  >Подробнее</a
                >
              </div>
            </div>
            <div class="col-md-4">
              <div class="content__examples-card">
                <div class="content__examples-imgBl">
                  <a href="/msk/services/vykup-tovara-s-alibaba/"
                    ><picture
                      ><source
                        srcset="/images/07b3a1a51bfacce185259f13e2b202d4.gif"
                        type="image/webp" />
                      <img
                        src="/images/07b3a1a51bfacce185259f13e2b202d4.gif"
                        alt="clothers" /></picture
                  ></a>
                </div>
                <h3 class="content__examples-title">
                  <a href="/msk/services/vykup-tovara-s-alibaba/"
                    >Выкуп товара с Алибаба</a
                  >
                </h3>
                <p class="content__examples-subtitle"></p>
                <a
                  href="/msk/services/vykup-tovara-s-alibaba/"
                  class="content__examples-btn"
                  >Подробнее</a
                >
              </div>
            </div>
            <div class="col-md-4">
              <div class="content__examples-card">
                <div class="content__examples-imgBl">
                  <a href="/msk/services/vykup-tovara-s-taobao/"
                    ><picture
                      ><source
                        srcset="/images/9a035b92600dc8b5e64f92a5d179069c.jpg"
                        type="image/webp" />
                      <img
                        src="/images/9a035b92600dc8b5e64f92a5d179069c.jpg"
                        alt="clothers" /></picture
                  ></a>
                </div>
                <h3 class="content__examples-title">
                  <a href="/msk/services/vykup-tovara-s-taobao/"
                    >Выкуп товара с Таобао</a
                  >
                </h3>
                <p class="content__examples-subtitle"><br /></p>
                <a
                  href="/msk/services/vykup-tovara-s-taobao/"
                  class="content__examples-btn"
                  >Подробнее</a
                >
              </div>
            </div>
            <div class="col-md-4">
              <div class="content__examples-card">
                <div class="content__examples-imgBl">
                  <a href="/msk/services/upakovka-gruza/"
                    ><picture
                      ><source
                        srcset="/images/5066a0fdd53706c4ae9a4e1913aa0788.jpg"
                        type="image/webp" />
                      <img
                        src="/images/5066a0fdd53706c4ae9a4e1913aa0788.jpg"
                        alt="clothers" /></picture
                  ></a>
                </div>
                <h3 class="content__examples-title">
                  <a href="/msk/services/upakovka-gruza/">Упаковка груза</a>
                </h3>
                <p class="content__examples-subtitle"></p>
                <a
                  href="/msk/services/upakovka-gruza/"
                  class="content__examples-btn"
                  >Подробнее</a
                >
              </div>
            </div>
            <div class="col-md-4">
              <div class="content__examples-card">
                <div class="content__examples-imgBl">
                  <a href="/msk/services/posrednik-taobao/"
                    ><picture
                      ><source
                        srcset="/images/a84d86c1480087e7b2a939d574ac989e.jpg"
                        type="image/webp" />
                      <img
                        src="/images/a84d86c1480087e7b2a939d574ac989e.jpg"
                        alt="clothers" /></picture
                  ></a>
                </div>
                <h3 class="content__examples-title">
                  <a href="/msk/services/posrednik-taobao/">Посредник ТаоБао</a>
                </h3>
                <p class="content__examples-subtitle"></p>
                <a
                  href="/msk/services/posrednik-taobao/"
                  class="content__examples-btn"
                  >Подробнее</a
                >
              </div>
            </div>
            <div class="col-md-4">
              <div class="content__examples-card">
                <div class="content__examples-imgBl">
                  <a
                    href="/msk/services/proizvodstvo-tovara-pod-svoim-brendom-v-kitae/"
                    ><picture
                      ><source
                        srcset="/images/a71816c9a9e3b9e4d06cfb8562113d9e.jpg"
                        type="image/webp" />
                      <img
                        src="/images/a71816c9a9e3b9e4d06cfb8562113d9e.jpg"
                        alt="clothers" /></picture
                  ></a>
                </div>
                <h3 class="content__examples-title">
                  <a
                    href="/msk/services/proizvodstvo-tovara-pod-svoim-brendom-v-kitae/"
                    >Производство товара под своим брендом в Китае</a
                  >
                </h3>
                <p class="content__examples-subtitle"></p>
                <a
                  href="/msk/services/proizvodstvo-tovara-pod-svoim-brendom-v-kitae/"
                  class="content__examples-btn"
                  >Подробнее</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.service-page .col-md-4 {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1060px) {
  .row {
    grid-template-columns: repeat(2, 1fr);
  }

  .service-page .col-md-4 {
    justify-content: center;
  }
}

@media (max-width: 700px) {
  .row {
    grid-template-columns: 1fr;
  }

  .content__examples-btn {
    margin-top: unset;
  }

  .content__examples-card {
    height: unset;
    min-height: unset;
    justify-content: unset;
  }

  .content__examples-subtitle {
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .service-page .col-md-4 {
    justify-content: unset;
  }
}
</style>

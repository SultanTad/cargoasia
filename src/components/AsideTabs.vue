<script setup>
defineProps({
  tabItems: Array,
});
</script>
<template>
  <div class="aside">
    <div class="aside__tab tab-1" v-for="arr in tabItems">
      <p class="aside__tab-title title-1 active">{{ arr.title }}</p>
      <ul class="aside__tab-list content-1 active">
        <li class="aside__tab-item" v-for="item in arr.items" :key="item">
          <router-link :to="{ name: item.url }" class="aside__tab-link">{{
            item.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.main-content__title {
  margin: 30px 0;
  font-family: "Montserrat-Bold";
  font-size: 45px;
}

.aside {
  -ms-flex-item-align: start;
  align-self: flex-start;
  border-radius: 10px;
  padding: 30px;
  border: 1px solid #d2d2d2;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 30%;
  flex: 0 1 30%;
}

.aside__tab {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.aside__tab-title {
  font-size: 17px;
  font-family: "Montserrat-Medium";
  cursor: pointer;
  padding: 0 40px 0 0;
  position: relative;
}

.aside__tab-title::after {
  content: "";
  top: 50%;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  width: 10px;
  height: 10px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  position: absolute;
  right: 0;
  background-image: url(../images/aside-title-arrow.webp);
  background-repeat: no-repeat;
  background-position: center;
}

.aside__tab-list {
  margin-top: 10px;
  padding: 0 0 0 20px;
}

.aside__tab-link {
  font-size: 16px;
  display: inline-block;
  margin: 5px 0;
  color: #8c8c8c;
  font-family: "Montserrat-Light";
}

.content-1,
.content-2 {
  display: none;
}

.active {
  display: inline-block;
}

.title-1.active::after,
.title-2.active::after {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

@media (min-width: 1000px) {
  .aside__tab-link:hover {
    font-family: "Montserrat-Regular";
    color: #272626;
  }
}

@media (max-width: 768px) {
  .content__rates-wrapper {
    flex-direction: column;
  }
}
</style>

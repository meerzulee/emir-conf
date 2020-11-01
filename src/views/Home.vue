<template>
  <div class="uppercase home">
    <!-- header -->
    <div class="relative flex w-full h-screen phone:h-full">
      <img
        src="@/assets/images/bg-header.png"
        class="object-cover object-bottom w-full h-full absolute inset-0"
        alt=""
      />
      <!--  -->
      <div class="relative w-1/2 secondary-trans laptop-mini:w-full">
        <div
          class="relative flex flex-col items-start py-16 pr-12 ml-40 text-left text-white tablet-mini:my-20 tablet:pr-0 tablet:text-center tablet:ml-0 tablet:items-center laptop:ml-24"
        >
          <h1 class="mb-20 text-2xl font-bold">
            4 ноября - 16 декабря <br />
            участие бесплатное
          </h1>
          <h1
            class="font-extrabold leading-snug laptop:text-5xl desktop:text-6xl text-7sm"
          >
            Прокачай <br class="" />
            свой бизнес
          </h1>
          <h3
            class="mt-10 text-lg font-semibold laptop-mini:max-w-sm tablet:text-lg tablet:max-w-md laptop:text-base"
          >
            Инкубационный онлайн - практикум от Astana Hub
            <br class="desktop:hidden" />
            в г. Усть-Каменагорск
          </h3>
          <a href="#" class="mt-24 cta-btn">Оставить заявку</a>
        </div>
      </div>
      <!--  -->
    </div>
    <div class="py-24 tablet:py-12">
      <div class="flex flex-col max-w-6xl mx-auto tablet-mini:px-12">
        <h1 class="header text-secondary laptop-mini:mx-32 tablet-mini:mx-0">
          Инкубационная программа от Astana hub - это:
        </h1>
        <div class="flex mt-32 tablet:mt-20 tablet:flex-col">
          <div
            class="flex flex-col justify-center w-1/2 text-black tablet:w-full"
          >
            <h1 class="header">6 недель</h1>
            <p class="text-lg font-semibold">прокачки твоего бизнеса</p>
          </div>
          <div
            class="flex flex-col justify-center w-1/2 text-black tablet:mt-10 tablet:w-full"
          >
            <h1 class="header">15</h1>
            <p class="text-lg font-semibold">стартапов и бизнесов</p>
          </div>
        </div>
        <div
          class="flex mt-24 mb-24 tablet:flex-col tablet:mt-0 laptop-mini:flex-wrap"
        >
          <div
            class="flex flex-col justify-center w-1/3 text-black tablet:mb-10 tablet:mt-10 laptop-mini:mb-16 laptop-mini:w-full"
          >
            <h1 class="header">50 часов</h1>
            <p class="text-lg font-semibold">
              индивидуальных <br />
              консультаций <br />
              от ведущих экспертов
            </p>
          </div>
          <div
            class="flex flex-col justify-center w-1/3 text-black tablet:w-full laptop-mini:w-1/2"
          >
            <h1 class="header">90 часов</h1>
            <p class="text-lg font-semibold">
              индивидуальных <br />
              консультаций <br />
              от ведущих экспертов
            </p>
          </div>
          <div
            class="flex flex-col justify-center w-1/3 text-black tablet:mt-10 tablet:w-full laptop-mini:w-1/2"
          >
            <h1 class="header">50 часов</h1>
            <p class="text-lg font-semibold">
              практических <br />
              воркшопов по развитию <br />
              и масштабированию бизнеса
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative h-screen text-white tablet:h-full">
      <img
        src="@/assets/images/banner.png"
        class="absolute inset-0 z-0 w-full h-screen tablet:object-cover tablet:h-full"
        alt=""
      />
      <div class="relative max-w-5xl py-24 mx-auto laptop:py-12">
        <h1 class="mb-24 text-center header laptop:mb-16">Для кого</h1>
        <div
          class="flex justify-between w-full text-left tablet:justify-center tablet:items-center tablet:flex-col laptop:justify-around"
        >
          <div
            class="flex flex-col px-12 py-10 shadow-lg h-480 w-420 bg-primary rounded-2xl"
          >
            <h1 class="mb-4 text-2xl font-extrabold leading-tight">
              Для начинающих стартаперов
            </h1>
            <div
              class="flex items-center -ml-8"
              v-for="(item, index) in [
                'протестируешь и упакуешь свою бизнес - идею',
                'поймешь свою бизнес модель и сделаешь первые продажи',
                'соберешь команду, которая будет гореть твоим проектом',
                'получишь инструменты для быстрого роста бизнеса',
              ]"
              :key="index"
            >
              <div class="my-2 mr-3">
                <svg
                  class="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9183 4.8527L7.51777 17.2533C7.40854 17.3625 7.23169 17.3625 7.12272 17.2533L0.0816677 10.212C-0.0273039 10.1032 -0.0273039 9.92639 0.0816677 9.81717L1.79255 8.10629C1.90177 7.99731 2.07863 7.99731 2.1876 8.10629L7.3205 13.2389L17.8127 2.74677C17.9221 2.6378 18.0985 2.6378 18.2077 2.74677L19.9183 4.45765C20.0276 4.56662 20.0276 4.74322 19.9183 4.8527Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p class="card-text-p">
                {{ item }}
              </p>
            </div>
          </div>
          <div
            class="flex flex-col px-12 py-10 shadow-lg tablet:mt-20 h-480 w-420 bg-primary rounded-2xl"
          >
            <h1 class="mb-4 text-2xl font-extrabold leading-tight">
              Для действующих предпринимателей
            </h1>
            <div
              class="flex items-center -ml-8"
              v-for="(item, index) in [
                'упакуешь свой бизнес',
                'отстроешься от конкурентов и станешь №1 в своей нише',
                'увеличишь продажи в бизнесе',
                'получишь инструменты для масштабирования бизнеса',
                'научишься эффективно управлять командой',
                'пробьешь свой личный финансовый потолок',
              ]"
              :key="index"
            >
              <div class="my-2 mr-3">
                <svg
                  class="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9183 4.8527L7.51777 17.2533C7.40854 17.3625 7.23169 17.3625 7.12272 17.2533L0.0816677 10.212C-0.0273039 10.1032 -0.0273039 9.92639 0.0816677 9.81717L1.79255 8.10629C1.90177 7.99731 2.07863 7.99731 2.1876 8.10629L7.3205 13.2389L17.8127 2.74677C17.9221 2.6378 18.0985 2.6378 18.2077 2.74677L19.9183 4.45765C20.0276 4.56662 20.0276 4.74322 19.9183 4.8527Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p class="card-text-p">
                {{ item }}
              </p>
            </div>
          </div>
        </div>
        <div class="w-full mt-16 flex justify-center">
          <a href="#" class="cta-btn bg-secondary">То, что мне нужно</a>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="py-24">
      <div
        class="flex flex-col px-64 mx-auto laptop:px-32 laptop-mini:px-12 desktop:px-40"
      >
        <h1 class="header text-secondary">
          Ведущий трекер программы и партнер Astana Hub
        </h1>
        <div
          class="flex justify-between mt-24 tablet:mt-10 tablet:flex-col tablet:justify-center tablet:items-center"
        >
          <div
            class="flex flex-col justify-start w-1/2 text-left text-black tablet:w-11/12"
          >
            <h1 class="tracker-text">
              <b
                >Эмир Касеев
                <a
                  href="https://www.instagram.com/emirforbes/"
                  class="underline text-secondary"
                  target="_blank"
                  >@emirforbes</a
                >:</b
              >
              <br class="tablet:hidden" />
              сертифицированный <br class="tablet:hidden" />
              трекер <b>ФРИИ</b> г. Москва
            </h1>
            <h1 class="tracker-text">
              Со-основатель бизнеса стоимостью <br />
              <b>2 000 000 $</b>
            </h1>
            <h1 class="tracker-text">
              Масштабировал и довел до <br class="tablet:hidden" />
              результата <b>100</b> + бизнесов
            </h1>
            <h1 class="tracker-text">
              Помог привлечь <b>500 000 000$</b><br class="tablet:hidden" />
              инвестиций в казахстанские стартапы
            </h1>
            <h1 class="tracker-text">
              <b>Партнеры:</b> Astana hub,<br class="tablet:hidden" />
              Startupbootcamp, ФРИИ, МФЦА, Nazarbayev University, Stratup Magic
            </h1>
          </div>
          <div
            class="flex px-4 tablet:mt-10 flex-col justify-center tablet:w-full w-1/2 text-black"
          >
            <swiper
              class="swiper w-full flex justify-center"
              :options="swiperOption"
            >
              <swiper-slide v-for="(item, index) in imgArr" :key="index"
                ><img
                  :src="item.img"
                  class="w-auto tablet:h-auto tablet:w-full object-cover h-480"
                  alt=""
              /></swiper-slide>

              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative px-64 py-32 text-white tablet:px-12 laptop:px-32 laptop-mini:px-20 desktop:px-40"
    >
      <img
        src="@/assets/images/footer.png"
        class="absolute inset-0 w-full h-full"
        alt=""
      />
      <div
        class="relative flex flex-col items-start text-left tablet:text-center tablet:items-center"
      >
        <h1 class="mb-10 text-5xl font-bold tablet:text-4xl">
          Прокачай свой бизнес <br class="tablet-mini:hidden" />
          вместе с Astana Hub
        </h1>
        <a href="#" class="cta-btn">Участвовать</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      imgArr: [
        { img: require('@/assets/images/1.jpg') },
        { img: require('@/assets/images/2.jpg') },
        { img: require('@/assets/images/3.jpg') },
        { img: require('@/assets/images/4.jpg') },
      ],
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>
<style >
.secondary-trans {
  background: rgba(50, 0, 157, 0.75);
}
</style>

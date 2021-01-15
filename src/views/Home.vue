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
          <div class="flex mb-8">
            <img
              src="@/assets/images/pic1.png"
              class="h-20 mr-10 p-2 rounded-lg bg-gray-200"
              alt=""
            />
            <img
              src="@/assets/images/pic2.png"
              class="h-20 p-2 rounded-lg bg-gray-200"
              alt=""
            />
          </div>
          <h1 class="text-2xl font-bold mr-8 mb-8">
            с 1 февраля - 27 февраля <br />
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
            Основы креативного предпринимательства - это программа American
            Corners Kazakhstan по поддержке начинающих предпринимателей
            Казахстана в сфере креативной индустрии
            <br class="desktop:hidden" />
          </h3>
          <a
            target="blank"
            href="https://docs.google.com/forms/d/1scsLj0-sXJAqd-4hCiFvzCHFCK8N99eGPtyfqmnxHoI/edit"
            class="mt-24 cta-btn"
            >Оставить заявку</a
          >
        </div>
      </div>
      <!--  -->
    </div>
    <div class="py-24 tablet:py-12">
      <div class="flex flex-col w-full px-16 mx-auto tablet-mini:px-12">
        <h1 class="header text-secondary laptop-mini:mx-32 tablet-mini:mx-0">
          Основы креативного предпринимательства:
        </h1>
        <div class="flex mt-32 tablet:mt-20 tablet:flex-col">
          <div
            class="flex flex-col justify-center w-1/2 text-black tablet:w-full"
          >
            <h1 class="header text-3xl leading-tight">
              4 недели <br />
              прокачки твоего бизнеса
            </h1>
            <!-- <p class="text-lg font-semibold"></p> -->
          </div>
          <div
            class="flex flex-col justify-center w-1/2 text-black tablet:mt-10 tablet:w-full"
          >
            <h1 class="header text-3xl leading-tight">
              50 стартапов<br />
              и бизнесов
            </h1>
            <p class="text-lg font-semibold"></p>
          </div>
        </div>
        <div
          class="flex mt-24 mb-24 tablet:flex-col tablet:mt-0 laptop-mini:flex-wrap"
        >
          <div
            class="flex flex-col justify-center w-1/2 text-black tablet:mb-10 tablet:mt-10 laptop-mini:mb-16 laptop-mini:w-full"
          >
            <!-- <h1 class="header">50 часов</h1> -->
            <p class="header text-3xl leading-tight">
              Индивидуальная работа
              <br />
              с ведущими трекерами
            </p>
          </div>
          <!-- <div
            class="flex flex-col justify-center w-1/3 text-black tablet:w-full laptop-mini:w-1/2"
          >
            <h1 class="header">90 часов</h1>
            <p class="text-lg font-semibold">
              индивидуальных <br />
              консультаций <br />
              от ведущих экспертов
            </p>
          </div> -->
          <div
            class="flex flex-col justify-center w-1/2 text-black tablet:mt-10 tablet:w-full laptop-mini:w-1/2"
          >
            <!-- <h1 class="header">50 часов</h1> -->
            <p class="header text-3xl leading-tight">
              Практические воркшопы и семинары <br />
              по развитию и масштабированию <br />
              твоего бизнеса
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative h-full text-white tablet:h-full">
      <img
        src="@/assets/images/banner.png"
        class="absolute inset-0 z-0 w-full h-full tablet:object-cover tablet:h-full"
        alt=""
      />
      <div class="relative max-w-5xl py-24 mx-auto laptop:py-12">
        <h1 class="mb-24 text-center header laptop:mb-16">
          Для начинающих предпринимателей креативной индустрии
        </h1>
        <div
          class="flex tablet-mini:px-4 justify-center w-full text-left tablet:justify-center tablet:items-center tablet:flex-col laptop:justify-around"
        >
          <div
            class="flex flex-col px-12 py-10 shadow-lg h-auto tablet-mini:w-full tablet:w-9/12 w-7/12 bg-primary rounded-2xl"
          >
            <h1 class="mb-4 text-2xl font-extrabold leading-tight">
              Основы креативного предпринимательства - это программа для
              стартапов:
            </h1>
            <div
              class="flex items-center"
              v-for="(item, index) in [
                'Моды и дизайна',
                'Рекламы и маркетинга',
                'Архитектуры',
                'Мультипликации и программирования',
                'И других сфер креативной индустрии',
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
          <!-- <div
            class="flex flex-col px-12 py-10 shadow-lg tablet:mt-20 h-480 w-420 bg-primary rounded-2xl"
          >
            <h1 class="mb-4 text-2xl font-extrabold leading-tight">
              Для действующих предпринимателей
            </h1>
            <div
              class="flex items-center -ml-8"
              v-for="(item, index) in [
                'Дизайн',
                'Радио',
                'Исполнительские искусства',
                'Архитектура',
                'Декоративные искусства и ремесла',
                'Телевидение ',
                'Реклама',
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
          </div> -->
        </div>
        <div class="w-full mt-16 flex justify-center">
          <a
            target="blank"
            href="https://docs.google.com/forms/d/1scsLj0-sXJAqd-4hCiFvzCHFCK8N99eGPtyfqmnxHoI/edit"
            class="cta-btn bg-secondary"
            >То, что мне нужно</a
          >
        </div>
      </div>
    </div>
    <!--  -->
    <div class="my-24 tablet:mt-20 mb-32">
      <div
        class="flex flex-col px-64 mx-auto laptop:px-32 laptop-mini:px-12 desktop:px-40"
      >
        <h1 class="header text-secondary">Организатор</h1>
        <div
          class="flex justify-between mt-24 tablet:mt-10 tablet:flex-col tablet:justify-center tablet:items-center"
        >
          <div
            class="flex flex-col justify-start w-1/2 text-left text-black tablet:w-11/12"
          >
            <!--  -->
            <p class="tracker-text font-semibold text-justify leading-snug">
              Основы креативного предпринимательства - это небольшие библиотеки
              в американском стиле, расположенные в рамках местной партнерской
              организации, обычно библиотеки. Доступ в американские пространства
              и их коллекции свободный и открыт для всех желающих граждан
              Казахстана.
            </p>
          </div>
          <div
            class="flex px-4 justify-center tablet:w-full items-center w-1/2 text-black"
          >
            <img src="@/assets/images/pic1.png" class="h-auto w-7/12" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div
      class="relative flex w-full px-64 mx-auto laptop:px-12 desktop:px-32 justify-center text-white py-16"
    >
      <img
        src="@/assets/images/footer.png"
        class="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div class="relative w-full laptop-mini:mt-16">
        <h1 class="header my-4">
          Instagam страницы <br class="hidden laptop-mini:block" />
          Американских уголков:
        </h1>
        <div
          class="flex laptop-mini:w-full laptop-mini:pl-8 mx-auto justify-between w-full laptop-mini:pr-0 laptop-mini:flex-col laptop-mini:items-center"
        >
          <div
            class="flex-col my-1 laptop-mini:w-full flex text-left justify-start"
          >
            <a
              v-for="(item, index) in [
                'asalmaty',
                'americancorner_ns',
                'american_corner_aktobe',
                'american_corner_karaganda',
                'american_corner_kostanay',
              ]"
              :key="index"
              target="_blank"
              :href="`https://www.instagram.com/${item}/`"
              class="font-medium text-left text-2xl leading-loose tablet-mini:text-xl"
              >@{{ item }}</a
            >
          </div>
          <div
            class="flex-col my-1 laptop-mini:w-full flex text-left justify-start"
          >
            <a
              v-for="(item, index) in [
                'american_corner_shymkent',
                'american_corner_oral',
                'american_corner_oskemen',
                'american_corner_pavlodar',
                'american_corner_petropavlovsk',
              ]"
              :key="index"
              target="_blank"
              :href="`https://www.instagram.com/${item}/`"
              class="font-medium text-left text-2xl leading-loose tablet-mini:text-xl"
              >@{{ item }}</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="my-24 tablet:mt-20">
      <div
        class="flex flex-col px-64 mx-auto laptop:px-32 laptop-mini:px-12 desktop:px-40"
      >
        <h1 class="header text-secondary">Ведущий трекер программы</h1>
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
              <b>Партнеры:</b> <br class="tablet:hidden" />
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
      class="relative flex px-64 py-32 laptop-mini:flex-col text-white tablet:px-16 laptop:px-16 laptop-mini:px-20 desktop:px-24"
    >
      <img
        src="@/assets/images/footer.png"
        class="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div
        class="relative flex flex-col w-1/2 laptop:w-1/3 laptop-mini:w-full items-start text-left tablet:text-center tablet:items-center"
      >
        <h1 class="mb-10 text-4xl font-bold tablet:text-4xl">
          Прокачай свой бизнес <br class="laptop-mini:hidden" />
          вместе
        </h1>
        <a
          href="https://docs.google.com/forms/d/1scsLj0-sXJAqd-4hCiFvzCHFCK8N99eGPtyfqmnxHoI/edit"
          class="cta-btn"
          target="blank"
          >Участвовать</a
        >
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
.swiper-button-prev,
.swiper-button-next {
  color: white !important;
}
</style>

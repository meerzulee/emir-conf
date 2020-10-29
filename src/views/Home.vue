<template>
  <div class="uppercase home">
    <!-- header -->
    <div class="relative flex w-full h-screen phone:h-full">
      <!--  -->
      <div class="relative w-1/2 laptop-mini:w-full">
        <img
          src="@/assets/images/bg-left.png"
          class="absolute object-cover w-full h-full"
          alt=""
        />
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
      <div class="relative z-0 flex w-1/2 h-full laptop-mini:hidden">
        <img
          src="@/assets/images/bg-right.png"
          class="object-cover w-full h-full"
          alt=""
        />
      </div>
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
        <h1 class="mb-32 text-center header laptop:mb-16">Для кого</h1>
        <div
          class="flex justify-between w-full text-left tablet:justify-center tablet:items-center tablet:flex-col laptop:justify-around"
        >
          <div
            class="flex flex-col px-12 py-10 shadow-lg h-480 w-420 bg-primary rounded-2xl"
          >
            <h1 class="mb-4 text-2xl font-extrabold leading-tight">
              Для начинающих стартаперов
            </h1>
            <p class="card-text-p">
              протестируешь и упакуешь свою бизнес - идею
            </p>
            <p class="card-text-p">
              поймешь свою бизнес модель и сделаешь первые продажи
            </p>
            <p class="card-text-p">
              соберешь команду, которая будет гореть твоим проектом
            </p>
            <p class="card-text-p">
              получишь инструменты для быстрого роста бизнеса
            </p>
            <p class="card-text-p"></p>
          </div>
          <div
            class="flex flex-col px-12 py-10 shadow-lg tablet:mt-20 h-480 w-420 bg-primary rounded-2xl"
          >
            <h1 class="mb-4 text-2xl font-extrabold leading-tight">
              Для действующих предпринимателей
            </h1>

            <p class="card-text-p">упакуешь свой бизнес</p>
            <p class="card-text-p">
              отстроешься от конкурентов и станешь №1 в своей нише
            </p>
            <p class="card-text-p">увеличишь продажи в бизнесе</p>
            <p class="card-text-p">
              получишь инструменты для масштабирования бизнеса
            </p>
            <p class="card-text-p">научишься эффективно управлять командой</p>
            <p class="card-text-p">пробьешь свой личный финансовый потолок</p>
          </div>
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
              <b>Эмир Касеев @emirforbes:</b> <br class="tablet:hidden" />
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
            class="flex flex-col justify-center w-1/2 text-black bg-gray-500"
          ></div>
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

export default {
  name: 'Home',
}
</script>

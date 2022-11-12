<template>
  <div>
    <header class="custom__header-bg row justify-start items-center q-px-xl">
      <div class="text-white col-md-6 col-sm-12 col-xs-12">
        <q-separator color="green" spaced />
        <h3 class="text-h6 my-font-poppins-regular gt-sm">
          Welcome to the Age of Agricultural Transformation
        </h3>
        <h1 class="my-font-poppins-extraBold" :class="screenRatioHeading">
          Growing Nigeria’s agricultural economy, creating jobs and lifting
          millions out of poverty.
        </h1>
        <q-separator color="green" spaced />
        <q-btn
          @click="$router.push('/membership')"
          no-caps
          outline
          flat
          size="large"
          style="border: 3px solid #52af50"
          class="text-white bg-transparent"
          icon-right="arrow_right"
          label="Get Started"
        />
      </div>
    </header>
    <section>
      <div class="row">
        <div class="col-md-4 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <q-card class=" q-mx-sm bg-grey-10">
            <q-card-section class="row justify-center q-py-xl">
              <img
                src="/images/planting.svg"
                height="100"
                width="100"
                alt=""
                class="q-mb-md"
              />
              <div class="text-body1 text-white my-font-poppins-bold">
                Growing Nigeria’s Agricultural Economy
              </div>
              <div class="text-subtitle2 text-white my-font-poppins-light">
                Nigeria is Africa's largest economy, harnessing the prowess of
                agriculture is of paramount importance
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <q-card class=" bg-green">
            <q-card-section class="row justify-center q-py-xl">
              <img
                src="/images/tractor.svg"
                height="100"
                width="100"
                alt=""
                class="q-mb-md"
              />
              <div class="text-body1 text-white my-font-poppins-bold">
                Creating Thousands of Jobs for the Youth
              </div>
              <div class="text-subtitle2 text-white my-font-poppins-light">
                With the increase in rate of unemployment in the country, we
                help equip youth with needed knowledge, tools and equipment that
                will guide them get in their farming profession
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <q-card class="bg-grey-10">
            <q-card-section class="row justify-center q-py-xl">
              <img
                src="/images/money.svg"
                height="100"
                width="100"
                alt=""
                class="q-mb-md"
              />
              <div class="text-body1 text-white my-font-poppins-bold">
                Lifting Millions of Nigerians out of Poverty
              </div>
              <div class="text-subtitle2 text-white my-font-poppins-light">
                Nigeria has one of the highest number of people living in
                poverty in the world, one of our missions is to change that and
                impact millions of lives
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
    <section>
      <div
        class="row"
        v-observe-visibility="{
          callback: (isVisible, entry) => isViewableNow(isVisible, entry, 'b')
        }"
        :class="{
          'visible animated slideInLeft': showAnimationFor.b,
          invisible: !showAnimationFor.b,
          once: true
        }"
      >
        <div class="col-md-5 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <h3 :class="screenRatioHeading" class="my-font-poppins-boldItalic">
            Global
            <span class="text-green text-h4 my-font-poppins-extraBold"
              >Agricultural</span
            >
            Services Provided By Exceptional Individuals
          </h3>
          <p class="text-body1 text-justify text-grey-8 my-font-poppins-light">
            We strive to engage government at all levels in setting policy
            directions and regulatory reforms to enable sustainable inclusive
            socio-economic growth. Together, we are helping to ensure food
            security and nutrition, creating systemic linkages between small,
            medium and large agribusiness enterprises.
          </p>
          <h6 class="text-body2 my-font-poppins-bold text-green">
            NABG - EXECUTIVE COUNCIL
          </h6>
        </div>
        <div class="col-md-1 col-sm-12 col-xs-12 gt-sm column justify-center">
          <q-card
            flat
            square
            class="bg-green"
            style="
              height: 40%;
              margin-right: -100%;
              z-index: -1;
              margin-left: 100px;
            "
          ></q-card>
        </div>
        <div
          class="col-md-5 col-sm-12 q-mt-sm col-xs-12 q-px-lg q-py-md custom__overflow"
        >
        <VueSlickCarousel
            :dots="true"
            :arrows='false'
            :slidesToShow="1"
            autoplay: true
            autoplaySpeed=3000
            
          >
          <q-img height="300px" src="/images/kenya-1.png" />
          <q-img height="300px" src="/images/nab10.jpeg" />
          <q-img height="300px" src="/images/nab5.jpeg" />
          <q-img height="300px" src="/images/nab9.jpeg" />
            
           
        </VueSlickCarousel>
          <!-- <q-img
            src="/images/kenya-1.png"
            style="width: 100%; height: 100%"
            contain
          ></q-img> -->
        </div>
      </div>
    </section>
    <q-separator class="q-mx-xl" color="grey-4" spaced />

    <section>
      <div
        class="q-mx-xl q-pa-xl row justify-around text-body1 text-justify text-grey-10 my-font-poppins-light"
      >
        <div class="text-center">
          <h3 class="text-h3 my-font-poppins-extraBold">25+</h3>
          <p class="text-body1 my-font-poppins-regular">YEARS OF EXPERIENCE</p>
        </div>
        <div class="text-center">
          <h3 class="text-h3 my-font-poppins-extraBold">35,000+</h3>
          <p class="text-body1 my-font-poppins-regular">LIVES IMPACTED</p>
        </div>
        <div class="text-center">
          <h3 class="text-h3 my-font-poppins-extraBold">20+</h3>
          <p class="text-body1 my-font-poppins-regular">
            EXECUTIVE COUNCIL MEMBERS
          </p>
        </div>
        <div class="text-center">
          <h3 class="text-h3 my-font-poppins-extraBold">45+</h3>
          <p class="text-body1 my-font-poppins-regular">AWARDS WON</p>
        </div>
      </div>
    </section>

    <q-separator class="q-mx-xl" color="grey-4" spaced />

    <section>
      <h3
        :class="screenRatioHeading"
        class="text-center q-pt-xl container my-font-poppins-boldItalic"
      >
        BILL AND MELINDA
        <span class="text-green text-h4 my-font-poppins-extraBold">GATES</span>
        FOUNDATION
        <span class="text-green text-h4 my-font-poppins-extraBold">(BMGF)</span
        >/NIGERIA
        <span class="text-green text-h4 my-font-poppins-extraBold"
          >AGRIBUSINESS</span
        >
        GROUP
        <span class="text-green text-h4 my-font-poppins-extraBold">(NABG)</span>
        ADVOCACY FOR SMALL-SCALE PRODUCERS PROJECT
      </h3>

      <div class="q-mt-lg">
        <p
          class="text-body1 text-center container text-grey-8 my-font-poppins-light"
        >
          The Nigeria Agribusiness Group (NABG) in partnership with Bill and
          Melinda Gates Foundation (BMGF) has birthed the Promotion of
          Agribusiness Advocacy for Small-scale Producers project, which has
          been assigned a unique identifier by the acronym SSPs to run until
          2024. The SSPs project will support the BMGF strategy in ensuring that
          public and private sector policy advocacy can drive scale and
          inclusion of small holder farmers and small scale producers in Nigeria
          with the following strategic goals; i. Increase agricultural
          productivity for SHFs; ii. Increase SHF household income; iii.
          Increase equitable consumption of a safe, affordable, nutritious diet
          year-round; iv. Increase women's empowerment in agriculture.
        </p>
      </div>

      <div class="row flexer q-py-xl">
        <div class="col-md-1 col-sm-12 col-xs-12 gt-sm column justify-center">
          <q-card
            flat
            square
            class="bg-green"
            style="
              height: 40%;
              margin-right: -100%;
              z-index: -1;
              margin-left: 100px;
            "
          ></q-card>
        </div>
        <div
          class="col-md-5 col-sm-12 removeM col-xs-12 q-px-lg q-mt-xl q-py-md custom__overflow"
        >
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/Iqt21A0SzvU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-md-5 col-sm-12 col-xs-12  q-px-lg q-py-md">
          <h3
            :class="screenRatioHeading"
            class="my-font-poppins-boldItalic smart"
          >
            Climate
            <span class="text-green text-h4 my-font-poppins-extraBold"
              >Smart</span
            >
            Agriculture
          </h3>
          <strong>The Climate Challenge</strong>
          <p class="text-body1 text-justify text-grey-8 my-font-poppins-light">
            Nigeria, like many other African countries, finds itself amid a
            climate emergency. Africa’s drylands, which cover about 60% of the
            continent, are warming at a rate twice the global average, putting
            about 500 million people at risk,11 and compromising about 4% of GDP
            by 2040. Even if climate change mitigation efforts maintain global
            warming at sub-2°C, the continent will still face climate change
            adaptation costs of about US$ 50 billion per year by 2050. The
            reality of climate change has been experienced in Africa in the last
            few decades. Flooding on the continent has increased by 500% since
            the 1990s, with many of them being extreme floods. Droughts are
            becoming more severe also, with countries in the horn of Africa and
            Sahel, like Somalia suffering agriculture losses of about $1.5
            billion and widespread malnutrition.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class=" text-center container">
        <h3 :class="screenRatioHeading" class="my-font-poppins-boldItalic">
          Workshop On Developing A National Framework For
          <span class="text-green text-h4 my-font-poppins-extraBold"
            >Climate-Smart</span
          >
          Agriculture Theme: Cleaner, Safer, Rewarding Agriculture
        </h3>

        <p class="text-body1 text-center  text-grey-8 my-font-poppins-light">
          The Nigeria Agribusiness Group (NABG) in collaboration with the
          Federal Ministry of Agriculture & Rural Development proposes a two (2)
          day roundtable discussion with stakeholders and technical experts to
          deliberate and draft a National Climate Smart Agriculture Framework
          (NCSAF) for the sector. The NCSAF is an approach to developing the
          technical, policy and investment conditions to achieve sustainable
          agricultural development for food security under a changing climate.
          This Framework will be an attempt to analyze and define activities
          that will take into account the three pillars of CSA simultaneously.
          It seeks to focus on harmonizing climate smart agriculture along its
          value chain nationally.
        </p>

        <div class="q-pt-lg">
          <VueSlickCarousel
            :dots="true"
            :slidesToShow="6"
            autoplay: true
            autoplaySpeed=3000
            :responsive="[
              {
                breakpoint: 1524,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },

              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]"
          >
            <div class="">
              <q-card class="my_card q-mx-sm" bordered>
                <q-img height="300px" src="/images/nab7.jpeg" />
              </q-card>
            </div>

            <div class="">
              <q-card class="my_card q-mx-sm" bordered>
                <q-img height="300px" src="/images/nab1.jpeg" />
              </q-card>
            </div>
            <div class="">
              <q-card class="my_card q-mx-sm" bordered>
                <q-img height="300px" src="/images/nab10.jpeg" />
              </q-card>
            </div>
            <div class="">
              <q-card class="my_card q-mx-sm" bordered>
                <q-img height="300px" src="/images/nab3.jpeg" />
              </q-card>
            </div>

            <div class="">
              <q-card class="my_card q-mx-sm" bordered>
                <q-img height="300px" src="/images/nab8.jpeg" />
              </q-card>
            </div>
            <div class="">
              <q-card class="my_card q-mx-sm" bordered>
                <q-img height="300px" src="/images/nab2.jpeg" />
              </q-card>
            </div>
            <div class="">
              <q-card class="my_card q-mx-sm" bordered>
                <q-img height="300px" src="/images/nab6.jpeg" />
              </q-card>
            </div>
            <div class="">
              <q-card class="my_card q-mx-sm" bordered>
                <q-img height="300px" src="/images/nab5.jpeg" />
              </q-card>
            </div>

            <div class="">
              <q-card class="my_card q-mx-sm" bordered>
                <q-img height="300px" src="/images/nab9.jpeg" />
              </q-card>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </section>
    <section class="q-my-xl">
      <div class="row">
        <div
          v-observe-visibility="{
            callback: (isVisible, entry) =>
              isViewableNow(isVisible, entry, 'c'),
            once: true
          }"
          :class="{
            'visible animated slideInRight': showAnimationFor.c,
            invisible: !showAnimationFor.c
          }"
          class="col-md-3 col-sm-12 col-xs-12 q-px-lg q-py-md column justify-center items-center my-font-poppins-extraBold"
        >
          <h3 class="q-my-sm" :class="screenRatioHeading">
            <span class="my-font-poppins-thin">Explore</span> <br />
            <span class="text-green">NABG</span>
          </h3>
        </div>
        <div class="col-md-9 col-sm-12 q-pa-md col-xs-12 my-font-poppins-light">
          <div class="row">
            <div class="col-md-4 col-sm-12 col-xs-12 q-px-lg q-py-md">
              <q-card
                @click="$router.push('/about')"
                square
                flat
                class="bg-grey-4 q-pa-lg custom__card-pointer"
              >
                <q-card-section class="row justify-center items-center">
                  <span
                    style="width: 25px; height: 5px"
                    class="bg-black q-mr-sm"
                    >&nbsp;</span
                  >
                  <span class="text-h6 my-font-poppins-extraBold"
                    >About Us</span
                  >
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12 q-px-lg q-py-md">
              <q-card
                @click="$router.push('/membership')"
                square
                flat
                class="bg-dark text-white q-pa-lg custom__card-pointer"
              >
                <q-card-section class="row justify-center items-center">
                  <span
                    style="width: 25px; height: 5px"
                    class="bg-white q-mr-sm"
                    >&nbsp;</span
                  >
                  <span class="text-h6 my-font-poppins-extraBold"
                    >Membership</span
                  >
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12 q-px-lg q-py-md">
              <q-card
                @click="$router.push('/leadership')"
                square
                flat
                class="bg-grey-4 q-pa-lg custom__card-pointer"
              >
                <q-card-section class="row justify-center items-center">
                  <span
                    style="width: 25px; height: 5px"
                    class="bg-black q-mr-sm"
                    >&nbsp;</span
                  >
                  <span class="text-h6 my-font-poppins-extraBold"
                    >Leadership</span
                  >
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class="row q-mt-sm">
            <div class="col-md-4 col-sm-12 col-xs-12 q-px-lg q-py-md">
              <q-card
                @click="$router.push('/partner')"
                square
                flat
                class="bg-dark text-white q-pa-lg custom__card-pointer"
              >
                <q-card-section class="row justify-center items-center">
                  <span
                    style="width: 25px; height: 5px"
                    class="bg-white q-mr-sm"
                    >&nbsp;</span
                  >
                  <span class="text-h6 my-font-poppins-extraBold"
                    >Partners</span
                  >
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12 q-px-lg q-py-md">
              <q-card
                @click="$router.push('/news')"
                square
                flat
                class="bg-grey-4 q-pa-lg custom__card-pointer"
              >
                <q-card-section class="row justify-center items-center">
                  <span
                    style="width: 25px; height: 5px"
                    class="bg-black q-mr-sm"
                    >&nbsp;</span
                  >
                  <span class="text-h6 my-font-poppins-extraBold">News</span>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12 q-px-lg q-py-md">
              <q-card
                @click="$router.push('/contact')"
                square
                flat
                class="bg-dark text-white q-pa-lg custom__card-pointer"
              >
                <q-card-section class="row justify-center items-center">
                  <span
                    style="width: 25px; height: 5px"
                    class="bg-white q-mr-sm"
                    >&nbsp;</span
                  >
                  <span class="text-h6 my-font-poppins-extraBold"
                    >Contact Us</span
                  >
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h3 class="my-font-poppins-thin text-center" :class="screenRatioHeading">
        Executive
        <span class="my-font-poppins-extraBold text-green">Council</span>
      </h3>

      <div
        class="row q-my-sm justify-center"
        v-observe-visibility="{
          callback: (isVisible, entry) => isViewableNow(isVisible, entry, 'd'),
          once: true
        }"
        :class="{
          'visible animated slideInLeft': showAnimationFor.d,
          invisible: !showAnimationFor.d
        }"
      >
        <!-- <div class="col-md-3 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <q-card flat square>
            <q-img contain height="200px" src="/images/Lawalkaita.jpg" />
            <q-card-section>
              <div
                class="text-body2 text-grey-10 text-center my-font-poppins-bold"
              >
                Alh. Sani Dangote
              </div>
              <div
                class="text-caption text-grey-8 text-center my-font-poppins-light"
              >
                President/Vice President
              </div>
              <div
                class="text-caption text-grey-8 text-center my-font-poppins-light"
              >
                NABG/Dangote Group Plc
              </div>
            </q-card-section>
          </q-card>
        </div> -->

        <div class="col-md-3 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <q-card flat square>
            <q-img contain height="200px" src="/images/emmanuel.jpg" />
            <q-card-section>
              <div
                class="text-body2 text-grey-10 text-center my-font-poppins-bold"
              >
                Emmanuel Ijewere
              </div>
              <div
                class="text-caption text-grey-8 text-center my-font-poppins-light"
              >
                President
              </div>
              <div
                class="text-caption text-grey-8 text-center my-font-poppins-light"
              >
                NABG/Best Foods Ltd
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-md-3 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <q-card flat square>
            <q-img contain height="200px" src="/images/manzo.jpg" />
            <q-card-section>
              <div
                class="text-body2 text-grey-10 text-center my-font-poppins-bold"
              >
                Dr. Manzo Maigari
              </div>
              <div
                class="text-caption text-grey-8 text-center my-font-poppins-light"
              >
                Director General
              </div>
              <div
                class="text-caption text-grey-8 text-center my-font-poppins-light"
              >
                NABG
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- <div class="col-md-3 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <q-card flat square>
            <q-img contain height="200px" src="/images/salamatu.png" />
            <q-card-section>
              <div
                class="text-body2 text-grey-10 text-center my-font-poppins-bold"
              >
                Hajia Salamatu Garba
              </div>
              <div
                class="text-caption text-grey-8 text-center my-font-poppins-light"
              >
                Ag. Treasurer / ED-Founder
              </div>
              <div
                class="text-caption text-grey-8 text-center my-font-poppins-light"
              >
                NABG/WOFAN
              </div>
            </q-card-section>
          </q-card>
        </div> -->
      </div>

      <div class="row justify-center q-mt-xl q-py-md">
        <q-btn
          @click="$router.push('/leadership')"
          no-caps
          outline
          flat
          size="large"
          style="border: 3px solid black"
          class="text-black bg-transparent"
          icon-right="arrow_right"
          label="View All"
        />
      </div>
    </section>

    <section class="news">
      <h3 class="text-center my-font-poppins-thin" :class="screenRatioHeading">
        <span class="my-font-poppins-thin"
          >New<span class="text-green my-font-poppins-extraBold">s</span></span
        >
      </h3>
      <div class="container">
        <VueSlickCarousel
          :dots="true"
          :slidesToShow="3"
          :responsive="[
            {
              breakpoint: 1524,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]"
        >
          <div class="">
            <q-card class="my-card q-mx-sm" bordered>
              <q-img
                height="200px"
                src="https://leadership.ng/wp-content/uploads/2022/07/Nigerian-AgriBusiness-Group-NABG-1-1140x570.jpg"
              />
              <q-card-section>
                <div class="text-subtitle2 row items-center justify-between">
                  <span class="text-grey my-font-poppins-light">
                    <q-icon
                      name="query_builder"
                      color="grey"
                      size="large"
                      class="q-mr-sm"
                    />2 days ago</span
                  >
                  <q-chip
                    class="my-font-poppins-bold"
                    label="Agriculture"
                    ripple
                    color="grey-3"
                    text-color="purple"
                  />
                </div>
                <div
                  class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
                >
                 NABG, Others To Deploy Climate-smart Agriculture To Fight Poverty

                </div>
                <div class="text-caption text-grey-8 my-font-poppins-light">
                 The Nigerian AgriBusiness Group (NABG) and other stakeholders in the agriculture sector have discussed on how to deploy climate- smart agriculture to improve food productivity, create job and fight the scourge of poverty in Nigeria...
                </div>
              </q-card-section>
              <q-card-actions>
                <a
                  target="_blank"
                  class="read"
                  href="https://leadership.ng/nabg-others-to-deploy-climate-smart-agriculture-to-fight-poverty/"
                  >Read More</a
                >
                <q-space />
              </q-card-actions>
            </q-card>
          </div>
          
          <div class="">
            <q-card class="my-card q-mx-sm" bordered>
              <q-img
                height="200px"
                src="https://cdn.vanguardngr.com/wp-content/uploads/2022/07/images-54.jpeg?width=350&auto_optimize=medium"
              />
              <q-card-section>
                <div class="text-subtitle2 row items-center justify-between">
                  <span class="text-grey my-font-poppins-light">
                    <q-icon
                      name="query_builder"
                      color="grey"
                      size="large"
                      class="q-mr-sm"
                    />2 days ago</span
                  >
                  <q-chip
                    class="my-font-poppins-bold"
                    label="Agriculture"
                    ripple
                    color="grey-3"
                    text-color="purple"
                  />
                </div>
                <div
                  class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
                >
                  We must fight climate change with climate-smart agriculture to sustain food system — Dr Maigari
                </div>
                <div class="text-caption text-grey-8 my-font-poppins-light">
                 The Director General, Nigeria Agribusiness Group, NABG, Dr Manzo Maigari, said all   stakeholders must rise to fight climate change affecting farmers’ productivity with climate -smart agriculture to sustain the food system...
                </div>
              </q-card-section>
              <q-card-actions>
                <a
                  target="_blank"
                  class="read"
                  href="https://www.vanguardngr.com/2022/07/we-must-fight-climate-change-with-climate-smart-agriculture-to-sustain-food-system-dr-maigari/"
                  >Read More</a
                >
                <q-space />
              </q-card-actions>
            </q-card>
          </div>
         
          <div class="">
            <q-card class="my-card q-mx-sm" bordered>
              <q-img
                height="200px"
                src="https://guardian.ng/wp-content/uploads/2020/07/shutterstock_1106271755-800x450.jpg"
              />
              <q-card-section>
                <div class="text-subtitle2 row items-center justify-between">
                  <span class="text-grey my-font-poppins-light">
                    <q-icon
                      name="query_builder"
                      color="grey"
                      size="large"
                      class="q-mr-sm"
                    />2 days ago</span
                  >
                  <q-chip
                    class="my-font-poppins-bold"
                    label="Agriculture"
                    ripple
                    color="grey-3"
                    text-color="purple"
                  />
                </div>
                <div
                  class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
                >
                  NABG to deploy climate smart agric techniques in food production
                </div>
                <div class="text-caption text-grey-8 my-font-poppins-light">
                 To reduce the impact of climate change on food production, the Nigeria Agribusiness Group (NABG) has unveiled plans to deploy climate-smart agricultural techniques to boost food production in the country...
                </div>
              </q-card-section>
              <q-card-actions>
                <a
                  target="_blank"
                  class="read"
                  href="https://guardian.ng/business-services/nabg-to-deploy-climate-smart-agric-techniques-in-food-production/"
                  >Read More</a
                >
                <q-space />
              </q-card-actions>
            </q-card>
          </div>
          <div class="">
            <q-card class="my-card q-mx-sm" bordered>
              <q-img
                height="200px"
                src="https://i0.wp.com/www.thisdaylive.com/wp-content/uploads/Climate-Change.png?w=949&ssl=1"
              />
              <q-card-section>
                <div class="text-subtitle2 row items-center justify-between">
                  <span class="text-grey my-font-poppins-light">
                    <q-icon
                      name="query_builder"
                      color="grey"
                      size="large"
                      class="q-mr-sm"
                    />3 days ago</span
                  >
                  <q-chip
                    class="my-font-poppins-bold"
                    label="Agriculture"
                    ripple
                    color="grey-3"
                    text-color="purple"
                  />
                </div>
                <div
                  class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
                >
                  Group Seeks to Tackle Climate Change Via Smart Agriculture
                </div>
                <div class="text-caption text-grey-8 my-font-poppins-light">
                 The Nigeria Agribusiness Group (NABG) has teamed up with other stakeholders in the agricultural sector to reduce the impact of climate change on agribusiness through the adoption of the Climate -Smart Agriculture approach...
                </div>
              </q-card-section>
              <q-card-actions>
                <a
                  target="_blank"
                  class="read"
                  href="https://www.thisdaylive.com/index.php/2022/07/13/group-seeks-to-tackle-climate-change-via-smart-agriculture/"
                  >Read More</a
                >
                <q-space />
              </q-card-actions>
            </q-card>
          </div>
          <div class="">
            <q-card class="my-card q-mx-sm" bordered>
              <q-img
                height="200px"
                src="https://cdn.vanguardngr.com/wp-content/uploads/2022/07/images-51.jpeg?width=641&auto_optimize=medium"
              />
              <q-card-section>
                <div class="text-subtitle2 row items-center justify-between">
                  <span class="text-grey my-font-poppins-light">
                    <q-icon
                      name="query_builder"
                      color="grey"
                      size="large"
                      class="q-mr-sm"
                    />3 days ago</span
                  >
                  <q-chip
                    class="my-font-poppins-bold"
                    label="Agriculture"
                    ripple
                    color="grey-3"
                    text-color="purple"
                  />
                </div>
                <div
                  class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
                >
                  NABG leads others to reduce climate change impact with Climate-Smart Agriculture
                </div>
                <div class="text-caption text-grey-8 my-font-poppins-light">
                  NABG with concern over the toll and impact of devastating climate change on farmers’ productivity in Nigeria organised a 2-day Workshop on Developing a National Framework for Climate-Smart Agriculture with theme ‘Cleaner, safer, rewarding agriculture’ held from July 7-8, 2022, in Abuja...
                </div>
              </q-card-section>
              <q-card-actions>
                <a
                  target="_blank"
                  class="read"
                  href="https://www.vanguardngr.com/2022/07/nabg-leads-others-to-reduce-climate-change-impact-with-climate-smart-agriculture/amp/"
                  >Read More</a
                >
                <q-space />
              </q-card-actions>
            </q-card>
          </div>
          <div class="">
            <q-card class="my-card q-mx-sm" bordered>
              <q-img
                height="200px"
                src="https://cdn.vanguardngr.com/wp-content/uploads/2020/06/Food-1.jpg?width=949&auto_optimize=medium"
              />
              <q-card-section>
                <div class="text-subtitle2 row items-center justify-between">
                  <span class="text-grey my-font-poppins-light">
                    <q-icon
                      name="query_builder"
                      color="grey"
                      size="large"
                      class="q-mr-sm"
                    />3 days ago</span
                  >
                  <q-chip
                    class="my-font-poppins-bold"
                    label="Agriculture"
                    ripple
                    color="grey-3"
                    text-color="purple"
                  />
                </div>
                <div
                  class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
                >
                  FG’s synergy with private sector’ll tackle hunger storm— NABG
                </div>
                <div class="text-caption text-grey-8 my-font-poppins-light">
                  As Nigerians face serious food production challenges, the Nigeria Agribusiness Group, NABG,  Thursday, called on the Federal Government to strengthen its synergy with the private sector to tackle the raging hunger storm across the country...
                </div>
              </q-card-section>
              <q-card-actions>
                <a
                  target="_blank"
                  class="read"
                  href="https://www.vanguardngr.com/2022/07/fgs-synergy-with-private-sectorll-tackle-hunger-storm-nabg/"
                  >Read More</a
                >
                <q-space />
              </q-card-actions>
            </q-card>
          </div>
          <div class="">
            <q-card class="my-card q-mx-sm" bordered>
              <q-img
                height="200px"
                src="http://db.zs-intern.de/archive/aWfmxfRhV9MxNYQ4eTCnhTLMb4msPm9xFebTfNVV.jpg"
              />
              <q-card-section>
                <div class="text-subtitle2 row items-center justify-between">
                  <span class="text-grey my-font-poppins-light">
                    <q-icon
                      name="query_builder"
                      color="grey"
                      size="large"
                      class="q-mr-sm"
                    />3 days ago</span
                  >
                  <q-chip
                    class="my-font-poppins-bold"
                    label="Agriculture"
                    ripple
                    color="grey-3"
                    text-color="purple"
                  />
                </div>
                <div
                  class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
                >
                  Hunger: Experts brainstorm on how to tackle food crisis
                </div>
                <div class="text-caption text-grey-8 my-font-poppins-light">
                  Led by the Nigerian AgriBusiness Group (NABG), the experts dissected the problems at a two-day workshop in Abuja with the theme, ‘Cleaner, safer, rewarding agriculture’, and resolved on how to develop a national framework on climate -smart agriculture...
                </div>
              </q-card-section>
              <q-card-actions>
                <a
                  target="_blank"
                  class="read"
                  href="https://www.sunnewsonline.com/hunger-experts-brainstorm-on-how-to-tackle-food-crisis/"
                  >Read More</a
                >
                <q-space />
              </q-card-actions>
            </q-card>
          </div>
          <div class="">
            <q-card class="my-card q-mx-sm" bordered>
              <q-img
                height="200px"
                src="https://i0.wp.com/www.blueprint.ng/wp-content/uploads/2022/02/Farmers-at-Work-in-their-Various-Farms-768x461-1.jpg?resize=678%2C381&ssl=1"
              />
              <q-card-section>
                <div class="text-subtitle2 row items-center justify-between">
                  <span class="text-grey my-font-poppins-light">
                    <q-icon
                      name="query_builder"
                      color="grey"
                      size="large"
                      class="q-mr-sm"
                    />3 days ago</span
                  >
                  <q-chip
                    class="my-font-poppins-bold"
                    label="Agriculture"
                    ripple
                    color="grey-3"
                    text-color="purple"
                  />
                </div>
                <div
                  class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
                >
                  NABG, stakeholders to deploy climate-smart agriculture to
                  fight poverty
                </div>
                <div class="text-caption text-grey-8 my-font-poppins-light">
                  The Nigerian AgriBusiness Group (NABG) and other stakeholders
                  in the agriculture sector have resolved to deploy
                  climate-smart agriculture to improve food productivity, create
                  job and fight the scourge of poverty in Nigeria...
                </div>
              </q-card-section>
              <q-card-actions>
                <a
                  target="_blank"
                  class="read"
                  href="https://www.blueprint.ng/nabg-stakeholders-to-deploy-climate-smart-agriculture-to-fight-poverty/"
                  >Read More</a
                >
                <q-space />
              </q-card-actions>
            </q-card>
          </div>
          
          <div class="">
            <q-card class="my-card q-mx-sm" bordered>
              <q-img
                height="200px"
                src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/assets/2018/02/26-02-2018_FAO-SouthSudan.jpg/image1170x530cropped.jpg"
              />
              <q-card-section>
                <div class="text-subtitle2 row items-center justify-between">
                  <span class="text-grey my-font-poppins-light">
                    <q-icon
                      name="query_builder"
                      color="grey"
                      size="large"
                      class="q-mr-sm"
                    />3 days ago</span
                  >
                  <q-chip
                    class="my-font-poppins-bold"
                    label="Agriculture"
                    ripple
                    color="grey-3"
                    text-color="purple"
                  />
                </div>
                <div
                  class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
                >
                  Hunger: Experts brainstorm on how to tackle food crisis
                </div>
                <div class="text-caption text-grey-8 my-font-poppins-light">
                  Led by the Nigerian AgriBusiness Group (NABG), the experts
                  dissected the problems at a two-day workshop in Abuja with the
                  theme, ‘Cleaner, safer, rewarding agriculture’, and resolved
                  on how to develop a national framework on climate ...
                </div>
              </q-card-section>
              <q-card-actions>
                <a
                  target="_blank"
                  class="read"
                  href="https://www.sunnewsonline.com/hunger-experts-brainstorm-on-how-to-tackle-food-crisis/"
                  >Read More</a
                >
                <q-space />
              </q-card-actions>
            </q-card>
          </div>
          <div class="">
            <q-card class="my-card q-mx-sm" bordered>
              <q-img
                height="200px"
                src="https://cdn.vanguardngr.com/wp-content/uploads/2020/06/Food-1.jpg?width=949&auto_optimize=medium"
              />
              <q-card-section>
                <div class="text-subtitle2 row items-center justify-between">
                  <span class="text-grey my-font-poppins-light">
                    <q-icon
                      name="query_builder"
                      color="grey"
                      size="large"
                      class="q-mr-sm"
                    />3 days ago</span
                  >
                  <q-chip
                    class="my-font-poppins-bold"
                    label="Agriculture"
                    ripple
                    color="grey-3"
                    text-color="purple"
                  />
                </div>
                <div
                  class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
                >
                  FG’s synergy with private sector’ll tackle hunger storm— NABG
                </div>
                <div class="text-caption text-grey-8 my-font-poppins-light">
                  As Nigerians face serious food production challenges, the
                  Nigeria Agribusiness Group, NABG, Thursday, called on the
                  Federal Government to strengthen its synergy with the private
                  sector to tackle the raging hunger storm across the country...
                </div>
              </q-card-section>
              <q-card-actions>
                <a
                  target="_blank"
                  class="read"
                  href="https://www.vanguardngr.com/2022/07/fgs-synergy-with-private-sectorll-tackle-hunger-storm-nabg/"
                  >Read More</a
                >
                <q-space />
              </q-card-actions>
            </q-card>
          </div>
          <div class="">
            <q-card class="my-card q-mx-sm" bordered>
              <q-img
                height="200px"
                src="http://www.environewsnigeria.com/wp-content/uploads/2022/07/Manzo-Maigari.jpg"
              />
              <q-card-section>
                <div class="text-subtitle2 row items-center justify-between">
                  <span class="text-grey my-font-poppins-light">
                    <q-icon
                      name="query_builder"
                      color="grey"
                      size="large"
                      class="q-mr-sm"
                    />3 days ago</span
                  >
                  <q-chip
                    class="my-font-poppins-bold"
                    label="Agriculture"
                    ripple
                    color="grey-3"
                    text-color="purple"
                  />
                </div>
                <div
                  class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
                >
                  NABG, Stakeholders to fight poverty via climate-smart
                  agriculture
                </div>
                <div class="text-caption text-grey-8 my-font-poppins-light">
                  The Nigerian AgriBusiness Group (NABG) and other stakeholders
                  in the agriculture sector have brainstormed on how to deploy
                  climate- smart agriculture to improve food productivity,
                  create job and fight the scourge of poverty in Nigeria...
                </div>
              </q-card-section>
              <q-card-actions>
                <a
                  target="_blank"
                  class="read"
                  href="https://humanitarianvoice.com/2022/07/08/nabg-stakeholders-to-fight-poverty-via-climate-smart-agriculture/"
                  >Read More</a
                >
                <q-space />
              </q-card-actions>
            </q-card>
          </div>
          <div class="">
            <q-card class="my-card q-mx-sm" bordered>
              <q-img height="200px" src="/images/farmer1.webp" />
              <q-card-section>
                <div class="text-subtitle2 row items-center justify-between">
                  <span class="text-grey my-font-poppins-light">
                    <q-icon
                      name="query_builder"
                      color="grey"
                      size="large"
                      class="q-mr-sm"
                    />3 days ago</span
                  >
                  <q-chip
                    class="my-font-poppins-bold"
                    label="Agriculture"
                    ripple
                    color="grey-3"
                    text-color="purple"
                  />
                </div>
                <div
                  class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
                >
                  Bridging farmer-industry gaps, as firm lists fast-moving crops
                </div>
                <div class="text-caption text-grey-8 my-font-poppins-light">
                  Farmers in Nigeria have been urged to produce crops and other
                  products based on guided industrial demands to reduce gluts,
                  marketing challenges, gross importation and capital flight, as
                  well as to build economic....
                </div>
              </q-card-section>
              <q-card-actions>
                <a
                  target="_blank"
                  class="read"
                  href="https://guardian.ng/features/bridging-farmer-industry-gaps-as-firm-lists-fast-moving-crops/"
                  >Read More</a
                >
                <q-space />
              </q-card-actions>
            </q-card>
          </div>
          <div class="">
            <q-card class="my-card q-mx-sm" bordered>
              <q-img height="200px" src="/images/food2.jpg" />
              <q-card-section>
                <div class="text-subtitle2 row items-center justify-between">
                  <span class="text-grey my-font-poppins-light">
                    <q-icon
                      name="query_builder"
                      color="grey"
                      size="large"
                      class="q-mr-sm"
                    />5 days ago</span
                  >
                  <q-chip
                    class="my-font-poppins-bold"
                    label="Agriculture"
                    ripple
                    color="grey-3"
                    text-color="purple"
                  />
                </div>
                <div
                  class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
                >
                  How to address rising cost of food items
                </div>
                <div class="text-caption text-grey-8 my-font-poppins-light">
                  A lecturer in the Faculty of Agriculture, University of
                  Ibadan, Oyo State, Dr. Olabode Badiru, has called on the
                  government to pay more attention to food security in the
                  country to address the rising cost of foodstuffs.....
                </div>
              </q-card-section>
              <q-card-actions>
                <a
                  target="_blank"
                  class="read"
                  href="https://guardian.ng/features/agro-care/how-to-address-rising-cost-of-food-items-by-don/"
                  >Read More</a
                >
                <q-space />
              </q-card-actions>
            </q-card>
          </div>
          <div class="">
            <q-card class="my-card q-mx-sm" bordered>
              <q-img height="200px" src="/images/marker4.jpg" />
              <q-card-section>
                <div class="text-subtitle2 row items-center justify-between">
                  <span class="text-grey my-font-poppins-light">
                    <q-icon
                      name="query_builder"
                      color="grey"
                      size="large"
                      class="q-mr-sm"
                    />7 days ago</span
                  >
                  <q-chip
                    class="my-font-poppins-bold"
                    label="Agriculture"
                    ripple
                    color="grey-3"
                    text-color="purple"
                  />
                </div>
                <div
                  class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
                >
                  No culture without agriculture, no faith without cultivation
                </div>
                <div class="text-caption text-grey-8 my-font-poppins-light">
                  Man as a work in progress is both a subject and object of
                  cultivation. There is no culture without cultivation both in
                  its figurative and literal senses. As habitual beings, our
                  repeated actions create a pattern that influences...
                </div>
              </q-card-section>
              <q-card-actions>
                <a
                  target="_blank"
                  class="read"
                  href="https://www.vanguardngr.com/2021/01/no-culture-without-agriculture-no-faith-without-cultivation/"
                  >Read More</a
                >
                <q-space />
              </q-card-actions>
            </q-card>
          </div>
        </VueSlickCarousel>
      </div>

      <!-- <div
        class="row q-my-sm"
        v-observe-visibility="{
          callback: (isVisible, entry) => isViewableNow(isVisible, entry, 'e'),
          once: true
        }"
        :class="{
          'visible animated slideInRight': showAnimationFor.e,
          invisible: !showAnimationFor.e
        }"
      >
        <div class="col-md-4 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <q-card class="my-card" bordered>
            <q-img height="200px" src="/images/farmer1.webp" />
            <q-card-section>
              <div class="text-subtitle2 row items-center justify-between">
                <span class="text-grey my-font-poppins-light">
                  <q-icon
                    name="query_builder"
                    color="grey"
                    size="large"
                    class="q-mr-sm"
                  />3 days ago</span
                >
                <q-chip
                  class="my-font-poppins-bold"
                  label="Agriculture"
                  ripple
                  color="grey-3"
                  text-color="purple"
                />
              </div>
              <div
                class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
              >
                Bridging farmer-industry gaps, as firm lists fast-moving crops
              </div>
              <div class="text-caption text-grey-8 my-font-poppins-light">
                Farmers in Nigeria have been urged to produce crops and other
                products based on guided industrial demands to reduce gluts,
                marketing challenges, gross importation and capital flight, as
                well as to build economic....
              </div>
            </q-card-section>
            <q-card-actions>
              <q-btn flat color="orange" label="Read More" />
              <q-space />
            </q-card-actions>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <q-card class="my-card" bordered>
            <q-img height="200px" src="/images/food2.jpg" />
            <q-card-section>
              <div class="text-subtitle2 row items-center justify-between">
                <span class="text-grey my-font-poppins-light">
                  <q-icon
                    name="query_builder"
                    color="grey"
                    size="large"
                    class="q-mr-sm"
                  />5 days ago</span
                >
                <q-chip
                  class="my-font-poppins-bold"
                  label="Agriculture"
                  ripple
                  color="grey-3"
                  text-color="purple"
                />
              </div>
              <div
                class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
              >
                How to address rising cost of food items
              </div>
              <div class="text-caption text-grey-8 my-font-poppins-light">
                A lecturer in the Faculty of Agriculture, University of Ibadan,
                Oyo State, Dr. Olabode Badiru, has called on the government to
                pay more attention to food security in the country to address
                the rising cost of foodstuffs.....
              </div>
            </q-card-section>
            <q-card-actions>
              <q-btn flat color="orange" label="Read More" />
              <q-space />
            </q-card-actions>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <q-card class="my-card" bordered>
            <q-img height="200px" src="/images/marker4.jpg" />
            <q-card-section>
              <div class="text-subtitle2 row items-center justify-between">
                <span class="text-grey my-font-poppins-light">
                  <q-icon
                    name="query_builder"
                    color="grey"
                    size="large"
                    class="q-mr-sm"
                  />7 days ago</span
                >
                <q-chip
                  class="my-font-poppins-bold"
                  label="Agriculture"
                  ripple
                  color="grey-3"
                  text-color="purple"
                />
              </div>
              <div
                class="my-font-poppins-regular text-green text-body1 q-mt-sm q-mb-xs"
              >
                No culture without agriculture, no faith without cultivation
              </div>
              <div class="text-caption text-grey-8 my-font-poppins-light">
                Man as a work in progress is both a subject and object of
                cultivation. There is no culture without cultivation both in its
                figurative and literal senses. As habitual beings, our repeated
                actions create a pattern that influences...
              </div>
            </q-card-section>
            <q-card-actions>
              <q-btn flat color="orange" label="Read More" />
              <q-space />
            </q-card-actions>
          </q-card>
        </div>
      </div> -->
    </section>
    <Gallery/>
    <!--Footer Section-->
    <section>
      <div
        class="q-pa-xl bg-grey-10 text-white q-mt-xl my-font-poppins-regular"
      >
        <p class="text-h4 text-center my-font-poppins-light">
          Let's Change the World of Agriculture
        </p>
        <div class="row justify-center q-mb-md">
          <q-btn
            @click="$router.push('/membership')"
            no-caps
            outline
            flat
            style="border: 3px solid #52af50"
            class="text-white bg-green q-mr-md q-ma-sm"
            icon-right="arrow_right"
            label="Get Started"
          />
          <q-btn
            @click="$router.push('/contact')"
            no-caps
            flat
            style="border: 3px solid white"
            class="text-white bg-transparent q-ma-sm"
            icon-right="arrow_right"
            label="Contact Us"
          />

          <div class="text-caption text-grey-6">
            <q-btn
              class="q-mt-sm text-green"
              no-caps
              small
              outline
              icon="mail"
              type="a"
              href="https://www.nabg.ng/webmail/"
              target="_blank"
            >
              <span class="q-pl-sm">Check Mail</span>
            </q-btn>
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 text-bold">About</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/')"
            >
              Home
            </div>
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/about')"
            >
              About Us
            </div>
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/membership')"
            >
              Membership
            </div>
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/leadership')"
            >
              Leadership
            </div>
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/partner')"
            >
              Partners
            </div>
          </div>

          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 text-bold">Resources</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/news')"
            >
              News
            </div>
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/contact')"
            >
              Contact Us
            </div>
          </div>
          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 text-bold my-font">Social Media</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div class="text-body2 q-mt-md cursor-pointer">
              <q-icon name="ion-logo-facebook" style="font-size: 2em" />
              <span class="q-ml-sm">Facebook</span>
            </div>
            <div class="text-body2 q-mt-md cursor-pointer">
              <q-icon name="ion-logo-twitter" style="font-size: 2em" />
              <span class="q-ml-sm">Twitter</span>
            </div>
            <div class="text-body2 q-mt-md cursor-pointer">
              <q-icon name="ion-logo-instagram" style="font-size: 2em" />
              <span class="q-ml-sm">Instagram</span>
            </div>
            <div class="text-body2 q-mt-md cursor-pointer">
              <q-icon name="ion-logo-linkedin" style="font-size: 2em" />
              <span class="q-ml-sm">Linkedin</span>
            </div>
          </div>
          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 typo1 text-bold my-font">Contact Info</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div class="text-body2 typo1 q-mt-md">
              Head Office: No 26 Lake Chad Crescent Maitama, Abuja Nigeria.
            </div>
            <div class="text-body2 q-mt-md">contact@nabg.ng</div>
            <div class="text-body2 q-mt-md">
             NABG Secretarait: +2348036702021, +2348129929300 or +2348023591357
            </div>
          </div>
        </div>
        <q-separator class="bg-grey-9 q-px-xl q-mt-xl" />
        <div class="text-caption text-grey-6">
          © 2021 NABG. All rights reserved.
        </div>
        <div class="text-caption text-grey-6">By Greysoft© Technologies.</div>
      </div>
    </section>
  </div>
</template>

<script>
import Gallery from './Gallery.vue'
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel,Gallery },
  data: () => ({
    showAnimationFor: {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false
    },
    settings: {
      arrows: true,
      dots: true,
      slidesToShow: "3"
    },
    slide: "a"
  }),
  methods: {
    isViewableNow(isVisible, entry, section) {
      this.showAnimationFor[section] = isVisible;
    }
  },
  computed: {
    screenRatioHeading() {
      let size = this.$q.screen.name;
      if (size == "md" || size == "lg" || size == "xl") {
        return "text-h4";
      } else return "text-h5";
    }
  }
};
</script>

<style lang="scss">
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
.custom__header-bg {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),
    url("/images/header1.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: calc(100vh - 66px);
  width: 100%;
}
.custom__card-pointer:hover {
  cursor: pointer;
  color: white !important;
  background-color: #52af50 !important;
}

.read {
  text-decoration: none;
  color: orange;
  font-size: 15px;
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  outline: 0;
  border: 0;
  vertical-align: middle;
  padding: 0 12px;
  font-size: 14px;
  line-height: 1.715em;
  text-decoration: none;
  background: transparent;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  width: auto;
  height: auto;
}

.my-card {
  height: 500px !important;
}

.my_card {
  transition: all 0.5s ease-in-out;
}

.my_card:hover {
  cursor: pointer;
  transform: scale(1.1);
}

@media (max-width: 500px) {
  .smart {
    text-align: center;
  }
}
</style>

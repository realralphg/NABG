<template>
  <div>
    <header class="custom__header-bg row justify-start items-center q-px-xl">
      <div style="width: 50%" class="text-white">
        <q-separator color="green" spaced />
        <h3 class="text-h6 my-font-poppins-regular">
          Welcome to the Age of Agricultural Transformation
        </h3>
        <h1 class="text-h3 my-font-poppins-extraBold">
          Growing Nigeria’s agricultural economy, creating jobs and lifting
          millions out of poverty.
        </h1>
        <q-separator color="green" spaced />
        <q-btn
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
      <div class="row q-gutter-xl q-pa-xl">
        <div
          v-observe-visibility="{
            callback: (isVisible, entry) =>
              isViewableNow(isVisible, entry, 'a'),
          }"
          :class="{
            'visible animated slideInRight': showAnimationFor.a,
            invisible: !showAnimationFor.a,
          }"
        >
          <div class="col q-pa-sm">
            <q-card class="my-card bg-grey-10">
              <q-card-section class="row justify-center q-py-xl">
                <img
                  src="/images/planting.svg"
                  height="100"
                  width="100"
                  alt=""
                />
                <div class="text-h6 text-white my-font-poppins-bold">
                  Growing Nigeria’s Agricultural Economy
                </div>
                <div class="text-subtitle2 text-white my-font-poppins-light">
                  Nigeria is Africa's largest economy, harnessing the prowess of
                  agriculture is of paramount importance
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-pa-sm">
            <q-card class="my-card bg-green">
              <q-card-section class="row justify-center q-py-xl">
                <img
                  src="/images/tractor.svg"
                  height="100"
                  width="100"
                  alt=""
                />
                <div class="text-h6 text-white my-font-poppins-bold">
                  Creating Thousands of Jobs for the Youth
                </div>
                <div class="text-subtitle2 text-white my-font-poppins-light">
                  With the increase in rate of unemployment in the country, we
                  help equip youth with needed knowledge, tools and equipment
                  that will guide them get in their farming profession
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-pa-sm">
            <q-card class="my-card bg-grey-10">
              <q-card-section class="row justify-center q-py-xl">
                <img src="/images/money.svg" height="100" width="100" alt="" />
                <div class="text-h6 text-white my-font-poppins-bold">
                  Lifting Millions of Nigerians out of Poverty
                </div>
                <div class="text-subtitle2 text-white my-font-poppins-light">
                  Nigeria has one of the highest number of people living in
                  poverty in the world, one of our missions is to change that
                  and impact millions of lives
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="row q-gutter-xl q-pa-xl">
        <div class="col-5">
          <h3
            v-observe-visibility="{
              callback: (isVisible, entry) =>
                isViewableNow(isVisible, entry, 'b'),
            }"
            :class="{
              'visible animated slideInLeft': showAnimationFor.b,
              invisible: !showAnimationFor.b,
            }"
            class="text-h4 my-font-poppins-boldItalic"
          >
            Global
            <span class="text-green text-h4 my-font-poppins-extraBold"
              >Agricultural</span
            >
            Services Provided By Exceptional Individuals
          </h3>
          <p class="text-body1 my-font-poppins-regular">
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
        <div class="col-1 column justify-center">
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
        <div class="col-4 custom__overflow">
          <q-img
            src="/images/kenya-1.png"
            style="width: 100%; height: 100%"
            contain
          ></q-img>
        </div>
      </div>
    </section>
    <q-separator class="q-mx-xl" color="black" spaced />
    <section>
      <div class="q-mx-xl q-pa-xl row justify-around">
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
    <q-separator class="q-mx-xl" color="black" spaced />
    <section class="q-px-xl q-my-xl">
      <div class="row q-gutter-xl">
        <div
          class="col-3 column justify-center items-center my-font-poppins-extraBold"
        >
          <h3
            class="text-h3 q-my-sm"
            v-observe-visibility="{
              callback: (isVisible, entry) =>
                isViewableNow(isVisible, entry, 'c'),
            }"
            :class="{
              'visible animated bounceIn': showAnimationFor.c,
              invisible: !showAnimationFor.c,
            }"
          >
            <span class="my-font-poppins-thin">Explore</span> <br />
            <span class="text-green text-h1">NABG</span>
          </h3>
          <!-- <img
            src="/images/logo.jpg"
            class="cursor-pointer"
            height="150"
            width="150"
            @click="$router.push('/')"
          /> -->
        </div>
        <div class="col-8 my-font-poppins-light">
          <div class="row q-gutter-lg">
            <div class="col">
              <q-card
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
            <div class="col">
              <q-card
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
            <div class="col">
              <q-card
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
          <div class="row q-gutter-lg q-mt-sm">
            <div class="col">
              <q-card
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
            <div class="col">
              <q-card
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
                  <span class="text-h6 my-font-poppins-extraBold">Events</span>
                </q-card-section>
              </q-card>
            </div>
            <div class="col">
              <q-card
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
                  <span class="text-h6 my-font-poppins-extraBold">News</span>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      v-observe-visibility="{
        callback: (isVisible, entry) => isViewableNow(isVisible, entry, 'd'),
      }"
      :class="{
        'visible animated slideInRight': showAnimationFor.d,
        invisible: !showAnimationFor.d,
      }"
      class="q-px-xl"
    >
      <div class="row q-gutter-xl">
        <div class="col my-font-poppins-thin">
          <h3 class="text-center text-h3">
            Executive
            <span class="my-font-poppins-extraBold text-green">Council</span>
          </h3>
        </div>
      </div>
      <div class="row q-gutter-lg q-my-sm">
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/dangote.jpg" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                Alh Sani Dangote <br />
                <span class="text-caption my-font-poppins-light"
                  >President/Vice President, NABG/Dangote Group Plc</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/adamu.jpg" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                Sen Abudllahi Adamu <br />
                <span class="text-caption my-font-poppins-light"
                  >Chair Senate Committee on Agriculture, Senate</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/nakudu.jpg" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                Sen Sabo Nakudu <br />
                <span class="text-caption my-font-poppins-light"
                  >VC Senate Committee on Trade & Investment, Senate</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/kabir.jpg" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                Arc Kabir Ibrahim <br />
                <span class="text-caption my-font-poppins-light"
                  >President of AFAN, All Farms Asso. of Nigeria</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/emmanuel.jpg" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                Emmanuel Ijewere <br />
                <span class="text-caption my-font-poppins-light"
                  >Vice President/Chairman, NABG/Best Foods</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
      </div>
      <div class="row q-gutter-lg q-my-sm">
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/manzo.jpg" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                Dr Manzo Maigari <br />
                <span class="text-caption my-font-poppins-light"
                  >Director General, NABG</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/graham.jpg" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                Dr. Graham Hefer <br />
                <span class="text-caption my-font-poppins-light"
                  >MD, Okomu Oil Palm Co Plc</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/felix.webp" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                Felix Nwabuko <br />
                <span class="text-caption my-font-poppins-light"
                  >MD, Presco Plc</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/graham.jpeg" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                Graham Leslie <br />
                <span class="text-caption my-font-poppins-light"
                  >Country Manager, Dizengoff</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/akin.png" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                Akin Sawyer <br />
                <span class="text-caption my-font-poppins-light"
                  >Executive Secretary, AFGEAN</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
      </div>
      <div class="row justify-center q-mt-xl q-py-md">
        <q-btn
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
      <!-- <div class="row q-gutter-lg q-my-sm">
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/salamatu.png" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                Haj Salamatu Garba <br />
                <span class="text-caption my-font-poppins-light"
                  >ED/Founder, NABG/WOFAN</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/tafida.jpg" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                Alh. Isa Tafida mafindi <br />
                <span class="text-caption my-font-poppins-light"
                  >CEO, Famag Jal Nigeria Ltd</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/abubakar.jpg" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                M.D Abubakar <br />
                <span class="text-caption my-font-poppins-light"
                  >Chairman, L &Z Int. Farms Ltd</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/mukul.png" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                MuKul Mathur <br />
                <span class="text-caption my-font-poppins-light"
                  >Country Head, Olam Nigeria</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img height="200px" contain src="/images/rahul.jpg" basic>
              <div
                class="absolute-bottom text-subtitle1 my-font-poppins-extraBold"
              >
                Rahul Savara <br />
                <span class="text-caption my-font-poppins-light"
                  >GMD, CHI Group Ltd</span
                >
              </div>
              <q-separator
                class="absolute-bottom q-mx-md"
                spaced
                color="green"
              />
            </q-img>
          </q-card>
        </div>
      </div> -->
    </section>

    <section
      v-observe-visibility="{
        callback: (isVisible, entry) => isViewableNow(isVisible, entry, 'e'),
      }"
      :class="{
        'visible animated slideInLeft': showAnimationFor.e,
        invisible: !showAnimationFor.e,
      }"
      class="q-px-xl"
    >
      <div class="row q-gutter-xl">
        <div class="col my-font-poppins-thin">
          <h3 class="text-center text-h3">
            <span class="my-font-poppins-thin"
              >New<span class="text-green my-font-poppins-extraBold"
                >s</span
              ></span
            >
          </h3>
        </div>
      </div>
      <div class="row q-gutter-lg q-my-sm">
        <div class="col">
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
                class="my-font-poppins-regular text-green text-h6 q-mt-sm q-mb-xs"
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
        <div class="col">
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
                class="my-font-poppins-regular text-green text-h6 q-mt-sm q-mb-xs"
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
        <div class="col">
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
                class="my-font-poppins-regular text-green text-h6 q-mt-sm q-mb-xs"
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
      </div>
    </section>
    <!--Footer Section-->
    <section>
      <div class="q-pa-xl bg-green text-white q-mt-xl my-font-poppins-regular">
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12 q-pt-md">
            <div class="text-body1">© 2021 NABG. All rights reserved.</div>
            <div class="text-body1"></div>
            <div class="text-body1">Greysoft Technologies ©</div>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="row">
              <div class="col-md-4 col-sm-12 col-xs-12 q-pt-md my-font-nav">
                <div class="text-body1 text-bold">NAVIGATION</div>
                <div class="text-body1 q-mt-md cursor-pointer">Home</div>
                <div class="text-body1 q-mt-md cursor-pointer">About Us</div>
                <div class="text-body1 q-mt-md cursor-pointer">Membership</div>
                <div class="text-body1 q-mt-md cursor-pointer">Leadership</div>
              </div>
              <div class="col-md-4 col-sm-12 col-xs-12 q-pt-md my-font-nav">
                <div class="text-body1 text-bold my-font">LEGAL</div>
                <div class="text-body1 q-mt-md cursor-pointer">
                  Terms and Agreement
                </div>
                <div class="text-body1 typo1 q-mt-md cursor-pointer">
                  Privacy Policy
                </div>
              </div>
              <div class="col-md-4 col-sm-12 col-xs-12 q-pt-md my-font-nav">
                <div class="text-body1 typo1 text-bold my-font">CONTACT</div>
                <div class="text-body1 typo1 q-mt-md">support@nabg.org</div>
                <div class="text-body1 typo1 q-mt-md">+234 807 777 7777</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    showAnimationFor: {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
    },
  }),
  methods: {
    isViewableNow(isVisible, entry, section) {
      this.showAnimationFor[section] = isVisible;
    },
  },
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
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),
    url("/images/header1.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: calc(100vh - 66px);
}
.custom__card-pointer:hover {
  cursor: pointer;
  color: white !important;
  background-color: #52af50 !important;
}
</style>

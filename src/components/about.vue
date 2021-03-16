
<template>
  <div>
    <header>
      <q-card flat square class="custom__header-bg-v1 row items-center">
        <q-card-section class="text-h3 text-grey-1 my-font-poppins-extraBold">
          About Us
          <div class="text-h5 text-grey-1 my-font-poppins-thin">
            Nigeria Agribusiness Group
          </div>
        </q-card-section>
      </q-card>
    </header>

    <section class="mb-lg">
      <div class="container q-px-xl">
        <div class="row">
          <div class="col">
            <h3
              class="text-h4 my-font-poppins-boldItalic custom__heading-green"
            >
              Twenty-Five Years of Experience
            </h3>
            <p
              class="text-body1 text-justify text-grey-8 my-font-poppins-light"
            >
              We are an organized private sector platform working together to
              grow Nigeria’s agricultural economy, creating jobs and lifting
              millions out of poverty. Our investments cut across the entire
              value chain from input to output markets, export markets,
              equipment and consumer foods manufacturing.
            </p>
            <p
              class="text-body1 text-justify text-grey-8 q-mt-md my-font-poppins-light"
            >
              We strive to engage government at all levels in setting policy
              directions and regulatory reforms to enable sustainable inclusive
              socio-economic growth. Together, we are helping to ensure food
              security and nutrition, creating systemic linkages between small,
              medium and large agribusiness enterprises.
            </p>
            <p
              class="text-body1 text-justify text-grey-8 q-mt-md my-font-poppins-light"
            >
              We are working together as stakeholders in agriculture to
              diversify the economy of Nigeria away from oil and gas towards
              agricultural industrialization. We recognize our role as the
              engine of economic growth with government creating the enabling
              environment for agribusinesses to thrive.
            </p>
            <div class="container q-px-xl">
              <div class="row">
                <div class="col q-pa-md">
                  <q-card flat square class="bg-white">
                    <img height="250" src="/images/woman1.jpg" />
                  </q-card>
                </div>
                <div class="col q-pa-md">
                  <q-card flat square class="bg-white">
                    <img height="250" src="/images/man1.jpg" />
                  </q-card>
                </div>
                <div class="col q-pa-md">
                  <q-card flat square class="bg-white">
                    <img height="250" src="/images/farmers2.jpg" />
                  </q-card>
                </div>
              </div>
            </div>
            <p
              class="text-body1 text-justify text-grey-8 q-mt-md my-font-poppins-light"
            >
              We represent the faces of agribusiness in Nigeria, speaking with a
              unified voice to identify and provide solution options to resolve
              issues and challenges and to identify new opportunities for
              sustainable growth. We recognize that farmers are the largest
              private sector group in Nigeria.
            </p>
            <p
              class="text-body1 text-justify text-grey-8 q-mt-md my-font-poppins-light"
            >
              We promote the principles of inclusive growth and sustainability
              through gender sensitivity engagements and creating employment
              opportunities for our youths in a structured manner.
            </p>
            <p
              class="text-body1 text-justify text-grey-8 q-mt-md my-font-poppins-light"
            >
              We work with government at all levels and with Development
              Partners to drive sustainable growth in Nigeria’s agricultural
              sector.
            </p>
          </div>
        </div>
      </div>
    </section>

    <q-separator class="q-mx-xl" color="grey-4" spaced />
    <section>
      <div class="row mt-lg">
        <div class="col-8">
          <q-carousel
            flat
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="green"
            navigation
            padding
            arrows
            class="q-mt-lg"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div
                class="row justify-start items-center q-gutter-md q-col-gutter no-wrap"
              >
                <div class="col">
                  <q-card flat square bordered>
                    <q-img contain height="200px" src="/images/dangote.jpg" />
                    <q-card-section>
                      <div
                        class="text-h6 text-grey-10 text-center my-font-poppins-bold"
                      >
                        Alh. Sani Dangote
                      </div>
                      <div
                        class="text-body1 text-grey-8 text-center my-font-poppins-light"
                      >
                        President/Vice President
                      </div>
                      <div
                        class="text-body2 text-grey-8 text-center my-font-poppins-light"
                      >
                        NABG/Dangote Group Plc
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="col">
                  <q-card flat square bordered>
                    <q-img contain height="200px" src="/images/manzo.jpg" />
                    <q-card-section>
                      <div
                        class="text-h6 text-grey-10 text-center my-font-poppins-bold"
                      >
                        Dr. Manzo D. Maigari
                      </div>
                      <div
                        class="text-body1 text-grey-8 text-center my-font-poppins-light"
                      >
                        Director General
                      </div>
                      <div
                        class="text-body2 text-grey-8 text-center my-font-poppins-light"
                      >
                        NABG
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div class="col-4">
          <h3
            class="text-h4 text-end my-font-poppins-boldItalic custom__heading-green"
          >
            Meet Our Team
          </h3>
          <p
            class="text-body1 text-justify text-grey-8 q-pr-xl q-mt-md my-font-poppins-light"
          >
            We promote the principles of inclusive growth and sustainability
            through gender sensitivity engagements and creating employment
            opportunities for our youths in a structured manner.
          </p>
          <p
            class="text-body1 text-justify text-grey-8 q-pr-xl q-mt-md my-font-poppins-light"
          >
            We work with government at all levels and with Development Partners
            to drive sustainable growth in Nigeria’s agricultural sector.
          </p>
          <div class="row justify-start q-mt-xl q-py-md">
            <q-btn
              no-caps
              outline
              flat
              size="large"
              style="border: 3px solid black"
              class="text-black bg-transparent"
              icon-right="arrow_right"
              label="Contact Us"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div>
        <div class="q-gutter-md">
          <q-carousel
            v-model="slide1"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="white"
            navigation
            padding
            arrows
            class="bg-grey-10 text-white shadow-1 rounded-borders"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <p class="text-h6 my-font-poppins-thin">AGRICULTURE IS LIFE</p>
              <p class="text-h4 my-font-poppins-bold">
                What famous people say about agriculture
              </p>
              <div class="q-mt-md text-center text-body1 my-font-poppins-light">
                <span>&#34;</span>
                The combination of digital technology and human creativity in
                deploying it will revolutionize life for Africa’s farmers by
                overcoming isolation, speeding up change, and taking success to
                scale. <span>&#34;</span> -
                <span class="text-green text-body2">
                  Kofi Annan, Sir Gordon Conway and Sam Dryden
                </span>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="style1" class="column no-wrap flex-center">
              <p class="text-h6 my-font-poppins-thin">AGRICULTURE IS LIFE</p>
              <p class="text-h4 my-font-poppins-bold">
                What famous people say about agriculture
              </p>
              <div class="q-mt-md text-center text-body1 my-font-poppins-light">
                <span>&#34;</span>
                Digital technology’s promise is not one-size-fits-all. Designing
                and implementing sustainable technology solutions (in
                agriculture) requires an understanding of local mores and unique
                community hurdles, in particular a sensitivity to gender-related
                issues.
                <span>&#34;</span> -
                <span class="text-green text-body2">
                  Ertharin Cousin, Executive Director of the World Food
                  Programme
                </span>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="style2" class="column no-wrap flex-center">
              <p class="text-h6 my-font-poppins-thin">AGRICULTURE IS LIFE</p>
              <p class="text-h4 my-font-poppins-bold">
                What famous people say about agriculture
              </p>
              <div class="q-mt-md text-center text-body1 my-font-poppins-light">
                <span>&#34;</span>
                If we empower smallholder farmers to achieve their aspirations,
                they will do the heavy lifting of development themselves.
                <span>&#34;</span> -
                <span class="text-green text-body2">
                  Agnes Kalibata, President of the Alliance for a Green
                  Revolution and former Minister of Agriculture, Rwanda
                </span>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </section>

    <!--Footer Section-->
    <!-- <section>
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
    </section> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    slide: 1,
    slide1: "style",
    lorem: "lorem ipsum dolor sit amet",
  }),
};
</script>

<style lang="scss">
.custom__header-bg-v1 {
  //   background-size: cover;
  //   background-attachment: fixed;
  height: 120px;
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),
    url("/images/about1.jpg");
  background-size: contain;
  background-attachment: fixed;
  // background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1005%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M516.56 530.95L581.51 568.45L581.51 643.45L516.56 680.95L451.6 643.45L451.6 568.45zM841.32 418.45L906.28 455.95L906.28 530.95L841.32 568.45L776.37 530.95L776.37 455.95zM1166.09 80.95L1231.05 118.45L1231.05 193.45L1166.09 230.95L1101.14 193.45L1101.14 118.45zM1296 530.95L1360.95 568.45L1360.95 643.45L1296 680.95L1231.05 643.45L1231.05 568.45zM1425.91 80.95L1490.86 118.45L1490.86 193.45L1425.91 230.95L1360.96 193.45L1360.96 118.45zM1360.96 193.45L1425.91 230.95L1425.91 305.95L1360.96 343.45L1296 305.95L1296 230.95zM1425.91 530.95L1490.86 568.45L1490.86 643.45L1425.91 680.95L1360.96 643.45L1360.96 568.45zM1555.82 80.95L1620.77 118.45L1620.77 193.45L1555.82 230.95L1490.86 193.45L1490.86 118.45z' stroke='rgba(82%2c 175%2c 80%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M509.06 530.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM574.01 568.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM574.01 643.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM509.06 680.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM444.1 643.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM444.1 568.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM833.82 418.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM898.78 455.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM898.78 530.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM833.82 568.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM768.87 530.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM768.87 455.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1158.59 80.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1223.55 118.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1223.55 193.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1158.59 230.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1093.64 193.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1093.64 118.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1288.5 530.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1353.45 568.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1353.45 643.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1288.5 680.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1223.55 643.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1223.55 568.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1418.41 80.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1483.36 118.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1483.36 193.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1418.41 230.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1353.46 193.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1353.46 118.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1418.41 305.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1353.46 343.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1288.5 305.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1288.5 230.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1418.41 530.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1483.36 568.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1483.36 643.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1418.41 680.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1353.46 643.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1353.46 568.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1548.32 80.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1613.27 118.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1613.27 193.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1548.32 230.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0z' fill='rgba(82%2c 175%2c 80%2c 1)'%3e%3c/path%3e%3cpath d='M76.83 513.06L120.14 538.06L120.14 588.06L76.83 613.06L33.53 588.06L33.53 538.06zM423.25 213.06L466.56 238.06L466.56 288.06L423.25 313.06L379.95 288.06L379.95 238.06zM509.86 63.06L553.16 88.06L553.16 138.06L509.86 163.06L466.56 138.06L466.56 88.06zM596.46 213.06L639.76 238.06L639.76 288.06L596.46 313.06L553.16 288.06L553.16 238.06zM639.76 288.06L683.07 313.06L683.07 363.06L639.76 388.06L596.46 363.06L596.46 313.06zM639.76 438.06L683.07 463.06L683.07 513.06L639.76 538.06L596.46 513.06L596.46 463.06zM726.37 -11.94L769.67 13.06L769.67 63.06L726.37 88.06L683.07 63.06L683.07 13.06zM769.67 213.06L812.98 238.06L812.98 288.06L769.67 313.06L726.37 288.06L726.37 238.06zM899.58 -11.94L942.88 13.06L942.88 63.06L899.58 88.06L856.28 63.06L856.28 13.06zM942.88 63.06L986.19 88.06L986.19 138.06L942.88 163.06L899.58 138.06L899.58 88.06zM942.88 363.06L986.19 388.06L986.19 438.06L942.88 463.06L899.58 438.06L899.58 388.06zM986.19 288.06L1029.49 313.06L1029.49 363.06L986.19 388.06L942.88 363.06L942.88 313.06zM1029.49 513.06L1072.79 538.06L1072.79 588.06L1029.49 613.06L986.19 588.06L986.19 538.06zM1116.09 63.06L1159.39 88.06L1159.39 138.06L1116.09 163.06L1072.79 138.06L1072.79 88.06zM1072.79 138.06L1116.09 163.06L1116.09 213.06L1072.79 238.06L1029.49 213.06L1029.49 163.06zM1246 138.06L1289.3 163.06L1289.3 213.06L1246 238.06L1202.7 213.06L1202.7 163.06zM1419.21 438.06L1462.51 463.06L1462.51 513.06L1419.21 538.06L1375.91 513.06L1375.91 463.06z' stroke='rgba(82%2c 175%2c 80%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1005'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}
.custom__heading-green::after {
  display: block;
  height: 2px;
  width: 100px;
  background-color: #52af50;
  content: " ";
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>
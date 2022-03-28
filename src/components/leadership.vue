<template>
  <div>
    <header>
      <q-card flat square class="custom__header-bg-v4 row items-center">
        <q-card-section class="text-h3 text-grey-1 my-font-poppins-extraBold">
          Leadership
          <div class="text-h5 text-grey-1 my-font-poppins-thin">
            Nigeria Agribusiness Group
          </div>
        </q-card-section>
      </q-card>
    </header>

    <div class="q-px-md">
      <h3 class="text-h4 my-font-poppins-boldItalic custom__heading-green">
        Leaders aren't born, they are made
      </h3>
      <h3 class="text-h3 my-font-poppins-thin q-ma-md q-my-lg">
        Executive
        <span class="my-font-poppins-extraBold text-green">Council</span>
      </h3>
    </div>

    <section class="bg-grey-1">
      <div
        class="row"
        v-observe-visibility="{
          callback: (isVisible, entry) => isViewableNow(isVisible, entry, 'a'),
          once: true,
        }"
        :class="{
          'visible animated fadeInUp': showAnimationFor.a,
          invisible: !showAnimationFor.a,
        }"
      >
        <div
          v-for="(executive, index) in council"
          :key="index"
          class="col-md-2 col-sm-12 col-xs-12 q-px-lg q-py-md"
        >
          <q-card flat square>
            <q-img contain height="200px" :src="executive.image" />
            <q-card-section>
              <div
                class="text-body2 text-grey-10 text-center my-font-poppins-bold"
              >
                {{ executive.name }}
              </div>
              <div
                class="text-caption text-grey-8 text-center my-font-poppins-light"
              >
                {{ executive.role }}
              </div>
              <div
                class="text-caption text-grey-8 text-center my-font-poppins-light"
              >
                {{ executive.organization }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <div class="q-px-xl">
      <h3 class="text-h3 my-font-poppins-thin q-ma-md q-my-lg">
        Stake
        <span class="my-font-poppins-extraBold text-green">Holders</span>
      </h3>
    </div>

    <section>
      <div class="row">
        <div
          v-for="(item, index) in stakeholders"
          :key="index"
          class="col-md-3 col-sm-12 col-xs-12 q-px-lg q-py-md"
        >
          <q-card style="height: 100%" class="bg-grey-9">
            <q-card-section>
              <span class="text-body1 my-font-poppins-light text-white">
                {{ item }}
              </span>
              <q-separator spaced class="bg-green" />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

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
          <q-btn class="q-mt-sm text-green" no-caps small outline icon="mail" type="a" href="https://www.nabg.ng/webmail/" target="_blank">
            <span class="q-pl-sm">Check Mail</span>
          </q-btn> 
        </div>          
        </div>
        <div class="row">
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
            <div class="text-body2 q-mt-md">+2348129929300 or +2348023591357</div>
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
export default {
  data: () => ({
    slide: 1,
    slide1: "style",
    showAnimationFor: {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
    },
    council: [
      {
        name: "Emmanuel Ijewere ",
        image: require("../../public/images/emmanuel.jpg"),
        role: "President",
        organization: "NABG/Best Foods Ltd",
      },
      {
        name: "Dr. Manzo Maigari",
        image: require("../../public/images/manzo.jpg"),
        role: "Director General",
        organization: "NABG",
      },
      {
        name: "Alh. Isa Tafida Mafindi",
        image: require("../../public/images/tafida.jpg"),
        role: "CEO",
        organization: "Famag Jal Nigeria Ltd",
      },
      {
        name: "Aniebe Achimugu",
        image: require("../../public/images/achimugu.jpg"),
        role: "President",
        organization: "NACOTAN",
      },
      {
        name: "Arc Kabir Ibrahim",
        image: require("../../public/images/kabir.jpg"),
        role: "President of AFAN",
        organization: "All Farms Asso. of Nigeria (AFAN)",
      },
      {
        name: "Dr. Graham Hefer",
        image: require("../../public/images/graham.jpg"),
        role: "MD",
        organization: "Okomu Oil Palm Co Plc",
      },
      {
        name: "Felix Nwabuko",
        image: require("../../public/images/felix.webp"),
        role: "MD",
        organization: "Presco Plc",
      },
      {
        name: "M.D Abubakar",
        image: require("../../public/images/abubakar.jpg"),
        role: "Chairman",
        organization: "L &Z Int. Farms Ltd",
      },
      {
        name: "Alh Abdulkarim Lawal Kaita",
        image: require("../../public/images/dangote.jpg"),
        role: "Group Executive Director",
        organization: "Dansa Holdings Ltd",
      },       
      {
        name: "Mr. Moochikal D Ramesh",
        image: require("../../public/images/Ramesh.jpg"),
        role: "CEO",
        organization: "Agribusiness",
      },
      {
        name: "MuKul Mathur",
        image: require("../../public/images/mukul.png"),
        role: "Country Head",
        organization: "Olam Nigeria Ltd.",
      },
      {
        name: "Olusegun Falade",
        image: require("../../public/images/olusegun.jpeg"),
        role: "Head Agric Unit",
        organization: "Flour Mills PLC",
      },
      {
        name: "Abubakar Sadiq Kassim",
        image: require("../../public/images/sadiq.jpg"),
        role: "Director",
        organization: "Group Corporate Affairs/ Tropical General Investments",
      },
      {
        name: "Senator Adamu Adamu",
        image: require("../../public/images/adamu.jpg"),
        role: "Chair Senate Committee on Agriculture",
        organization: "Nigeria Senate",
      },
      {
        name: "Senator Sabo Nakudu",
        image: require("../../public/images/nakudu.jpg"),
        role: "Vice Chair Senate Committee on Trade & Investment",
        organization: "Nigeria Senate",
      },
      {
        name: "Thomas Etuh",
        image: require("../../public/images/thomas.jpg"),
        role: "President",
        organization: "FEPSAN",
      },     
      {
        name: "Yomi Jemibewon",
        image: require("../../public/images/yomi.jpg"),
        role: "Director",
        organization: "Cardinal Stone Partners Ltd",
      },
      {
        name: "Uchechukwu Okorie",
        image: require("../../public/images/okorie.jpg"),
        role: "Head Agribusiness Desk",
        organization: "First Bank Nig Ltd",
      },  
      {
        name: "Nwaneri Olubukola",
        image: require("../../public/images/bukola.jpg"),
        role: "Director",
        organization: "Green Rivers Farms Ltd.",
      },      
      {
        name: "Glory Adonese",
        image: require("../../public/images/placeholder.jpg"),
        role: "President",
        organization: "Cross River State Women in Aquaculture",
      },
    ],
    stakeholders: [
      "FARM ASSOCIATION",
      "MINISTRY DEPARTMENT & AGENCIES",
      "DONOR PARTNERS / DEVELOPMENT PARTNER",
      "PERMANENT SECRETARY FMARD",
      "AGRO DEALERS",
      "AGRIC EQUIPMENT DEALERS",
      "INPUT SUPPLIERS",
      "FOOD PROCESSORS",
      "CBN & COMMERCIAL BANKS",
      "INSURANCE",
      "UNIVERSITY & RESEARCH INSTITUTIONS",
      "ALL AGRICULTURAL VALUE CHAIN STAKEHOLDERS",
    ],
  }),
  methods: {
    isViewableNow(isVisible, entry, section) {
      this.showAnimationFor[section] = isVisible;
    },
  },
  computed: {
    screenRatioHeading() {
      let size = this.$q.screen.name;
      if (size == "md" || size == "lg" || size == "xl") {
        return "text-h4";
      } else return "text-h5";
    },
  },
};
</script>

<style lang="scss">
.custom__header-bg-v4 {
  height: 120px;
  background-size: cover;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),
    url("/images/leadership1.jpg");
  background-size: contain;
  background-repeat: none;
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

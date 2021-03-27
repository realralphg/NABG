<template>
  <div>
    <header>
      <q-card flat square class="custom__header-bg-v4 row items-center">
        <q-card-section class="text-h3 text-grey-1 my-font-poppins-extraBold">
          Contact Us
          <div class="text-h5 text-grey-1 my-font-poppins-thin">
            Nigeria Agribusiness Group
          </div>
        </q-card-section>
      </q-card>
    </header>
    <section>
      <div class="custom__map pa-2 white">
        <v-map :zoom="12" :center="initialLocation">
          <v-icondefault
            :image-path="'/statics/leafletImages/'"
          ></v-icondefault>
          <v-tilelayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></v-tilelayer>
          <v-marker
            v-for="(l, index) in markers"
            :key="index"
            :lat-lng="l.latlng"
          >
            <v-tooltip :options="{ permanent: true }">
              <div>
                {{ l.text }}
              </div>
            </v-tooltip>
          </v-marker>
        </v-map>
      </div>
    </section>

    <div class="q-px-md">
      <h3 class="text-h4 my-font-poppins-boldItalic custom__heading-green">
        You can contact us anytime
      </h3>
    </div>

    <section>
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
          <q-img
            contain
            src="/images/contact1.svg"
            :ratio="16 / 9"
            spinner-color="green"
          />
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
          <!-- <q-input
            color="green"
            square
            outlined
            type="text"
            label="Full Name"
          />
          <q-input
            color="green"
            class="q-mt-md"
            square
            outlined
            type="email"
            label="Email"
          /> -->
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
              type="text"
              color="green"
              square
              outlined
              v-model="name"
              label="Your name *"
              hint="Name and surname"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Field cannot be empty',
              ]"
            />

            <q-input
              type="email"
              color="green"
              square
              outlined
              v-model="email"
              label="Your Email *"
              hint="E.g johndoe@gmail.com"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Field cannot be empty',
              ]"
            />

            <q-input
              type="textarea"
              color="green"
              square
              outlined
              v-model="message"
              label="Your Message *"
              hint="You Message"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Field cannot be empty',
              ]"
            />

            <div>
              <q-btn label="Submit" type="submit" color="green" />
            </div>
          </q-form>
        </div>
      </div>
    </section>

    <!--Footer Section-->
    <section>
      <div
        class="q-pa-md bg-grey-10 text-white q-mt-xl my-font-poppins-regular"
      >
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
// Code to fix markers not working -- don't remove
import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

import * as Vue2Leaflet from "vue2-leaflet";
import { latLng } from "leaflet";

export default {
  components: {
    "v-map": Vue2Leaflet.LMap,
    "v-tilelayer": Vue2Leaflet.LTileLayer,
    "v-icondefault": Vue2Leaflet.LIconDefault,
    "v-marker": Vue2Leaflet.LMarker,
    "v-popup": Vue2Leaflet.LPopup,
    "v-tooltip": Vue2Leaflet.LTooltip,
  },
  props: ["id"],
  data() {
    return {
      name: "",
      email: "",
      message: "",
      slide: 1,
      slide1: "style",
      markers: [
        {
          id: 1,
          latlng: [9.0907048, 7.5028756],
          text: "Head office: 26 Lake Chad Crescent Maitama, Abuja Nigeria",
        },
        {
          id: 1,
          latlng: [6.4493069, 3.4042875],
          text:
            "Liaison office: 126 Lewis Street Lafiaji, Obalende, Lagos Nigeria",
        },
      ],
      // icon: customicon,
      clusterOptions: {},
      initialLocation: latLng(9.0907048, 7.5028756),
      showMap: true,
    };
  },
  methods: {
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted",
      });
    },
  },
};
</script>

<style lang="scss">
@import "~leaflet/dist/leaflet.css";

.custom__map {
  height: 300px;
  width: 100%;
}
.custom__header-bg-v4 {
  height: 120px;
  background-size: cover;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),
    url("/images/leadership1.jpg");
  background-size: contain;
  background-repeat: none;
  background-attachment: fixed;
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

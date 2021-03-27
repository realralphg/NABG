<template>
  <div class="custom__map pa-2 white">
    <v-map :zoom="7" :center="initialLocation" style="z-index: 1">
      <v-icondefault :image-path="'/statics/leafletImages/'"></v-icondefault>
      <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
      <v-marker-cluster
        :options="clusterOptions"
        @clusterclick="click()"
        @ready="ready"
      >
        <v-marker
          v-for="(l, index) in markers"
          :key="index"
          :lat-lng="l.latlng"
        >
          <!-- <v-icon
            :icon-size="[32, 37]"
            :icon-anchor="[16, 37]"
            :icon-url="iconUrl"
          /> -->
          <v-popup :content="l.text"></v-popup>
        </v-marker>
      </v-marker-cluster>
    </v-map>
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

import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";

export default {
  components: {
    "v-map": Vue2Leaflet.LMap,
    "v-tilelayer": Vue2Leaflet.LTileLayer,
    "v-icondefault": Vue2Leaflet.LIconDefault,
    "v-marker": Vue2Leaflet.LMarker,
    "v-popup": Vue2Leaflet.LPopup,
    "v-marker-cluster": Vue2LeafletMarkerCluster,
  },
  props: ["id"],
  data() {
    return {
      markers: [
        {
          id: 1,
          latlng: [13.346865014577924, 5.888671875],
          text: "Sokoto 1",
        },
        {
          id: 1,
          latlng: [13.261333170798274, 5.42724609375],
          text: "Sokoto 2",
        },
        {
          id: 1,
          latlng: [12.768946439455956, 5.20751953125],
          text: "Sokoto 3",
        },
        {
          id: 1,
          latlng: [12.897489183755892, 7.6025390625],
          text: "Katsina 1",
        },
        {
          id: 1,
          latlng: [12.361465967347373, 7.55859375],
          text: "Katsina 2",
        },
        {
          id: 1,
          latlng: [11.910353555774101, 7.580566406250001],
          text: "Katsina 3",
        },
        {
          id: 1,
          latlng: [11.781325296112277, 14.2822265625],
          text: "Borno 1",
        },
        {
          id: 1,
          latlng: [12.64033830684679, 13.645019531249998],
          text: "Borno 2",
        },
        {
          id: 1,
          latlng: [11.845847044118496, 13.11767578125],
          text: "Borno 3",
        },
      ],
      // icon: customicon,
      clusterOptions: {},
      initialLocation: latLng(9.0778, 8.6775),
      zoom: 7,
      center: latLng(9.0778, 8.6775),
      currentZoom: 11.5,
      currentCenter: latLng(9.0778, 8.6775),
      showMap: true,
    };
  },
  methods: {
    getObjectUsingId() {},
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    click: (e) => console.log("clusterclick", e),
    ready: (e) => console.log("ready", e),
  },
  mounted() {
    setTimeout(() => {
      console.log("done");
      this.$nextTick(() => {
        this.clusterOptions = { disableClusteringAtZoom: 11 };
      });
    }, 5000);
  },
};
</script>

<style>
@import "~leaflet/dist/leaflet.css";
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
.custom__map {
  height: calc(100vh - 48px);
  width: 100%;
}
</style>

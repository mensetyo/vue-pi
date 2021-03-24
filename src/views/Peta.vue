<template>
  <div class="peta">
    <Navbar />
    <div class="container mt-4">
      <div style="height: 350px">
        <div class="info" style="height: 15%">
          <span>Center: {{ center }}</span>
          <span>Zoom: {{ zoom }}</span>
          <span>Bounds: {{ bounds }}</span>
        </div>

        <l-map
          style="height: 200%; width: 100%"
          :zoom="zoom"
          :center="center"
          @update:zoom="zoomUpdated"
          @update:center="centerUpdated"
          @update:bounds="boundsUpdated"
        >
          <l-control-layers position="topright"></l-control-layers>
          <l-tile-layer
            v-for="tileProvider in tileProviders"
            :key="tileProvider.name"
            :name="tileProvider.name"
            :visible="tileProvider.visible"
            :url="tileProvider.url"
            :attribution="tileProvider.attribution"
            layer-type="base"
          />
          <l-marker :lat-lng="markerLatLng" :icon="icon"></l-marker>
        </l-map>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LControlLayers } from "vue2-leaflet";

export default {
  name: "Peta",
  components: {
    Navbar,
    LMap,
    LTileLayer,
    LMarker,
    LControlLayers,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 7,
      center: [-6.2593658, 110.0092516],
      tileProviders: [
        {
          name: "OpenStreetMap",
          visible: true,
          attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        },
        {
          name: "OpenTopoMap",
          visible: false,
          url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
          attribution:
            'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        },
      ],
      bounds: null,
      icon: L.icon({
        iconUrl: "./assets/img/marker-icon.png",
      }),
      markerLatLng: [-6.2593658, 110.0092516],
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
  },
};
</script>

<style>
</style>
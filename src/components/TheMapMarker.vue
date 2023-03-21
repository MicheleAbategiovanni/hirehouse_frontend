<template>
  <div>
    <div id='map' ref="mapRef"></div>
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    apartment: Object
  },
  data() {
    return {

    }
  },
  mounted() {
    var map = tt.map({
      key: '6hakT8QU7IRSx9PCHGi5JyHTV2S7xWlD',
      container: 'map',
      center: [this.apartment.longitude, this.apartment.latitude],
      zoom: 13
    });

    this.addMarker(map);
  },
  methods: {
    addMarker(map) {
      const tt = window.tt;
      var location = [this.apartment.longitude, this.apartment.latitude];
      var popupOffset = 25;

      var marker = new tt.Marker().setLngLat(location).addTo(map);
      var popup = new tt.Popup({ offset: popupOffset }).setHTML(this.apartment.full_address);
      marker.setPopup(popup).togglePopup();
    }
  },
}
</script>

<style lang="scss" scoped>
#map {
  height: 30vh;
  width: auto;
}
</style>
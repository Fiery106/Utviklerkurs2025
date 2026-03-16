<script setup>
import { ref, onMounted } from 'vue';
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';

const location = [60.378785, 5.343451]

onMounted(()=> {
    var map = L.map('map').setView([60.379685, 5.343451], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(location).addTo(map)
        .bindPopup('<h3> WIP </h3> <p>22 Klaus Hanssens vei </p>')
        .openPopup();
});
</script>


<template>
    <div id="map" class="leaflet">
        <!-- LEAFLET -->
    </div>
</template>
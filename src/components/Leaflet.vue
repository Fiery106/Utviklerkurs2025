<script setup>
import { ref, onMounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

const geocode_location = [60.378785, 5.343451]

const geocode_view = [60.379685, 5.343451]
const default_zoom = 16
const min_zoom = 11
const max_zoom = 19

const location_name = 'ALF as Hovedkontor' 
const address = '22 Klaus Hanssens vei'
const postcode = '5053 Bergen'
const open_hours = '08:00 - 15:00'
const phone = '+47 55 54 11 50'
const email = 'alf@alf.no'

const message = `
    <div class="text-center">
        WIP
        <h3 class="underline underline-offset-8"> 
            ${location_name} 
        </h3> 

        <div class="flex gap-4 justify-between items-center bg-yellow-500/10">
            <p class="font-bold">
                Addresse:
            </p>

            <div>
                <p>
                    ${address} 
                </p>
            </div>
        </div>

        <div class="flex gap-4 justify-between items-center bg-alf-blue/10">
            <p class="font-bold">
                Åpningstider:
            </p>

            <div>
                <p>
                    ${open_hours} 
                </p>
            </div>
        </div>
    </div>
`

onMounted(()=> {
    const map = L.map('map').setView(geocode_view, default_zoom)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: min_zoom, maxZoom: max_zoom,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" class="inline">OpenStreetMap</a> contributors'
    }).addTo(map)

    setTimeout(() => {
        L.marker(geocode_location, {alt: location_name}).addTo(map)
            .bindPopup(message)
            .openPopup()
    }, 1)
})
</script>


<template>
    <div id="map" class="leaflet">
        <!-- LEAFLET -->
    </div>
</template>
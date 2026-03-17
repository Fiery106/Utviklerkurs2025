<script setup>
import { onMounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import { usePhoneNumber, showPhoneNumber, useEmailAddress } from '@/compostables/functions';

const geocode_location = [60.378785, 5.343451]
const geocode_bus = [60.3793677, 5.3386943]
const geocode_tram = [60.3815531, 5.3331166]

const geocode_view = [60.380185, 5.343451]
const default_zoom = 16
const min_zoom = 11
const max_zoom = 19

const location_name = 'ALF as Hovedkontor' 
const address = '22 Klaus Hanssens vei'
const postcode = '5053 Bergen'
const open_hours = '08:00 - 15:00'
const phone = '55 54 11 50'
const email = 'alf@alf.no'

const message = `
    <div class="text-center grid gap-4">
        <h3 class="border-b-2"> 
            ${location_name} 
        </h3>

        <div class="grid gap-2">
            <div class="flex gap-4 justify-between items-center">
                <span class="font-bold">
                    Adresse:
                </span>

                <div class="grid">
                    <span>
                        ${address} 
                    </span>
                    <span>
                        ${postcode} 
                    </span>
                </div>
            </div>

            <div class="flex gap-4 justify-between items-center">
                <span class="font-bold">
                    Åpningstider:
                </span>

                <span>
                    ${open_hours} 
                </span>
            </div>

            <div class="flex gap-4 justify-between items-center">
                <span class="font-bold">
                    Telefonnummer:
                </span>

                <a href="${usePhoneNumber(phone)}">
                    ${showPhoneNumber(phone)} 
                </a>
            </div>

            <div class="flex gap-8 justify-between items-center">
                <span class="font-bold">
                    Epost:
                </span>

                <a href="${useEmailAddress(email)}">
                    ${email} 
                </a>
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
        L.marker(geocode_bus, {alt: 'busstop'}).addTo(map)
            .bindPopup('buss')

        L.marker(geocode_tram, {alt: 'bybane'}).addTo(map)
            .bindPopup('bybane')

        L.marker(geocode_location, {alt: location_name}).addTo(map)
            .bindPopup(message)
            .openPopup()
    }, 1)
})
</script>


<template>
    <KeepAlive>
        <div id="map" class="leaflet">
            <!-- LEAFLET -->
        </div>
    </KeepAlive>
</template>
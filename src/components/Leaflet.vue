<script setup>
import { onMounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import { usePhoneNumber, showPhoneNumber, useEmailAddress } from '@/compostables/functions';

const geocode_location = [60.378785, 5.343451]
const geocode_bus = [60.3793677, 5.3386943]
const geocode_tram = [60.3815531, 5.3331166]

const location_name = 'ALF as Hovedkontor' 
const bus_name = 'Strømmen'
const tram_name = 'Florida'

const geocode_view = [60.380185, 5.343451] //litt høyere enn bygningen, slik at teksten ser bedre ut
const default_zoom = 16
const min_zoom = 11
const max_zoom = 19

const address = '22 Klaus Hanssens vei'
const postcode = '5053 Bergen'
const open_hours = '08:00 - 15:30'
const phone = '55 54 11 50'
const email = 'alf@alf.no'

const infos = [
    {
        label: 'Adresse:',
        html: `
        <div class="flex flex-col gap-1">
            <div>
                ${address} 
            </div>
            <div>
                ${postcode} 
            </div>
        </div>`
    },
    {
        label: 'Åpningstid:',
        html: `
        <div>
            ${open_hours} 
        </div>`
    },
    {
        label: 'Telefonnummer:',
        html: `
        <a href="${usePhoneNumber(phone)}">
            ${showPhoneNumber(phone)} 
        </a>`
    },
    {
        label: 'Epost:',
        html: `
        <a href="${useEmailAddress(email)}">
            ${email} 
        </a>`
    }
]

let text = ''
for (let i = 0; i < infos.length; i++) {
    text += `
        <div class="flex gap-4 justify-between">
            <div class="font-bold">
                ${infos[i].label}
            </div>

            ${infos[i].html}
        </div>
    `
}

const location_message = `
    <div class="text-center grid gap-4">
        <h3 class="border-b-2 border-neutral-500"> 
            ${location_name} 
        </h3>

        <div class="flex flex-col gap-2">
            ${text}
        </div>
    </div>
`

const bus_message = 'Strømmen, Buss-12'
const tram_message = 'Florida, Bybane-1'

onMounted(()=> {
    const map = L.map('map').setView(geocode_view, default_zoom)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: min_zoom, maxZoom: max_zoom,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" class="inline">OpenStreetMap</a> contributors'
    }).addTo(map)

    setTimeout(() => {
        L.marker(geocode_bus, {alt: bus_name}).addTo(map)
            .bindPopup(bus_message)

        L.marker(geocode_tram, {alt: tram_name}).addTo(map)
            .bindPopup(tram_message)

        L.marker(geocode_location, {alt: location_name}).addTo(map)
            .bindPopup(location_message)
            .openPopup()
    }, 1)
})

defineProps({
    full: {
        type: Boolean,
        default: true
    }
})
</script>


<template>
    <KeepAlive>
        <div id="map" :class="`leaflet ${full ? 'h-screen rounded-none' : ''}`" />
    </KeepAlive>

    <button v-if="full" onclick="history.back()" class="map-button">
        Gå tilbake
    </button>
</template>
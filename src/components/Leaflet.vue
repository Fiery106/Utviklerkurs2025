<script setup>
import { onMounted } from 'vue';
import OverlayButton from '@/components/buttons/OverlayButton.vue';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import { usePhoneNumber, showPhoneNumber, useEmailAddress } from '@/compostables/card_info';
import { useAddress } from '@/compostables/address';

const { info } = useAddress()

import Marker from '@/assets/images/map/marker.webp'
import Shadow from '@/assets/images/map/shadow.webp'

const geocode_location = [60.378785, 5.343451]
const geocode_bus = [60.3793677, 5.3386943]
const geocode_tram = [60.3815531, 5.3331166]

const location_name = 'ALF as Hovedkontor' 
const bus_name = 'Strømmen'
const tram_name = 'Florida'

const geocode_view = [60.38049, 5.343451] //litt høyere enn bygningen, slik at teksten ser bedre ut
const default_zoom = 16
const min_zoom = 11
const max_zoom = 19

const myIcon = L.icon({
    iconUrl: Marker,
    shadowUrl: Shadow,

    iconSize:     [54.875, 82.875],
    shadowSize:   [79.55, 41.77],
    iconAnchor:   [26, 77],
    shadowAnchor: [19, 33],
    popupAnchor:  [1, -70]
});

// 439 x 663 marker
// 358 x 188 shadow

const infos = [
    {
        label: 'Adresse:',
        html: `
        <div class="flex flex-col gap-1">
            <div>
                ${info.address} 
            </div>
            <div>
                ${info.postcode} 
            </div>
        </div>`
    },
    {
        label: 'Åpningstid:',
        html: `
        <div>
            ${info.open_hours} 
        </div>`
    },
    {
        label: 'Telefonnummer:',
        html: `
        <a href="${usePhoneNumber(info.phone)}">
            ${showPhoneNumber(info.phone)} 
        </a>`
    },
    {
        label: 'Epost:',
        html: `
        <a href="${useEmailAddress(info.email)}">
            ${info.email} 
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
    <div class="text-center grid gap-4" aria-label="Hovedkontor detaljer">
        <span class="border-b-2 border-neutral-500 text-xl font-bold"> 
            ${location_name} 
        </span>

        <div class="flex flex-col gap-2">
            ${text}
        </div>
    </div>
`

const bus_message = 'Strømmen, Buss nr.12'
const tram_message = 'Florida, Bybane nr.1'

onMounted(()=> {
    const map = L.map('map').setView(geocode_view, default_zoom)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: min_zoom, maxZoom: max_zoom,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" class="inline">OpenStreetMap</a> contributors'
    }).addTo(map)

    setTimeout(() => {
        L.marker(geocode_tram, {icon: myIcon}, {alt: tram_name}).addTo(map)
            .bindPopup(tram_message)

        L.marker(geocode_bus, {icon: myIcon}, {alt: bus_name}).addTo(map)
            .bindPopup(bus_message)

        L.marker(geocode_location, {icon: myIcon}, {alt: location_name}).addTo(map)
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
        <div id="map" :class="`leaflet ${full ? 'h-screen rounded-none' : 'border-2 contrast-more:border-1 border-neutral-50 dark:border-alf-blue max-w-7xl'}`" />
    </KeepAlive>

    <OverlayButton v-if="full" />
</template>
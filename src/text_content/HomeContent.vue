<script setup>
import CodeExample from "@/components/CodeExample.vue";

import Python from "@/assets/images/logos/python_logo.svg"
import Tailwind from "@/assets/images/logos/tailwind_logo.svg"
import Vue from "@/assets/images/logos/vuejs_logo.svg"

const more_langs = [
    {
        src: Vue,
        alt: "Vue ikon"
    },
    {
        src: Python,
        alt: "Python ikon"
    },
    {
        src: Tailwind,
        alt: "Tailwind ikon"
    },
]
</script>


<template>
    <div class="flex flex-col gap-8">
        <section>
            <h2>
                Om kurset
            </h2>
            <p>
                I dag, står Norge overfor en betydelig utfordring med økende utenforskap. <a href="https://www.nav.no/no/samarbeidspartner/presse/nyheter-og-pressemeldinger/702-000-star-utenfor-arbeidslivet-i-norge" target="_blank" aria-label="ressurs for antall arbeidsledige i Norge, skrevet av Nav">I følge til Nav,</a> <span class="font-bold">over 700 000</span> personer står utenfor arbeidslivet. Samtidig ser vi at arbeidsmarkedet endrer seg raskt, og behovet for spesialisert IT-kompetanse har aldri vært større. 
            </p>

            <p>
                Utviklerkurset <span class="italic">(ALF as)</span> er et praktisk kurs for de som ønsker å lære moderne IT-ferdigheter og få relevante erfaring med utvikling, design, programmering, digitale verktøy og arbeidslivet. Ved å velge en karriere innen IT, velger du en vei med store muligheter for vekst og trygghet for framtiden. 
            </p>

            <p>
                Du trenger ikke programmering eller IT fra før! Det viktigste er at du er nysgjerrig og motivert til å lære.
            </p>

            <p class="flex items-center flex-wrap gap-4 mt-4 mx-auto max-w-xl">
                <KeepAlive>
                    <img v-for="langs in more_langs" :src="langs.src" :alt="langs.alt" class="size-8 select-none" />
                </KeepAlive>
                <Icon v-for="value in 6" :id="value + 26" class="text-4xl" />
            </p>
        </section>

        <section>
            <h2>
                Hvorfor velge Utviklerkurset?
            </h2>

            <ul class="list-disc pl-6">
                <li class="italic">
                    Rundt 5 000 studieplasser ble registrert innen IKT hvert år i de siste få årene. Dette antallet fremviser hvor kritisk behovet er i både privat og offentlig sektor. <a href="https://www.forskning.no/arbeid-bransje-ikt-direktoratet-for-internasjonalisering-og-kvalitetsutvikling-i-hoyere-utdanning-diku/ikt-studier-forste-nedgang-pa-ti-ar-hva-skjer-na/2591469" target="_blank" aria-label="info om IKT interesse fra Forskning.no">Kilde.</a>
                </li>
                <li class="italic">
                    Særlig for unger som opplever å falle utenfor skole eller har vanskeligheter å komme i gang med arbeid, praktisk opplæring i en inkluderende arbeidsmiljø lønner seg med å finne motivasjon og mestring for veien videre.
                </li>
                <li class="italic">
                    Om du kommer inn i arbeid for første gang eller trenger hjelp med å gå tilbake, gir vi deg muligheten til å utvikle deg med teknologi, arbeidsinterresser, og samarbeide med våre fantastiske medarbeiderne til å finne deg et riktig god plass.
                </li>
            </ul>

            <p>
                Om dette høres interresant ut, kan du gjerne ta kontakt med oss ved å bruke lenkene under.
            </p>
        </section>
    </div>
</template>
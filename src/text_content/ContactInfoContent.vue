<script setup>
    import { skyss_link } from '@/compostables/links/skyss_links';
    import { kontakt } from '@/compostables/links/alf_links';
</script>

<template>
    <template class="flex flex-col gap-8 text-base/7 w-full wall-text">
        <section>
            <h2>
                Her finner du oss
            </h2>
            <p>
                Du kommer lettest hit ved å ta buss nr 12 fra sentrum. Du går da av på stoppet <span class="italic">Strømmen</span>, som ligger i Møllendalsveien, like nedenfor oss. <span class="font-bold">Husk</span> å gå på Klaus Hanssens Veien ved å bruke trappene rett ved siden av Kunstgarasjen!
            </p>
            <p>    
                Om du kommer med Bybane-1 kan du gå av på <span class="italic">Florida</span>, og spasere derfra. Hvis du er usikkert om hvordan man kommer hit, da kan du gjerne
                <a :href="skyss_link" class="basic-link font-bold">
                    sjekke reisen din her.
                </a>
            </p>
        </section>

        <section>
            <p>
                For generelle hendvendelser og andre spørsmål, ta gjerne kontakt med hovedkontoret.
            </p>
            <a :href="kontakt.to" class="basic-link">
                Mer kontakt informasjon finner du her.
            </a>
        </section>
    </template>
</template>


<script setup>
    const skyss_link = 'https://reise.skyss.no/?toId=__256846641__&toType=__STOP_PLACE__&toName=__Klaus+Hanssens+vei+22__&toLongitude=5.34345&toLatitude=60.378772'
    const contact_link = 'https://alf.no/kontakt/'
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
                Om du kommer med Bybane-1 kan du gå av på <span class="italic">Florida</span>, og spasere derfra. Hvis du er usikkert om hvordan man kommer hit, da kan du 
                <a :href="skyss_link" class="basic-link font-bold">
                    sjekke reisen din her.
                </a>
            </p>
        </section>

        <section>
            <p>
                For generelle hendvendelser og andre spørsmål, ta gjerne kontakt med hovedkontoret.
            </p>
            <a :href="contact_link" class="basic-link">
                Mer kontakt informasjon finner du her.
            </a>
        </section>
    </template>
</template>


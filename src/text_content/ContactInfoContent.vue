<template>
    <div class="flex flex-col gap-8 text-base/7 w-full wall-text">
        <section>
            <h2>
                Her finner du oss
            </h2>
            <p>
                Du kommer lettest hit ved å ta buss nr 12 fra sentrum. Du går da av på stoppet <span class="italic">Strømmen</span>, som ligger i Møllendalsveien, like nedenfor oss.
            </p>
            <p>    
                Om du kommer med Bybane-1 kan du gå av på <span class="italic">Florida</span>, og spasere derfra. Sjekk reisen din <Button :state="2" :look="1" href="https://reise.skyss.no/?toId=__256846641__&toType=__STOP_PLACE__&toName=__Klaus+Hanssens+vei+22__&toLongitude=5.34345&toLatitude=60.378772" text=" her" />.
            </p>
        </section>

        <section>
            <p>
                For generelle hendvendelser og andre spørsmål, ta gjerne kontakt med hovedkontoret.
            </p>
            <p>
                Mer kontakt informasjon finner du <Button :state="2" :look="1" href="https://alf.no/kontakt/" text=" her" />.
            </p>
        </section>
    </div>
</template>


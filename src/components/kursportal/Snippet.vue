<script setup>
defineProps({
    news: { //array med objekter (tittel og innhold)
        type: Array
    }
})
</script>


<template>
    <div class="snippet">
        <section class="snap-center snap-normal min-w-sm max-w-full xl:min-w-fit">
            <h2>
                Kommende Hendelse
            </h2>
            <p>
                Kantinen er stengt < DATO >
            </p>
        </section>
        
        <div class="bg-neutral-500 h-0.5"></div>

        <section class="snap-center snap-normal min-w-sm max-w-full xl:min-w-fit">
            <h2>
                Kommende Hendelse
            </h2>
            <p>
                Jobbfokus < INNHOLD > < DATO 
            </p>
        </section>

        <!-- <div class="bg-neutral-500 h-0.5"></div>

        <section class="snap-center snap-normal min-w-sm max-w-full xl:min-w-fit">
            <h2>
                Kommende Hendelse
            </h2>
            <p>
                Jobbfokus < INNHOLD > < DATO 
            </p>
        </section>

        <div class="bg-neutral-500 h-0.5"></div>

        <section class="snap-center snap-normal min-w-sm max-w-full xl:min-w-fit">
            <h2>
                Kommende Hendelse
            </h2>
            <p>
                Jobbfokus < INNHOLD > < DATO 
            </p>
        </section> -->
    </div>
</template>
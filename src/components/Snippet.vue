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
                KOMMENDE HENDELSE
            </h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nisi beatae deleniti sit nihil similique aliquid impedit aspernatur perspiciatis ab, commodi deserunt explicabo aliquam illo quia maxime quos pariatur odit.
            </p>
        </section>

        <section v-if="false" class="snap-center snap-normal min-w-sm max-w-full xl:min-w-fit">
            <h2>
                KOMMENDE HENDELSE
            </h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nisi beatae deleniti sit nihil similique aliquid impedit aspernatur perspiciatis ab, commodi deserunt explicabo aliquam illo quia maxime quos pariatur odit.
            </p>
        </section>
    </div>
</template>
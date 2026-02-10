<script setup>
import Comments from "@/components/elements/Comments.vue"

defineProps({
    category: {
        type: String
    },

    title: {
        type: String
    },

    poster_ID: {
        type: Number
    },

    post_ID: {
        type: Object
    },
})
</script>


<template>
    <div class="page mb-16 xl:my-16 mx-auto">
        <div class="grid grid-cols-8 gap-4">
            <nav class="col-span-full gap-1" >
                <Button :state="2" :look="3" to="/kursportal" text="kursportal" /> /
                <Button :state="2" :look="3" text="oppgaver" /> /
                <p class="text-neutral-500 dark:text-neutral-400 emphasis">
                    TITLDLDE
                </p>
            </nav>

            
            <div class="flex xl:flex-col items-center text-center gap-2 row-span-2 row-start-3 xl:row-start-2 not-xl:col-span-full">
                <div class="bg-alf-blue size-8 xl:size-16 rounded-full shrink-0"></div>
                <h3>
                    NAVN NAVNESEN
                </h3>
            </div>

            <div class="col-span-full xl:col-span-7 flex items-center justify-between h-fit">
                <div class="flex items-center gap-4">
                    <h1>
                        TITLDLDE
                    </h1>

                    <p class="text-neutral-500">
                        06.02.2026
                    </p>
                </div>

                <Icon :id="16" />
            </div>
            

            <div class="flex flex-col col-span-full xl:col-span-7 gap-8">
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem labore voluptatibus commodi sit reiciendis ducimus dolores molestiae minus optio iure, perferendis eligendi atque saepe quas omnis, dolorem ullam. Rem, expedita.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptatibus ipsam repellat voluptatum nisi ab nostrum doloremque recusandae quidem similique omnis, quod enim dolorem ad corporis temporibus ullam amet totam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ipsam veniam repellendus harum totam obcaecati tempora suscipit, cupiditate, rem nulla, adipisci fugit deleniti consectetur impedit maxime deserunt. Quae, qui quos!
                        </p>
                    </div>
                </div>

                
                <div v-if="true" class="flex flex-col gap-2">
                    <h3>
                        Last ned filene (10mb)
                    </h3>
                    <Button :state="2" :look="4" text="download.png, download2.png, ...og 5 til" />
                </div>
            </div>
        </div>


        <Comments />
    </div>
</template>
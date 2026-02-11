<script setup>
import Comments from "@/components/Comments.vue"
import Directory from "@/components/Directory.vue"
import Bnuuy from "@/assets/images/ref/Bnuuy_1.png"

defineProps({
    poster: {
        type: Object
    },

    post: {
        type: Object
    },
})
</script>


<template>
    <div class="page mb-16 xl:my-16 mx-auto">
        <div class="grid grid-cols-12 lg:grid-cols-8 gap-4">
            <Directory>
                <Button :state="2" :look="3" to="/kursportal" text="kursportal" /> /
                <Button :state="2" :look="3" text="oppgaver" /> /
                <Button :state="2" :look="3" text="Høst 2026" /> /
                <p class="text-neutral-500 dark:text-neutral-400 emphasis">
                    TITLDLDE
                </p>
            </Directory>

            
            <div class="flex items-center gap-2 justify-end row-start-3 sm:row-start-1 col-span-full">
                <p class="text-nowrap text-neutral-500">
                    06.02.2026
                </p>

                <Icon :id="16" />
            </div>

            
            <div class="flex md:flex-col items-center text-center gap-2 md:col-span-2 lg:col-span-1 md:row-span-2 row-start-3 col-span-full">
                <div class="bg-alf-blue size-8 md:size-16 flex justify-center items-center rounded-full shrink-0">
                    <Icon class="text-xl md:text-4xl" />
                </div>
                
                <h3>
                    NAVN NAVNESEN
                </h3>
            </div>


            <h1 class="col-span-full wrap-anywhere md:col-span-10 lg:col-span-7">
                TITLDLDE
            </h1>
            

            <div class="flex flex-col col-span-full md:col-span-10 lg:col-span-7 gap-8">
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

                
                <div v-if="true" class="flex flex-col gap-2">
                    <h3>
                        Last ned filene (10mb)
                    </h3>
                    <Button :state="2" :look="4" :to="Bnuuy" download="Bnuuy" text="download.png, download2.png, ...og 5 til" />
                </div>
            </div>
        </div>

        <Comments />
    </div>
</template>
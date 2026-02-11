<script setup>
defineProps({
    profile_picture: {
        type: String,
    },

    name: {
        type: String,
        default: "Navn Navnesen"
    },

    date: {
        type: String,
    },

    comment: {
        type: String,
        default: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione consequatur dolorum, vero rerum, velit, mollitia ab vel omnis deleniti culpa unde. Earum delectus dolorum explicabo sequi dicta ullam nemo assumenda."
    }
})
</script>


<template>
    <div class="grid gap-2">
        <div class="col-span-full flex justify-between items-center">
            <div class="flex gap-2">
                <div v-if="!profile_picture" class="bg-alf-blue size-8 p-1 items-center justify-center flex rounded-full shrink-0">
                    <Icon class="text-xl" />
                </div>
                
                <h3>
                    {{ name }}
                </h3>
            </div>

            <p class="text-neutral-500">
                10.02.2026
            </p>
        </div>
        
        <p>
            {{ comment }}
        </p>
    </div>
</template>
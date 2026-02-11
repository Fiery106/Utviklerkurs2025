<script setup>
defineProps({
    profile_picture: {
        type: String
    },

    name: {
        type: String
    }
})
</script>


<template>
    <div class="flex gap-2">
        <div v-if="!profile_picture" class="bg-alf-blue size-8 p-1 flex items-center justify-center rounded-full shrink-0">
            <Icon class="text-xl" />
        </div>

         <div v-else>

        </div>
        
        <h3>
            {{ name }}
        </h3>
    </div>
</template>
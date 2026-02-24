<script setup>
defineProps({
    profile_picture: {
        type: String
    },

    is_mini: {
        type: Boolean,
        default: true
    },

    name: {
        type: String
    }
})
</script>


<template>
    <div :class="`${is_mini != true ? 'md:flex-col md:col-span-2 lg:col-span-1 md:row-span-2 row-start-2 col-span-full md:p-1' : ''}
    flex items-center text-center gap-2`">
        <div v-if="!profile_picture" :class="`${is_mini != true ? 'md:size-16' : 'size-8'} shrink-0 rounded-full bg-alf-blue text-neutral-900 flex justify-center items-center`">
            <Icon :class="`${is_mini != true ? 'md:text-4xl' : ''} text-xl`" />
        </div>

        <div v-else>

        </div>
        
        <h3>
            {{ name }}
        </h3>
    </div>
</template>
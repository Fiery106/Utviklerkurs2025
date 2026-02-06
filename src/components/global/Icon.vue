<script setup>
import Icons from "@/json/icons.json"

defineProps({
    id: {
        type: Number,
        default: 0
    }
})
</script>


<template>
    <FontAwesomeIcon v-if="id >= -1 && id <= Icons.length" :icon="[Icons[id].type, Icons[id].navn]" :aria-labelledby="Icons[id].alt" :class="`${Icons[id].klasser ? `${Icons[id].klasser}` : 'text-3xl md:text-2xl group-has-[p]:text-2xl'}`" />
</template>
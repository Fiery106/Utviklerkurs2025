<script setup>
defineProps({
    isMap: {
        type: Boolean,
        default: true
    }
})
</script>


<template>
    <template v-if="isMap">
        <div class="map-button-wrapper">
            <button onclick="history.back()" class="map-button">
                Gå tilbake
            </button>
        </div>
    </template>


    <template v-else>
        <div class="post-button-wrapper">
            <router-link to="/kursportal/post/ny" class="post-button">
                <span class="hidden md:block">
                    Ny post
                </span>

                <Icon :id="15" />
            </router-link>    
        </div>
    </template>
</template>
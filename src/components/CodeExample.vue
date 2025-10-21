<script setup>
import { ref } from 'vue';
import Easy from './example_codes/EasyCode.vue';
import Hard from './example_codes/HardCode.vue';

const tabs = {
    Easy,
    Hard
}

const current = ref('Easy')
</script>


<template>
    <div>
        <div class="flex items-start">
            <button v-for="(__, tab) in tabs" @click="current = tab" 
            class="bg-neutral-100 text-gray-700 text-sm mx-0 p-2 pr-8 border border-gray-300 
            active:border-t-blue-500" >
                <div class="font-normal">
                    {{tab}}
                </div>
            </button>
        </div>

        <div class="h-full border p-2 border-gray-300">
            <component :is="tabs[current]"></component>
        </div>
    </div>
</template>
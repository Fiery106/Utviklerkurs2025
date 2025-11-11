<script setup>
import { ref } from 'vue';
import Nybeginner from './example_codes/EasyCode.vue';
import Avanserte from './example_codes/HardCode.vue';

const tabs = {
    Nybeginner,
    Avanserte
}

const current = ref('Nybeginner')
</script>


<template>
    <div>
        <div class="flex">
            <button v-for="(__, tab) in tabs" @click="current = tab" 
            class="bg-neutral-100 text-gray-700 text-sm mx-0 p-2 pr-8 border border-gray-300 hover:bg-white rounded-none active:border-t-blue-500" >
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
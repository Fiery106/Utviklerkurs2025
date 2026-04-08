<script setup>
import { ref } from 'vue';
import { showDropdown } from '@/compostables/functions';

let toggle = ref(false)

function test() {
    const dropdown = document.getElementById('dropdown')

    console.log(dropdown) // T_T
    
    // dropdown.addEventListener("click", (e) => {
    //     console.log(this.className); // WARNING: `this` is not `myElement`
    //     console.log(e.currentTarget === this); // logs `false`
    // });

    // if (toggle) {
    //     dropdown.classList.add('flex')
    // } else {
    //     dropdown.classList.remove('flex')
    // }
}

defineProps({ 
    style: {
        type: String,
        default: '' //dropdown-dark
    }
})
</script>


<template>
    <div class="relative">
        <button @click="toggle = !toggle, test()" class="header-link">
            <Icon :id="13" />
        </button>

        <div v-if="toggle" id="dropdown" :class="`${toggle ? 'flex' : 'hidden'} absolute right-0 top-0 my-8 p-8 overflow-auto size-fit bg-zinc-950 text-neutral-50 flex-col gap-8`">
            <slot></slot>
        </div>
    </div>
    


    
    <!-- <Button :state="1" :icon_id="13" @click="toggle = !toggle" aria_label="Vis eller skjul dropdown menyen" class="header_link" /> -->

    <!-- <div id="dropdown" class="h-full w-full md:h-fit md:w-fit fixed right-0 md:mx-8 p-8 hidden flex flex-col justify-start gap-8 text-xl md:text-base bg-zinc-950 text-neutral-50 not-md:border-t-2 border-neutral-50 scroll-auto overflow-auto z-99 container">
        <slot></slot>
    </div> -->
</template>
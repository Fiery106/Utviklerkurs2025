<script setup>
import { ref } from 'vue';

let toggle = ref(false)

function showDropdown() {
    const body = document.body
    const menu = dropdown.lastChild
    // const children = menu.children
    const controller = new AbortController()

    toggle.value = true
    body.classList.add('not-md:overflow-clip')

    body.addEventListener("click", (e) => {
        const target = e.target

        if (target != menu) {
            // for (let i = 0; i < children.length; i++) {
            //     if (target == children[i]) {
            //         console.log(target)
            //         toggle.value = false
            //         controller.abort()
            //     } else {
            //         continue
            //     }
            // }

            toggle.value = false
            body.classList.remove('not-md:overflow-clip')
            controller.abort()
        } 
    }, {signal: controller.signal, capture: true});
}

defineProps({ 
    style: {
        type: String,
        default: '' //dropdown-dark
    },

    tabs: {
        type: Object,
        default: null
    }
})
</script>


<template>
    <div id="dropdown" class="relative select-none">
        <button @click="showDropdown()" class="header-link">
            <Icon :id="13" />
        </button>

        <div v-if="toggle" :class="`${toggle ? 'flex' : 'hidden'} dropdown-dark`">
            <div v-for="tab in tabs" :key="tab.id" class="flex flex-col h-fit">
                <p class="emphasis">
                    {{ tab[0] }}
                </p>
                <div class="flex flex-col gap-x-8 gap-2 text-nowrap truncate">
                    <Button v-for="link in tab" :state="link.target ? 2 : 0" :to="link.to" :text="link.text" :aria-label="link.aria_label" class="line-clamp-1 w-full" />
                </div>
            </div>

            <slot></slot>
        </div>
    </div>
</template>
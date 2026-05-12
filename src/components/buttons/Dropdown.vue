<script setup>
import { ref } from 'vue';

let toggle = ref(false)

function showDropdown() {
    const body = document.body
    const menu = dropdown.lastChild
    const controller = new AbortController()

    toggle.value = true
    body.classList.add('not-md:overflow-clip') // stopper brukeren å bla gjennom siden mens menyen er åpent og skjerm bredden er mindre enn 768px

    body.addEventListener("click", (e) => {
        const target = e.target

        if (target != menu) {
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
        <button type="button" name="dropdown_knapp" aria-label="Vis/skjul dropdown menyen" @click="showDropdown()" class="header-link">
            <Icon :id="13" />
        </button>

        <div v-if="toggle" :class="`${toggle ? 'flex' : 'hidden'} dropdown-dark`">
            <div v-for="tab in tabs" :key="tab.id" class="@container">
                <nav class="grid @min-sm:grid-cols-2 md:flex flex-col gap-2 text-nowrap truncate" :aria-label="tab[0]">
                    <span class="emphasis self-start col-span-full">
                        {{ tab[0] }}
                    </span>

                    <template v-for="link in tab">
                        <Button v-show="link.to" :state="link.target ? 2 : 0" :to="link.to" :text="link.text" :aria-label="link.aria_label" class="line-clamp-1 w-full" />
                    </template>

                </nav>
            </div>

            <slot></slot>
        </div>
    </div>
</template>
<script setup>
import Logo from '@/components/blocking/Logo.vue'
import Socials from '@/components/Socials.vue'

const date = new Date
const alf_page = "https://alf.no/"
const source_code = 'https://github.com/Fiery106/Utviklerkurs2025'

const organisation = {
    title: 'Senter for arbeidslivforberedelse',
    name: 'ALF as', //Må ikke skrives på en annen måte!!
    num: '881 097 982',

    /* Copyright © 2023 */
    copyright: 'Copyright',
    year: date.getFullYear(),
    rights: 'All right reserved'
}
</script>


<template>
    <footer>
        <Button to="/" class="not-dark:invert" aria_label="til hjem">
            <Logo class="h-16" />
        </Button>

        <div class="flex flex-col gap-2">
            <div class="font-bold">
                <span>
                    {{ organisation.title.toUpperCase() }}
                </span>

                <div class="flex justify-center">
                    <Button :state="2" :look="1" :text="organisation.name" :to="alf_page" aria_label="besøk alf.no" />

                    <span class="divider-x"></span>

                    <span>
                        Org. Nr.
                        <span class="font-normal"> {{ organisation.num }} </span>
                    </span>
                </div>
            </div>


            <div>
                <div>
                    {{ organisation.copyright }}
                    <Icon :id="26" class="text-sm" /> {{ organisation.year }} - {{ organisation.rights }}
                </div>

                <Button :state="2" :look="1" :to="source_code" text="utviklet av Norbert" aria_label="mer prosjekter fra Norbert" />
            </div>
        </div>

        <Socials />
    </footer>
</template>
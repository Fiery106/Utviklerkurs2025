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
        <Button to="/" class="not-dark:invert">
            <Logo class="h-16" />
        </Button>

        <div class="flex flex-col gap-2">
            <div class="font-bold">
                <p>
                    {{ organisation.title.toUpperCase() }}
                </p>

                <div class="flex justify-center">
                    <Button :state="2" :look="1" :text="organisation.name" :to="alf_page" />

                    <span class="divider"></span>

                    <p>
                        Org. Nr.
                        <span class="font-normal"> {{ organisation.num }} </span>
                    </p>
                </div>
            </div>


            <div>
                <p>
                    {{ organisation.copyright }}
                    <Icon :id="26" class="text-sm" /> {{ organisation.year }} - {{ organisation.rights }}
                </p>

                <Button :state="2" :look="1" :to="source_code" text="utviklet av Norbert" />
            </div>
        </div>

        <Socials />
    </footer>
</template>
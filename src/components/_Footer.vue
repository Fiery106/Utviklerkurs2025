<script setup>
import Logo from "@/components/Logo.vue"
import Button from "@/components/Button.vue"
import FooterContent from "@/components/text_content/FooterContent.vue"

import { useSocials } from "@/compostables/social_medias"

const { social_medias } = useSocials()
</script>


<template>
    <footer class="bg-alf-blue py-8 text-center">
        <Logo class="invert h-16 mx-auto selection:bg-test" />

        <FooterContent />

        <!-- Utvikleren (meg) -->

        <div class="pb-6">
            <Button v-for="media in social_medias" :icon_type="media.icon.type" :icon_name="media.icon.name" :href="media.url" class="invert mx-1"/>
        </div>
    </footer>
</template>
<script setup>
import Logo from "@/components/elements/Logo.vue"
import Button from "@/components/elements/Button.vue"
import FooterContent from "@/components/text_content/_FooterContent.vue"

import { useSocials } from "@/compostables/links/social_medias"

const { social_medias } = useSocials()
</script>


<template>
    <footer class="flex flex-col gap-4 bg-alf-blue pb-16 text-center select-none">
        <Logo class="invert h-16" />

        <FooterContent />

        <div class="flex flex-row gap-1 mx-auto">
            <Button v-for="media in social_medias" :icon_type="media.icon.type" :icon_name="media.icon.name" :to="media.url" :aria_label="media.aria_label" class="invert text-2xl"/>
        </div>
    </footer>
</template>
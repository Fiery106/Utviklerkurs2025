<script setup>
import Logo from "@/components/Logo.vue"
import Button from "@/components/Button.vue"
import FooterContent from "@/components/text_content/FooterContent.vue"

import { useSocials } from "@/compostables/social_medias"

const { social_medias } = useSocials()
</script>


<template>
    <footer class="bg-alf-blue flex flex-col w-full py-8 text-center select-none">
        <Logo class="invert h-16" />

        <FooterContent />

        <!-- Utvikleren (meg) -->

        <div class="mb-6">
            <Button v-for="media in social_medias" :icon_type="media.icon.type" :icon_name="media.icon.name" :to="media.url" class="invert"/>
        </div>
    </footer>
</template>
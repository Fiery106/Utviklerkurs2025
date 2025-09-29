<script setup>
import Button from "@/components/Button.vue"

const pages = [
    {
        title: "Deltaker",
        url: "deltaker"
    },
    {
        title: "Bedrift",
        url: "bedrift"
    },
    {
        title: "Nav",
        url: "nav"
    },
]

//TODO: FIKS DROPDOWN MENYEN FØR DU BINDER VARIABLEN SAMMEN (beklager for caps lock)
const links = [
    {
        title: "For arbeidssøkere",
        url: "https://alf.no/for-arbeidssokere/"
    },
    {
        title: "For arbeidsgivere",
        url: "https://alf.no/for-arbeidsgivere/"
    },
    {
        title: "For samarbeidspartnere",
        url: "https://alf.no/for-samarbeidspartnere/"
    },
    {
        title: "Kontakt oss",
        url: "https://alf.no/kontakt/"
    },
    {
        title: "Om oss",
        url: "https://alf.no/om-oss/"
    },
    {
        title: "Ressurser",
        url: "https://alf.no/ressurser/"
    },
]
</script>


<template>
    <Button :toggle=true />
    <Button v-for="page in pages" :text="page.title" :to="page.url" />
    <Button :dropdown=true :links icon_name="bars" /> <!-- BIND HER -->
</template>
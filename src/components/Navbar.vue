<script setup>
import Button from "@/components/Button.vue"

const links = [
    "alf.no", "utvikerkurs.no"
]
</script>


<template>
    <div>
        <Button text="Deltaker" to="deltaker" />
        <Button text="Bedrift" to="bedrift"/>
        <Button text="Nav" to="nav"/>
        <Button text="" icon_name="bars" class="text-2xl"/>
        <Button text="Dropdwon" to="/" :links dropdown="true"/>
    </div>
    <div>

    </div>
</template>
<script setup>

</script>


<template>
    <nav aria-label="side katalog" class="col-span-full row-start-1 truncate gap-1 w-full">
        <slot>
            <Button :state="2" :look="3" to="/" text="hjemmeside" /> / 
            <Button :state="2" :look="3" :text="$route.name" />
        </slot>
    </nav>
</template>
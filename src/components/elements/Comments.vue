<script setup>
import Comment from "@/components/elements/Comment.vue"

defineProps({
    comments: {
        type: Array
    }
})
</script>


<template>
    <div class="flex flex-col gap-8">
        <div class="grid gap-2">
            <h2 class="col-span-full">
                Kommentarer
            </h2>

            <div class="flex items-center gap-2">
                <Icon :id="20" />
                <input type="text" placeholder="legg til et kommentar" class="border-2 w-full p-1 rounded-full px-3" />
                <Button :state="0" :look="1" text="send" :icon_id="18" class="dark:bg-alf-blue text-neutral-50 bg-zinc-900 font-bold" />
            </div>
        </div>


        <div class="flex flex-col items-start gap-8">
            <Comment />

            <Comment />

            <Comment />
        </div>
    </div>
</template>
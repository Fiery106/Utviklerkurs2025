<script setup>
import AddPost from '@/components/kursportal/AddPost.vue';
import AddSnippet from '@/components/kursportal/AddSnippet.vue';
</script>


<template>
    <div class="place-away">
        <AddPost />
        
        <AddSnippet v-if="true" />
    </div>

    <Button :state="0" :look="1" text="gå tilbake" />
</template>
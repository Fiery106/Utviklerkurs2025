<script setup>
import Profile from '@/components/blocking/Profile.vue';
</script>


<template>
    <div class="flex items-center gap-8 container">
        <Profile />
        
        <form id="login" action="huskåbytteutsiden.com" method="post" class="flex flex-col gap-2 w-full">
            <input required type="email" name="epost" placeholder="E-post" />

            <div class="h-0.5 bg-neutral-500"></div>

            <input required type="text" name="passord" placeholder="Passord" />

            <div class="flex not-md:flex-col md:items-center justify-between gap-4">
                <div class="flex flex-col gap-2">
                    <a class="select-none">
                        Glemt passord?
                    </a>

                    <label class="flex items-center gap-2 select-none">
                        <p>
                            Husk meg
                        </p>
                        <input type="checkbox" class="size-4" />
                    </label>
                </div>

                <button type="submit" class="button-black select-none basic-button not-md:w-full justify-center">
                    Logg på ->
                </button>
            </div>
        </form>
    </div>
</template>
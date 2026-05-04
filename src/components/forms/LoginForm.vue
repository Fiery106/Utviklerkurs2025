<script setup>
import { ref } from 'vue';
import Profile from '@/components/blocking/Profile.vue';
import Card from '@/components/blocking/Card.vue';

const active = ref(false)
</script>


<template>
    <form id="login" action="huskåbytteutsiden.com" method="post" class="flex flex-col gap-4">
        <Card class="gap-8">
            <div class="flex items-center gap-8 container">
                <Profile />
                
                <div class="flex flex-col gap-2 w-full">
                    <input required type="email" name="epost" placeholder="E-post" autofocus />

                    <div class="h-0.5 bg-neutral-500"></div>

                    <input required type="text" name="passord" placeholder="Passord" />

                    <div class="flex not-md:flex-col md:items-center justify-between gap-4">
                        <a class="select-none">
                            Glemt passord?
                        </a>

                        <label for="huskmeg" class="flex items-center gap-2 select-none">
                            <p>
                                Husk meg
                            </p>
                            <input type="checkbox" id="huskmeg" class="size-4" />
                        </label>
                    </div>
                </div>
            </div>
        </Card>


        <div class="flex justify-between">
            <router-link to="/" class="basic-button button-black">
                Gå tilbake
            </router-link>

            <button v-if="active" type="submit" @click.prevent="console.log('hello world')" class="button-black select-none basic-button not-md:w-full justify-center">
                Logg på ->
            </button>

            <router-link v-if="!active" to="/kursportal" class="basic-button button-black"> <!-- Skal flyttes senere -->
                Logg på ->
            </router-link>
        </div>
    </form>
</template>
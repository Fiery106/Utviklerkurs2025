<script setup>
import { reactive } from 'vue';
import router from '@/router';
import axios from 'axios'

import Bnuuy from '@/assets/images/ref/Bnuuy_1.png'

const form = reactive({
    tittel: '',
    kategorie: '',
    årsgruppe: '',
    innhold: '',
    fil: ''
})


function getDate() {
    var today = new Date()
    var day = String(today.getDate()).padStart(2, '0')
    var month = String(today.getMonth() + 1).padStart(2, '0')
    var year = String(today.getFullYear()).slice(2, today.getFullYear().length)

    return today = day + '.' + month + '.' + year
}


async function test() {
    try {
        const response = await axios.get('/api/post')

        const new_post = {
            id: response.data.length + 1,
            posterensID: 456420, //localstorage.getItem('')
            tittel: form.tittel,
            dato: getDate(),
            kategorie: form.kategorie,
            årsgruppe: form.årsgruppe,
            innhold: form.innhold,
            fil: form.fil,
            kommentarer: []
        }

        await axios.post('/api/post', new_post)
        router.push(`/kursportal/post/v/${new_post.tittel}/${new_post.id}`)

    } catch (error) {
        console.error(error)
    }
}
</script>


<template>
    <form class="page" @submit.prevent="test()" name="ny post">
        <section class="flex flex-col gap-4">
            <h1>
                Ny post
            </h1>

            <label>
                <h2>
                    Tittel*
                </h2>

                <input name="tittel" v-model="form.tittel" type="text" required class="border w-full p-1" />
            </label>


            <label>
                <h3>
                    Årsgruppe*
                </h3>
                
                <select name="årsgruppe" v-model="form.årsgruppe" required class="border w-full p-1">
                    <option>

                    </option>
                    <option>
                        Høst 2026
                    </option>
                    <option>
                        Vinter 2026
                    </option>
                </select>
            </label>


            <label>
                <h3>
                    Kategorie*
                </h3>

                <!-- Hvis brukeren er deltaker, kun vis EN valgmulighet -->
                <select v-if="true" name="kategorie" v-model="form.kategorie" required class="border w-full p-1">
                    <option>

                    </option>
                    <option>
                        Oppgaver
                    </option>
                    <option>
                        Diskusjoner
                    </option>
                </select>

                <select v-else disabled name="kategorie" v-model="form.kategorie" class="border w-full p-1 text-neutral-500">
                    <option>
                        Diskusjoner
                    </option>
                </select>
            </label>


            <label>
                <h3>
                    Innhold*
                </h3>
                
                <textarea name="innhold" v-model="form.innhold" required placeholder="Lorem ipsum dolor sit amet" class="border w-full min-h-80 max-h-160 p-1" />
            </label>
            

            <label>
                <h3>
                    Last opp filene
                </h3>
                
                <input name="fil" type="file" class="border w-fit p-1 hover:cursor-pointer" />
            </label>
            

            <input type="submit" class="w-fit self-center hover:cursor-pointer basic-button button-black rounded-md" />
        </section>
    </form>
</template>
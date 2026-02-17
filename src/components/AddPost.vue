<script setup>
import { reactive } from 'vue';
import AddSnippet from '@/components/AddSnippet.vue';
import axios from 'axios'

import Bnuuy from '@/assets/images/ref/Bnuuy_1.png'

const form = reactive({
    tittel: '',
    kategorie: '',
    innhold: '',
    fil: [],
    hashtags: [''],
})


function getDate() {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var year = today.getFullYear();

    today = day + '/' + month + '/' + year;

    return today
}


async function test() {
    try {
        const response = await axios.get('/api/Post')

        const new_post = {
            postID: response.data.length + 1,
            posterensID: 456420, //localstorage.getItem('')
            tittel: form.tittel,
            kategorie: form.kategorie,
            innhold: form.innhold,
            fil: form.fil,
            hashtags: form.hashtags,
            kommentarer: [''],
            dato: getDate()
        }

        //const submit = await axios.post('/api/Post', new_post)
        //router.push(`/kursportal/post/${response.data.tittel}/${response.data.postID}`)

        console.log(response.data)
        
    } catch (error) {
        console.error(error)
    }
}
</script>


<template>
    <div class="align-center not-xl:flex-col-reverse">
        <form class="page" @submit.prevent="test()" name="ny post">
            <section class="flex flex-col gap-4">
                <h1>
                    Ny post
                </h1>

                <label>
                    Tittel*

                    <input name="tittel" v-model="form.tittel" type="text" required="true" placeholder="tittel" class="border w-full p-1" />
                </label>


                <label>
                    Kategorie*

                    <select name="kategorie" v-model="form.kategorie" required="true" class="w-full border p-1">
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
                    Innhold*

                    <textarea name="innhold" v-model="form.innhold" required="true" placeholder="innhold" class="border w-full min-h-80 max-h-160 p-1" />
                </label>
                

                <label>
                    Last opp filene

                    <input name="fil" type="file" class="border w-fit p-1" />
                </label>


                <label>
                    Legg til noen hashtags

                    <input name="hashtags" v-model="form.hashtags" type="text" placeholder="#hashtag" class="border w-full p-1" />
                </label>
                

                <input type="submit" class="border self-center w-fit" />
            </section>
        </form>

        <AddSnippet v-if="true" />
    </div>
</template>
<script setup>

</script>


<template>
    <h1 class="text-center mb-8">
        Registerform
    </h1>

    <form id="register" action="huskåbytteutsiden.com" method="post" class="flex flex-col gap-8 ">
        <label>
            <p class="border-b border-neutral-500 min-w-32 w-fit">
                Brukernavn<span class="text-red-500">*</span>
            </p>
            <input required type="text" name="navn" placeholder="Navn Navnesen" />
        </label>

        <label>
            <p class="border-b border-neutral-500 min-w-32 w-fit">
                E-post<span class="text-red-500">*</span>
            </p>
            <input required type="email" name="epost" placeholder="navn@post.no" />
        </label>
        
        <label>
            <p class="border-b border-neutral-500 min-w-32 w-fit">
                Passord<span class="text-red-500">*</span>
            </p>
            <input required type="text" name="passord" placeholder="abc123" />
        </label>

        <label>
            <p class="border-b border-neutral-500 min-w-32 w-fit">
                Fødselsdato
            </p>
            <input type="date" name="dato" />
        </label>

        <label>
            <p>
                Farge
            </p>
            <select>
                <option>
                    Blå (alf-blue)
                </option>
                <option>
                    Lime (klosterhagen)
                </option>
                <option>
                    Oransje (aurora)
                </option>
                <option>
                    Rød (megafon)
                </option>
                <option>
                    Grønn (urbant)
                </option>
            </select>
        </label>
        

        <button type="submit" class="button-black select-none basic-button not-md:w-full justify-center">
            Logg på ->
        </button>
    </form>

    <p class="pt-8">
        <span class="text-red-500">*</span>: Må fylles ut
    </p>
</template>
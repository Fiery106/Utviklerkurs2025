<script setup>
var tests = ["Alle", "Oppgaver", "Diskusjoner"]
</script>


<template>
    <div class="flex items-center gap-4" name="sorterings knapper">
        <label class="flex gap-1">
            <p class="font-bold emphasis">
                Sorter etter
            </p>
            
            <select name="tidspunkt" class="text-shadow-2xs text-shadow-neutral-50/10 pl-1 unlight">
                <option class="w-fit">
                    Nyeste
                </option>
                <option class="w-fit">
                    Eldste
                </option>
            </select>
        </label>


        <label class="flex gap-1">
            <p class="font-bold emphasis">
                Tema
            </p>
            
            <select name="tema" class="text-shadow-2xs text-shadow-neutral-50/10 pl-1 unlight">
                <option v-for="test in tests" class="w-fit">
                    {{ test }}
                </option>
            </select>
        </label>

        <div class="text-neutral-50 flex items-center gap-1">
            <Icon :id="11" class="not-dark:invert" />
            <input type="search" name="søk" placeholder="søk her..." class="hidden md:block md:w-32 p-1 focus:outline-none focus:inset-ring-1 inset-ring-neutral-50 text-neutral-500 dark:text-neutral-300 rounded-md"/>
        </div>

        <Button :look="1" text="søk" class="button-black focus-visible:inset-ring-alf-blue focus-visible:inset-ring-2" />
    </div>
</template>
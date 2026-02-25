<script setup>
var tests = ["Alle", "Oppgaver", "Diskusjoner"]
</script>


<template>
    <div class="flex items-center gap-4" name="sorterings knapper">
        <label class="flex gap-1">
            <p class="font-bold emphasis">
                Sorter etter
            </p>
            
            <select class="text-shadow-2xs text-shadow-neutral-50/10 pl-1 unlight">
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
            
            <select class="text-shadow-2xs text-shadow-neutral-50/10 pl-1 unlight">
                <option v-for="test in tests" class="w-fit">
                    {{ test }}
                </option>
            </select>
        </label>

        <Button :look="1" text="søk" class="button-black" />
    </div>
</template>
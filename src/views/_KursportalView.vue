<script setup>
var tests = ["Alle dager", "Tirsdag", "Torsdag", "Fredag"]

// GOOD GRAVY se på alle disse klassene 💀💀
</script>


<template>
    <main>
        <div class="max-w-7xl grid gap-8 md:gap-4 not-md:pt-8 py-16 mx-auto">
            <div class="grid gap-2 not-xl:px-8">
                <div class="flex justify-center md:justify-start gap-2">
                    <button class="text-xl bg-alf-blue px-4 py-1 text-neutral-50 w-full md:w-fit hover:bg-alf-blue/80 active:bg-alf-blue inset-ring active:scale-95 transition duration-75 ease-out inset-ring-neutral-50 shadow-md">
                        Oppgaver
                    </button>

                    <button class="text-xl bg-neutral-200 px-4 py-1 dark:bg-zinc-600 dark:text-neutral-50 text-neutral-900 w-full md:w-fit hover:brightness-90 active:scale-95 transition ease-out duration-75 shadow-md">
                        Diskusjoner
                    </button>

                    <button class="text-xl bg-neutral-200 px-4 py-1 dark:bg-zinc-600 dark:text-neutral-50 text-neutral-900 w-full md:w-fit hover:brightness-90 active:scale-95 transition ease-out duration-75 shadow-md">
                        FAQ
                    </button>
                </div>
            </div>
        

            <div class="bg-neutral-50 xl:rounded-2xl xl:rounded-tr-8xl dark:text-neutral-200 dark:bg-neutral-800/90 bg-gradient-to-b from-90% to-neutral-900/33 dark:to-neutral-900 transition-colors shadow-2xl">
                <div class="h-fit w-full p-8 pb-0 grid grid-cols-4 gap-8">
                    <div class="col-span-4 min-h-16 h-fit grid gap-4">
                        <div class="border-b-2 py-4 items-end justify-between flex">
                            <h1 class="text-6xl dark:text-neutral-50" name="banner">
                                ALF Utviklerkurs
                            </h1>
                            <p>
                                Torsdag - 29.01.2026
                            </p>
                        </div>

                        <div class="flex flex-col gap-x-8 gap-y-2 grid-cols-2 w-fit" name="sorterings knapper">
                            <div class="flex items-center gap-2">
                                <label class="font-bold emphasis">
                                    Sorter etter
                                </label>
                                <a class="text-md text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-200/75 dark:active:text-neutral-200 hover:text-neutral-900/75 active:text-neutral-900 transition ease-out duration-75 motion-reduce:active:text-neutral-900 select-none text-shadow-2xs text-shadow-neutral-50/10">
                                    Nyeste
                                </a>
                                <a class="text-md text-neutral-700 hover:text-neutral-900/75 select-none text-shadow-2xs text-shadow-neutral-50/10">
                                    Eldste
                                </a>
                                
                                <div class="flex items-center gap-2">
                                    <label class="font-bold emphasis">
                                        Tidspunkt
                                    </label>
                                    <select class="text-shadow-2xs text-shadow-neutral-50/10 px-1 text-neutral-700">
                                        <option v-for="test in tests" class="w-fit">
                                            {{ test }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div v-show="true" class="flex gap-2">
                                <button class="bg-neutral-100 text-neutral-500 w-fit px-3 flex gap-1 py-1 items-center font-normal shadow">
                                    <span class="bg-alf-blue rounded-full px-2 text-neutral-50 hover:bg-alf-blue/75 active:bg-alf-blue">X</span> Nyeste
                                </button>
                                <button class="bg-neutral-100 text-neutral-500 w-fit px-3 flex gap-1 py-1 items-center font-normal shadow">
                                    <span class="bg-alf-blue rounded-full px-2 text-neutral-50 hover:bg-alf-blue/75 active:bg-alf-blue">X</span> Torsdager
                                </button>
                            </div>
                        </div>
                    </div>


                    
                    <div class="grid gap-4 p-8 bg-neutral-200 dark:bg-zinc-600 col-span-4 md:col-span-3 h-fit border-b-2 shadow-md">
                        <h1 class="dark:text-neutral-50">
                            NAME
                        </h1>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi dolorum pariatur cumque dolor molestiae ipsa saepe nostrum amet eaque praesentium, eius blanditiis quae! Facilis quo quasi architecto eum fuga.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum consequuntur, voluptatem unde nisi nesciunt delectus officiis magni. Id labore, accusamus omnis laboriosam assumenda ab repellat. Id officiis aut sed.</p>

                        <div class="flex justify-between pt-4">
                            <button class="bg-neutral-900 text-neutral-50 px-3 py-1 w-fit hover:bg-neutral-900/75 shadow-md">
                                Les mer
                            </button>

                            <p>
                                15.01.26 - Torsdag
                            </p>
                        </div>        
                    </div>

                    <div class="hidden md:grid divide-y-2 h-full gap-8">
                        <div class="flex justify-between">
                            <div>
                                <h2>
                                    HENDELSE
                                </h2>
                                <p class="line-clamp-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt beatae dicta reprehenderit vitae consequatur! Veritatis natus labore optio mollitia dignissimos cum itaque sit ad rem, non dolor, a distinctio placeat?
                                </p>
                            </div>

                            <div v-if="false" class="size-24 shrink-0 bg-alf-blue">
                                
                            </div>
                        </div>
                        
                        <h2>
                            ?????
                        </h2>
                    </div>



                    <div class="col-span-4 h-fit divide-y-2 gap-8 grid">
                        <div v-for="value in 2" class="grid gap-4 p-8 bg-neutral-100 dark:bg-zinc-700 shadow-md">
                            <h1>
                                NAME
                            </h1>
                            <p class="line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi dolorum pariatur cumque dolor molestiae ipsa saepe nostrum amet eaque praesentium, eius blanditiis quae! Facilis quo quasi architecto eum fuga.</p>

                            <div class="flex justify-between pt-4">
                                <button class="w-fit px-3 py-1 bg-neutral-900 text-neutral-50 hover:bg-neutral-900/75 active:scale-95 motion-safe:active:bg-neutral-900 transition duration-100 ease-out shadow-md">
                                    Les mer
                                </button>

                                <p>
                                    15.01.26 - Torsdag
                                </p>
                            </div> 
                        </div>
                    </div>
                </div> 

                <div class="xl:rounded-b-2xl min-h-16 p-8 pt-16 text-center flex justify-center">
                    <button class="text-2xl bg-neutral-900 text-neutral-50 px-4 py-1 hover:bg-neutral-900/75">
                        Vis alle meldingene
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>
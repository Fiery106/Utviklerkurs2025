<script setup>
var tests = ["Alle dager", "Tirsdag", "Torsdag", "Fredag"]
</script>


<template>
    <main class="from-blue-500/90">
        <div class="max-w-7xl grid gap-4 py-16 mx-auto">
            <div class="grid gap-2 not-xl:px-8">
                <div class="flex justify-center md:justify-start gap-2">
                    <button class="text-xl bg-alf-blue px-4 py-1 text-neutral-50 w-full md:w-fit hover:brightness-105 inset-ring active:scale-95 transition duration-75 ease-out inset-ring-neutral-50 shadow-md">
                        Oppgaver
                    </button>
                    <button class="text-xl bg-neutral-200 px-4 py-1 text-neutral-900 w-full md:w-fit hover:brightness-90 active:scale-95 transition ease-out duration-75 shadow-md">
                        Diskusjoner
                    </button>
                    <button class="text-xl bg-neutral-200 px-4 py-1 text-neutral-900 w-full md:w-fit hover:brightness-90 active:scale-95 transition ease-out duration-75 shadow-md">
                        Info
                    </button>
                </div>
                
                <div class="flex items-center gap-2 select-none">
                    <p class="font-bold emphasis indent-4 xl:selection:text-neutral-50">
                        Sorter etter
                    </p>
                    <a class="text-md text-neutral-900 hover:text-neutral-900/75 active:text-neutral-50 transition ease-out duration-100 motion-reduce:active:text-neutral-900 select-none">
                        Nyeste
                    </a>
                    <a class="text-md text-neutral-900 hover:text-neutral-900/75 select-none">
                        Eldste
                    </a>
                    <select>
                        <option v-for="test in tests" class="w-fit">
                            {{ test }}
                        </option>
                    </select>
                </div>
            </div>
        

            <div class="bg-neutral-50 xl:rounded-2xl xl:rounded-tr-8xl shadow-2xl">
                <div class="h-fit w-full p-8 pb-0 grid grid-cols-4 gap-8">
                    <div class="col-span-4 min-h-16 h-fit border-b-2 p-8 items-end justify-center flex">
                        <h1 class="text-6xl">
                            BANNER
                        </h1>
                    </div>

                    <button v-if="false" class="bg-alf-blue row-start-2 w-fit px-3 py-1">
                        <span class="bg-blue-500 rounded-full px-1">X</span> Eldste sortert
                    </button>
                    
                    <div class="grid gap-4 p-8 bg-neutral-200 row-start-2 col-span-4 md:col-span-3 h-fit border-b-2 shadow-md">
                        <h1>
                            NAME
                        </h1>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi dolorum pariatur cumque dolor molestiae ipsa saepe nostrum amet eaque praesentium, eius blanditiis quae! Facilis quo quasi architecto eum fuga.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum consequuntur, voluptatem unde nisi nesciunt delectus officiis magni. Id labore, accusamus omnis laboriosam assumenda ab repellat. Id officiis aut sed.</p>

                        <div class="flex justify-between pt-4">
                            <button class="bg-neutral-900 px-3 py-1 w-fit hover:bg-neutral-900/75 shadow-md">
                                Les mer
                            </button>

                            <p>
                                15.01.26 - Torsdag
                            </p>
                        </div>        
                    </div>

                    <div class="col-span-4 h-fit divide-y-2 gap-8 grid">

                        <div v-for="value in 2" class="grid gap-4 p-8 bg-neutral-100 shadow-md">
                            <h1>
                                NAME
                            </h1>
                            <p class="line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi dolorum pariatur cumque dolor molestiae ipsa saepe nostrum amet eaque praesentium, eius blanditiis quae! Facilis quo quasi architecto eum fuga.</p>

                            <div class="flex justify-between pt-4">
                                <button class="bg-neutral-900 px-3 py-1 w-fit hover:bg-neutral-900/75 shadow-md">
                                    Les mer
                                </button>

                                <p>
                                    15.01.26 - Torsdag
                                </p>
                            </div> 
                        </div>
                    </div>


                    <div class="hidden md:grid row-start-2 divide-y-2 h-full gap-8">
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
                </div> 

                <div class="bg-gradient-to-b from-10% from-neutral-50 to-neutral-900/50 rounded-b-2xl min-h-16 p-8 pt-16 text-center">
                    <button class="text-2xl bg-neutral-900 px-4 py-1 hover:bg-neutral-900/75">
                        Vis alle meldingene
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import Page from '@/components/elements/Page.vue';
</script>


<template>
    <div class="max-w-7xl grid gap-4 py-16 mx-auto">
        <div class="grid gap-1">
            <div class="flex gap-4">
                <button class="text-xl bg-alf-blue px-4 py-1 text-neutral-50 hover:brightness-90 border-2 border-neutral-50 shadow-md">
                    Lekser
                </button>
                <button class="text-xl bg-neutral-200 px-4 py-1 text-neutral-900 hover:bg-neutral-200/75 border-2 border-neutral-900 shadow-md">
                    Forumer
                </button>
                <button class="text-xl bg-neutral-200 px-4 py-1 text-neutral-900 hover:bg-neutral-200/75 border-2 border-neutral-900 shadow-md">
                    Info
                </button>
            </div>
            
            <div class="flex items-center gap-2 select-none">
                <p class="font-bold">
                    Sorter etter
                </p>
                <a class="text-md text-neutral-700 hover:text-neutral-900/75">
                    Nyeste
                </a>
                <a class="text-md text-neutral-700 hover:text-neutral-900/75">
                    Eldste
                </a>
            </div>
        </div>
        

        <div class="bg-neutral-50 rounded-2xl md:rounded-tr-8xl shadow-2xl">
            <div class="h-fit w-full p-8 pb-0 grid grid-cols-4 grid-rows-1 gap-8">
                <div class="col-span-4 min-h-16 h-fit border-b-2 p-8 items-end justify-center flex">
                    <h1 class="text-6xl">
                        BANNER
                    </h1>
                </div>

                
                <div class="grid gap-4 p-8 bg-neutral-200 row-start-2 col-span-4 md:col-span-3 h-fit border-b-2 shadow-md">
                        <h1>
                            NAME
                        </h1>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi dolorum pariatur cumque dolor molestiae ipsa saepe nostrum amet eaque praesentium, eius blanditiis quae! Facilis quo quasi architecto eum fuga.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum consequuntur, voluptatem unde nisi nesciunt delectus officiis magni. Id labore, accusamus omnis laboriosam assumenda ab repellat. Id officiis aut sed.</p>

                        <button class="bg-neutral-900 px-3 py-1 w-fit hover:bg-neutral-900/75">
                            Les mer
                        </button>
                    </div>

                <div class="col-span-4 h-fit divide-y-2 gap-8 grid">

                    <div v-for="value in 2" class="grid gap-4 p-8 bg-neutral-200 shadow-md">
                        <h1>
                            NAME
                        </h1>
                        <p class="line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi dolorum pariatur cumque dolor molestiae ipsa saepe nostrum amet eaque praesentium, eius blanditiis quae! Facilis quo quasi architecto eum fuga.</p>
                        <button class="bg-neutral-900 px-3 py-1 w-fit hover:bg-neutral-900/75">
                            Les mer
                        </button>
                    </div>
                </div>


                <div class="hidden md:grid row-start-2 divide-y-2 h-full gap-8">
                    <h2>
                        DATO
                    </h2>
                    <h2>
                        HENDELSE
                    </h2>
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
</template>
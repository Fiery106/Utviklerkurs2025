<template>
    <div class="error">
        <div class="text-center flex flex-col gap-2">
            <h1>
                Heisann
            </h1>

            <div class="flex gap-1">
                <p class="font-bold">
                    404
                </p>

                <div class="divider-x"></div>
                
                <p>
                    
                    Siden ble ikke funnet
                </p>
            </div>
        </div>

        <button @click="$router.go(-1)" class="button-black basic-button">
            Gå tilbake?
        </button>
    </div>
</template>
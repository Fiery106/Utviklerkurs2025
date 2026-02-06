<script setup>

</script>


<template>
    <div class="page my-32 mx-auto">
        <div class="flex flex-col gap-2">
            <div class="text-neutral-500 flex gap-1">
                <a>
                    kursportal
                </a>
                /
                <a>
                    oppgaver
                </a>
                /
                <p>
                    ...
                </p>
            </div>
            <div class="flex justify-between items-center">
                <h1>
                    title
                </h1>
                <p class="text-neutral-500">
                    06.02.2026
                </p>
            </div>
            <ul class="flex items-center gap-2 text-neutral-500">
                <li>
                    #one
                </li>
                <li>
                    #two
                </li>
                <li>
                    #three
                </li>
            </ul>
        </div>

        <div class="flex items-start gap-4">
            <div class="size-16 shrink-0 rounded-full border bg-alf-blue"></div>
            <section>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis nesciunt adipisci repellendus iusto quaerat optio aliquid est eveniet consectetur ipsa minima, explicabo eius numquam eaque blanditiis, nihil animi. Saepe.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis nesciunt adipisci repellendus iusto quaerat optio aliquid est eveniet consectetur ipsa minima, explicabo eius numquam eaque blanditiis, nihil animi. Saepe.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis nesciunt adipisci repellendus iusto quaerat optio aliquid est eveniet consectetur ipsa minima, explicabo eius numquam eaque blanditiis, nihil animi. Saepe.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis nesciunt adipisci repellendus iusto quaerat optio aliquid est eveniet consectetur ipsa minima, explicabo eius numquam eaque blanditiis, nihil animi. Saepe.
                </p>
            </section>  
        </div>

        <div class="flex items-center gap-4">
            <Icon :id="20" />
            <input type="text" placeholder="legg til et kommentar" class="w-full p-1 px-4 rounded-full border-neutral-500 border" />
        </div>
    </div>

    <div class="page my-16 mx-auto">
        <div class="grid md:grid-cols-7 xl:grid-cols-8 gap-4">
            <nav class="text-neutral-500 gap-1">
                <Button :state="2" :look="1" text="kursportal" /> /
                <Button :state="2" :look="1" text="oppgaver" /> /
                <p>
                    ...
                </p>
            </nav>


            
            <div class="hidden md:flex flex-col items-center text-center gap-2 row-start-2">
                <div class="bg-alf-blue size-16 rounded-full shrink-0"></div>
                <h3>
                    NAVN NAVNESEN
                </h3>
            </div>


            <div class="flex flex-col col-span-full md:col-span-6 xl:col-span-7 gap-8 row-start-2">
                <div class="flex flex-col gap-4">
                    <div class="flex justify-between">
                        <h1>
                            TITTLE
                        </h1>
                        <p class="text-neutral-500">
                            06.02.2026
                        </p>
                    </div>

                    <div class="flex flex-col gap-2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem labore voluptatibus commodi sit reiciendis ducimus dolores molestiae minus optio iure, perferendis eligendi atque saepe quas omnis, dolorem ullam. Rem, expedita.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptatibus ipsam repellat voluptatum nisi ab nostrum doloremque recusandae quidem similique omnis, quod enim dolorem ad corporis temporibus ullam amet totam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ipsam veniam repellendus harum totam obcaecati tempora suscipit, cupiditate, rem nulla, adipisci fugit deleniti consectetur impedit maxime deserunt. Quae, qui quos!
                        </p>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <h3>
                        Last ned filene (10mb)
                    </h3>
                    <Button :state="2" :look="4" text="download.png, download2.png, download3.png, ...og 5 til" />
                </div>
            </div>
        </div>

        <div>
            <h2>
                Kommentarer
            </h2>
        </div>
    </div>
</template>
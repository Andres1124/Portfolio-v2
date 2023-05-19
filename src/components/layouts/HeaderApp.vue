<script>
import { IconMenu2 } from '@tabler/icons-vue';
    export default {
        components: { IconMenu2 }
    }
</script>
<template>
    <nav class="p-5 fixed w-full">
        <div class="flex items-center justify-between container mx-auto relative">
            <div>
                <p class="text-xl text-white font-bold">
                    Andrés <span class="text-color-primary">Delgado</span>
                </p>
            </div>
            <div class="hidden items-center lg:flex">
                <div class="px-4">
                    <a class="text-white font-bold hover:text-[#00AEFF] ease-linear duration-200 cursor-pointer">
                        Home
                    </a>
                </div>
                <div class="px-4">
                    <a class="text-white font-bold hover:text-[#00AEFF] ease-linear duration-200 cursor-pointer">
                        About
                    </a>
                </div>
                <div class="px-4">
                    <a class="text-white font-bold hover:text-[#00AEFF] ease-linear duration-200 cursor-pointer">
                        Services
                    </a>
                </div>
                <div class="px-4">
                    <a class="text-white font-bold hover:text-[#00AEFF] ease-linear duration-200 cursor-pointer">
                        Projects
                    </a>
                </div>
                <div class="px-4">
                    <a class="text-white font-bold hover:text-[#00AEFF] ease-linear duration-200 cursor-pointer">
                        Contact
                    </a>
                </div>
            </div>
            <div class="flex lg:hidden">
                <IconMenu2 :size="30" stroke-width="2.5" />
            </div>
        </div>
    </nav>
</template>

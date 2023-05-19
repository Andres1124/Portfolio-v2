<script>
import { IconMenu2 } from '@tabler/icons-vue';
import { ref } from 'vue';
    export default {
        components: { IconMenu2 },

        setup(props) {
            const url = ref(window.location);
            

            return {
                url,
            }
        }
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
                    <a href="#" class="font-bold ease-linear duration-200 cursor-pointer"
                        :class="url.hash === '' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                        Home
                    </a>
                </div>
                <div class="px-4">
                    <a href="#about" class="font-bold ease-linear duration-200 cursor-pointer"
                        :class="url.hash === '#about' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                        About
                    </a>
                </div>
                <div class="px-4">
                    <a href="#services" class="font-bold ease-linear duration-200 cursor-pointer"
                        :class="url.hash === '#services' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                        Services
                    </a>
                </div>
                <div class="px-4">
                    <a href="#projects" class="font-bold ease-linear duration-200 cursor-pointer"
                        :class="url.hash === '#projects' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                        Projects
                    </a>
                </div>
                <div class="px-4">
                    <a href="#contact" class="font-bold ease-linear duration-200 cursor-pointer"
                        :class="url.hash === '#contact' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
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

<script>
import { IconMenu2, IconX } from '@tabler/icons-vue';
import { ref, onBeforeUnmount, onMounted } from 'vue';
    export default {
        components: { IconMenu2, IconX },

        setup(props) {
            const section = ref('');
            const openHeader = ref(false);
            
            const showHeader = () => {
                if (openHeader.value) openHeader.value = false
                else if (!openHeader.value) openHeader.value = true
            }

            const scrollActive = () => {
                const sections = document.querySelectorAll('section[id]');
                const scrollY = window.scrollY;

                sections.forEach(current => {
                    const sectionHeight = current.offsetHeight,
                          sectionTop = current.offsetTop - 150,
                          sectionId = current.getAttribute('id')

                    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        section.value = sectionId
                    }
                })
            }

            onMounted(() => {
                window.addEventListener('scroll', scrollActive)
            })

            onBeforeUnmount(() => {
                window.removeEventListener('scroll', scrollActive)
            })

            return {
                section,
                openHeader,
                showHeader,
                scrollActive,
            }
        }
    }
</script>
<template>
    <nav v-on:scroll="scrollActive()" class="p-5 fixed w-full backdrop-blur-md z-[999]">
        <div class="flex items-center justify-between container mx-auto relative">
            <div>
                <p class="text-xl text-white font-bold">
                    Andrés <span class="text-color-primary">Delgado</span>
                </p>
            </div>
            <div class="flex flex-col top-0 px-10 fixed bg-nav duration-500 w-9/12 h-screen
                         lg:flex-row lg:items-center lg:h-full lg:bg-transparent lg:w-1/2 lg:relative lg:justify-end"
                :class="openHeader ? 'right-0' : '-right-[100%] lg:right-0'">
                <div class="px-4 mt-14 item-nav lg:mt-0">
                    <a @click="showHeader()" href="#home" class="font-bold ease-linear duration-200 cursor-pointer"
                        :class="section === 'home' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                        Home
                    </a>
                </div>
                <div class="px-4 mt-10 item-nav lg:mt-0">
                    <a @click="showHeader()" href="#about" class="font-bold ease-linear duration-200 cursor-pointer"
                        :class="section === 'about' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                        About
                    </a>
                </div>
                <div class="px-4 mt-10 item-nav lg:mt-0">
                    <a @click="showHeader()" href="#services" class="font-bold ease-linear duration-200 cursor-pointer"
                        :class="section === 'services' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                        Services
                    </a>
                </div>
                <div class="px-4 mt-10 item-nav lg:mt-0">
                    <a @click="showHeader()" href="#projects" class="font-bold ease-linear duration-200 cursor-pointer"
                        :class="section === 'projects' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                        Projects
                    </a>
                </div>
                <div class="px-4 mt-10 item-nav lg:mt-0">
                    <a @click="showHeader()" href="#contact" class="font-bold ease-linear duration-200 cursor-pointer"
                        :class="section === 'contact' ? 'text-[#00AEFF] hover:text-white' : 'text-white hover:text-[#00AEFF]'">
                        Contact
                    </a>
                </div>
                <div @click="showHeader()" class="flex lg:hidden text-white absolute top-5 right-5 cursor pointer">
                    <IconX :size="30" />
                </div>
            </div>
            <div @click="showHeader()" class="flex lg:hidden cursor-pointer">
                <IconMenu2 :size="30" />
            </div>
        </div>
    </nav>
</template>

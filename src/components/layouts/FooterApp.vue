<script>
    import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-vue';

    export default {
        components: { IconBrandGithub, IconBrandLinkedin, IconMail }
    }
</script>
<template>
    <div class="bg-container-color py-20">
        <div class="container mx-auto px-5">
            <div class="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
                <div class="w-full text-center lg:text-left lg:w-1/3">
                    <h1 class="text-white text-3xl font-bold pb-2">
                        Andrés <span class="text-color-primary">Delgado</span>
                    </h1>
                    <h3 class="text-lg text-white font-semibold pb-4">
                        Front-end Developer
                    </h3>
                </div>
                <div class="flex items-center mt-8 justify-center w-full lg:mt-0 lg:w-1/3">
                    <a href="#" class="p-2 w-max text-white bg-primary rounded-full mx-4 
                                        hover:scale-[.90] duration-700 border-2 border-[#00AEFF] hover:bg-transparent">
                        <IconBrandGithub :size="30" />
                    </a>
                    <a href="#" class="p-2 w-max text-white bg-primary rounded-full mx-4 
                                        hover:scale-[.90] duration-700 border-2 border-[#00AEFF] hover:bg-transparent">
                        <IconBrandLinkedin :size="30" />
                    </a>
                    <a href="#" class="p-2 w-max text-white bg-primary rounded-full mx-4 
                                        hover:scale-[.90] duration-700 border-2 border-[#00AEFF] hover:bg-transparent">
                        <IconMail :size="30" />
                    </a>
                </div>
                <div class="w-full mt-8  lg:mt-0 lg:w-1/3">
                    <p class="text-body text-sm text-center lg:text-right">
                        &copy; Copyright Andrés Delgado. All rights reserved
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-vue';

export default {
    components: { IconBrandGithub, IconBrandLinkedin, IconMail }
}
</script>
<template>
    <div class="w-full h-screen flex justify-center items-center bg-container-color">
        <div class="flex flex-col justify-center items-center container mx-auto lg:flex-row">
            <div class="w-full lg:w-1/2 px-5 text-center lg:text-left">
                <h3 class="text-3xl text-white font-semibold pb-4">
                    Hello, <span class="text-color-primary">I'm</span>
                </h3>
                <h1 class="text-color-primary text-6xl font-bold pb-4">
                    Andrés Delgado
                </h1>
                <h3 class="text-3xl text-white font-semibold pb-4">
                    Front-end Developer
                </h3>
                <p class="text-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus quam cum. Eum laboriosam qui consequuntur.
                </p>
                <div class="mt-14">
                    <a href="#" class="px-4 py-3 bg-primary text-white font-semibold
                                        rounded-lg border-2 border-[#00AEFF] hover:bg-transparent duration-500">
                        Lets's Talk
                    </a>
                </div>
                <div class="flex items-center justify-center mt-20 lg:justify-start">
                    <a href="#" class="p-2 w-max text-white bg-primary rounded-full mx-4 
                                        hover:scale-[.90] duration-700 border-2 border-[#00AEFF] hover:bg-transparent">
                        <IconBrandGithub :size="30" stroke-width="2" />
                    </a>
                    <a href="#" class="p-2 w-max text-white bg-primary rounded-full mx-4 hover:scale-[.90] duration-700 
                                        border-2 border-[#00AEFF] hover:bg-transparent">
                        <IconBrandLinkedin :size="30" stroke-width="2" />
                    </a>
                    <a href="#" class="p-2 w-max text-white bg-primary rounded-full mx-4 
                                        hover:scale-[.90] duration-700 border-2 border-[#00AEFF] hover:bg-transparent">
                        <IconMail :size="30" stroke-width="2" />
                    </a>
                </div>
            </div>
            <div class="w-full lg:w-1/2">
                <div class="w-full h-full bg-primary rotate-45">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-vue';

export default {
    components: { IconBrandGithub, IconBrandLinkedin, IconMail }
}
</script>
<template>
    <section id="home" class="w-full h-screen flex justify-center items-center bg-container-color">
        <div class="flex flex-col justify-center items-center container mx-auto lg:flex-row">
            <div class="w-full lg:w-1/2 px-5 text-center lg:text-left">
                <h3 class="text-3xl text-white font-semibold pb-4">
                    {{ $t('hello') }}, <span class="text-color-primary">{{ $t('i_am') }}</span>
                </h3>
                <h1 class="text-color-primary text-6xl font-bold pb-4">
                    Andrés Delgado
                </h1>
                <h3 class="text-3xl text-white font-semibold pb-4">
                    {{ $t('web_developer') }}
                </h3>
                <p class="text-body">
                    {{ $t('home_description') }}
                </p>
                <div class="mt-14">
                    <a href="https://www.linkedin.com/in/andr%C3%A9s-delgado-p%C3%A9rez-135a311b6/" target="_blank"
                        class="px-4 py-3 bg-primary text-white font-semibold
                                        rounded-lg border-2 border-[#00AEFF] hover:bg-transparent duration-500">
                        {{ $t("lets_talk") }}
                    </a>
                </div>
                <div class="flex items-center justify-center mt-20 lg:justify-start">
                    <a href="https://github.com/Andres1124" target="_blank"
                        class="p-2 w-max text-white bg-primary rounded-full mx-4 
                                        hover:scale-[.90] duration-700 border-2 border-[#00AEFF] hover:bg-transparent">
                        <IconBrandGithub :size="30" />
                    </a>
                    <a href="https://www.linkedin.com/in/andr%C3%A9s-delgado-p%C3%A9rez-135a311b6/" target="_blank" 
                        class="p-2 w-max text-white bg-primary rounded-full mx-4 hover:scale-[.90] duration-700 
                                        border-2 border-[#00AEFF] hover:bg-transparent">
                        <IconBrandLinkedin :size="30" />
                    </a>
                    <a href="emailto:andresdegladoperez19@gmail.com"
                        class="p-2 w-max text-white bg-primary rounded-full mx-4 
                                        hover:scale-[.90] duration-700 border-2 border-[#00AEFF] hover:bg-transparent">
                        <IconMail :size="30" />
                    </a>
                </div>
            </div>
            <div class="w-full hidden lg:flex lg:w-1/2">
                <div class="w-full h-full flex justify-center items-center">
                    <div class="h-[300px] w-[300px] bg-white rounded-full overflow-hidden border-2">
                        <img class="mx-auto h-full" src="../assets/images/avatars.png" alt="avatar">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
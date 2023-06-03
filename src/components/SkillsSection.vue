<script>
</script>
<template>
    <section class="bg-container-color py-28">
        <div class="container mx-auto flex flex-col lg:flex-row">
            <div
                data-aos="fade-up" 
                data-aos-duration="500" 
                data-aos-delay="300"
                data-aos-easing="ease-in-sine"
                class="w-full text-center px-5 lg:w-1/2 lg:text-left">
                <p v-if="$i18n.locale === 'en'" class="text-white font-semibold pb-2">
                    {{ $t('favorite') }} <span class="text-color-primary">{{ $t('skills') }}</span>
                </p>
                <p v-else class="text-white font-semibold pb-2">
                    {{ $t('skills') }} <span class="text-color-primary">{{ $t('favorite') }}</span>
                </p>
                <h2 class="text-4xl text-white font-bold pb-5">
                    {{ $t('my_skills') }}
                </h2>
                <p class="text-body">
                    {{ $t('skills_description') }}
                </p>
                <div class="mt-14">
                    <a href="https://github.com/Andres1124" target="_blank" 
                        class="px-4 py-3 bg-primary text-white font-semibold rounded-lg
                                        border-2 border-[#00AEFF] hover:bg-transparent duration-500">
                        {{ $t('see_projects') }}
                    </a>
                </div>
            </div>
            <div 
                data-aos="fade-up" 
                data-aos-duration="500" 
                data-aos-delay="600"
                data-aos-easing="ease-in-sine" 
                class="w-full flex justify-center mt-5 lg:mt-0 lg:w-1/2">
                <div class="flex flex-col items-center lg:flex-row lg:items-start">
                    <ol class="text-white font-semibold px-5">
                        <li class="pt-8"><span class="text-color-primary">01.</span> HTML & CSS</li>
                        <li class="pt-8"><span class="text-color-primary">02.</span> Javascript</li>
                        <li class="pt-8"><span class="text-color-primary">03.</span> Tailwind</li>
                        <li class="pt-8"><span class="text-color-primary">04.</span> VueJs</li>
                    </ol> 
                    <ol class="text-white font-semibold px-5">
                        <li class="pt-8"><span class="text-color-primary">05.</span> Laravel</li>
                        <li class="pt-8"><span class="text-color-primary">06.</span> MySql</li>
                        <li class="pt-8"><span class="text-color-primary">07.</span> Git & GitHub</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>

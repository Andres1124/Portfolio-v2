<script>
import { IconCode, IconDeviceDesktopCode, IconCodeDots } from '@tabler/icons-vue';

export default {
    components: { IconCode, IconDeviceDesktopCode, IconCodeDots }
}
</script>
<template>
    <section id="services" class="container mx-auto px-5 py-28">
        <h6 
            data-aos="fade-up" 
            data-aos-duration="500" 
            data-aos-delay="400"
            data-aos-easing="ease-in-sine" 
            class="text-white font-semibold pb-4 text-center">
            {{ $t('my') }} <span class="text-color-primary">{{ $t('services') }}</span>
        </h6>
        <h2 
            data-aos="fade-up" 
            data-aos-duration="500" 
            data-aos-delay="600"
            data-aos-easing="ease-in-sine" 
            class="text-4xl text-white font-bold pb-5 text-center">
            {{ $t('what_i_do') }}
        </h2>
        <div class="flex flex-col justify-center lg:justify-between lg:flex-row">
            <div
                data-aos="zoom-in-up" 
                data-aos-duration="500" 
                data-aos-delay="900"
                data-aos-easing="ease-in-sine"  
                class="w-full mt-6 bg-container-color px-6 py-12 rounded-lg border-2 border-[#21232c] hover:border-[#00AEFF] duration-500 lg:mx-2 lg:mt-0 lg:w-1/3">
                <div class="text-color-primary">
                    <IconDeviceDesktopCode class="mx-auto" :size="60" />
                </div>
                <div class="py-4">
                    <h3 class="text-center text-white font-semibold pb-5">
                        {{ $t('web_developer') }}
                    </h3>
                    <p class="text-body text-center">
                        {{ $t('web_developer_description') }}
                    </p>
                </div>
            </div>
            <div
                data-aos="zoom-in-up" 
                data-aos-duration="500" 
                data-aos-delay="900"
                data-aos-easing="ease-in-sine"  
                class="w-full mt-6 bg-container-color px-6 py-12 rounded-lg border-2 border-[#21232c] hover:border-[#00AEFF] duration-500 lg:mx-2 lg:mt-0 lg:w-1/3">
                <div class="text-color-primary">
                    <IconCode class="mx-auto" :size="60" />
                </div>
                <div class="py-4">
                    <h3 class="text-center text-white font-semibold pb-5">
                        {{ $t('frontend_developer') }}
                    </h3>
                    <p class="text-body text-center">
                        {{ $t('frontend_developer_description') }}
                    </p>
                </div>
            </div>
            <div
                data-aos="zoom-in-up" 
                data-aos-duration="500" 
                data-aos-delay="900"
                data-aos-easing="ease-in-sine"  
                class="w-full mt-6 bg-container-color px-6 py-12 rounded-lg border-2 border-[#21232c] hover:border-[#00AEFF] duration-500 lg:mx-2 lg:mt-0 lg:w-1/3">
                <div class="text-color-primary">
                    <IconCodeDots class="mx-auto" :size="60" />
                </div>
                <div class="py-4">
                    <h3 class="text-center text-white font-semibold pb-5">
                        {{ $t('backend_developer') }}
                    </h3>
                    <p class="text-body text-center">
                        {{ $t('backend_developer_description') }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

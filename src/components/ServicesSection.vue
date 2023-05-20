<script>
import { IconCode, IconDeviceDesktopCode } from '@tabler/icons-vue';

export default {
    components: { IconCode, IconDeviceDesktopCode }
}
</script>
<template>
    <section id="services" class="container mx-auto px-5 py-12">
        <h6 class="text-white font-semibold pb-4 text-center">
            My <span class="text-color-primary">Services</span>
        </h6>
        <h2 class="text-4xl text-white font-bold pb-5 text-center">
            What I Do
        </h2>
        <div class="flex flex-col items-center justify-center lg:justify-between lg:flex-row">
            <div class="w-full mt-6 bg-container-color px-6 py-12 rounded-lg border-2 border-[#21232c] hover:border-[#00AEFF] duration-500 lg:mx-2 lg:mt-0 lg:w-1/3">
                <div class="text-color-primary">
                    <IconDeviceDesktopCode class="mx-auto" :size="60" />
                </div>
                <div class="py-4">
                    <h3 class="text-center text-white font-semibold pb-5">
                        Front-end developer
                    </h3>
                    <p class="text-body text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis labore fugiat officiis. Quam?
                    </p>
                </div>
            </div>
            <div class="w-full mt-6 bg-container-color px-6 py-12 rounded-lg border-2 border-[#21232c] hover:border-[#00AEFF] duration-500 lg:mx-2 lg:mt-0 lg:w-1/3">
                <div class="text-color-primary">
                    <IconCode class="mx-auto" :size="60" />
                </div>
                <div class="py-4">
                    <h3 class="text-center text-white font-semibold pb-5">
                        Design UI
                    </h3>
                    <p class="text-body text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis labore fugiat officiis. Quam?
                    </p>
                </div>
            </div>
            <div class="w-full mt-6 bg-container-color px-6 py-12 rounded-lg border-2 border-[#21232c] hover:border-[#00AEFF] duration-500 lg:mx-2 lg:mt-0 lg:w-1/3">
                <div class="text-color-primary">
                    <IconCode class="mx-auto" :size="60" />
                </div>
                <div class="py-4">
                    <h3 class="text-center text-white font-semibold pb-5">
                        Back-end developer
                    </h3>
                    <p class="text-body text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis labore fugiat officiis. Quam?
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

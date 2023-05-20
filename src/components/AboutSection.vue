<script>
import SkillsSection from '../components/SkillsSection.vue'

export default {
    components: { SkillsSection }
}
</script>
<template>
    <section id="about" class="">
        <div class="container mx-auto py-8 flex flex-col items-center lg:flex-row">
            <div class="w-full h-[400px] lg:w-1/2 lg:h-[600px]">
            </div>
            <div class="w-full px-5 text-center py-6 lg:w-1/2 lg:text-left">
                <p class="font-semibold text-white pb-2">
                    {{ $t('my') }} <span class="text-color-primary">{{ $t('intro') }}</span>
                </p>
                <h2 class="text-white font-bold pb-5 text-4xl">
                    {{ $t('about_me') }}
                </h2>
                <p class="text-body break-words">
                    {{ $t('about_me_description') }}
                </p>
                <div class="mt-14">
                    <a href="https://www.linkedin.com/in/andr%C3%A9s-delgado-p%C3%A9rez-135a311b6/" target="_blank"
                        class="px-4 py-3 bg-primary text-white font-semibold rounded-lg border-2 border-[#00AEFF] hover:bg-transparent duration-500">
                        {{ $t('contact_me') }}
                    </a>
                </div>
            </div>
        </div>
        <SkillsSection />
    </section>
</template>

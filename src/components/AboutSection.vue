<script>
import SkillsSection from '../components/SkillsSection.vue'

export default {
    components: { SkillsSection }
}
</script>
<template>
    <div class="">
        <div class="container mx-auto flex flex-col items-center lg:flex-row">
            <div class="w-full h-[400px] lg:w-1/2 lg:h-[600px]">
            </div>
            <div class="w-full px-5 text-center py-6 lg:w-1/2 lg:text-left">
                <p class="font-semibold text-white pb-2">
                    My <span class="text-color-primary">Intro</span>
                </p>
                <h2 class="text-white font-bold pb-5 text-4xl">
                    About Me
                </h2>
                <p class="text-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                     minima eum aspernatur ad sequi nihil numquam asperiores dolores totam fuga quam porro,
                      assumenda facilis deleniti, quasi enim provident quia. Dolorem!
                </p>
                <div class="mt-14">
                    <a href="#" class="px-4 py-3 bg-primary text-white font-semibold rounded-lg">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
        <SkillsSection />
    </div>
</template>

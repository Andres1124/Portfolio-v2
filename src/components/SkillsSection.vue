<script>
</script>
<template>
    <section class="bg-container-color py-28">
        <div class="container mx-auto flex flex-col lg:flex-row">
            <div class="w-full text-center px-5 lg:w-1/2 lg:text-left">
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
                    <a href="#" class="px-4 py-3 bg-primary text-white font-semibold rounded-lg
                                        border-2 border-[#00AEFF] hover:bg-transparent duration-500">
                        {{ $t('see_projects') }}
                    </a>
                </div>
            </div>
            <div class="w-full px-5 mt-5 lg:w-1/3 lg:mt-0">
                <div class="flex justify-center">
                    <ol class="text-white font-semibold mx-10">
                        <li class="pt-8"><span class="text-color-primary">01.</span> HTML & CSS</li>
                        <li class="pt-8"><span class="text-color-primary">02.</span> Javascript</li>
                        <li class="pt-8"><span class="text-color-primary">03.</span> Tailwind</li>
                        <li class="pt-8"><span class="text-color-primary">04.</span> VueJs</li>
                    </ol> 
                    <ol class="text-white font-semibold px-5 lg:px-10">
                        <li class="pt-8"><span class="text-color-primary">05.</span> Laravel</li>
                        <li class="pt-8"><span class="text-color-primary">06.</span> MySql</li>
                        <li class="pt-8"><span class="text-color-primary">07.</span> Git & GitHub</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>

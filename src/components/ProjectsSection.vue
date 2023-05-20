<script>
export default {
    
}
</script>
<template>
    <section id="projects" class="bg-container-color py-8">

        <div class="container mx-auto">
            <div>
                <h6 class="text-white font-semibold pb-4 text-center">
                    {{ $t('my_') }} <span class="text-color-primary">{{ $t('jobs') }}</span>
                </h6>
                <h2 class="text-4xl text-white font-bold pb-5 text-center">
                    {{ $t('recent_projects') }}
                </h2>
            </div>
            <div class="flex flex-col mt-6 justify-center items-center lg:flex-row">
                <div class="w-[300px] h-[200px] flex justify-center items-center bg-container-color rounded-lg">
                    <h3 class="text-white font-bold">
                        {{ $t('coming_soon') }}
                    </h3>
                </div>
            </div>
        </div>
    </section>
</template>

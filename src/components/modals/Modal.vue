<script>
import { defineEmits } from 'vue';
import { IconX } from '@tabler/icons-vue';
export default {
    components: { IconX },
    props: ['open', 'project'],
    emits: ['closeModal'],
    setup(props, { emit }) {
        
        return {
            // methods
            closeModal: () => emit('closeModal', false),
            
        }
    }
}
</script>
<template>
    <transition 
        enter-active-class="ease-out duration-300"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-to-class="opacity-0"
        >
        <div 
            v-show="open" 
            class="relative z-[1000] transi" 
            aria-labelledby="modal-title" 
            role="dialog" 
            aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    
            <div class="fixed inset-0 z-[1001] overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <transition 
                        enter-active-class="ease-out duration-500 opacity-0 translate-y-4 sm:translate-y-0" 
                        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                        leave-active-class="ease-in duration-200 opacity-100 translate-y-0 sm:scale-100"
                        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0"
                        >
                        <div 
                            v-show="open" 
                            class="relative transform overflow-hidden rounded-lg text-left transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-container-color px-2 py-2">
                                <div class="flex justify-end">
                                    <IconX @click="closeModal" :size="30" class="cursor-pointer" />
                                </div>
                                <div class="mt-4">
                                    <div class="w-4/5 h-[300px] rounded-lg mx-auto overflow-hidden">
                                        <img :src="project && project.imageUrl ? project.imageUrl : ''" alt="maps projects" class="w-full h-full">
                                    </div>
                                </div>
                                <div class="mt-4 px-5 pb-8">
                                    <h3 class="text-white font-semibold text-2xl text-center pb-4">
                                        {{ project && project.name ? $t(project.name) : '' }}
                                    </h3>
                                    <p class="text-center text-body">
                                        {{ project && project.description ? $t(project.description) : '' }}
                                    </p>
                                </div>
                                <div class="mt-4 px-5 pb-4">
                                    <a :href="project && project.projectUrl ? project.projectUrl : ''" target="_blank">
                                        <div class="w-full py-2 bg-primary text-white font-semibold
                                                        rounded-lg border-2 border-[#00AEFF] hover:bg-transparent duration-500 text-center">
                                            {{ $t('see_repository') }}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { ref } from 'vue';
import Modal from './modals/Modal.vue';

export default {
    components: { Modal },
    setup(props) {
        
        const openModal = ref(false);
        const selectedProject = ref(null);

        const projects = ref([
            {
                id: 1,
                name: 'Maps Project',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum doloribus accusantium?',
                imageUrl: '/src/assets/images/maps-project.png'
            },
        ]);

        return {
            openModal,
            selectedProject,
            projects,

            showCloseModal: (value, project = null) => {
                openModal.value = value;
                selectedProject.value = project;
            },
        }
    }
    
}
</script>
<template>
    <section id="projects" class="bg-container-color py-28">

        <div class="container mx-auto">
            <div>
                <h6 class="text-white font-semibold pb-4 text-center">
                    {{ $t('my_') }} <span class="text-color-primary">{{ $t('jobs') }}</span>
                </h6>
                <h2 class="text-4xl text-white font-bold pb-5 text-center">
                    {{ $t('recent_projects') }}
                </h2>
            </div>
            <div class="flex mt-6 justify-center items-center lg:flex-row">
                <div v-for="project in projects"
                    :key="project.id"
                    @click="showCloseModal(true, project)" 
                    class="w-[300px] h-[200px] flex justify-center items-center rounded-lg cursor-pointer overflow-hidden mx-4">
                    <img :src="project.imageUrl" alt="project image" class="w-full h-full">
                </div>
            </div>
        </div>
    </section>
    <Modal :open="openModal" @closeModal="showCloseModal" :project="selectedProject" />
</template>

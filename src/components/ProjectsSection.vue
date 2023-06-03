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
                name: 'project_map',
                description: 'project_map_description',
                imageUrl: 'https://img.freepik.com/vector-gratis/vista-isometrica-aplicacion-movil-navegacion_23-2147567795.jpg?w=826&t=st=1685760767~exp=1685761367~hmac=a775873fa7cdfadbdbeb5165802b023d1d3313042770a250d9049224e00201b3',
                projectUrl: 'https://github.com/Andres1124/maps-project',
            },
        ]);

        return {
            openModal,
            selectedProject,
            projects,

            showCloseModal: (value, project = null) => {
                openModal.value = value;
                if (!value) {
                    setTimeout(() => {
                        selectedProject.value = project;
                    }, 200);
                } else {
                    selectedProject.value = project;
                }
            },
        }
    }
    
}
</script>
<template>
    <section id="projects" class="bg-container-color py-28">

        <div class="container mx-auto">
            <div
                data-aos="fade-up" 
                data-aos-duration="500" 
                data-aos-delay="200"
                data-aos-easing="ease-in-sine"
            >
                <h6 class="text-white font-semibold pb-4 text-center">
                    {{ $t('my_') }} <span class="text-color-primary">{{ $t('jobs') }}</span>
                </h6>
                <h2 class="text-4xl text-white font-bold pb-5 text-center">
                    {{ $t('recent_projects') }}
                </h2>
            </div>
            <div class="flex mt-6 justify-center items-center lg:flex-row">
                <div
                    v-for="project in projects"
                    :key="project.id"
                    @click="showCloseModal(true, project)" 
                    data-aos="zoom-in-up" 
                    data-aos-duration="500" 
                    data-aos-delay="400"
                    data-aos-easing="ease-in-sine"
                    class="flex justify-center items-center ">
                    <div class="w-[280px] h-[200px] rounded-lg cursor-pointer overflow-hidden mx-4 relative container-image lg:w-[400px] lg:h-[250px]">
                        <img :src="project.imageUrl" alt="project image" class="w-full h-full transition-all">
                        <div class="absolute top-0 content-image transition-all duration-300 ease-in text-center w-full h-full p-4">
                            <div class="flex flex-col justify-center items-center w-full h-full">
                                <h5 class="text-white text-xl font-semibold">{{ $t(project.name) }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Modal :open="openModal" @closeModal="showCloseModal" :project="selectedProject" />
</template>
<style scoped>
.content-image {
    opacity: 0;
    visibility: hidden;
}
.container-image:hover > .content-image {
    opacity: 1;
    visibility: visible;
    background-color: rgba(0, 0, 0, .70);
}
</style>

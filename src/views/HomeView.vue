<script>
import HeaderApp from '../components/layouts/HeaderApp.vue';
import HomeSection from '../components/HomeSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import ContactSection from '../components/ContactSection.vue';


export default {
    components: { HeaderApp, HomeSection, AboutSection, ServicesSection, ProjectsSection, ContactSection }
}

</script>
<template>
    <div>
       <HeaderApp />
       <HomeSection />
       <AboutSection />
       <ServicesSection />
       <ProjectsSection />
       <ContactSection />
    </div>
</template>
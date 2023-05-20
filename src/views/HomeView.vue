<script>
import HeaderApp from '../components/layouts/HeaderApp.vue';
import HomeSection from '../components/HomeSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import ContactSection from '../components/ContactSection.vue';
import FooterApp from '../components/layouts/FooterApp.vue';
import ButtonLanguages from '../components/ButtonLanguages.vue';


export default {
    components: { 
        HeaderApp, 
        HomeSection, 
        AboutSection, 
        ServicesSection, 
        ProjectsSection, 
        ContactSection, 
        FooterApp,
        ButtonLanguages,
    }
}

</script>
<template>
    <div>
       <HeaderApp />
       <ButtonLanguages />
       <HomeSection />
       <AboutSection />
       <ServicesSection />
       <ProjectsSection />
       <ContactSection />
       <FooterApp />
    </div>
</template>
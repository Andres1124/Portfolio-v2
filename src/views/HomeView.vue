<script>
import HeaderApp from '../components/layouts/HeaderApp.vue';
import HomeSection from '../components/HomeSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ServicesSection from '../components/ServicesSection.vue';


export default {
    components: { HeaderApp, HomeSection, AboutSection, ServicesSection }
}

</script>
<template>
    <div>
       <HeaderApp />
       <HomeSection />
       <AboutSection />
       <ServicesSection />
    </div>
</template>
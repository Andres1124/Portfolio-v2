<script>
import HeaderApp from '../components/layouts/HeaderApp.vue';
import HomeSection from '../components/HomeSection.vue';
import AboutSection from '../components/AboutSection.vue';


export default {
    components: { HeaderApp, HomeSection, AboutSection }
}

</script>
<template>
    <div>
       <HeaderApp />
       <HomeSection />
       <AboutSection />
    </div>
</template>
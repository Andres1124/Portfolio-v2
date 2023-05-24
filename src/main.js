import { createApp } from 'vue';
import { createI18n } from 'vue-i18n'
import 'aos/dist/aos.css'
import en from './locales/en.json'
import es from './locales/es.json'
import './css/app.css'
import App from './App.vue'

const i18n = createI18n({
    legacy: false,
    locale: navigator.language.includes('es') ? 'es' : 'en',
    globalInjection: true,
    messages: {
        en,
        es,
    }
})


const app = createApp(App)

app.use(i18n)
app.mount('#app')

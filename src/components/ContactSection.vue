<script>
import { ref } from 'vue';
import { IconSquareRoundedCheckFilled } from '@tabler/icons-vue';

export default {
    components: { IconSquareRoundedCheckFilled },
    setup(props) {
        const sendForm = ref(false)

        const handleSubmit = (event) => {
            event.preventDefault();

            const myForm = event.target;
            const formData = new FormData(myForm);

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
                .then(() => {
                    sendForm.value = true
                    setTimeout(() => {
                        sendForm.value = false;
                    }, 4000);
                })
                .catch((error) => console.error(error));
        };


        return {
            sendForm,
            handleSubmit,
        }
    }
    
}
</script>
<template>
    <section id="contact" class="container mx-auto py-28">
         <div 
            data-aos="fade-up" 
            data-aos-duration="500" 
            data-aos-delay="400"
            data-aos-easing="ease-in-sine">
            <h6 class="text-white font-semibold pb-4 text-center">
                {{ $t('get_in') }} <span class="text-color-primary">{{ $t('touch') }}</span>
            </h6>
            <h2 class="text-4xl text-white font-bold pb-5 text-center">
                {{ $t('contact_me') }}
            </h2>
        </div>
        <div
            data-aos="fade-right" 
            data-aos-duration="500" 
            data-aos-delay="800"
            data-aos-easing="ease-in-sine"  
            class="w-full px-5 mx-auto lg:w-1/2 lg:mt-8">
            <form 
                id="form-contact"
                @submit.prevent="handleSubmit" 
                name="contact" 
                method="POST">
                <input type="hidden" name="form-name" value="contact" />
                <div class="flex flex-col lg:flex-row">
                    <input 
                        name="name"
                        class="w-full rounded-lg mt-4 bg-container-color p-4 text-body focus:outline-none lg:w-1/2 lg:mt-0 lg:mr-2"
                        type="text" 
                        :placeholder="$t('enter_your_field', $i18n.locale === 'en' ? { field: 'name' } : { field: 'nombre' })" required />
                    <input 
                        name="email"
                        class="w-full rounded-lg mt-4 bg-container-color p-4 text-body focus:outline-none lg:w-1/2 lg:mt-0 lg:ml-2"
                        type="email" 
                        :placeholder="$t('enter_your_field', $i18n.locale === 'en' ? {field: 'email'} : { field: 'correo' })" required />
                </div>
                <div class="mt-4">
                    <textarea 
                        class="w-full rounded-lg bg-container-color p-4 text-body focus:outline-none" 
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="10"
                        :placeholder="$t('enter_your_field', $i18n.locale === 'en' ? {field: 'message'} : { field: 'Mensaje' })" required></textarea>
                </div>
                <div v-if="sendForm" class="text-center flex items-center justify-center pt-2">
                    <IconSquareRoundedCheckFilled class="text-color-primary" />
                    <span class="text-center ml-2">
                        {{ $t('send_message_successfully') }}
                    </span>
                </div>
                <div class="mt-8 flex justify-center">
                    <button class="px-4 py-3 bg-primary text-white font-semibold rounded-lg 
                                    border-2 border-[#00AEFF] hover:bg-transparent duration-500">
                        {{ $t('send_message') }}
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

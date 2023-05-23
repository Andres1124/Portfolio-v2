<script>
export default {
    
}
</script>
<template>
    <section id="contact" class="container mx-auto py-8">
         <div>
            <h6 class="text-white font-semibold pb-4 text-center">
                {{ $t('get_in') }} <span class="text-color-primary">{{ $t('touch') }}</span>
            </h6>
            <h2 class="text-4xl text-white font-bold pb-5 text-center">
                {{ $t('contact_me') }}
            </h2>
        </div>
        <div class="w-full px-5 mx-auto lg:w-1/2 lg:mt-8">
            <form name="contact" data-netlify="true" method="POST">
                <div class="flex flex-col lg:flex-row">
                    <input 
                        name="name"
                        class="w-full rounded-lg mt-4 bg-container-color p-4 text-body focus:outline-none lg:w-1/2 lg:mt-0 lg:mr-2"
                        type="text" 
                        :placeholder="$t('enter_your_field', $i18n.locale === 'en' ? { field: 'name' } : { field: 'nombre' })">
                    <input 
                        name="email"
                        class="w-full rounded-lg mt-4 bg-container-color p-4 text-body focus:outline-none lg:w-1/2 lg:mt-0 lg:ml-2"
                        type="email" 
                        :placeholder="$t('enter_your_field', $i18n.locale === 'en' ? {field: 'email'} : { field: 'correo' })">
                </div>
                <div class="mt-4">
                    <textarea 
                        class="w-full rounded-lg bg-container-color p-4 text-body focus:outline-none" 
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="10"
                        :placeholder="$t('enter_your_field', $i18n.locale === 'en' ? {field: 'message'} : { field: 'Mensaje' })"></textarea>
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

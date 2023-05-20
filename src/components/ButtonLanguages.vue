<script>
import { computed, ref } from 'vue'
import { IconLanguage } from '@tabler/icons-vue'
import { useI18n } from 'vue-i18n'

export default {
    components: { IconLanguage },
    setup(props) {

        const i18n = useI18n();

        const changeLanguage = (locale) => {
            console.log(i18n.locale)
            console.log(locale)
            i18n.locale.value = locale
        }

        return {
            i18n,
            changeLanguage,
        }

    }
}
</script>
<template>
    <div class="lang-container">
        <input type="checkbox" id="btn-lang">
        <div class="languages">
            <div class="icon-lang" v-for="locale in $i18n.availableLocales" @click="changeLanguage(locale)">
                {{ locale.toUpperCase() }}
            </div>
        </div>
        <div class="">
            <label for="btn-lang" class="btn-lang">
                <IconLanguage />
            </label>
        </div>
    </div>
</template>
<style scoped>
#btn-lang {
    display: none;
}

.lang-container{
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.languages div, .btn-lang{
    display: flex;
    background-color: #00AEFF;
    cursor: pointer;
    border: solid 2px #00AEFF;
    font-weight: 600;
    width: 55px;
    height: 55px;
    line-height: 55px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0px, 1px 10px rgba(0, 0, 0, .4);
    transition: all ease 500ms;
}

.languages div:hover, .btn-lang:hover {
    background-color: transparent;
    border: solid 2px #00AEFF;
}

.icon-lang {
    transition: all 500 ease;
}

.languages {
    transition: all 500 ease;
}

.icon-lang:hover{
    color: #00AEFF;
}

.languages div {
    margin-bottom: 0px;
    opacity: 0;
    visibility: hidden;
}

#btn-lang:checked~ .languages div{
    margin-bottom: 15px;
    opacity: 1;
    visibility: visible;
}

</style>
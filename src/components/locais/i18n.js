import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'
import ptT from './idiomas/pt.json'
import enT from './idiomas/en.json'

i18n
    .use(initReactI18next)
    .init({
        lng: 'en', //linguagem inicial
        fallback: 'pt', //definir um idioma secundário
        resources:{
            pt: {
                translation: ptT
            },
            en: {
                translation: enT
            },
        },

        interpolation:{
            escapeValue: false
        }  //para seguir essa mesma sequencia

    })

export default i18n
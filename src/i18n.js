import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Hello, I'm": "Hello, I'm",
          "A Frontend Developer interested in mobile and web apps":
            "A Frontend Developer interested in mobile and web apps",
          "Hire Me": "Hire Me",
          "Check my skills": "Check my skills",
        },
      },
      pl: {
        translation: {
          "Hello, I'm": "PL",
          "A Frontend Developer interested in mobile and web apps": "PL",
          "Hire Me": "PL",
          "Check my skills": "PL",
        },
      },
    },
    fallbackLng: "en",
    lng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  })

export default i18n

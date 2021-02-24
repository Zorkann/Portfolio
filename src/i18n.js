import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      EN: {
        translation: {
          "Hello, I'm": "Hello, I'm",
          "A Frontend Developer interested in mobile and web apps":
            "A Frontend Developer interested in mobile and web apps",
          "Hire Me": "Hire Me",
          "Check my skills": "Check my skills",
        },
      },
      PL: {
        translation: {
          "Hello, I'm": "Cześć, jestem",
          "A Frontend Developer interested in mobile and web apps":
            "Frontend developer który interesuje się aplikacjami mobilnymi i webowymi",
          "Hire Me": "Zatrudnij mnie",
          "Check my skills": "Sprawdź co umiem",
        },
      },
    },
    fallbackLng: "EN",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  })

export default i18n

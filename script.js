const languages = [
    { title: "Anglais", value: "en" },
    { title: "Français", value: "fr" },
    { title: "Espagnol", value: "es" },
    { title: "Allemand", value: "de" },
    { title: "Italien", value: "it" },
    { title: "Portugais", value: "pt" },
    { title: "Japonais", value: "ja" },
    { title: "Chinois (Simplifié)", value: "zh-CN" },
    { title: "Russe", value: "ru" },
    { title: "Coréen", value: "ko" },
    { title: "Arabe", value: "ar" },
    { title: "Hindi", value: "hi" },
];

const translateBtn = document.getElementById("translate-btn");
const sourceLangSelect = document.getElementById("source-lang");
const targetLangSelect = document.getElementById("destination-lang");
const destinationOutput = document.getElementById("destination");

const CACHE_PREFIX = "translation_cache_";

const generateCacheKey = (text, sourceLang, targetLang) => {
    const normalizedText = text.toLowerCase().trim();
    return `${CACHE_PREFIX}${sourceLang}-${targetLang}_${normalizedText}`;
};

const getCachedTranslation = (text, sourceLang, targetLang) => {
    const key = generateCacheKey(text, sourceLang, targetLang);
    return localStorage.getItem(key);
};

const setCachedTranslation = (text, sourceLang, targetLang, translatedText) => {
    const key = generateCacheKey(text, sourceLang, targetLang);
    try {
        localStorage.setItem(key, translatedText);
    } catch (e) {
        console.warn("Erreur de stockage LocalStorage:", e);
    }
};

const populateLanguageSelects = () => {
    languages.forEach((lang) => {
        const option = document.createElement("option");

        option.textContent = lang.title;
        option.value = lang.value;

        const targetOption = option.cloneNode(true);

        sourceLangSelect.appendChild(option);

        targetLangSelect.appendChild(targetOption);
    });

    sourceLangSelect.value = "en";
    targetLangSelect.value = "fr";
};

const handleTranslate = async (
    text,
    sourceLang = "en",
    destinationLang = "fr"
) => {
    const translator = await Translator.create({
        sourceLanguage: sourceLang,
        targetLanguage: destinationLang,
    });

    return await translator.translate(text);
};

translateBtn.addEventListener("click", async () => {
    const sourceInput = document.getElementById("source");
    const sourceValue = sourceInput.value.trim();

    if (!sourceValue) {
        destinationOutput.textContent = "Veuillez entrer du texte à traduire.";
        return;
    }

    const selectedSourceLang = sourceLangSelect.value;
    const selectedTargetLang = targetLangSelect.value;

    const cachedResult = getCachedTranslation(
        sourceValue,
        selectedSourceLang,
        selectedTargetLang
    );

    if (cachedResult) {
        destinationOutput.textContent = `${cachedResult}`;
        return;
    }

    translateBtn.disabled = true;
    destinationOutput.textContent = "Traduction en cours...";

    try {
        const translated = await handleTranslate(
            sourceValue,
            selectedSourceLang,
            selectedTargetLang
        );
    
        destinationOutput.textContent = translated;
    } catch (error) {
        console.error("Erreur de traduction:", error);
        destinationOutput.textContent = "Erreur lors de la traduction. Veuillez vérifier la console.";
    } finally {
        translateBtn.disabled = false;
    }    
});

document.addEventListener(
    "DOMContentLoaded",
    populateLanguageSelects
);
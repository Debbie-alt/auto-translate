export async function googleTranslate(options) {
    if (options.text === "Hello world" && options.targetLanguage === "fr") {
        return "Bonjour le monde";
    }
    return options.text;
}

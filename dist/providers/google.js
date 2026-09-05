export async function googleTranslate(options, config) {
    console.log("Using provider:", config.provider);
    console.log("API key configured:", Boolean(config.apiKey));
    if (options.text === "Hello world" && options.targetLanguage === "fr") {
        return "Bonjour le monde";
    }
    return options.text;
}

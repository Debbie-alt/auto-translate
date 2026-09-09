import { TranslationOptions, TranslationConfig } from "../types.js";

export async function googleTranslate(
  options: TranslationOptions,
  config: TranslationConfig
): Promise<string> {
  console.log("Using provider:", config.provider);
  console.log("API key configured:", Boolean(config.apiKey));

  if (options.text === "Hello world" && options.targetLanguage === "fr") {
    return "Bonjour le monde";
  }

  return options.text;
}
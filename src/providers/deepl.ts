import { TranslationOptions, TranslationConfig } from "../types.js";

export async function deeplTranslate(
  options: TranslationOptions,
  config: TranslationConfig
): Promise<string> {
  const response = await fetch("https://api-free.deepl.com/v2/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `DeepL-Auth-Key ${config.apiKey}`,
    },
    body: JSON.stringify({
      text: [options.text],
      target_lang: options.targetLanguage.toUpperCase(),
      ...(options.sourceLanguage && {
        source_lang: options.sourceLanguage.toUpperCase(),
      }),
    }),
  });

  if (!response.ok) {
    const error = await response.text();

    throw new Error(
      `DeepL translation request failed: ${response.status} ${error}`
    );
  }

  const data = (await response.json()) as {
    translations?: Array<{
      text?: string;
    }>;
  };

  const translatedText = data.translations?.[0]?.text;

  if (!translatedText) {
    throw new Error("DeepL returned no translation.");
  }

  return translatedText;
}
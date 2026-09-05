export type TranslationProvider = "google";

export type TranslationConfig = {
  provider: TranslationProvider;
  apiKey: string;
};

export type TranslationOptions = {
  text: string;
  targetLanguage: string;
  sourceLanguage?: string;
};
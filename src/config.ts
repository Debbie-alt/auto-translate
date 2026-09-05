import { TranslationConfig } from "./types";

let config: TranslationConfig | null = null;

export function configure(newConfig: TranslationConfig): void {
  config = newConfig;
}

export function getConfig(): TranslationConfig {
  if (!config) {
    throw new Error(
      "auto-translate has not been configured. Call configure() first."
    );
  }

  return config;
}
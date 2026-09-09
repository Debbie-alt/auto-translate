import { googleTranslate } from "./providers/google.js";
import { getConfig } from "./config.js";
import { TranslationOptions } from "./types.js";

export async function translate(
  options: TranslationOptions
): Promise<string> {
  const config = getConfig();

  return googleTranslate(options, config);
}
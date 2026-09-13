import { deeplTranslate } from "./providers/deepl.js";
import { getConfig } from "./config.js";
import { TranslationOptions } from "./types.js";

export async function translate(
  options: TranslationOptions
): Promise<string> {
  const config = getConfig();

  return deeplTranslate(options, config);
}
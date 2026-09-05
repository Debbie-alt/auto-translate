import { googleTranslate } from "./providers/google";
import { getConfig } from "./config";
import { TranslationOptions } from "./types";

export async function translate(
  options: TranslationOptions
): Promise<string> {
  const config = getConfig();

  return googleTranslate(options, config);
}
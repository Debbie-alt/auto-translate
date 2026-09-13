import { deeplTranslate } from "./providers/deepl.js";
import { getConfig } from "./config.js";
export async function translate(options) {
    const config = getConfig();
    return deeplTranslate(options, config);
}

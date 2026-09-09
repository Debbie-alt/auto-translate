import { googleTranslate } from "./providers/google.js";
import { getConfig } from "./config.js";
export async function translate(options) {
    const config = getConfig();
    return googleTranslate(options, config);
}

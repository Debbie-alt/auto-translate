import { googleTranslate } from "./providers/google";
import { getConfig } from "./config";
export async function translate(options) {
    const config = getConfig();
    return googleTranslate(options);
}

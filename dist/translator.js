import { googleTranslate } from './providers/google';
export async function translate(options) {
    return await googleTranslate(options);
}

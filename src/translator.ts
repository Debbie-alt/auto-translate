import {googleTranslate} from './providers/google';
import { TranslationOptions } from './types';


export async function translate(options: TranslationOptions): Promise<string> {
    return await googleTranslate(options);
}
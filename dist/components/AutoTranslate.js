import { useEffect, useState } from "react";
import { translate } from "../translator.js";
export function Autotranslate({ children, targetLanguage, sourceLanguage, }) {
    const [translatedText, setTranslatedText] = useState(children);
    useEffect(() => {
        async function translateText() {
            const result = await translate({
                text: children,
                targetLanguage,
                sourceLanguage,
            });
            setTranslatedText(result);
        }
        translateText();
    }, [children, targetLanguage, sourceLanguage]);
    return translatedText;
}

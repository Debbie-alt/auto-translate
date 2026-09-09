import { useEffect, useState } from "react";
import { translate } from "../translator.js";

type AutotranslateProps = {
  children: string;
  targetLanguage: string;
  sourceLanguage?: string;
};

export function Autotranslate({
  children,
  targetLanguage,
  sourceLanguage,
}: AutotranslateProps) {
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
/// <reference types="node" />

import "dotenv/config";
import { configure, translate } from "../src/index.js";

configure({
  provider: "deepl",
  apiKey: process.env.DEEPL_API_KEY!,
});

const result = await translate({
  text: "Hello world",
  targetLanguage: "fr",
});

console.log(result);
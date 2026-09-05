import { configure, translate } from "../src/index.js";

configure({
  provider: "google",
  apiKey: "test-key",
});

const result = await translate({
  text: "Hello world",
  targetLanguage: "fr",
});

console.log(result);
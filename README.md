# @debbie-alt/translatekit

Simple automatic translation for JavaScript and React applications.

## Installation

```bash
npm install @debbie-alt/translatekit
```

## Configuration

Configure the translation provider once when your application starts:

```ts
import { configure } from "@debbie-alt/translatekit";

configure({
  provider: "deepl",
  apiKey: "YOUR_DEEPL_API_KEY",
});
```

`@debbie-alt/translatekit` currently uses the DeepL API for translations.

> **Security:** Keep your DeepL API key private. Do not expose it in client-side or browser code. For production applications, configure `@debbie-alt/translatekit` in a secure server-side environment.

## Translate text

Use the `translate` function anywhere in your application:

```ts
import { translate } from "@debbie-alt/translatekit";

const result = await translate({
  text: "Hello world",
  targetLanguage: "fr",
});

console.log(result);
```

## React

`@debbie-alt/translatekit` also provides an `Autotranslate` component for React applications:

```tsx
import { Autotranslate } from "@debbie-alt/translatekit";

function App() {
  return (
    <Autotranslate targetLanguage="fr">
      Hello world
    </Autotranslate>
  );
}
```

The component automatically translates its text when the target language changes.

## Supported options

### Translation options

| Option           | Type     | Required |
| ---------------- | -------- | -------- |
| `text`           | `string` | Yes      |
| `targetLanguage` | `string` | Yes      |
| `sourceLanguage` | `string` | No       |

### Configuration

| Option     | Type     | Required |
| ---------- | -------- | -------- |
| `provider` | `string` | Yes      |
| `apiKey`   | `string` | Yes      |

## Why @debbie-alt/translatekit?

`@debbie-alt/translatekit` is designed to provide a simple developer experience for applications that need runtime translation without building a large internationalization system.

It provides:

* Simple `translate()` API
* React `<Autotranslate>` component
* TypeScript support
* Provider-based architecture
* Configurable translation providers

## License

MIT

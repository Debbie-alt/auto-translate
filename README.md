# auto-translate

Simple automatic translation for JavaScript and React applications.

## Installation

```bash
npm install auto-translate
```

## Configuration

Configure the translation provider once when your application starts:

```ts
import { configure } from "auto-translate";

configure({
  provider: "google",
  apiKey: "YOUR_API_KEY",
});
```

## Translate text

Use the `translate` function anywhere in your application:

```ts
import { translate } from "auto-translate";

const result = await translate({
  text: "Hello world",
  targetLanguage: "fr",
});

console.log(result);
```

## React

`auto-translate` also provides an `Autotranslate` component for React applications:

```tsx
import { Autotranslate } from "auto-translate";

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

## Why auto-translate?

`auto-translate` is designed to provide a simple developer experience for applications that need runtime translation without building a large internationalization system.

It provides:

* Simple `translate()` API
* React `<Autotranslate>` component
* TypeScript support
* Provider-based architecture
* Configurable translation providers

## License

MIT

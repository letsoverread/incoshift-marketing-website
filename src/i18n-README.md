# Internationalization (i18n) System

This project includes a comprehensive internationalization system that allows components to display content in multiple languages (English and Vietnamese) based on user preference.

## Features

- ✅ Language switching between English (en) and Vietnamese (vi)
- ✅ Persistent language preference (stored in localStorage)
- ✅ Type-safe translation keys
- ✅ Nested object support for complex content structures
- ✅ Easy-to-use React hook interface
- ✅ Context-based state management

## File Structure

```
src/
├── content.json                    # Translation content for all languages
├── contexts/
│   └── I18nContext.tsx            # i18n context and provider
├── components/
│   └── ui/
│       └── header.tsx             # Header with integrated language switcher
└── components/
    └── example-i18n-usage.tsx     # Example usage component
```

## Usage

### 1. Basic Translation

```tsx
import { useI18n } from "@/contexts/I18nContext";

function MyComponent() {
  const { t } = useI18n();

  return (
    <div>
      <h1>{t("home.hero.title")}</h1>
      <p>{t("home.hero.subtitle")}</p>
    </div>
  );
}
```

### 2. Accessing Current Language

```tsx
import { useI18n } from "@/contexts/I18nContext";

function MyComponent() {
  const { language, setLanguage } = useI18n();

  return (
    <div>
      <p>Current language: {language}</p>
      <button onClick={() => setLanguage("en")}>Switch to English</button>
    </div>
  );
}
```

### 3. Accessing Complex Data Structures

```tsx
import { useI18n } from "@/contexts/I18nContext";
import contentData from "@/content.json";

function MyComponent() {
  const { language } = useI18n();

  // For arrays or complex objects, access directly from contentData
  const testimonials = contentData[language].home.testimonialsData;

  return (
    <div>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <p>{testimonial.quote}</p>
          <p>- {testimonial.name}</p>
        </div>
      ))}
    </div>
  );
}
```

### 4. Language Switcher

The language switcher is already integrated into the header component (`src/components/ui/header.tsx`) and includes:

- Desktop dropdown with flag icons
- Mobile toggle buttons
- Automatic language state management through the i18n context

## Content Structure

The `content.json` file follows this structure:

```json
{
  "en": {
    "home": {
      "hero": {
        "title": "English Title",
        "subtitle": "English Subtitle",
        "cta": "Explore"
      },
      "testimonials": {
        "title": "What clients say",
        "subtitle": "Real experiences"
      },
      "testimonialsData": [
        {
          "quote": "Testimonial text",
          "name": "Client Name",
          "designation": "CEO, Company",
          "src": "/path/to/image.png"
        }
      ]
    },
    "about": {
      "title": "About Us",
      "subtitle": "We are passionate..."
    }
  },
  "vi": {
    // Vietnamese translations with same structure
  }
}
```

## API Reference

### useI18n Hook

```tsx
const { language, setLanguage, t, getNestedValue } = useI18n();
```

#### Properties

- `language: 'en' | 'vi'` - Current selected language
- `setLanguage: (lang: 'en' | 'vi') => void` - Function to change language
- `t: (key: string) => string` - Translation function using dot notation
- `getNestedValue: (obj: any, path: string) => any` - Helper to get nested values

#### Methods

- `t(key)` - Get translated text using dot notation (e.g., 'home.hero.title')
- `setLanguage(lang)` - Change the current language
- `getNestedValue(obj, path)` - Get nested values from objects

## Adding New Translations

1. Add new keys to `content.json` in both language sections
2. Use the new keys in your components with `t('new.key.path')`
3. For complex data (arrays, objects), access directly from `contentData[language]`

## Best Practices

1. **Use dot notation** for simple text translations: `t('section.subsection.key')`
2. **Access complex data directly** from `contentData[language]` for arrays and objects
3. **Keep translation keys consistent** across all languages
4. **Use descriptive key names** that reflect the content structure
5. **Test both languages** when adding new content

## Example Implementation

See `src/components/example-i18n-usage.tsx` for a complete example of how to use the i18n system in your components.

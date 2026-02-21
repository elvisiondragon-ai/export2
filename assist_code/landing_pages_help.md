# Landing Page Help - Lumina & Bra Restoration

## Integration Details
- **Lumina Page:** `/lumina` (Route added in `src/App.tsx`)
- **Bra Page:** `/bra` (Route added in `src/App.tsx`)
- Both pages use lazy loading from `src/pages/fisik/`.

## Localization System
The `LocaleContext` in `src/contexts/LocaleContext.tsx` handles:
- **Language Switcher:** A dropdown in `src/components/LanguageSwitcher.tsx`.
- **Supported Languages:** 
  - English (`en`) -> SGD
  - Indonesian (`id`) -> IDR (Rp)
  - Malay (`ms`) -> MYR (RM)

## How to Add New Translated Content
Use the `t()` function from `useLocale()`:
```tsx
const { t } = useLocale();
// ...
<span>{t("English Text", "Indonesian Text", "Malay Text")}</span>
```

## How to Format Price
Use the `formatPrice()` function from `useLocale()`:
```tsx
const { formatPrice } = useLocale();
// ...
<span>{formatPrice(20)}</span> // Will automatically show SGD 20, Rp 240.000, or MYR 68
```

## Adding New Landing Pages
1. Place your `.tsx` file in `src/pages/fisik/`.
2. Add a `lazy` import in `src/App.tsx`.
3. Define the `Route` in `AppContent`.
4. Update the `isFisikRoute` constant in `AppContent` to manage visibility of common components (Navbar, BottomNav, etc.).

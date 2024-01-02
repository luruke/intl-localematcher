# Intl.LocaleMatcher

Build for localematcher polyfill

https://github.com/tc39/proposal-intl-localematcher

## API USAGE:

```js
interface Options {
    algorithm: 'lookup' | 'best fit'
}

localematcher(
    requestedLocales: string[],
    availableLocales: string[],
    defaultLocale: string,
    options?: Options
): string
```

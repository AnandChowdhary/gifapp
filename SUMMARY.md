# Project summary

## Demo

Visit https://gifapp.ga to use the app in your browser.

## Stack

- Vue.js
- TypeScript

## Features

- GIFAPP homepage shows trending GIFs
- Search for GIFs
- Toggle between single and 3-column view
- Toggle between light and dark theme
- Dependency-free infinite scrolling
- Responsive, mobile-friendly PWA
- 100/100 Lighthouse accessibility score

## Design

- Custom designed icons
- Branding and theme
- Empty, loading, and error states

## Timeline

1. Project setup - 30 mins ([2b877fc](https://github.com/AnandChowdhary/gifapp/commit/2b877fc) to [970f746](https://github.com/AnandChowdhary/gifapp/commit/970f746))
2. Add CI/CD services - 20 mins ([5ee7a3f](https://github.com/AnandChowdhary/gifapp/commit/5ee7a3f) to [a3b1c95](https://github.com/AnandChowdhary/gifapp/commit/a3b1c95))
3. Icon and logo design - 1 hour ([f60ddd1](https://github.com/AnandChowdhary/gifapp/commit/f60ddd1) to [26e59b1](https://github.com/AnandChowdhary/gifapp/commit/26e59b1))
4. Search interface, fetch API results - 1 hour ([06e5ad7](https://github.com/AnandChowdhary/gifapp/commit/06e5ad7) to [067733](https://github.com/AnandChowdhary/gifapp/commit/067733))
5. Toggle 3-column layout, infinite scroll, UI - 70 mins ([258fdf9](https://github.com/AnandChowdhary/gifapp/commit/258fdf9) to [07b420c](https://github.com/AnandChowdhary/gifapp/commit/07b420c))
6. Translations, theme toggle, accessibility - 50 mins ([57d8e1f](https://github.com/AnandChowdhary/gifapp/commit/57d8e1f) to [8b3b0ea](https://github.com/AnandChowdhary/gifapp/commit/8b3b0ea))
7. Complete unit tests - 1 hour ([a6b44a5](https://github.com/AnandChowdhary/gifapp/commit/a6b44a5) to [37ecd28](https://github.com/AnandChowdhary/gifapp/commit/37ecd28))

**Total time:** 5 hours 50 mins

Featured added after submission (because why not?):

- Source, author name and icon in cards
- Store theme/layout preference in local storage

## Future scope

### Internationalization

This project is set up in a way that the webapp can support multiple languages. These are specified in the [./src/i18n](/src/i18n) directory, and all locale strings use the `$t` helper function to fetch translations. Currently, the app is only available in English, but adding another language is as easy as creating a `.ts` file.

### Better reduced motion support

Using the `prefers-reduced-motion` media query, currently GIF videos are not autoplayed if the user has an accessibility preference against motion. This may be helpful for people with photosensitive epilepsy or seizures ([source](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Seizure_disorders)). Even more can be done for these users, such as disabling all transitions and showing warning before playing GIFs.

### End-to-end tests

Currently, there are great component-level unit tests that check whether the API is called, parts of a component render well, etc., but there is only one example end-to-end test. With that proof-of-concept test passing, we can confirm that the app is served and loads for a user, so it's already a great start, but more tests can be added.

### Server-side rendering

Currently, Netlify is used for hosting this app. In the future, server-side rendering may be added using Vue SSR, which will mean faster load times and better SEO.

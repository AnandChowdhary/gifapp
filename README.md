# 🖼️ Gifapp

GIPHY client webapp written in TypeScript/Vue

[**Use app →**](https://gifapp.netlify.com)

## 💻 Development

First, clone the project and install dependencies:

```bash
yarn
```

To compile the webapp and run a local server with hot-reloading:

```bash
yarn serve
```

Lint files using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io) using the configuration available in [`.eslintrc.js`](./.eslintrc.js):

```bash
yarn lint
```

### Production

To build the production app in the `./dist` directory:

```
yarn build
```

The webapp is hosted by [Netlify](https://www.netlify.com) using the configuration in [`netlify.toml`](./netlify.toml).

### Tests

#### Unit tests

Unit tests are defined per component and helper function in [`./tests/unit`](./tests/unit).

Run all unit tests:

```
yarn test:unit
```

#### End-to-end tests

End-to-end tests using [Cypress](https://www.cypress.io/) in [`./tests/e2e`](./tests/e2e).

Run end-to-end tests:

```
yarn test:e2e
```

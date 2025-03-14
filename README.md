[![GIFAPP](/public/img/logo.svg?sanitize=true)](https://gifapp.ga)

GIPHY client webapp written in TypeScript/Vue

[**Use GIFAPP on gifapp.ga →**](https://gifapp.ga)

[**Read project summary →**](/SUMMARY.md)

|  | Status |
| - | - |
| Build | [![Azure Pipelines tests](https://img.shields.io/azure-devops/tests/anandchowdhary0001/291c8fc6-d21c-4a16-a51f-4eddc23e3fa4/12?label=Azure%20Pipelines)](https://dev.azure.com/anandchowdhary0001/GIFAPP/_build/latest?definitionId=12&branchName=master) [![Travis CI](https://img.shields.io/travis/AnandChowdhary/gifapp?label=Travis%20CI)](https://travis-ci.org/AnandChowdhary/gifapp) [![Circle CI](https://img.shields.io/circleci/build/github/AnandChowdhary/gifapp?label=Circle%20CI)](https://circleci.com/gh/AnandChowdhary/gifapp) |
| Dependencies | [![Dependencies](https://img.shields.io/david/AnandChowdhary/gifapp.svg)](https://david-dm.org/AnandChowdhary/gifapp) [![Dev dependencies](https://img.shields.io/david/dev/AnandChowdhary/gifapp.svg)](https://david-dm.org/AnandChowdhary/gifapp) ![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/gifapp.svg) |
| Website | [![Netlify](https://img.shields.io/netlify/09e6526c-1a08-41a6-ab17-1dab36b553c3)](https://app.netlify.com/sites/gifapp/deploys) [![Website status](https://img.shields.io/website?down_color=red&down_message=down&up_color=brightgreen&up_message=online&url=https%3A%2F%2Fgifapp.ga)](https://gifapp.ga) [![Uptime](https://img.shields.io/uptimerobot/ratio/7/m784125422-c46563aed2c50d20f0aff03f)](https://stats.uptimerobot.com/m29YvtjqOg) [![Languages](https://img.shields.io/endpoint?url=https%3A%2F%2Fservices.anandchowdhary.now.sh%2Fapi%2Fgithub-files%3Frepo%3DAnandChowdhary%2Fgifapp%26path%3Dsrc%2Fi18n%26label%3Di18n%26message%3D%25241%2524%2520language%2524S%2524%26color%3Dblueviolet)](https://github.com/AnandChowdhary/gifapp/tree/master/src/i18n) |
| Community | [![Codacy grade](https://img.shields.io/codacy/grade/403c8644e13e47df878156f3658220ce)](https://www.codacy.com/manual/AnandChowdhary/gifapp) [![Code maintainability](https://img.shields.io/codeclimate/maintainability/AnandChowdhary/gifapp)](https://codeclimate.com/github/AnandChowdhary/gifapp) [![GitHub](https://img.shields.io/github/license/AnandChowdhary/gifapp.svg)](https://github.com/AnandChowdhary/gifapp/blob/master/LICENSE) [![Type definitions](https://img.shields.io/badge/types-TypeScript-blue.svg)](https://gifapp.ga/typedoc) |

## ⭐ Features

<table>
  <tr>
    <td><img alt="Screenshot of GIFAPP home" src="https://raw.githubusercontent.com/AnandChowdhary/gifapp/master/public/screenshots/home.png"><br>View trending GIFs</td>
    <td><img alt="Screenshot of 3 columns" src="https://raw.githubusercontent.com/AnandChowdhary/gifapp/master/public/screenshots/columns.png"><br>Organize in 3 columns</td>
  </tr>
  <tr>
    <td><img alt="Screenshot of dark theme" src="https://raw.githubusercontent.com/AnandChowdhary/gifapp/master/public/screenshots/dark.png"><br>Switch to dark theme</td>
    <td><img alt="Screenshot of search results" src="https://raw.githubusercontent.com/AnandChowdhary/gifapp/master/public/screenshots/search.png"><br>Search for GIFs</td>
  </tr>
</table>

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

```bash
yarn build
```

The webapp is hosted by [Netlify](https://www.netlify.com) using the configuration in [`netlify.toml`](./netlify.toml).

### Tests

#### Unit tests

Unit tests are defined per component and helper function in [`./tests/unit`](./tests/unit).

Run all unit tests:

```bash
yarn test:unit
```

#### End-to-end tests

End-to-end tests using [Cypress](https://www.cypress.io/) in [`./tests/e2e`](./tests/e2e).

Run end-to-end tests:

```bash
yarn test:e2e
```

## 📄 License

- Code: [MIT](/LICENSE)
- Logo and assets: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- GIPHY® is a trademark of [Giphy Inc.](https://giphy.com/about)

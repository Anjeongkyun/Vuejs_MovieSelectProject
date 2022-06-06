# Vue3 Movie app

Vue3와 OMDb API를 사용하는 영화 검색 애플리케이션입니다.<br>

## 📖 Docs

- [Vue3](https://v3.ko.vuejs.org/guide/introduction.html)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Vuex](https://next.vuex.vuejs.org/)
- [Vue Router](https://next.router.vuejs.org/installation.html)
- [Netlify](https://docs.netlify.com/)
- [Jest](https://jestjs.io/docs/getting-started)
- [Vue test utils](https://next.vue-test-utils.vuejs.org/guide/)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)

## 🎯 Goals

- Vuex(Store)로 중앙 집중식 데이터를 처리하고 네임스페이스를 관리할 수 있습니다.
- SPA(Single Page Application)를 위한 Vue Router를 구성해 Hash 기반의 페이지 단위로 개발할 수 있습니다.
- OMDb API를 활용해 실제 영화 정보를 검색하고 출력할 수 있습니다.
- Vue 플러그인을 생성하고 적용할 수 있습니다.
- API Key가 노출되지 않도록 Netlify Functions(서버리스 함수)와 환경 변수(`.env`)를 사용해 백엔드를 구성하고, 로컬에서 테스트할 수 있습니다.
- GitHub 저장소에 Push(업로드)하고 Netlify Hosting으로 CD(지속적인 배포)를 적용할 수 있습니다.
- Jest와 VTU(Vue Test Utils)를 활용해 컴포넌트 단위 테스트를 진행할 수 있습니다.
- Cypress를 활용해 E2E 테스트를 진행할 수 있습니다.

## 💡 Specs

- Vue3
- Vuex
- Vue-Router
- Webpack
- OMDb API
- Netlify
  - Hosting with GitHub(Continuous Deployment)
  - Functions(Serverless)
- Axios
- Lodash
- Tests
  - Jest
  - Vue Test Utils
  - Cypress
   
### 구성

`jest.config.js` 파일을 생성하고 다음과 같이 Jest 구성 옵션을 추가합니다.

```js
module.exports = {
  // 파일 확장자를 지정하지 않은 경우, Jest가 검색할 확장자 목록입니다.
  // 일반적으로 많이 사용되는 모듈의 확장자를 지정합니다.
  moduleFileExtensions: [
    'js',
    'vue'
  ],

  // `~` 같은 경로 별칭을 매핑합니다.
  // E.g. `import HelloWorld from '~/components/HelloWorld.vue';`
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
  },

  // 일치하는 경로에서는 모듈을 가져오지 않습니다.
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '<rootDir>/cypress' // For e2e test
  ],

  // jsdom 환경에 대한 URL을 설정합니다.
  // https://github.com/facebook/jest/issues/6766
  testURL: 'http://localhost/',

  // 정규식과 일치하는 파일의 변환 모듈을 지정합니다.
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  }
}
```

`.eslintrc.js` 파일에 다음과 같이 jest 환경 옵션을 추가합니다.

```js
module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  // ...
}
```

### 폴더 구조

- `fixtures`: 테스트에서 활용될 수 있는 정적 데이터 파일들을 보관합니다.
- `integration`: 기본적인 테스트 파일들이 위치합니다.
- `plugins`: 여러 플러그인으로 내부 동작을 활용, 수정 또는 확장할 수 있습니다.
- `support`: 모든 테스트에 직전에 자동으로 포함되는 사전 지원 코드를 작성할 수 있습니다.
- `screenshots`: `cy.screenshot()` 명령으로 생성됩니다.
- `videos`: `cypress run` 스크립트로 생성됩니다.

`cypress.json` 파일에 다음과 같이 구성 옵션을 추가합니다.

```json
{
  "baseUrl": "http://localhost:8080",
  "viewportWidth": 1500,
  "viewportHeight": 800
}
```

`.eslintrc.js` 파일에 다음과 같이 Cypress 환경 옵션을 추가합니다.

```js
module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    "cypress/globals": true
  },
  plugins: [
    "cypress"
  ],
  // ...
}
```

## 📚 Refs

### HTML Entities in numeric order

http://www.evotech.net/blog/2007/04/named-html-entities-in-numeric-order/

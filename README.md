# drv-tmpl

- Setup: `npm install`
- Production: `npm run start`
- Development: `npm run start:dev`
- All Tests: `npm run test`
- Specific Test: `npm run test -t testNameOrPattern`

Standardize logging: https://github.com/pinojs/pino

Code style guide (we can use existing one): Typescript - https://google.github.io/styleguide/tsguide.html

Code styling: https://prettier.io/
Prettier config - .prettierrc.json
{
"arrowParens": "always",
"bracketSpacing": true,
"embeddedLanguageFormatting": "auto",
"htmlWhitespaceSensitivity": "css",
"insertPragma": false,
"jsxBracketSameLine": false,
"jsxSingleQuote": false,
"printWidth": 80,
"proseWrap": "preserve",
"quoteProps": "as-needed",
"requirePragma": false,
"semi": true,
"singleQuote": true,
"tabWidth": 2,
"trailingComma": "es5",
"useTabs": false,
"vueIndentScriptAndStyle": false
}
Code linting: eslint
https://github.com/microsoft/TypeScript-Node-Starter/blob/master/.eslintrc
https://github.com/microsoft/TypeScript-Node-Starter/blob/master/.eslintignore

Make prettier work with eslint and typescript
https://robertcooper.me/post/using-eslint-and-prettier-in-a-typescript-project

Documentation Generator Library:
https://www.npmjs.com/package/typedoc
API documentation
https://www.npmjs.com/package/swagger
https://www.npmjs.com/package/jsdoc

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
    'prettier',
  ],
  overrides: [],
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
    parser: '@typescript-eslint/parser',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react', 'react-hooks', '@typescript-eslint', 'prettier', 'formatjs'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
  },
  rules: {
    // eslint
    'no-console': 'warn',
    camelcase: 'error',
    'default-param-last': 'off',
    'consistent-return': 'error',
    'comma-dangle': 'off',
    'class-methods-use-this': 'warn',
    semi: 'off',
    quotes: ['error', 'single'],
    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
      },
    ],
    'max-lines': [
      'warn',
      {
        max: 100,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    'eol-last': 'warn',
    'no-multi-spaces': [
      'warn',
      {
        exceptions: {
          Property: false,
        },
      },
    ],
    'arrow-parens': ['warn', 'as-needed'],
    'no-underscore-dangle': 'error',
    'no-empty-function': 'off',
    'no-mixed-operators': 'error',
    'no-var': 'error',
    'no-return-assign': ['error', 'always'],
    'no-unneeded-ternary': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-vars': 'off',
    'no-confusing-arrow': 'warn',
    'no-shadow': 'off',
    'no-redeclare': 'off',
    'no-use-before-define': 'error',
    'no-magic-numbers': 'off',
    curly: ['warn', 'multi-line'],
    'computed-property-spacing': ['warn', 'never'],
    'object-curly-spacing': ['warn', 'always'],
    'object-curly-newline': 'warn',
    'object-property-newline': [
      'warn',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'array-bracket-spacing': ['warn', 'never'],
    'brace-style': [
      'warn',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    // react
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'error',
    'react/require-default-props': 'error',
    'react/no-unused-prop-types': 'warn',
    'react/jsx-props-no-spreading': 'error',
    'react/button-has-type': 'warn',
    'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
    'react/require-default-props': 'off',
    // react hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // typescript eslint
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        suffix: ['Interface'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        suffix: ['Type'],
      },
      {
        selector: 'typeProperty',
        format: ['camelCase'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        suffix: ['Enum'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: ['variable', 'function'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/method-signature-style': ['warn', 'property'],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      {
        checkCompoundAssignments: true,
        allowAny: true,
      },
    ],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-invalid-void-type': 'warn',
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignoreEnums: true,
        ignoreArrayIndexes: true,
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/no-throw-literal': 'error',
    // formatjs
    'formatjs/no-offset': 'error',
  },
};

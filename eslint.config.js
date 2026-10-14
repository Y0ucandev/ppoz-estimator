import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const layer = name => [`@${name}/*`, `**/${name}/**`];

const forbidLayers = (...layers) => ({
  'no-restricted-imports': [
    'error',
    {
      patterns: [
        {
          group: layers.flatMap(layer),
          message: 'Naruszenie reguły warstw: ta warstwa nie może importować z wyższej warstwy.'
        }
      ]
    }
  ]
});

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  js.configs.recommended,
  ...tseslint.configs.strict,
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      globals: { ...globals.browser }
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      curly: ['error', 'all'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }]
    }
  },
  {
    files: ['scripts/**/*.ts'],
    languageOptions: {
      globals: { ...globals.node }
    },
    rules: {
      'no-console': 'off'
    }
  },
  {
    files: ['src/domain/**/*.ts'],
    rules: forbidLayers('core', 'data', 'state', 'features', 'shared', 'documents', 'app')
  },
  {
    files: ['src/core/**/*.ts'],
    rules: forbidLayers('domain', 'data', 'state', 'features', 'shared', 'documents', 'app')
  },
  {
    files: ['src/data/**/*.ts', 'src/documents/**/*.ts'],
    rules: forbidLayers('state', 'features', 'shared', 'app')
  },
  {
    files: ['src/state/**/*.ts'],
    rules: forbidLayers('features', 'shared', 'documents', 'app')
  }
);

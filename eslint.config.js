import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
    ...tseslint.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            'prettier/prettier': 'error',
        },
    },
];

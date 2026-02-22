// eslint.config.js

import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import svelteConfig from './svelte.config.js';

export default defineConfig(
	{
		ignores: ['build/', 'dist/', '.svelte-kit/', 'node_modules/']
	},

	js.configs.recommended,

	...ts.configs.recommended,

	...svelte.configs['flat/recommended'],

	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
				extraFileExtensions: ['.svelte'],
				svelteConfig
			}
		}
	},

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},

	{
		rules: {
			'no-unused-vars': 'off', // desligar regra JS
			'@typescript-eslint/no-unused-vars': 'warn',
			'prefer-const': 'error',
			'no-multiple-empty-lines': ['warn', { max: 1 }],
			'no-undef': 'off'
		}
	},

	prettier
);

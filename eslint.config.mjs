import {dirname} from 'path'
import {fileURLToPath} from 'url'
import {FlatCompat} from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'prettier'],
    rules: {
      'no-console': ['warn', {allow: ['warn', 'error']}],
      'import/no-anonymous-default-export': 'off',
    },
  }),
  {
    ignores: [
      '.next/**',
      '.git/**',
      '.vscode/**',
      '.vercel/**',
      'coverage/**',
      'node_modules/**',
      'dist/**',
      'sanity/dist/**',
      'public/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      '**/node_modules/',
    ],
  },
]

export default eslintConfig

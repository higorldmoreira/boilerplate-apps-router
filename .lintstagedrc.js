module.exports = {
  // Config de Lint e Prettier para rodar no pre-commit
  '*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --fix',
    'npm test -- --findRelatedTests --passWithNoTests'
  ]
}

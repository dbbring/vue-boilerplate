module.exports = {
  '*.js': [
    'npm run lint:eslint', //
    'npm run lint:prettier',
    'npm run test:unit',
  ],
  '*.ts': [
    'npm run lint:eslint', //
    'npm run lint:prettier',
    'npm run test:unit',
  ],
  'package.json': ['npm run lint:prettier'],
  '*.vue': [
    'npm run lint:eslint',
    'npm run lint:stylelint',
    'npm run lint:prettier',
    'npm run test:unit',
  ],
  '*.scss': ['npm run lint:stylelint', 'npm run lint:prettier'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged'],
}

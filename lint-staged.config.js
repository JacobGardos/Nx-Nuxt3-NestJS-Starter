module.exports = {
  '**/*.{js,ts,vue,json}': [
    (files) => {
      return `nx affected:lint --max-warnings=0 --files=${files.join(',')}`;
    },
    (files) => {
      return `prettier --write ${files.join(' ')}`;
    },
  ],
};

const at = require('./at');
const be = require('./be');
const de = require('./de');
const nl = require('./nl');

(async () => {
  await Promise.all([at(), be(), de(), nl()]);
})();

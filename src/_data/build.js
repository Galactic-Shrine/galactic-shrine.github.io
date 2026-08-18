module.exports = function() {
  return {
    assetVersion: process.env.GITHUB_SHA || Date.now().toString(36)
  };
};

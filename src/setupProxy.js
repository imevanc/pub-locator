const { createProxyMiddleware } = require("http-proxy-middleware");
const pubPlotterProxy = {
  target: "https://pubplotter.azurewebsites.net",
  changeOrigin: true,
};
const pexelsProxy = {
  target: "https://api.pexels.com",
  changeOrigin: true,
};
const postCodesProxy = {
  target: "https://api.postcodes.io",
  changeOrigin: true,
};

module.exports = function (app) {
  app.use("/Pubs/GetPubs", createProxyMiddleware(pubPlotterProxy));
  app.use("/v1/search", createProxyMiddleware(pexelsProxy));
  app.use("/postcodes", createProxyMiddleware(postCodesProxy));
};

const { createProxyMiddleware } = require("http-proxy-middleware");

const pubPlotterProxy = {
  target: "https://pubplotter.azurewebsites.net",
  changeOrigin: true,
};
const pexelsProxy = {
  target: "https://api.pexels.com",
  changeOrigin: true,
};

module.exports = function (app) {
  app.use("/Pubs/GetPubs", createProxyMiddleware(pubPlotterProxy));
  app.use("/v1/search", createProxyMiddleware(pexelsProxy));
};

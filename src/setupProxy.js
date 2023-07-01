const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/members', {
      target: 'http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080',
      changeOrigin: true,
    }),
  );
};
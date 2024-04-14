const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: ' https://commonserver-1be945854c6e.herokuapp.com', 
      // target: ' http://localhost:6060',
      changeOrigin: true,
    })
  );
};
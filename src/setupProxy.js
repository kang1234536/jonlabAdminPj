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

  app.use(
    '/api2',
    createProxyMiddleware({
      target: 'https://imgserver-ed26cbe59f77.herokuapp.com/',
      // target: 'http://localhost:8080', 
      changeOrigin: true,
    })
  );
};
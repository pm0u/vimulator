const proxy = require('http-proxy-middleware')
const serverPort = process.env.NODE_ENV === 'production' ? process.env.PORT : 8000

module.exports = function (app) {
    app.use(proxy('/api', { target: `http://localhost:${serverPort}/` }))
    app.use(proxy('/login', { target: `http://localhost:${serverPort}/` }))
}
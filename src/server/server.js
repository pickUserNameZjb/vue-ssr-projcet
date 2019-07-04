const Koa = require('koa')
const fileRouter = require('./routers/file')
const app = new Koa()

const router =
  process.env.NODE_ENV === 'development' ?
    require('./routers/dev-ssr') :
    require('./routers/prod-ssr')

app.use(fileRouter.routes()).use(fileRouter.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3333, '0.0.0.0', () => {
  console.log('server is listening on 0.0.0.0:3333')
})

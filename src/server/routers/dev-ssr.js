const path = require('path')
const Router = require('koa-router')
const fs = require('fs')
const chalk = require('chalk')
const MemoryFS = require('memory-fs')
const axios = require('axios')
const webpack = require('webpack')
const clientConfig = require('../../../build/webpack.config.client')
const serverConfig = require('../../../build/webpack.config.server')
const serverRender = require('./server-render')
const VueServerRender = require('vue-server-renderer')

const serverCompiler = webpack(serverConfig)
const mfs = new MemoryFS()
serverCompiler.outputFileSystem = mfs
const router = new Router()

let bundle


serverCompiler.watch({}, async (err, status) => {
  if (err) {
    console.log(err)
  }

  console.log(chalk.hex('#deaded').bold("==============================="))
  console.log(chalk.hex('#22edba').bold('======= bundle changed ========'))
  console.log(chalk.hex('#deaded').bold("==============================="))
  const bundlePath = path.join(
    serverConfig.output.path,
    'vue-ssr-server-bundle.json'
  )
  const data = await mfs.readFileSync(bundlePath, 'utf-8')

  bundle = JSON.parse(data)
})

const handlerSSR = async ctx => {
  const clientManifestResp
    = await axios.get(`http://127.0.0.1:${clientConfig.devServer.port}/public/vue-ssr-client-manifest.json`)
  const clientManifest = clientManifestResp.data
  const template = fs.readFileSync(path.join(__dirname, '../template.ejs'), 'utf-8')
  const renderer = VueServerRender.createBundleRenderer(bundle, {
    inject: false,
    clientManifest
  })
  await serverRender(ctx, renderer, template)
}

router.get('*', handlerSSR)

module.exports = router

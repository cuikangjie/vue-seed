const fs = require('fs')
const path = require('path')

const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')

const isProd = process.env.NODE_ENV === 'production'
// const useMicroCache = process.env.MICRO_CACHE !== 'false'
const serverInfo =
  `cuikangjie.com `

const app = express()

const template = fs.readFileSync(resolve('../template/index.template.html'), 'utf-8')

function createRenderer (bundle, options) {

  return createBundleRenderer(bundle, Object.assign(options, {
    template,

    basedir: resolve('./dist'),

    runInNewContext: false
  }))
}

let renderer
let readyPromise
if (isProd) {

  const bundle = require('../dist/page/server.json')

  const clientManifest = require('../dist/page/client.json')
  renderer = createRenderer(bundle, {
    clientManifest
  })
} else {
  // 开发热更新
  readyPromise = require('../build/setup-dev-server')(app, (bundle, options) => {
    renderer = createRenderer(bundle, options)
  })
}

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

app.use(compression({ threshold: 0 }))
// app.use(favicon('./public/logo-48.png'))
app.use('/dist', serve('../dist', true))
// app.use('/public', serve('./public', true))
app.use('/service-worker.js', serve('../dist/service-worker.js'))

// 1-second microcache.
// https://www.nginx.com/blog/benefits-of-microcaching-nginx/


// since this app has no user-specific content, every page is micro-cacheable.
// if your app involves user-specific content, you need to implement custom
// logic to determine whether a request is cacheable based on its url and
// headers.
// const isCacheable = req => useMicroCache

function render (req, res) {
  const s = Date.now()

  res.setHeader("Content-Type", "text/html")
  res.setHeader("Server", serverInfo)

  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if(err.code === 404) {
      res.status(404).end('404 | Page Not Found')
    } else {
      // Render Error Page or Redirect
      res.status(500).end('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }
  const context = {
    title: 'kin', // default title
    url: req.url
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    }
    res.end(html)
    if (!isProd) {
      console.log(`whole request: ${Date.now() - s}ms`)
    }
  })
}

app.get('*', isProd ? render : (req, res) => {
  readyPromise.then(() => render(req, res))
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})

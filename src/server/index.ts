import * as express from 'express'
import * as path from 'path'
import * as serveStatic from 'serve-static'

import routes from './routes'

// import webpack from 'webpack'
// import webpackConfig from '../webpack/client/webpack.config.dev'

const app = express()
const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '..', '..', 'public')

// const compiler = webpack(webpackConfig)
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: webpackConfig.output.publicPath,
// }))blicPath: webpackConfig.output.publicPath,
// }))

app.use('/static', serveStatic(publicPath))
app.use('/', routes)

app.listen(port, (error: any) => {
  if (error) {
    console.log(error) /* tslint:disable-line:no-console TOFIX: */
  } else {
    console.log(`node environment: ${process.env.NODE_ENV}`) /* tslint:disable-line:no-console TOFIX: */
    console.log(`Listening on port ${port}`) /* tslint:disable-line:no-console TOFIX: */
  }
})
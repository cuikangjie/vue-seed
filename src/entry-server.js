import { createApp } from './server'

const isDev = process.env.NODE_ENV !== 'production'

export default context => {
  return new Promise((resolve, reject) => {

    const s = isDev && Date.now()
    const { app, router, store } = createApp()

    const { url } = context
    const fullPath = router.resolve(url).route.fullPath

    if (fullPath !== url) {
      reject({ url: fullPath })
    }
    console.log('>>>>>>>>>>>>>>>>>> 页面',url);


    router.push(url)

    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      console.log('>>>>>>>>>>>>>>>>>>>',matchedComponents.length);
      // 没有匹配的页面
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }
      // 等待异步请求
      Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({
        store,
        route: router.currentRoute
      }))).then(() => {
        isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
        // console.log(store.state);


        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}

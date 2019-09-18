import * as Interceptor from './utils/interceptor'
import ticker from './utils/ticker'

Interceptor.addInterceptor('onLoad', function () {
    ticker.addTick(this)
})

Interceptor.addInterceptor('onShow', function () {
    ticker.resume(this)
})

Interceptor.addInterceptor('onHide', function () {
    ticker.pause(this)
})

Interceptor.addInterceptor('onUnload', function () {
    ticker.removeTick(this)
})

App({
    onLaunch () {
        
    }
})
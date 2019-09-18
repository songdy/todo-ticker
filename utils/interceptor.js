const Interceptor = {
    onLoad: [], onShow: [], onHide: [], onUnload: []
}
/**
 * 组合函数，依次执行
 * @param  {...Function} args 被组合的函数
 */
function compose(interceptorList, sourceMethod){
    return function () {
        [...interceptorList, sourceMethod].forEach( fn => {
            typeof fn === 'function' && fn.call(this, arguments)
        });
    }
}
/**
 * 小程序Page方法的替代实现
 */

const wxPage = Page
/**
 * 重写Page构造函数
 * @param pageObject - 传入的页面对象
 */
Page = function (pageObject) {
    Object.keys(Interceptor).forEach((keyName) => {
        const sourceMethod = pageObject[keyName]
        pageObject[keyName] = compose(Interceptor[keyName], sourceMethod)
    })
    return wxPage(pageObject)
}
/**
 * 增加对Page生命周期方法的拦截器
 * @param methodName
 * @param handler
 */
export function addInterceptor (methodName, handler) {
    Interceptor[methodName] && Interceptor[methodName].push(handler)
}
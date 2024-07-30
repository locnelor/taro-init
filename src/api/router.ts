import Taro from "@tarojs/taro"


//跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
export const switchTab = (url: string) => {
    Taro.switchTab({ url })
}

//关闭所有页面，打开到应用内的某个页面
export const reLaunch = (url: string) => {
    Taro.reLaunch({ url })
}

//关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
export const redirectTo = (url: string) => {
    Taro.redirectTo({ url })
}

//保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 Taro.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
export const navigateTo = (url: string, events?: TaroGeneral.IAnyObject) => {
    Taro.navigateTo({ url, events })
}

//关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层
export const navigateBack = (delta?: number) => {
    Taro.navigateBack({ delta })
}

export const getCurrentPages = () => {
    return Taro.getCurrentPages()
}
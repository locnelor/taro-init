import Taro from "@tarojs/taro"
import withPromiseCallback from "../withPromiseCallback"


export const getSetting = () => {
    return new Promise<Taro.getSetting.SuccessCallbackResult>((success, fail) => {
        Taro.getSetting({
            success,
            fail
        })
    })
}
export const getSettingCallback = withPromiseCallback(getSetting)


export const authorize = (scope) => {
    return new Promise<TaroGeneral.CallbackResult>((success, fail) => {
        Taro.authorize({
            scope,
            success,
            fail
        })
    })
}
export const authorizeCallback = withPromiseCallback(authorize)
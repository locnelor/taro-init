import Taro from "@tarojs/taro"
import withPromiseCallback from "./withPromiseCallback"


export const request = <T extends string | TaroGeneral.IAnyObject | ArrayBuffer>(options: Taro.request.Option<any, any>) => {
    return new Promise((success, fail) => {
        Taro.request<Taro.request.SuccessCallbackResult<T>>({
            ...options,
            success,
            fail
        })
    })
}
export const requestCallback = withPromiseCallback(request);

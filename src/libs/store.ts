import Taro, { TypedArray } from "@tarojs/taro"
import withPromiseCallback from "./withPromiseCallback"


export const setStore = (key: string, data: any) => {
    return new Promise<TaroGeneral.CallbackResult>((resolve, rejects) => {
        Taro.setStorage({
            key,
            data,
            success: resolve,
            fail: rejects,
        })
    })
}
export const setStoreCallback = withPromiseCallback(setStore);

export const getStore = (key: string) => {
    return new Promise<Taro.getStorage.SuccessCallbackResult<any>>((resolve, rejects) => {
        Taro.getStorage({
            key,
            success: resolve,
            fail: rejects,
        })
    })
}
export const getStoreCallback = withPromiseCallback(getStore);


export const removeStore = (key: string) => {
    return new Promise<TaroGeneral.CallbackResult>((resolve, rejects) => {
        Taro.removeStorage({
            key,
            success: resolve,
            fail: rejects,
        })
    })
}
export const removeStoreCallback = withPromiseCallback(removeStore);

export const getStoreInfo = () => {
    return new Promise<Taro.getStorageInfo.SuccessCallbackOption>((resolve, rejects) => {
        Taro.getStorageInfo({
            success: resolve,
            fail: rejects,
        })
    })
}
export const getStoreInfoCallback = withPromiseCallback(getStoreInfo);

export const clearStore = () => {
    return new Promise<TaroGeneral.CallbackResult>((resolve, rejects) => {
        Taro.clearStorage({
            success: resolve,
            fail: rejects,
        })
    })
}
export const clearStoreCallback = withPromiseCallback(clearStore);

/**
 * 根据传入的 buffer 创建一个唯一的 URL 存在内存中
 */
export const createBufferUrl = (buffer: TypedArray | ArrayBuffer) => {
    return Taro.createBufferURL(buffer)
}


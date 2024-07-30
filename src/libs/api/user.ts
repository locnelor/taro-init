import Taro from "@tarojs/taro";
import withPromiseCallback from "../withPromiseCallback";


export const login = () => {
    return new Promise<Taro.login.SuccessCallbackResult>((success, fail) => {
        Taro.login({
            success,
            fail
        })
    });
}
export const loginCallback = withPromiseCallback(login)

export const checkSession = () => {
    return new Promise<TaroGeneral.CallbackResult>((success, fail) => {
        Taro.checkSession({
            success,
            fail
        })
    });
}
export const checkSessionCallback = withPromiseCallback(checkSession);

export type GetUserProfileOptions = {
    lang?: keyof Taro.UserInfo.Language,
    desc: string,

}
export const getUserProfile = (options: GetUserProfileOptions) => {
    return new Promise<Taro.getUserProfile.SuccessCallbackResult>((success, fail) => {
        Taro.getUserProfile({
            success,
            fail,
            ...options
        })
    });
}
export const getUserProfileCallback = withPromiseCallback(getUserProfile);

export type GetUserInfoOptions = {
    lang?: keyof Taro.UserInfo.Language,
    withCredentials?: boolean
}
/**
 * 接口调整说明 在用户未授权过的情况下调用此接口，将不再出现授权弹窗，会直接进入 fail 回调（详见《公告》)。在用户已授权的情况下调用此接口，可成功获取用户信息。
 */
export const getUserInfo = (options?: GetUserInfoOptions) => {
    return new Promise<Taro.getUserInfo.SuccessCallbackResult>((success, fail) => {
        Taro.getUserInfo({
            success,
            fail,
            ...options
        })
    });
}
export const getUserInfoCallback = withPromiseCallback(getUserInfo);

import { navigateTo } from "@/api/router"
import { View } from "@tarojs/components"
import { useCallback } from "react"
import { AtButton } from "taro-ui"



const HomePage = () => {
    const onClick = useCallback(() => {
        navigateTo("/pages/test/index")
    }, [])
    return (
        <View>
            home
            <AtButton onClick={onClick}>测试</AtButton>
        </View>
    )
}
export default HomePage
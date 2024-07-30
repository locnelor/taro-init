import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import { AtButton, AtInput } from 'taro-ui'
import { test } from '@/libs/test'
import { useAppDispatch, useAppSelector } from '@/store'
import { setTabbar } from '@/store/reducers/tabbarSlice'
export default function Index() {
  const dispatch = useAppDispatch()
  const tabbar = useAppSelector(s => s.tabbar);

  useLoad(() => {
    console.log('Page loaded.')
  })

  test()
  return (
    <View className='index'>
      <View>
        {tabbar.current}
      </View>
      <AtButton onClick={() => dispatch(setTabbar(tabbar.current + 1))}>click</AtButton>
      <View>
        {process.env.TARO_APP_TEST}
      </View>
      <View className="text-[#acc855] text-[100px]">Hello world!</View>
      <Text>Hello worlddd!</Text>
      <AtButton>按钮文案</AtButton>
      <AtButton type='primary'>按钮文案</AtButton>
      <AtButton type='secondary'>按钮文案</AtButton>
      <AtInput
        name='value'
        title='标准五个字'
        type='text'
        placeholder='标准五个字'
      />
      <View className='at-row'>
        <View className='at-col'>A</View>
        <View className='at-col'>B</View>
        <View className='at-col'>C</View>
      </View>
    </View>
  )
}

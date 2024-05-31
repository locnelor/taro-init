import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import { AtButton, AtInput } from 'taro-ui'
import { test } from '@/libs/test'
export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  test()
  return (
    <View className='index bg-red-200'>
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

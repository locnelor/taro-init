import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import { AtButton, AtInput } from 'taro-ui'
import { test } from '@/libs/test'
import { useAppDispatch, useAppSelector } from '@/store'
import { setTabbar } from '@/store/reducers/tabbarSlice'
import { useCallback, useEffect, useState } from 'react'
import { getStore, removeStore, setStore } from '@/libs/store'
export default function Index() {
  const dispatch = useAppDispatch()
  const tabbar = useAppSelector(s => s.tabbar);
  const [data, setData] = useState<any>();
  const onSetStore = useCallback(() => {
    setStore("sbppk", Math.random()).then((res) => {
      console.log("onSetStore", res)
    }).catch((err) => {
      console.log("onSetStoreError", err)
    })
  }, [])
  const onGetStore = useCallback(() => {
    getStore("sbppk").then(({ data }) => {
      console.log("onGetStore", data)
      setData(data);
    }).catch(err => {
      console.log("onGetStoreError", err)
      setData("error")
    })
  }, [])
  const onRemoveStore = useCallback(() => {
    removeStore("sbppk").then((res) => {
      console.log("onRemoveStore", res)
    }).catch(err => {
      console.log("onRemoveStoreError", err)
    })
  }, [])
  useEffect(() => {
    getStore("sbppk").then(({ data }) => {
      console.log("effect", data)
      setData(data)
    }).catch(err => {
      console.log("effectError", err)
    })
  }, [])


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

      <View>
        <View>storeValue:{data}</View>
        <View className='flex gap-2'>
          <AtButton onClick={onGetStore}>获取Store</AtButton>
          <AtButton onClick={onSetStore}>设置Store</AtButton>
          <AtButton onClick={onRemoveStore}>删除Store</AtButton>
        </View>
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

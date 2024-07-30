import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.scss'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import { Provider } from "react-redux";
import { store } from './store';
function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default App

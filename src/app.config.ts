export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/home/index',
    'pages/test/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    selectedColor: '#157658',
    color: '#555',
    backgroundColor: '#555',
    list: [
      {
        pagePath: 'pages/index/index', // 菜单路径
        text: '首页',
        iconPath: 'assets/food.png', // 默认图标
        selectedIconPath: 'assets/food.png', // 选中图标
      }, {
        pagePath: 'pages/home/index', // 菜单路径
        text: 'home',
        iconPath: 'assets/food.png', // 默认图标
        selectedIconPath: 'assets/food.png', // 选中图标
      }
    ],
  },
})

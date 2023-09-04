- eslint
- prettier 冲突降级
- eslint 和 prettier 保存自动检测和修改 配置 setting.json
- prettier 和 eslint 版本冲突
- husky
- commitLint
- 统一包管理器工具
  - 在 pnpm 下载的项目中使用 npm 会自动报错 但是 yarn 不会报错 避免使用两种包管理器导致的包版本冲突
- 下载 element-plus @element-plus/icons-vue 使用并国际化
- @ts-ignore
- src 配置别名和自动补全后缀
- 环境变量配置
- 集成 svg
  - svg 体积小
  - 封装图标组件(全局组件->插件引入法)
- 配置路径提示 https://blog.csdn.net/langwang_100/article/details/130721122
- ts 文件取消严格 strict:false
- sass 声明全局变量和样式初始化
- 添加 mock 数据
- 添加 axios 并封装(主要封装请求和响应拦截器)
  - 请求：公共参数 loading
  - 响应：简化返回数据 处理响应错误
- 封装 Api
- 封装路由 vue-router 404
- login 页面
  - 静态页面
  - 登陆流程
    1. 封装用户信息相关 store(用户信息是公共的)
    2. 收集登陆数据 发送登陆请求并持久化存储 token
    3. 登陆成功提示并跳转 登陆失败提示
    4. 细节处理 loading
    5. 获取时间 完善成功登陆的提示信息
    6. 表单校验
- layout 页面
  - 菜单顶部内容区域布局
  - 封装 logo
  - element-icon 设置为全局组件
  - 动态生成菜单
  - 菜单添加过度动画

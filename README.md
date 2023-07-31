<!--
 * @Date: 2023-07-31 20:17:42
 * @LastEditors: chuhongguang
-->
# Vue 3 + TypeScript + Vite
vue3 + vite + ts 项目练习

### 项目结构
#### package.json中的说明
```
  "scripts": {
    "dev": "vite", // 启动开发服务器
    "build": "vue-tsc && vite build", // 为生产环境构建产物
    "preview": "vite preview" // 本地预览生产构建产物
  },
```
#### 项目目录
```
shop-admin-with-vue3-vite-ts
├─ .gitignore // git忽略文件
├─ index.html
├─ package-lock.json
├─ package.json // 依赖包
├─ public // 不需要打包的静态资源
│  └─ vite.svg
├─ README.md // 说明文档
├─ src
│  ├─ api // 后端 API 接口封装
│  ├─ App.vue // 根组件
│  ├─ assets // 需要打包的静态资源
│  ├─ components // 公共组件
│  ├─ composables // 通用的组合式API
│  ├─ layout // 页面布局模板
│  ├─ main.ts // 主入口
│  ├─ plugins // 插件
│  ├─ router // 路由
│  ├─ store // 状态管理
│  ├─ style.css // 全局样式
│  ├─ styles // 样式
│  ├─ utils // 工具
│  ├─ views // 视图
│  └─ vite-env.d.ts
├─ tsconfig.json // ts 配置文件
├─ tsconfig.node.json
└─ vite.config.ts // vite配置文件

```
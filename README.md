# 开发工具

以下文件大部分是通用的，可以从老项目复制，只需要做少量修改：
- 代码风格： .editorconfig, .perttierrc.yml
- 代码检查： .eslintrc.yml, .eslintignore

# 代码结构

主要指src目录下的代码组织规范

- index.js - 主（入口）程序
- index.scss - 全局css配置
- serviceWorker.js - [CRA](https://github.com/facebook/create-react-app)自动创建的，暂时用不上
- setupProxy.js - 开发联调用的反向代理设置
- setupTests.js - 单元测试全局配置
- assets/ - 图片等静态资源
- uitls/ - 界面无关的工具类
- app/ - 代码主目录

#第一阶段  框架搭建
2019-06-20
### 使用create-react-app 脚手架创建环境

### yarn add antd  增加antd插件，最为UI开发环境

### yarn add react-app-rewired customize-cra babel-plugin-import -d    react-app-rewired 增加自定义配置的社区解决方案，不再使用eject，暴露配置。  customize-cra 利用react-app-rewired核心功能的Create React App v2配置，用于按需引入Antd。


### yarn add husky prettier eslint-config-prettier eslint-plugin-prettier -d  增加代码风格的检查  husky(哈士奇，用于Git提交时检查)   prettier（格式化）

###  yarn add node-sass  -s   安装关于Sass的样式
.scss文件： 

.cs { background-color: aquamarine; }
.bs { background-color: bisque; }
js文件： import style from './index.scss';

2019-06-21
### yarn add cross-env --save-dev   cross-env  windows下跨平台设置环境变量；  在create-react-app中，除了内置的环境变量，如NODE_ENV、PUBLIC_URL外，其余环境变量需要用REACT_APP_作为前缀
例子：     console.log(process.env.REACT_APP_AA);

  "scripts": {
    "start": "cross-env NODE_ENV=development react-app-rewired start",
    "build": "cross-env NODE_ENV=production react-app-rewired build",
    "test": "cross-env NODE_ENV=test react-app-rewired test"
  }

### yarn add  react-redux --save    增加状态管理机制

###  yarn add react-router-dom  --save  增加路由管理机制

### APP目录框架搭建，按照功能划分；做到组件化，划分到组件、状态和行为都在同一个文件夹里。方便开发，也易于扩展。组件中只要一个index.js去暴露出接口就行。
例子：
    feature1/
        components/
            actions.js
            container.js
            index.js
            reducer.js
    feature2/
        components/
            actions.js
            container.js
            index.js
            reducer.js
    index.js
    rootReducer.js

#第二阶段 开始编码





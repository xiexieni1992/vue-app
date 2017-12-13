### 1.简介
> 这是一个基于VUE全家桶的重构项目；

##### 项目用到的技术栈:
> * vue
> * vue-router
> * vuex
> * webpack
> * axios
> * less
> * postman
***

**基础环境**
> node : v8.2.1
npm : 5.3.0

**注:如果项目install有问题,可把对应环境配置成上面相关的环境在尝试**

***启动mock服务器***
```
$ npm install -g json-server
$ npm run server
```

**项目运行**
```
$ npm install
$ npm run dev
$ npm run build
```

### .命名规范
> 组件样式命名: 统一采用 ub 前缀 如: ub-header
> 页面样式命名: 统一采用 page 前缀 如: page-login
> 文件命名: 统一采用-命名方式: 如: user-help
> 样式命名: 统一采用-命名方式: 如: .user-help
> 图片命名: 统一采用-命名方式: 如: .icon-help.png

### 更新日志
#### 2017-12-12
- 初始化项目，模块化搭建路由
    - vue@2.5.2
    - vue-router@3.0.1
    - less @2.7.3
#### 2017-12-14
- 增加mock数据，模块化API请求
    - json-server
    - axios
    - postman
    - qs @6.5.1



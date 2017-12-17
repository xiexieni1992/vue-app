### 规范说明
> * 每个页面单独建立文件夹
> * 页面私有组件放置于组件components内相应文件夹下
> * 组件引用以驼峰命名方式引入各组件
`import eachComponentsName from '@components/..'`
> * 页面样式可在页面内联引入，样式复杂页面采用页面表现分离原则，外部引入`import ./todo.js`

### 文件命名规范
> * 页面文件命名: 统一采用 page 前缀 如: page-home.vue
> * 页面样式命名： class 统一采用`-`命名，id 统一采用`_`命名,样式命名不准出现驼峰命名方式 如`.home-title  #home_title`

### 页面结构
```
    <template>
        <div id='page-home' v-title data-title = '首页'>
            <div>……</div> 
        </div>
    </template>    
```


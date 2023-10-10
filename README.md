#### 下载：npm i vue-use-store



## 1、useStorageUpdate: 用于vue中监听storage数据变化

### 用法：

##### 	1、main.js中引入，use的时候传入配置项，选择你要加监听的storage

```js
import { useStorageUpdate } from 'vue-use-store'

app.use(useStorageUpdate, {
    options:["localStorage", "sessionStorage"]
})
```

##### 	2、在组件中使用

```js
import { useStorageUpdate } from 'vue-use-store'

//监听，target是要监听的storage， key是要监听的storage中的某一项键名
useStorageUpdate({
    target: "localStorage",
    key: "name"
}, (newValue, oldValue) => {
    console.log(newValue, oldValue)
})
```



## 2.useResize: 用于vue中监听元素宽高变化

##### 	1、main.js中引入，use注册完即可使用 v-resize指令

```js
import { useResize } from 'vue-use-store'

app.use(useResize)
```

##### 	2、在组件中使用

```js
import { useResize } from 'vue-use-store'

useStorageUpdate(el, target=>{
    console.log(target)//当前元素的宽高等信息
})
```



## 3.useFullScreen: 用于全屏某个元素块

##### 	1、main.js中引入，use注册完即可使用 v-full-screen指令（参数是id名，请保证id在当前页面中是唯一的，否则有可能会错乱）指令传的参数代表的是要全屏的元素id

```js
import { useFullScreen } from 'vue-use-store'

app.use(useFullScreen)
```

##### 	2、在组件中使用

```js
import { useFullScreen } from 'vue-use-store'

//el->要全屏的元素， target会返回出来一个close函数，调用即可退出全屏
const target = useStorageUpdate(el)

//用指令的情况下，再次点击会退出全屏
<div v-full-screen>全屏</div>
```


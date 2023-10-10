## 用于vue中监听storage数据变化

### 用法：

##### 	1、npm install listen-storage -D

##### 	2、main.js中引入，use的时候传入配置项，选择你要加监听的storage

```js
import useStorageUpdate from 'listen-storage'

app.use(useStorageUpdate, {
    options:["localStorage", "sessionStorage"]
})
```

##### 	3、在组件中使用

```js
import useStorageUpdate from 'listen-storage'

//监听，target是要监听的storage， key是要监听的storage中的某一项键名
useStorageUpdate({
    target: "localStorage",
    key: "name"
}, (newValue, oldValue) => {
    console.log(newValue, oldValue)
})
```


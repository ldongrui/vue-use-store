
import { App } from 'vue'

const useResize = (el:HTMLElement, callback:Function)=>{
    //监听元素宽高变化
    const size = new ResizeObserver((data)=>{
        callback(data[0].contentRect)
    })
    size.observe(el)
}

const install = (app:App)=>{
    app.directive("resize", (el, binding) => {
        useResize(el, binding.value)
    })
}

useResize.install = install


export default useResize
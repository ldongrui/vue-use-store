
import { App } from 'vue'

const getFullName = (nameList: Array<string>, target: HTMLElement | Document) => {
    return nameList.find(el => el in target)
}

//进入全屏函数名
const toFullCallName = getFullName([
    'requestFullscreen',
    'mozRequestFullScreen',
    'webkitRequestFullscreen',
    'msRequestFullscreen'
], document.documentElement) as keyof HTMLElement

//退出全屏函数名
const toCloseCallName = getFullName([
    'exitFullscreen',
    'mozCancelFullScreen',
    'webkitExitFullscreen',
    'msExitFullscreen'
], document) as keyof Document

const fullEleName = getFullName([
    'fullscreenElement',
    'webkitFullscreenElement',
    'mozFullScreenElement',
    'msFullscreenElement'
], document) as keyof Document

//全屏
const useFullScreen = (el: HTMLElement) => {
    //当el不存在的时候提示他不是个dom
    if (!el) return console.error("not a dom");
    //当已经处于全屏状态的时候进行提示
    if (document?.[fullEleName]) return console.warn("It is currently in full screen");
    //调用全屏事件
    (el?.[toFullCallName] as (() => HTMLElement))()

    return {
        //返回一个退出全屏的函数
        close: useFullScreen.close
    }
}

//退出全屏
useFullScreen.close = () => {
    (document?.[toCloseCallName] as (() => Document))();
}

useFullScreen.install = (app: App) => {
    app.directive("full-screen", (el, binding) => {
        const options: string = binding.value

        el.addEventListener('click', () => {
            if (document?.[fullEleName]) {
                useFullScreen.close()
            } else {
                useFullScreen(options ? document.getElementById(options) : el)
            }
        })
    })
}

export default useFullScreen
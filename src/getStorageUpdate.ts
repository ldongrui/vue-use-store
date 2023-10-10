import { isEqual } from './utils/index'
import { App } from 'vue'

interface target{
    target?: string,
    key?: string
}

interface setItemEvent extends Event{
    key?:string,
    oldValue?:any,
    newValue?:any
}

type options = {
    options?:Array<string>
}

const useStorageUpdate = (target:target, callback:Function) => {
    window.addEventListener(`${target.target}_setItemEvent`, (e:setItemEvent)=>{
        if(e.key === target.key){
            callback(e.newValue, e.oldValue)
        }
    })
}

useStorageUpdate.install = (app:App, options?:options) => {
    const localStorageMock = (win:Window, target:any) => {
        const storage = win[target]; // 用闭包实现局部对象storage
        return {
            ...storage,
            setItem: function (key: any, value: any) {
                const setItemEvent:setItemEvent = new Event(`${target}_setItemEvent`);
                const oldValue = storage[key];
                setItemEvent.key = key;
                if (!isEqual(oldValue, value)) { // 新旧值深度判断，派发监听事件
                    setItemEvent.newValue = value;
                    setItemEvent.oldValue = oldValue;
                    win.dispatchEvent(setItemEvent as Event);
                    storage[key] = value;
                    return true;
                }
                return false;
            }
        };
    };
    const list = options?.options
    list?.forEach(el=>{
        Object.defineProperty(window, el, { value: localStorageMock(window, el), writable: true });
    })
}

export default useStorageUpdate
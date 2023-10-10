// declare const useResize: {
//     (el: HTMLElement, callback: Function): void;
//     install: (app: App) => void;
// }

declare const useStorageUpdate: {
    (target: target, callback: Function): void;
    install: (app: App, options?: options) => void;
}

export default useStorageUpdate
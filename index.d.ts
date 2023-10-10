export declare const useResize: {
    (el: HTMLElement, callback: Function): void;
    install: (app: App) => void;
}

export declare const useStorageUpdate: {
    (target: target, callback: Function): void;
    install: (app: App, options?: options) => void;
}

export declare const useFullScreen: {
    (el: HTMLElement): { close: Function };
    close: ()=>void;
    install: (app: App) => void;
}
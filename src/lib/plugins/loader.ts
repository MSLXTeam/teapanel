import React from "react";

export type PluginInfo = {
    name: string;
    version: string;
    author: string;
    description: string;
    url?: string;
    document?: string;
}

export type ExternalElement = {
    pos: string;
    name: string;
    element: () => React.JSX.Element;
}

export abstract class Plugin {
    info: PluginInfo;
    settingsPage?: (server_name: string) => React.JSX.Element;
    externalElements?: ExternalElement[];
    onLoad: () => void;
    onUnload: () => void;
    onEnable?: () => void;
    onDisable?: () => void;
    onReload?: () => void;

    protected constructor(info: PluginInfo, onLoad: () => void, onUnload: () => void,
                          settingsPage?: (server_name: string) => React.JSX.Element,
                          externalElements?: ExternalElement[],
                          onEnable?: () => void, onDisable?: () => void, onReload?: () => void) {
        this.info = info;
        this.settingsPage = settingsPage;
        this.externalElements = externalElements;
        this.onLoad = onLoad;
        this.onUnload = onUnload;
        this.onEnable = onEnable;
        this.onDisable = onDisable;
        this.onReload = onReload;
    }
}

async function loadPlugins(files: string[], disabled_plugins: string[]) {
    let loadedPlugins: Plugin[] = [];
    for (const file of files) {
        const module = await import(file)
        if (!(module.default instanceof Plugin)) {
            console.warn("插件[" + file + "]未正确实现主类,已跳过执行初始化操作");
            continue
        }
        const entryPoint: Plugin = module.default;
        if (entryPoint.info.name in disabled_plugins) {
            console.log("插件[" + entryPoint.info.name + "]已被跳过")
            continue
        }
        entryPoint.onLoad()
        if (entryPoint.onEnable === undefined) {
            console.log("插件[" + entryPoint.info.name + "]未注册启用时方法,已跳过执行")
        }
        loadedPlugins.push(entryPoint);
    }
    return loadedPlugins;
}

function unloadPlugins(plugins: Plugin[]) {
    for (const plugin of plugins) {
        if (plugin.onDisable === undefined) {
            console.log("插件[" + plugin.info.name + "]未注册禁用时方法,已跳过执行")
        }
        plugin.onUnload()
        // 这里应该写更复杂的逻辑...
    }
}

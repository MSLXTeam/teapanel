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

    protected constructor(
        info: PluginInfo,
        onLoad: () => void,
        onUnload: () => void,
        settingsPage?: (server_name: string) => React.JSX.Element,
        externalElements?: ExternalElement[],
        onEnable?: () => void,
        onDisable?: () => void,
        onReload?: () => void
    ) {
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

async function loadPlugins(files: string[], disabledPlugins: Set<string>): Promise<Plugin[]> {
    const loadedPlugins: Plugin[] = [];
    for (const file of files) {
        try {
            const targetModule = await import(file);
            const entryPoint = targetModule.default;

            if (!(entryPoint instanceof Plugin)) {
                console.warn(`插件 [${file}] 未正确实现主类, 已跳过执行初始化操作`);
                continue;
            }

            if (disabledPlugins.has(entryPoint.info.name)) {
                console.log(`插件 [${entryPoint.info.name}] 已被跳过`);
                continue;
            }

            if (entryPoint.settingsPage !== void(0)) {

            }

            entryPoint.onLoad();
            entryPoint.onEnable?.();
            loadedPlugins.push(entryPoint);
        } catch (error) {
            console.error(`加载插件 [${file}] 时出错:`, error);
        }
    }
    return loadedPlugins;
}

function unloadPlugins(plugins: Plugin[]): void {
    for (const plugin of plugins) {
        plugin.onDisable?.();
        plugin.onUnload();
    }
}

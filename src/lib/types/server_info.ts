type PluginIcon = { name: string, description?: string, icon: string };

type ServerInfo = {
    id: number,
    name: string,
    description: string,
    plugins: PluginIcon[],
    status: number,
}

export default ServerInfo

'use client'

import ServerNavbar from "@/components/navbar_server";
import ServerInfo from "@/lib/types/server_info";

export default function ServerSettingsPage(props: { params: { server_name: string } }) {
    const server_name = props.params.server_name.split("/")[0];
    const server_info: ServerInfo = {
        id: -1,
        name: "test",
        description: "Test description",
        plugins: [],
        status: 200,
    }
    return <>
        <ServerNavbar name={server_name}></ServerNavbar>
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl px-4 py-4 mx-4 my-4">
            <div className="card-body">
                <div>
                    <h1 className="text-2xl">元数据</h1>
                </div>
                <div className="space-y-4">
                    <label className="input input-bordered flex items-center gap-2">
                        实例名称 |
                        <input type="text" placeholder={server_info.name} className="grow"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        工作目录 |
                        <input type="text" placeholder="工作目录" className="grow"/>
                    </label>
                </div>
            </div>
        </div>
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl px-4 py-4 mx-4 my-4">
            <div className="card-body">
                <div>
                    <h1 className="text-2xl">JVM设置</h1>
                </div>
                <div className="space-y-4">
                    <label className="input input-bordered flex items-center gap-2">
                        JDK |
                        <input type="text" placeholder={server_info.name} className="grow"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Jar文件 |
                        <input type="text" placeholder="Jar文件路径" className="grow"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        JVM参数 |
                        <input type="text" placeholder="JVM参数" className="grow"/>
                    </label>
                </div>
            </div>
        </div>
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl px-4 py-4 mx-4 my-4">
            <div className="card-body">
                <div>
                    <h1 className="text-2xl">Server.properties选项</h1>
                </div>
                <div className="flex justify-end mt-6">
                    <label className="label cursor-pointer w-1/2">
                        <span className="label-text">开启作弊</span>
                        <input type="checkbox" className="toggle"/>
                    </label>
                    <div className="space-y-2 px-4 w-1/2">
                        <select className="select w-full">
                            <option key="survival" selected>生存</option>
                            <option key="creative">创造</option>
                            <option key="adventure">挑战</option>
                            <option key="spectator">旁观</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end mt-6">
                    <label className="label cursor-pointer w-1/2">
                        <span className="label-text">开启命令方块</span>
                        <input type="checkbox" className="toggle"/>
                    </label>
                    <div className="space-y-2 px-4 w-1/2">
                        <select className="select w-full">
                            <option key="survival" selected>简单</option>
                            <option key="creative">普通</option>
                            <option key="adventure">困难</option>
                            <option key="spectator">和平</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end mt-6">
                    <label className="label cursor-pointer w-1/2">
                        <span className="label-text">开启PVP</span>
                        <input type="checkbox" className="toggle"/>
                    </label>
                    <div className="space-y-2 px-4 w-1/2">
                        <label className="input input-bordered flex items-center gap-2">
                            最大游戏人数 |
                            <input type="text" placeholder="最大游戏人数" value={20} className="grow"/>
                        </label>
                    </div>
                </div>
                <div className="flex justify-end mt-6">
                    <div className="space-y-2 px-0.5 w-1/2">
                        <label className="input input-bordered flex items-center gap-2">
                            最大视距 |
                            <input type="text" placeholder="最大视距" value={20} className="grow"/>
                        </label>
                    </div>
                    <div className="space-y-2 px-4 w-1/2">
                        <label className="input input-bordered flex items-center gap-2">
                            服务器端口 |
                            <input type="text" placeholder="服务器端口" value={25565} className="grow"/>
                        </label>
                    </div>
                </div>
                <div className="py-4 pr-4 w-full">
                    <label className="input input-bordered flex items-center gap-2">
                        服务器存档名称 |
                        <input type="text" placeholder="存档名称" value="world" className="grow"/>
                    </label>
                </div>
            </div>
        </div>
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl px-4 py-4 mx-4 my-4">
            <div className="card-body">
                <div>
                    <h1 className="text-2xl">高级设置</h1>
                </div>
                <div className="flex justify-end mt-6">
                    <label className="label cursor-pointer w-1/2 px-4">
                        <span className="label-text">强制输入使用UTF-8编码</span>
                        <input type="checkbox" className="toggle" defaultChecked/>
                    </label>
                    <label className="label cursor-pointer w-1/2 px-4">
                        <span className="label-text">强制输出使用UTF-8编码</span>
                        <input type="checkbox" className="toggle" defaultChecked/>
                    </label>
                </div>
                <div className="flex justify-end mt-6">
                    <label className="label cursor-pointer w-1/2 px-4">
                        <span className="label-text">屏蔽堆栈跟踪信息</span>
                        <input type="checkbox" className="toggle"/>
                    </label>
                    <label className="label cursor-pointer w-1/2 px-4">
                        <span className="label-text">自动重启</span>
                        <input type="checkbox" className="toggle"/>
                    </label>
                </div>
            </div>
        </div>
    </>
}

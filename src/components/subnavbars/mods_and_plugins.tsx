'use client'

import Link from "next/link";

export default function ModsNavbar(props: {
    server_name: string,
    currentStatus: boolean,
    setShowDisabledModsAction: (bool: boolean) => void
}) {
    return <>
        <div className="px-2 pt-1 pb-4">
            <div className="navbar bg-neutral max-h-8 rounded-lg text-neutral-content">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-sm">插件和模组</a>
                    <div className="dropdown">
                        <ul
                            tabIndex={0}
                            className="menu menu-horizontal px-1 shadow">
                            <li><Link href={"/server/" + props.server_name + "/mods/mod"}>模组</Link></li>
                            <li><Link href={"/server/" + props.server_name + "/mods/plugin"}>插件</Link></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="size-5">
                                <path
                                    d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <button className="text-black"
                                        onClick={() => props.setShowDisabledModsAction(!props.currentStatus)}>{props.currentStatus ? "隐藏" : "显示"}已禁用的Mod/插件
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

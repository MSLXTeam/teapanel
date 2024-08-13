export default function SettingsNavbar(props: {server_name: string}) {
    return <>
        <div className="navbar bg-neutral">
            <div className="navbar-start">
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                <a className="btn btn-ghost text-xl">服务器设置</a>
            </div>
        </div>
    </>
}
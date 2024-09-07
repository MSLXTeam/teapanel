import {StartAndStopButton} from "@/components/start_and_stop";
import "@/components/navbar.css"
import Link from "next/link";

export default function ServerNavbar(props: { name: string }) {
    return (<>
            <div className="navbar acrylic-background bg-neutral text-neutral-content rounded-none shadow-sm">
                <div className="flex-1">
                    <Link href={"//"} className="btn btn-ghost mini-title">Instance: {props.name}</Link>
                    <ul className="menu menu-horizontal">
                        <li><Link href={"/server/" + props.name + "/console"}>控制台</Link></li>
                        <li><Link href={"/server/" + props.name + "/mods/mod"}>模组</Link></li>
                        <li><Link href={"/server/" + props.name + "/mods/plugin"}>插件</Link></li>
                        <li><Link href={"/server/" + props.name + "/settings"}>服务器设置</Link></li>
                        <li><Link href={"/server/" + props.name + "/settings/tasks"}>定时任务</Link></li>
                        <li><Link href={"/server/" + props.name + "/settings/plugins"}>拓展功能</Link></li>
                    </ul>
                </div>
                <div className="flex-none">

                </div>
                <div className="flex-none gap-2">
                    <StartAndStopButton start_link={""} stop_link={""} restart_link={""}></StartAndStopButton>
                    <div className="form-control">
                        <input type="text" placeholder="Search"
                               className="input input-bordered w-auto bg-neutral"/>
                    </div>
                </div>
            </div>
    </>)
}
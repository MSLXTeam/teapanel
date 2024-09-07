'use client'

import ServerInfo from "@/lib/types/server_info";
import {useRouter} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ServerCard(props: { info: ServerInfo }) {
    const router = useRouter();
    const info = props.info;
    return (<>
        <div className="card bg-jb-list shadow-xl cursor-pointer px-4 py-4 mx-4 my-4 hover:bg-jb-active" onClick={() => {
            router.push("/server/" + info.name + "/console")
        }}>
            <div className="card-body">
                <div>
                    <div style={{display: "inline-block"}} className="pr-3"><h2 className="card-title">{info.name}</h2>
                    </div>
                    <div style={{display: "inline-block"}}><h3 className="text-gray-400">{"#" + info.id}</h3>
                    </div>
                </div>
                <p>{info.description}</p>
                <div className="card-actions justify-start">
                    <ul>
                        {info.plugins.map(item => {
                            return <li key={item.name}>
                                <div className="tooltip" data-tip={item.description}><Link
                                    href={"/server/" + info.name + "/settings/plugins" + item.name}><Image
                                    src={item.icon} alt={item.name} width={50} height={50}></Image></Link></div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </>)
}

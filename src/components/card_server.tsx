'use client'

import ServerInfo from "@/lib/types/server_info";
import {useRouter} from "next/navigation";

export default function ServerCard(props: { info: ServerInfo }) {
    const router = useRouter();
    const info = props.info;
    return (<>
        <div className="card bg-base-100 w-96 shadow-xl cursor-pointer" onClick={() => {
            router.push("/server/" + info.name)
        }}>
            <div className="card-body">
                <h2 className="card-title">{info.name + " #" + info.id}</h2>
                <p>{info.description}</p>
                <div className="card-actions justify-start">
                    <ul>
                        {info.plugins.map(item => {
                            return <li key={item.name}>item</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </>)
}

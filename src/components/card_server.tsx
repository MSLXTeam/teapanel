'use client'

import ServerInfo from "@/lib/types/server_info";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function ServerCard(props: { info: ServerInfo }) {
    const router = useRouter();
    const info = props.info;
    return (<>
        <div className="card bg-base-100 shadow-xl cursor-pointer px-4 py-4 mx-4 my-4" onClick={() => {
            router.push("/server/" + info.name)
        }}>
            <div className="card-body">
                <h2 className="card-title">{info.name + " #" + info.id}</h2>
                <p>{info.description}</p>
                <div className="card-actions justify-start">
                    <ul>
                        {info.plugins.map(item => {
                            // eslint-disable-next-line react/jsx-no-undef
                            return <li key={item.name}><Link
                                herf={"/server/" + info.name + "/settings/plugins" + item.name}>item</Link></li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </>)
}

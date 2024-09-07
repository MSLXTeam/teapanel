import Image from "next/image";

export default function ModInfoCard(props: { info: ModInfo }) {
    return <>
        <div className="card bg-jb-list shadow-xl hover:shadow-2xl hover:bg-jb-active px-4 py-4 mx-4 my-4">
            <div className="card-body">
                <div className="card-actions justify-start">
                    <div>
                        {props.info.icon === void (0) ? null :
                            <Image src={props.info.icon} alt={props.info.name}></Image>}
                        <h1 className="text-2xl">{props.info.name}</h1>
                    </div>
                    <div className="justify-end">
                        {!props.info.isEnabled ? <div className="tooltip" data-tip="点击以启用">
                                <button className="btn btn-ghost btn-square btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         className="size-5">
                                        <path
                                            d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"/>
                                    </svg>
                                </button>
                            </div>
                            : <div className="tooltip" data-tip="点击以禁用">
                                <button className="btn btn-ghost btn-square btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         className="size-5">
                                        <path fillRule="evenodd"
                                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </button>
                            </div>}
                    </div>
                </div>
                <div>
                    <p>{props.info.version == void (0) ? null : "版本: " + props.info.version}</p>
                    <p>{props.info.description == void (0) ? "无描述" : props.info.description}</p>
                    <p>{props.info.tags == void (0) ? "无标签" : props.info.tags?.map(info => <kbd key={info}
                                                                                                   className="kbd kbd-md mx-1">{info}</kbd>)}</p>
                </div>
            </div>
        </div>
    </>
}
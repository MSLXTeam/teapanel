import {useState} from "react";
import {useRouter} from "next/navigation";


export function StartAndStopButton(props: { start_link: string, stop_link: string, restart_link: string }) {
    const [isRunning, setIsRunning] = useState(false);
    const router = useRouter();
    if (!isRunning) {
        return (<button onClick={()=>{router.push(props.start_link);setIsRunning(!isRunning)}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
         stroke="green"
         className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>)
        </svg></button>)
    }
    else {
        return (
            <div>
                <button onClick={() => {
                    router.push(props.restart_link)
                }}>
                    <div style={{
                        backgroundColor: 'green',
                        display: 'inline-block',
                        borderRadius: '4px',
                        verticalAlign: 'middle'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>
                        </svg>
                    </div>
                </button>
                <button onClick={() => {
                    router.push(props.restart_link);
                    setIsRunning(!isRunning)
                }}>
                    <div style={{
                        backgroundColor: 'red',
                        display: 'inline-block',
                        borderRadius: '4px',
                        verticalAlign: 'middle' // 或 'baseline'
                    }} className="ms-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"/>
                        </svg>
                    </div>
                </button>
            </div>
    )
    }
    }

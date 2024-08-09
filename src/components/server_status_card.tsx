export default function ServerStatusCard(props: { progress: number, status: boolean }) {
    return <>
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                {((progress) => {
                    if (progress == 100) {
                        return props.status?<p>实例启动成功</p>:<p>实例启动失败</p>
                    } else {
                        return <p>正在启动中</p>
                    }
                })(props.progress)}
                {((progress) => {
                    if (progress <= 100 && progress >= 0) {
                        return <progress className={props.status ? "progress w-fit" : "progress w-fit progress-error"}
                                         value={props.progress} max="100"></progress>
                    } else {
                        return <progress className={props.status ? "progress w-fit" : "progress w-fit progress-error"}
                                         max="100"></progress>
                    }
                })(props.progress)}
            </div>
        </div>
    </>
}

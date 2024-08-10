export default function ServerStatusCard(props: { progress: number, status: boolean }) {
    function showStatus() {
        if (props.progress == 100) {
            return props.status ? <p>实例启动成功</p> : <p>实例启动失败</p>
        } else {
            return <p>正在启动中</p>
        }
    }

    function showProgress() {
        if (!props.status) {
            return <progress className={"progress progress-error"}
                             value={100} max="100"></progress>
        }
        if (props.progress < 100 && props.progress >= 0) {
            return <progress className={"progress progress-info"}
                             value={props.progress} max="100"></progress>
        } else if (props.progress == 100) {
            return <progress className={"progress progress-success"}
                             value={100} max="100"></progress>
        } else {
            return <progress className={"progress progress-info"}
                             max="100"></progress>
        }
    }

    return <>
        <div className="card bg-base-100 mb-4 mx-4 shadow-xl">
            <div className="card-body">
                {showStatus()}
                <p>{showProgress()}</p>
            </div>
        </div>
    </>
}

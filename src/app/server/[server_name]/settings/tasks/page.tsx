import ServerNavbar from "@/components/navbar_server";
import TaskCard from "@/components/card_task";
import {TaskInfo} from "@/lib/types/task_info";
import {Suspense} from "react";

export default function TasksPage(props: { params: { server_name: string } }) {
    const server_name = props.params.server_name.split("/")[0];
    const tasks: TaskInfo[] = [{
        name: "test",
        description: "test",
        command: "say hello",
        cron: "*/2 * * * *"
    }, {name: "test", description: "test", command: "say hello", cron: "*/2 * * * *"}, {
        name: "test",
        description: "test",
        command: "say hello",
        cron: "*/2 * * * *"
    }];
    return <>
        <ServerNavbar name={server_name}></ServerNavbar>
        <Suspense fallback={<div><p>Loading Tasks...</p><p>Just a little more...</p></div>}>{tasks.map(task => <TaskCard info={task} key={task.name}></TaskCard>)}</Suspense>
    </>
}

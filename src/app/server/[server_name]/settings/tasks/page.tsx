import ServerNavbar from "@/components/navbar_server";

export default function TasksPage(props: { params: { server_name: string } }) {
    const server_name = props.params.server_name.split("/")[0];
    return <>
        <ServerNavbar name={server_name}></ServerNavbar>
    </>
}
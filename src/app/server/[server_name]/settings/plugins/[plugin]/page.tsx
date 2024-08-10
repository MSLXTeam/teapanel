import ServerNavbar from "@/components/navbar_server";

export default function DynamicPluginSettingsPage(props: { params: { server_name: string, plugin: string } }) {
    return <>
        <ServerNavbar name={props.params.server_name}></ServerNavbar>
        <p>{props.params.server_name}</p>
        <p>{props.params.plugin}</p>
    </>
}
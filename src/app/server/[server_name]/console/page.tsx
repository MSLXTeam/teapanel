import ServerNavbar from "@/components/navbar_server";
import Terminal from "@/components/terminal";
import ServerStatusCard from "@/components/server_status_card";

export default function ConsolePage(props: {params: { params: { server_name: string } }}) {
    const server_name = props.params.params.server_name;
    return <>
        <ServerNavbar name={server_name}></ServerNavbar>
        <ServerStatusCard progress={-1} status={true}></ServerStatusCard>
        <Terminal server_address={""}></Terminal>
    </>
}

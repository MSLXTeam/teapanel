import ServerNavbar from "@/components/navbar_server";
import ModsNavbar from "@/components/subnavbars/mods_and_plugins";
import ModInfoCard from "@/components/mod_info_card";

export default function ModsPage(props: { params: { server_name: string } }) {
    const server_name = props.params.server_name.split("/")[0];
    return <>
        <ServerNavbar name={server_name}></ServerNavbar>
        <ModsNavbar server_name={server_name}></ModsNavbar>
        <ModInfoCard info={{name: "Test", isEnabled: false, version: "1.0", tags: ["test", "a"]}}></ModInfoCard>
    </>
}
import {redirect} from "next/navigation";

export default function ModsPageNavi(props: { params: { server_name: string } }) {
    redirect("/server/" + props.params.server_name + "/mods/mod");
}
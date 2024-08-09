import ServerNavbar from "@/components/navbar_server";

export default function ServerPage(props: {params: { params: { server_name: string } }}) {
    const server_name = props.params.params.server_name;
    return <>
        <ServerNavbar name={server_name}></ServerNavbar>
    </>
}
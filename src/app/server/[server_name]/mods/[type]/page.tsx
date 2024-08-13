'use client'

import ServerNavbar from "@/components/navbar_server";
import ModsNavbar from "@/components/subnavbars/mods_and_plugins";
import ModInfoCard from "@/components/mod_info_card";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ModsPage(props: { params: { server_name: string, type: string } }) {
    const router = useRouter();

    // 从 localStorage 初始化状态
    const [showDisabledMods, setShowDisabledMods] = useState(() => {
        const savedState = localStorage.getItem('showDisabledMods');
        return savedState !== null ? JSON.parse(savedState) : true;
    });

    const server_name = props.params.server_name.split("/")[0];

    useEffect(() => {
        // 当 showDisabledMods 状态改变时，将其存储到 localStorage
        localStorage.setItem('showDisabledMods', JSON.stringify(showDisabledMods));
    }, [showDisabledMods]);

    const mods: ModInfo[] = [{
        name: "Test",
        isEnabled: false,
        version: "1.0.0",
        tags: ["Optimization"],
    }, {
        name: "Test",
        isEnabled: false,
        version: "1.0.0",
        tags: ["Optimization"],
    }, {
        name: "Test",
        isEnabled: true,
        version: "1.0.0",
        tags: ["Optimization"],
    }, {
        name: "Test",
        isEnabled: true,
        version: "1.0.0",
        tags: ["Optimization"],
    }];
    const plugins: ModInfo[] = [{
        name: "Test",
        isEnabled: true,
        version: "1.0.0",
        tags: ["Optimization"],
    }, {
        name: "Test",
        isEnabled: false,
        version: "1.0.0",
        tags: ["Optimization"],
    }];

    let target = null;
    if (props.params.type === "mod") {
        target = mods;
    } else if (props.params.type === "plugin") {
        target = plugins;
    } else {
        router.push(`/server/${server_name}/mods/mod`);
        return;
    }

    return <>
        <ServerNavbar name={server_name}></ServerNavbar>
        <ModsNavbar server_name={server_name} currentStatus={showDisabledMods}
                    setShowDisabledModsAction={(bool: boolean) => {
                        setShowDisabledMods(bool);
                    }}></ModsNavbar>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
            {target.map(instance => (
                <div key={instance.name} className={!showDisabledMods && !instance.isEnabled ? "hidden" : ""}>
                    <ModInfoCard info={instance}/>
                </div>
            ))}
        </div>
    </>
}
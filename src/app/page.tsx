'use client'

import Navbar from "@/components/navbar";
import ServerNavbar from "@/components/navbar_server";
import NewInstanceModal from "@/components/modals/new_instance";
import {CreatingNewInstanceContextProvider, useNewInstanceContext} from "@/components/modals/new_instance_context";
import builtin_parsers from "@/lib/defaults/builtin_parsers";
import React from "react";
import ServerCard from "@/components/card_server";
import ServerStatusCard from "@/components/server_status_card";

const Content: React.FC = () => {
    const {openModal} = useNewInstanceContext();

    return (
        <>
            <button className="btn" onClick={openModal}>Open Settings</button>
            <NewInstanceModal parsers={builtin_parsers} external_constructors={[]}/>
        </>
    );
}

export default function Home() {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <ServerNavbar name={""}></ServerNavbar>
                <CreatingNewInstanceContextProvider>
                    <Content></Content>
                </CreatingNewInstanceContextProvider>
                <div className={"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"}>
                    <ServerCard info={{
                        id: -1,
                        name: "test",
                        description: "Test description",
                        plugins: [],
                        status: 200,
                    }}></ServerCard>
                    <ServerCard info={{
                        id: -1,
                        name: "test",
                        description: "Test description",
                        plugins: [],
                        status: 200,
                    }}></ServerCard>
                </div>

                <ServerStatusCard progress={100} status={false}></ServerStatusCard>
                <ServerStatusCard progress={50} status={true}></ServerStatusCard>
                <ServerStatusCard progress={100} status={true}></ServerStatusCard>
            </div>
        </>
    );
}

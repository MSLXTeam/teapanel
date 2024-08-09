'use client'

import Navbar from "@/components/navbar";
import ServerNavbar from "@/components/navbar_server";
import NewInstanceModal from "@/components/modals/new_instance";
import {CreatingNewInstanceContextProvider, useNewInstanceContext} from "@/components/modals/new_instance_context";
import builtin_parsers from "@/lib/defaults/builtin_parsers";
import React from "react";
import ServerCard from "@/components/card_server";

const Content: React.FC = () => {
    const { openModal } = useNewInstanceContext();

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
                <ServerCard info={{
                    id: -1,
                    name: "test",
                    description: "Test description",
                    plugins: [],
                    status: 200,
                }}></ServerCard>
            </div>
        </>
    );
}

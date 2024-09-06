'use client'

import Navbar from "@/components/navbar";
import NewInstanceModal from "@/components/modals/new_instance";
import {CreatingNewInstanceContextProvider, useNewInstanceContext} from "@/components/modals/new_instance_context";
import builtin_parsers from "@/lib/defaults/builtin_parsers";
import React from "react";
import ServerCard from "@/components/card_server";

const Content: React.FC = () => {
    const {openModal} = useNewInstanceContext();

    return (
        <>
            <div className="card bg-base-200 shadow-xl cursor-pointer px-4 py-4 mx-4 my-4 "
                 onClick={openModal}>
                <div className="card-body">
                    <div style={{display: "inline-block"}} className="pr-3"><h2
                        className="card-title">新建实例</h2>
                    </div>
                    <p>梦开始的地方</p>
                </div>
            </div>
            <NewInstanceModal parsers={builtin_parsers} external_constructors={[]}/>
        </>
    );
}

export default function Home() {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <CreatingNewInstanceContextProvider>
                    <div className={"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"}>
                        <Content></Content>
                        <NewInstanceModal parsers={builtin_parsers} external_constructors={[]}/>
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
                </CreatingNewInstanceContextProvider>
            </div>
        </>
    );
}

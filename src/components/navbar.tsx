'use client'

import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (<>
        <div className="px-2 py-2">
            <div className="navbar bg-neutral acrylic-background text-neutral-content rounded-lg shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Tea Panel</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal">
                        <li><Link href={"/"}>服务器列表</Link></li>
                        <li><Link href={"/settings"}>设置</Link></li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search"
                               className="input input-bordered w-24 md:w-auto bg-neutral"/>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
'use client'

import "@/components/navbar.css"
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (<>
            <div className="navbar acrylic-background bg-neutral text-neutral-content rounded-none shadow-sm">
                <div className="flex-1">
                    <Link className="btn btn-ghost mini-title" href="/">Tea Panel</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal">
                        <li><Link href={"/"}>实例</Link></li>
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
    </>)
}

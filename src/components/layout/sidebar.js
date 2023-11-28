import React from "react";
import Link from 'next/link'

const Sidebar = () => {
    return(
        <div id="sidebar" className="w-2/12 h-full fixed p-3">
            <div className="flex sidebar-title pb-4">
                <div className="font-bold logo">BLOGLOGO</div>
                <div className="ml-auto">
                    <Link href="#">x</Link>
                </div>
            </div>
            <div className="sidebar-content">
                <div className="content-first pb-2">
                    <ul>
                        <li><Link href="#">Dashboard</Link></li>
                        <li><Link href="#">Category</Link></li>
                        <li><Link href="#">Post</Link></li>
                        <li><Link href="#">Gallery</Link></li>
                    </ul>
                </div>
                <div className="content-second pt-2">
                    <ul>
                        <li><Link href="#">Users</Link></li>
                        <li><Link href="#">Settings</Link></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <button className="absolute w-full my-btn-pr">Log out</button>
            </div>
        </div>
    )
}

export default Sidebar;
import React from "react";
import Link from 'next/link'
import {ROUTER} from "../../utils/constants";
import { useAdmin } from '@hooks/useAdmin';

const Sidebar = () => {

    const { logout } = useAdmin();

    const handleLogout = () => {
        logout();
    }

    return(
        <div id="sidebar" className="h-full fixed p-5">
            <div className="flex sidebar-title pb-4">
                <div className="font-bold logo">
                    <Link href={ROUTER.ADDASHBOARD}>
                        BLOGLOGO
                    </Link>
                </div>
                <div className="ml-auto">
                    <Link href="#">x</Link>
                </div>
            </div>
            <div className="sidebar-content">
                <div className="content-first pb-2">
                    <ul>
                        <li><Link href={ROUTER.ADDASHBOARD}>Dashboard</Link></li>
                        <li><Link href={ROUTER.ADCATEGORY}>Category</Link></li>
                        <li><Link href={ROUTER.ADSUBCATE}>Sub-Category</Link></li>
                        <li><Link href={ROUTER.ADINGREDIENT}>Ingredients</Link></li>
                        <li><Link href={ROUTER.ADCATEGORY}>Test and review</Link></li>
                        <li><Link href={ROUTER.ADPOST}>Post</Link></li>
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
                <button onClick={() => {handleLogout()}} className="absolute w-full my-btn-pr">Log out</button>
            </div>
        </div>
    )
}

export default Sidebar;
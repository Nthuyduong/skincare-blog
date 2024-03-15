import Link from "next/link";
import React from "react";

const NotFoundPage = () => (
    <div className="flex w-full flex-col justify-center items-center py-8 px-2">
        <h1 className="heading_1 pb-4">404</h1>
        <div>
            Oops, Something’s missing...
        </div>
        <div className="pb-4 text-center">
            The page you are looking for was moved, removed, renamed or might never existed!
        </div>
        <Link className="px-4 my-btn-pr dark:bg-white dark:border-white dark:text-black" href="/">
            GO HOME
        </Link>
    </div>
);
export default NotFoundPage;
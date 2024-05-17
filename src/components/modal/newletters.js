import React from "react";

const NewslettersModal = () => {
    return (
        <div className="newsletters]">
            <div className="heading_4 mb-3 mt-7">Join our Newsletter</div>
            <div className="mb-5">Enter your email address to receive new posts in your inbox and seasonal newsletters!</div>
            <div>
                <div className="mb-3 w-full flex dark:border-999 dark:focus:border-white focus:border-333 pointer-events-auto border-solid border-b border-ccc focus-visible:outline-none">
                    <input
                        className="w-full py-1 pr-2 w-full"
                        placeholder="Your name"
                    />
                </div>
                <div className="w-full flex dark:border-999 dark:focus:border-white focus:border-333 pointer-events-auto border-solid border-b border-ccc focus-visible:outline-none">
                    <input
                        className="w-full py-1 pr-2 w-full"
                        placeholder="Email address"
                    />
                    <button
                        className=""
                        type="submit"
                    >
                        <img className="w-full dark:hidden" src="../img/icon/arrow-right-circle.svg" alt="smile" loading="lazy" />
                        <img className="w-full hidden dark:block" src="../img/icon/arrow-right-circle-white.svg" alt="smile" loading="lazy" />
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default NewslettersModal;
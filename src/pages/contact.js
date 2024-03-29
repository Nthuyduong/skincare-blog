import React from "react";

const Contact = () => {
    return (
        <div className="px-3 md:px-0 pt-6 contact_page m-w mx-auto my-0">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 md:col-span-6 border-b border-ccc border-solid md:border-none">
                    <div className="mb-5">
                        <div className="heading mb-3 md:mb-4">Connect Us</div>
                        <div>Questions or comments about something you read here? I’d love to hear from you!</div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-5 mb-3">
                            <div className="md:col-span-1 col-span-2">
                                <div className="md:mb-3">
                                    <input className="dark:border-999 py-1 pr-2 dark:focus:border-white focus:border-333 pointer-events-auto border-solid border-b border-ccc w-full focus-visible:outline-none" placeholder="Your name (20)"/>
                                </div>
                            </div>
                            <div className="md:col-span-1 col-span-2">
                                <div className="mb-3">
                                    <input className="py-1 pr-2 border-solid border-b border-ccc dark:border-999 py-1 dark:focus:border-white focus:border-333 w-full focus-visible:outline-none" placeholder="Email address *"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 user-cmt">
                            <textarea rows="5" className="dark:border-999 dark:focus:border-white focus:border-333 border-solid border-b border-ccc py-1 pr-2 w-full focus-visible:outline-none" placeholder="Type your message here (233)"></textarea>
                        </div>
                        <div className="mb-6 md:mb-0 md:mt-6">
                            <div className="flex w-full cursor-pointer">
                                <div className="md:ml-auto heading_2 mr-2">SUBMIT</div>
                                <div>
                                    <img className="icon-lg dark:hidden block w-full" src="/img/icon/arrow-up-right-lg.svg" alt="smile" loading="lazy"/>
                                    <img className="icon-lg dark:block hidden w-full" src="/img/icon/arrow-up-right-lg-light.svg" alt="smile" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block col-span-12 md:col-span-1"></div>
                <div className="col-span-12 md:col-span-5 border flex gap-2 pb-2 md:pb-0 md:flex-col">
                    <div className="mb-5">
                        <div className="heading_5 mb-3">Our info</div>
                        <div>
                            <div className="cursor-pointer">contact_purelueur@gmail.com</div>
                            <div className="cursor-pointer">instagram_page</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 md:gap-2">
                        <div className="col-span-5 md:col-span-3">
                            <img className="w-full" src="/img/home/contact1.png" alt="smile" loading="lazy"/>
                        </div>
                        <div className="col-span-2 hidden md:block">
                            <img className="w-full" src="/img/home/contact2.png" alt="smile" loading="lazy"/>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/*<div className="container-fluid text-center p-60 m-w mx-auto my-0">*/}
            {/*    <div className="heading_3 mb-4">Connect With Me</div>*/}
            {/*    <div>*/}
            {/*        <div>Questions or comments about something you read here? I’d love to hear from you!</div>*/}
            {/*        <div className="my-1">nthuyduong898@gmail.com</div>*/}
            {/*        <div>Please note: I do not accept unsolicited guest posts.</div>*/}
            {/*    </div>*/}
            {/*    <div className="social-mda mt-6">*/}
            {/*        <div className="justify-center flex">*/}
            {/*            <div>f</div>*/}
            {/*            <div>i</div>*/}
            {/*            <div>p</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Contact;
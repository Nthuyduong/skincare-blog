import React from "react";

const Skintype = () => {
    return (
        <div className="skintype-page">
            <div className="container-fluid">
                <div className="pt-5 head-content">
                    <div className="heading text-center">Skin type & History</div>
                    <div className="grid grid-cols-5">
                        <div className="col-span-1"></div>
                        <div className="col-span-3 heading_6 text-center">
                            Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                            consequat quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                </div>
                <div className="mt-5 skin-bar pb-3">
                    <div className="flex">
                        <div className="mr-auto">Scroll to explore</div>
                        <div className="">
                            <img className="h-4" src="./img/icon/chevron-down-black.svg" alt="smile" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div className="mt-5 all-faq">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-4">
                            <div className="pr-5">
                                <div className="heading_3 mb-3">What we do</div>
                                <div>Are you interested in collaborating? Do you want to be a part of us? Join with us now!</div>
                                <div className="mt-4">
                                    <button className="w-full my-out-line-btn" type="submit">Join with us</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skintype;
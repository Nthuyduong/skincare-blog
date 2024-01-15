const Destination = () => {
    return (
        <div>
            <div className="container-fluid m-w mx-auto my-0">
                <div className="grid grid-cols-12 pt-60">
                    <div className="col-span-7">
                        <div className="heading">Guides & Tutorials</div>
                    </div>
                    <div className="col-span-5">
                        Embark on a skincare journey to unveil the secrets of radiant skin. From personalized routines
                        to mastering effective product application, explore the wonders of skincare and reveal your true beauty.
                    </div>
                </div>

                {/*<div className="destination-banner relative">*/}
                    {/*<div className="banner-img">*/}
                    {/*    <img className="w-full" src="./img/destination/banner.jpg" alt="smile" loading="lazy"/>*/}
                    {/*</div>*/}
                    {/*<div className="text-center absolute destination-content text-white">*/}
                    {/*    <div>*/}
                    {/*        <div className="heading_2">Welcome to Hanoi, Vietnam!</div>*/}
                    {/*        <div className="flex justify-center mt-3">*/}
                    {/*            <div className="flex des-count pr-3">*/}
                    {/*                <div className="pr-1">*/}
                    {/*                    <img className="icon-sm" src="./img/icon/map.svg" alt="#" loading="lazy"></img>*/}
                    {/*                </div>*/}
                    {/*                <div>5 Destinations</div>*/}
                    {/*            </div>*/}
                    {/*            <div className="flex location-count pl-3">*/}
                    {/*                <div className="pr-1">*/}
                    {/*                    <img className="icon-sm" src="./img/icon/map-pin.svg" alt="#" loading="lazy"></img>*/}
                    {/*                </div>*/}
                    {/*                <div>400 Locations</div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="show-all-btn">*/}
                    {/*        <button className="scroll-down">Explore All Destinations</button>*/}
                    {/*        <div className="flex justify-center">*/}
                    {/*            <img src="./img/icon/chevron-down.svg" alt="#" loading="lazy"></img>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
            <div className="container-fluid p-6 m-w mx-auto my-0">
                <div className="destination-title dark:border-y dark:border-ccc p-3">
                    <div className="flex justify-center">
                        {/*breadcrumb*/}
                        <div className="flex self-center">
                            <ul className="flex">
                                <li><a href="#">Home</a></li>
                                <li className="mx-2">/</li>
                                <li><a href="#">Guides & Tutorials</a></li>
                            </ul>
                        </div>
                        {/*<div className="heading_3 mx-auto">All Destinations</div>*/}
                        {/*Change layout*/}
                        <div className="self-center flex ml-auto">
                            <div className="flex justify-center">
                                <div className="flex des-count pr-3">
                                    <div className="pr-1">
                                        <img className="icon-sm" src="./img/icon/grid.svg" alt="#" loading="lazy"></img>
                                    </div>
                                    <div>4 Categories</div>
                                </div>
                                <div className="flex location-count pl-3">
                                    <div className="pr-1">
                                        <img className="icon-sm" src="./img/icon/book-open.svg" alt="#" loading="lazy"></img>
                                    </div>
                                    <div>40 Articles</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*all destination show here*/}
            <div className="container-fluid destination all-destination-cate m-w mx-auto my-0">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-6 md:col-span-3 destination-cate mb-4">
                        <div className="pb-2 heading_6">01/</div>
                        <img className="w-full" src="/img/destination/des2.jpg" alt="smile" loading="lazy"/>
                        <div className="destination-cate-content">
                            <div className="flex items-center border-b border-ccc dark:border-ccc">
                                <div className="heading_6 my-1 mr-auto">How to</div>
                                <span>
                                    <img className="icon-ssm w-full hidden dark:block" src="/img/icon/arrow-up-right.svg" alt="smile" loading="lazy"/>
                                    <img className="icon-ssm w-full dark:hidden" src="/img/icon/arrow-up-right-black.svg" alt="smile" loading="lazy"/>
                                </span>
                            </div>
                            <div className="flex more-info pt-2">
                                <div className="small_text">Discover expert tips for flawless skin and personalized solutions
                                    for common skin issues.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-3 destination-cate">
                        <div className="pb-2 heading_6">01/</div>
                        <img className="w-full" src="./img/destination/des3.jpg" alt="smile" loading="lazy"/>
                        <div className="destination-cate-content">
                            <div className="flex items-center border-b border-ccc dark:border-ccc">
                                <div className="heading_6 my-1 mr-auto">Skincare routine</div>
                                <span>
                                    <img className="icon-ssm w-full hidden dark:block" src="/img/icon/arrow-up-right.svg" alt="smile" loading="lazy"/>
                                    <img className="icon-ssm w-full dark:hidden" src="/img/icon/arrow-up-right-black.svg" alt="smile" loading="lazy"/>
                                </span>
                            </div>
                            <div className="flex more-info pt-2">
                                <div className="small_text">
                                    Craft your perfect skincare routine with expert guidance for optimal results.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-3 destination-cate">
                        <div className="pb-2 heading_6">01/</div>
                        <img className="w-full" src="./img/destination/des5.jpg" alt="smile" loading="lazy"/>
                        <div className="destination-cate-content">
                            <div className="flex items-center border-b border-ccc dark:border-ccc">
                                <div className="heading_6 my-1 mr-auto">Usage Guide</div>
                                <span>
                                    <img className="icon-ssm w-full hidden dark:block" src="/img/icon/arrow-up-right.svg" alt="smile" loading="lazy"/>
                                    <img className="icon-ssm w-full dark:hidden" src="/img/icon/arrow-up-right-black.svg" alt="smile" loading="lazy"/>
                                </span>
                            </div>
                            <div className="flex more-info pt-2">
                                <div className="small_text">
                                    Unlock the full potential of your skincare products with comprehensive usage guides
                                    and expert tips
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-3 destination-cate">
                        <div className="pb-2 heading_6">01/</div>
                        <img className="w-full" src="./img/destination/des0.jpg" alt="smile" loading="lazy"/>
                        <div className="destination-cate-content">
                            <div className="flex items-center border-b border-ccc dark:border-ccc">
                                <div className="heading_6 my-1 mr-auto">Sun Care</div>
                                <span>
                                    <img className="icon-ssm w-full hidden dark:block" src="/img/icon/arrow-up-right.svg" alt="smile" loading="lazy"/>
                                    <img className="icon-ssm w-full dark:hidden" src="/img/icon/arrow-up-right-black.svg" alt="smile" loading="lazy"/>
                                </span>
                            </div>
                            <div className="flex more-info pt-2">
                                <div className="small_text">
                                    Explore essential sun care secrets, from choosing the right sunscreen to addressing
                                    sun-related skin concerns
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;
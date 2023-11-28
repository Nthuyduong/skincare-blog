const Gallery = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="gallery-banner relative">
                    <div className="banner-img">
                        <img className="w-full" src="./img/destination/banner.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="text-center absolute gallery-content text-white">
                        <div>
                            <div className="heading_2">My Gallery Images Spacing</div>
                            <div className="flex justify-center mt-3">
                                <div className="flex des-count pr-3">
                                    <div className="pr-1">
                                        <img className="icon-sm" src="./img/icon/map.svg" alt="#" loading="lazy"></img>
                                    </div>
                                    <div>5 Destinations</div>
                                </div>
                                <div className="flex location-count pl-3">
                                    <div className="pr-1">
                                        <img className="icon-sm" src="./img/icon/map-pin.svg" alt="#" loading="lazy"></img>
                                    </div>
                                    <div>400 Locations</div>
                                </div>
                            </div>
                        </div>
                        <div className="show-all-btn">
                            <button className="scroll-down">Explore All Destinations</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-60">
                <div className="destination-title">
                    <div className="flex justify-center">
                        {/*breadcrumb*/}
                        <div className="flex self-center">
                            <ul className="flex">
                                <li><a href="#">Home</a></li>
                                <li className="mx-2">/</li>
                                <li><a href="#">Gallery</a></li>
                            </ul>
                        </div>
                        {/*Sort blog by*/}
                        <div className="self-center flex ml-auto">
                            <select>
                                <option defaultValue hidden>Sort locations by</option>
                                <option value="">My favorite</option>
                                <option value="">Seeker's favorite</option>
                                <option value="">New & Popular</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3 gallery-s">
                        <div className="relative gallery-inner">
                            <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                            <div className="absolute left-1/3 top-1/2 gallery-content">
                                <div className="text-center">
                                    <div className="heading_6 mb-1">Sorenta Coffee</div>
                                    <div>
                                        <a href="#">View detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 row-span-2">
                        <img className="w-full" src="./img/gallery/rowspan.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-6">
                        <img className="w-full" src="./img/gallery/colspan.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-3 gallery-s">
                        <div className="relative gallery-inner">
                            <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                            <div className="absolute left-1/3 top-1/2 gallery-content">
                                <div className="text-center">
                                    <div className="heading_6 mb-1">Sorenta Coffee</div>
                                    <div>
                                        <a href="#">View detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 gallery-s">
                        <div className="relative gallery-inner">
                            <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                            <div className="absolute left-1/3 top-1/2 gallery-content">
                                <div className="text-center">
                                    <div className="heading_6 mb-1">Sorenta Coffee</div>
                                    <div>
                                        <a href="#">View detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 gallery-s">
                        <div className="relative gallery-inner">
                            <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                            <div className="absolute left-1/3 top-1/2 gallery-content">
                                <div className="text-center">
                                    <div className="heading_6 mb-1">Sorenta Coffee</div>
                                    <div>
                                        <a href="#">View detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 gallery-s">
                        <div className="relative gallery-inner">
                            <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                            <div className="absolute left-1/3 top-1/2 gallery-content">
                                <div className="text-center">
                                    <div className="heading_6 mb-1">Sorenta Coffee</div>
                                    <div>
                                        <a href="#">View detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 gallery-s">
                        <div className="relative gallery-inner">
                            <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                            <div className="absolute left-1/3 top-1/2 gallery-content">
                                <div className="text-center">
                                    <div className="heading_6 mb-1">Sorenta Coffee</div>
                                    <div>
                                        <a href="#">View detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <img className="w-full" src="./img/gallery/colspan.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-6">
                        <img className="w-full" src="./img/gallery/colspan.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-3 row-span-2">
                        <img className="w-full" src="./img/gallery/rowspan.jpg" alt="smile" loading="lazy"/>
                    </div>
                    <div className="col-span-3 gallery-s">
                        <div className="relative gallery-inner">
                            <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                            <div className="absolute left-1/3 top-1/2 gallery-content">
                                <div className="text-center">
                                    <div className="heading_6 mb-1">Sorenta Coffee</div>
                                    <div>
                                        <a href="#">View detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 gallery-s">
                        <div className="relative gallery-inner">
                            <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                            <div className="absolute left-1/3 top-1/2 gallery-content">
                                <div className="text-center">
                                    <div className="heading_6 mb-1">Sorenta Coffee</div>
                                    <div>
                                        <a href="#">View detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 gallery-s">
                        <div className="relative gallery-inner">
                            <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                            <div className="absolute left-1/3 top-1/2 gallery-content">
                                <div className="text-center">
                                    <div className="heading_6 mb-1">Sorenta Coffee</div>
                                    <div>
                                        <a href="#">View detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 gallery-s">
                        <div className="relative gallery-inner">
                            <img className="w-full" src="./img/gallery/ori.jpg" alt="smile" loading="lazy"/>
                            <div className="absolute left-1/3 top-1/2 gallery-content">
                                <div className="text-center">
                                    <div className="heading_6 mb-1">Sorenta Coffee</div>
                                    <div>
                                        <a href="#">View detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
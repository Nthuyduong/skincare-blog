import { ROUTER } from "../../utils/constants";
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="blog-footer" id="blog-footer">
            <div className="blog-footer-inner">
                <div className="grid grid-cols-6 footer-popular">
                    <div className="sub-menu">
                        <div className="mb-3">POPULAR</div>
                        <ul>
                            <li>
                                <Link href={ROUTER.HOME} className="nav-link">Weading Photo Spots</Link>
                            </li>
                            <li className="">
                                <Link href={ROUTER.HOME} className="nav-link">Ceramic Handmade Shop</Link>
                            </li>
                            <li>
                                <Link href={ROUTER.HOME} className="nav-link">National Library</Link>
                            </li>
                            <li>
                                <Link href={ROUTER.HOME} className="nav-link">Gusto Chela Coffee</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="footer-info">
                        <div className="sub-menu">
                            <div className="mb-3">INTEREST</div>
                            <ul>
                                <li>
                                    <Link href={ROUTER.ABOUT} className="nav-link">About us</Link>
                                </li>
                                <li>
                                    <Link href={ROUTER.DESTINATION} className="nav-link">Destinations</Link>
                                </li>
                                <li>
                                    <Link href={ROUTER.GALLERY} className="nav-link">Our Gallery</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <div className="sub-menu">
                            <div className="mb-3">INFO</div>
                            <ul>
                                <li>
                                    <Link href={ROUTER.CONTACT} className="nav-link">Contact me</Link>
                                </li>
                                <li>
                                    <Link href={ROUTER.CONTACT} className="nav-link">Work with me</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=""></div>
                    <div className="col-span-2">
                        <div className="mb-2">Enter your email address to receive new posts in your inbox and seasonal newsletters with
                            extra goodies!</div>
                        <div>
                            <div>
                                <div className="my-input mb-3">
                                    <input className="w-full p-1" placeholder="Email address"/>
                                </div>
                                <button className="w-full my-btn-pr" type="submit">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-sub">
                <div className="grid grid-cols-12">
                    <div className="col-span-9">
                        <div>COPYRIGHT © 2023 · Nthduong Blog. ALL RIGHTS RESERVED</div>
                    </div>
                    <div className="col-span-3">
                        <div className="my-social flex w-full">
                            <div>
                                <Link href="#">Instagram</Link>
                            </div>
                            <div className="mx-3">
                                <Link href="#">Pinterest</Link>
                            </div>
                            <div>
                                <Link href="#">Behance</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
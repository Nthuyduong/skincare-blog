import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { ROUTER } from "../utils/constants";
import { BASE_URL } from "@utils/apiUtils";
import { formatDate } from "@utils/format";
import { useRouter } from 'next/router';
import { getBlogNewest, getBlogPopular, getBlogBanner } from "../services/home";
import dynamic from "next/dynamic";
import CardSlider from "../components/common/CardSlider";
import Head from "next/head";
const Slider = dynamic(() => import("@components/common/slider"), { ssr: false });
const Scroller = dynamic(() => import("@components/common/scroller"), { ssr: false });
import { useModal } from '@hooks/modal';
import Image from "next/image";

const Home = ({ newestProps, popularProps, bannerProps, isCsr }) => {
    const router = useRouter();

    const {
        hide,
        show,
        showLoading,
        addToast
    } = useModal();

    const [newest, setNewest] = useState(newestProps || []);
    const [popular, setPopular] = useState(popularProps || []);
    const [banner, setBanner] = useState(bannerProps || []);

    // console.log(banner)

    useEffect(() => {
        const categoryCard = document.querySelectorAll('.home-category-card');
        categoryCard.forEach((card) => {
            console.log(card);
            card.addEventListener('mouseover', () => {
                categoryCard.forEach((card) => {
                    card.classList.remove('home-category-card-active');
                });
                card.classList.add('home-category-card-active');
            });
        });
    }, []);

    useEffect(() => {
        if (isCsr) {
            fetchDataCsr();
        }
    }, [router.asPath]);

    const fetchDataCsr = async () => {
        const res = await Promise.all([
            getBlogNewest(10),
            getBlogPopular(10),
            getBlogBanner(3)
        ]);
        setNewest(res[0] || []);
        setPopular(res[1] || []);
        setBanner(res[2] || [])
    }

    return (
        <>
            <Head>
                <title>Radiance aura blog | Beauty & skincare blog </title>
                <meta name="description" content="Welcome to our skincare sanctuary! Here, we celebrate the journey to radiant skin. Join us for expert tips, shared experiences, and a community-driven pursuit of beauty and confidence. Let's embark on a skincare adventure together, where your glow is our priority" />
            </Head>
            <div>
                {/* new banner */}
                <div className="relative home-banner h-[650px]">
                    <div className="relative z-20">
                        <div className="mx-auto m-w">
                            {/* banner text */}
                            <div>
                                <div className="flex gap-1 sm:gap-5 items-center pt-6 mb-6 justify-center animate slideInUp animate--delay-fast">
                                    <div className="heading_2 dark:text-textcolor">The</div>
                                    <div className="h-px bg-666 w-[20%]"></div>
                                    <div className="heading_2 text-center dark:text-textcolor">Most Useful</div>
                                    <div className="h-px bg-666 w-[20%]"></div>
                                    <div className="heading_2 dark:text-textcolor">Articles</div>
                                </div>
                                {/* articles */}
                                <div className="flex gap-2 sm:gap-6 animate slideInUp animate--delay-medium">
                                    {banner.map((tags, index) => (
                                        <div className="banner-article">
                                            <Link href={'/article/' + tags.slug} className="">
                                                <picture>
                                                    <source srcSet={BASE_URL + '/storage/desktop/' + tags?.featured_img} media="(min-width: 1024px)" />
                                                    <source srcSet={BASE_URL + '/storage/tablet/' +  tags?.featured_img} media="(min-width: 767px)" />
                                                    <Image
                                                        src={BASE_URL + '/storage/mobile/' + tags?.featured_img}
                                                        alt={tags.title}
                                                        height={500}
                                                        width={500}
                                                        loading="eager"
                                                    />
                                                </picture>
                                            </Link>

                                            <div className="mr-auto mb-1 body_text text-textcolor mt-2">{tags.categories.map((category) => { return <Link href={`/categories/${category?.parent?.slug ?? 'sub-des'}/${category.slug}`} className="">{category.name}</Link> })}</div>
                                            <Link href={'/article/' + tags.slug} className="">
                                                <div className="heading_6 text-textcolor">
                                                    {tags?.title}
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[30%] z-10 w-full">
                        <Image className="w-full " src="/img/Signature.png" alt="Signature" loading="lazy" height={500} width={500} />
                    </div>
                </div>
                {/* <div className="relative">
                    <CardSlider
                        configs={{
                            background: '/img/slide-card-bg.png',
                            pagination: true,
                            height: 600,
                        }}
                    >
                        {popular.map((blog, index) => (
                            <div className="slide-card-item justify-center" key={index}>
                                <div className="col-span-12 md:col-span-4">
                                    <div className="hover-img">
                                        <div className="img-inner">
                                            <Image
                                                className="set-img"
                                                src={BASE_URL + '/storage/' + blog?.featured_img}
                                                alt={blog.title}
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    <div className="slide-des">
                                        <div className="py-2 mb-3">
                                            <div className="mr-auto mb-2 small_text text-textcolor">{blog.categories.map((category) => { return category.name }).join(' | ')}</div>
                                            <div className="medium_text text-textcolor">{blog.title}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardSlider>
                    <div className="absolute t-0 l-0 w-full h-full flex justify-center items-center">
                        <div className="max-w-[293px] absolute z-10 top-8 left-[30%]">
                            <Image className="w-full" src="./img/Topmost.svg" alt="Topmost" loading="lazy" />
                        </div>
                        <div>
                            <Image className="w-full" src="./img/Signature.png" alt="Signature" loading="lazy" />
                        </div>
                    </div>
                </div> */}
                <div className="">
                    <div className="my-0 md:py-8 py-7 mx-auto m-w">
                        <div className="recently-update">
                            <h1 className="sm:max-w-[60%] animate slideInUp heading_2 mb-5 md:mb-6 cursor-text-wrp">
                                We inspire people to love themselves because that love shapes beauty.
                            </h1>
                            <div className="animate slideInUp animate--delay-medium">
                                <Slider
                                    configs={{
                                        sliderPerRow: 4,
                                        sliderPerRowMobile: 2.25,
                                        allowDrag: true,
                                        duration: 400,
                                        auto: false,
                                        autoDuration: 1000,
                                        gap: 30,
                                        gapMobile: 10,
                                        process: true,
                                    }}
                                >
                                    {popular.map((blog, index) => (
                                        <div className="justify-center" key={index}>
                                            <div className="col-span-12 md:col-span-4">
                                                <div className="hover-img">
                                                    <div className="img-inner cursor-pointer" onClick={() => { router.push("/article/" + blog.slug) }}>
                                                        <picture>
                                                            <source srcSet={BASE_URL + '/storage/desktop/' + blog?.featured_img} media="(min-width: 1024px)" />
                                                            <source srcSet={BASE_URL + '/storage/tablet/' + blog?.featured_img} media="(min-width: 767px)" />
                                                            <Image className="set-img" src={BASE_URL + '/storage/mobile/' + blog?.featured_img} alt={blog.title} loading="lazy" height={500} width={500} />
                                                        </picture>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="article-info md:!border-b md:!border-ccc border-b-0 py-2 mb-2">
                                                        <div className="md:flex mb-1">
                                                            <div className="mr-auto small_text">{blog.categories.map((category) => { return category.name }).join(' | ')}</div>
                                                            {/*<div className="small_text">{ formatDate(blog.created_at) }</div>*/}
                                                        </div>
                                                        <div className="medium_text">{blog.title}</div>
                                                    </div>
                                                    <div className="md:flex hidden">
                                                        <div className="cursor-pointer text-link" onClick={() => { router.push("/article/" + blog.slug) }}>Read more</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-0 mx-auto m-w">
                    {/*List subcategorires*/}
                    <div className="flex list-categories md:mb-9 mb-7 justify-center">
                        <div>
                            <div className="flex justify-center">
                                <div className="title animate sm:max-w-[30%] slideInUp heading_3 mb-2 md:mb-6 text-center mw-5">See what we can help you progress</div>
                            </div>

                            <div className="grid grid-cols-12 gap-2 sm:gap-4 animate slideInUp animate--delay-medium">
                                <div className="col-span-12 sm:col-span-3 home-category-card">
                                    <div className="home-category-card-title-wrp px-1 pt-1 sm:px-3 sm:pt-3">
                                        <div className="heading_6">01/</div>
                                        <Link href={'/categories/guides-and-tutorial/usage-guide'} className="">
                                            <div className="heading_5 sm:mt-1 mb-2 sm:mb-4">Usage Guide</div>
                                        </Link>
                                        <div className="sm:hidden body_text  cursor-text-wrp">
                                            Unlock the full potential of your skincare products with comprehensive usage guides and expert tips
                                        </div>
                                    </div>
                                    <div className="aspect-square relative home-category-card-img-wrp">
                                        <div className="hidden sm:block home-category-card-des body_text  mb-5 cursor-text-wrp pt-1 sm:px-3">
                                            Unlock the full potential of your skincare products with comprehensive usage guides and expert tips
                                        </div>
                                        <Link href={'/categories/guides-and-tutorial/usage-guide'} className="sm:absolute w-full h-full bottom-[0]">
                                            <Image
                                                className="home-category-card-img"
                                                src="/img/home/usage guide.png"
                                                alt="Usage Guide"
                                                height={500}
                                                width={500}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-3 home-category-card relative home-category-card-active">
                                    <div className="home-category-card-title-wrp px-1 pt-1 sm:px-3 sm:pt-3">
                                        <div className="heading_6 ">02/</div>
                                        <Link href={'/categories/guides-and-tutorial/nourish-beauty'} className="">
                                            <div className="heading_5  sm:mt-1 mb-2 sm:mb-4">Nourish Beauty</div>
                                        </Link>
                                        <div className="sm:hidden body_text  mt-1 cursor-text-wrp">
                                            Explore a wealth of knowledge for enhancing your skin's radiance and well-being from the inside out
                                        </div>
                                    </div>
                                    <div className="aspect-square relative home-category-card-img-wrp">
                                        <div className="hidden sm:block home-category-card-des body_text  mt-1 mb-5 cursor-text-wrp pt-1 sm:px-3">
                                            Explore a wealth of knowledge for enhancing your skin's radiance and well-being from the inside out
                                        </div>
                                        <Link href={'/categories/guides-and-tutorial/nourish-beauty'} className="absolute w-full h-full bottom-[0]">
                                            <Image
                                                className="home-category-card-img"
                                                src="/img/home/nourish.png"
                                                alt="Nourish Beauty"
                                                height={500}
                                                width={500}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-3 home-category-card relative">
                                    <div className="home-category-card-title-wrp px-1 pt-1 sm:px-3 sm:pt-3">
                                        <div className="heading_6 ">03/</div>
                                        <Link href={'/categories/selfcare-nerd/mental-health'} className="">
                                            <div className="heading_5  sm:mt-1 mb-2 sm:mb-4">Mental Health</div>
                                        </Link>
                                        <div className="sm:hidden body_text  cursor-text-wrp">
                                            Explore strategies to boost mental well-being, from managing stress to enhancing resilience.
                                        </div>
                                    </div>
                                    <div className="aspect-square relative home-category-card-img-wrp">
                                        <div className="hidden sm:block home-category-card-des body_text  mt-1 mb-5 px-1 sm:px-3 cursor-text-wrp">
                                            Explore strategies to boost mental well-being, from managing stress to enhancing resilience.
                                        </div>
                                        <Link href={'/categories/selfcare-nerd/mental-health'} className="absolute w-full h-full bottom-[0]">
                                            <Image
                                                className="absolute home-category-card-img"
                                                src="/img/home/mental health.png"
                                                alt="Mental Health"
                                                height={500}
                                                width={500}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-3 home-category-card relative">
                                    <div className="home-category-card-title-wrp px-1 pt-1 sm:px-3 sm:pt-3">
                                        <div className="heading_6 ">04/</div>
                                        <Link href={'/categories/selfcare-nerd/hair-care'} className="body_text nav-link">
                                            <div className="heading_5  mt-1 mb-2 sm:mb-4">Hair Care</div>
                                        </Link>
                                        <div className="sm:hidden body_text  cursor-text-wrp">
                                            Discover essential tips and solutions for healthier hair, tackling issues like dryness, breakage, and more.
                                        </div>
                                    </div>
                                    <div className="aspect-square relative home-category-card-img-wrp">
                                        <div className="hidden sm:block home-category-card-des body_text  mt-1 mb-5 px-1 sm:px-3 cursor-text-wrp">
                                            Discover essential tips and solutions for healthier hair, tackling issues like dryness, breakage, and more.
                                        </div>
                                        <Link href={'/categories/selfcare-nerd/hair-care'} className="absolute w-full h-full bottom-[0]">
                                            <Image
                                                className="home-category-card-img"
                                                src="/img/home/hair.png"
                                                alt="Hair Care"
                                                height={500}
                                                width={500}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-0 mx-auto md:pb-9 pb-7">
                        <div className="border-y border-solid border-ccc dark:border-999">
                            <div className="md:grid md:grid-cols-12 gap-4">
                                <div className="md:col-span-8 md:pb-6 pb-4 pt-6 pr-4 about-intro md:border-r md:border-solid border-999 !border-ccc">
                                    <div className="flex flex-col h-full">
                                        <div className="heading_2 animate slideInUp animate--delay-medium h-full">
                                            “Start with clear, healthy skin. Nurture your radiance—embrace pure beauty, inside and out”
                                        </div>
                                        <div className="heading_6 md:block hidden animate slideInUp animate--delay-medium">Hello & Welcome!</div>
                                    </div>
                                </div>
                                <div className="md:col-span-4 about-content pt-3 pb-6 md:py-6">
                                    <div className="animate slideInUp animate--delay-medium">Welcome to our skincare sanctuary! Here, we celebrate the journey to radiant skin. Join
                                        us for expert tips, shared experiences, and a community-driven pursuit of beauty and confidence.
                                        Let's embark on a skincare adventure together, where your glow is our priority.</div>
                                    <div className="mt-6">
                                        <Link href={ROUTER.ABOUT}>
                                            <button className="animate slideInUp animate--delay-medium my-out-line-btn dark:border-ccc" type="submit">MORE ABOUT US</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* INGREDIENT SECTION */}
                <div className="md:px-0 mx-auto m-w md:mb-9 mb-7">
                    <div className="md:grid grid-cols-12 gap-4">
                        <div className="col-span-5 animate slideInUp">
                            <Image
                                className=""
                                src="/img/home/ingredient_home.png"
                                alt="Ingredient"
                                height={500}
                                width={500}
                            />
                        </div>
                        <div className="col-span-7 md:p-6 p-5 border-solid border border-ccc dark:border-ccc flex-col flex">
                            <div className="h-full">
                                <div className=" heading_3 animate slideInUp md:mb-4 mb-3">
                                    Empowered Understanding
                                </div>
                                <div className="body_text mr-auto animate slideInUp">
                                    Knowing a product's ingredients lets you use it more effectively and maximize its benefits.
                                </div>
                            </div>
                            <Link href={ROUTER.INGREDIENT}>
                                <div className="md:flex items-center justify-end animate slideInUp">
                                    <div className="mr-2">Explore now</div>
                                    <div>
                                        <Image className="" src="../img/icon/arrow-right-circle.svg" alt="smile" loading="lazy"  height={100} width={100} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <CardSlider
                    configs={{
                        vertical: true,
                        width: 1000,
                        height: 500,
                        isText: true,
                        duration: 3000,
                        background: '/img/homedecor.png',
                    }}
                >
                    <div className="slide-card-item">
                        <div className="heading_2 text-center text-textcolor cursor-text-wrp">“You are imperfect, permanently and inevitably flawed. And you are beautiful”</div>
                        <div className="text-center text-textcolor mt-5 heading_6 cursor-text-wrp">Amy Bloom</div>
                    </div>
                    <div className="slide-card-item heading_1 text-center text-textcolor">
                        <div className="heading_2 text-center text-textcolor cursor-text-wrp">"You yourself, as much as anybody in the entire universe, deserve your love and affection."</div>
                        <div className="text-center text-textcolor mt-5 heading_6 cursor-text-wrp">Buddha</div>
                    </div>
                    <div className="slide-card-item heading_1 text-center text-textcolor">
                        <div className="heading_2 text-center text-textcolor cursor-text-wrp">"I think happiness is what makes you pretty. Period. Happy people are beautiful. They become like a mirror and they reflect that happiness."</div>
                        <div className="text-center text-textcolor mt-5 heading_6 cursor-text-wrp">Drew Barrymore</div>
                    </div>
                    <div className="slide-card-item heading_1 text-center text-textcolor">
                        <div className="heading_2 text-center text-textcolor cursor-text-wrp">“Natural beauty is the best beauty. It radiates from within and doesn't need any alterations.”</div>
                        <div className="text-center text-textcolor mt-5 heading_6 cursor-text-wrp">Radiance Aura Blog</div>
                    </div>
                    <div className="slide-card-item heading_1 text-center text-textcolor">
                        <div className="heading_2 text-center text-textcolor cursor-text-wrp">"The more you praise and celebrate your life, the more there is in life to celebrate."</div>
                        <div className="text-center text-textcolor mt-5 heading_6 cursor-text-wrp">Oprah Winfrey</div>
                    </div>
                </CardSlider>
                <div className="md:px-0 my-0 mx-auto m-w">
                    <div className="md:mt-9 mt-7">
                        
                        <div className="animate slideInUp animate--delay-medium">
                            <Slider
                                configs={{
                                    sliderPerRow: 4,
                                    sliderPerRowMobile: 2.25,
                                    allowDrag: true,
                                    duration: 400,
                                    auto: false,
                                    autoDuration: 1000,
                                    gap: 30,
                                    gapMobile: 10,
                                    process: true,
                                    navigatorTitle: true,
                                    title: <div className="heading_3 mb-4">Related Articles</div>,
                                }}
                            >
                                {newest.map((newest, index) => (
                                    <div className="justify-center" key={index}>
                                        <div className="col-span-12 md:col-span-4">
                                            <div className="hover-img">
                                                <div className="img-inner cursor-pointer" onClick={() => { router.push("/article/" + newest.slug) }}>
                                                <picture>
                                                    <source srcSet={BASE_URL + '/storage/desktop/' + newest?.featured_img} media="(min-width: 1024px)" />
                                                    <source srcSet={BASE_URL + '/storage/tablet/' + newest?.featured_img} media="(min-width: 767px)" />
                                                    <Image className="set-img" src={BASE_URL + '/storage/mobile/' + newest?.featured_img} alt={newest.title} loading="lazy" height={500} width={500} />
                                                </picture>
                                                </div>
                                                <div>
                                                    <div className="article-info py-2 mb-1 md:!border-b md:!border-ccc border-b-0">
                                                        <div className="md:flex mb-1">
                                                            <div className="mr-auto small_text">{newest.categories.map((category) => { return category.name }).join(' | ')}</div>
                                                            {/*<div className="small_text">{ formatDate(newest.created_at) }</div>*/}
                                                        </div>
                                                        <div className="medium_text">{newest.title}</div>
                                                    </div>
                                                    <div className="md:flex hidden">
                                                        <div className="cursor-pointer text-link" onClick={() => { router.push("/article/" + newest.slug) }}>Read more</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>

                {/* OLD SUBSCRIBE */}
                <div className="px-3 my-0 mx-auto m-w pt-4 sm:pt-9">
                    <div className="subscribe-section">
                        <div className="bg-primaryvariant1 p-4 sm:p-5">
                            <div className="flex">
                                <div className="hidden md:block">
                                    <Image className="w-full" src="/img/home/subscribe.png" alt="smile" loading="lazy" height={100} width={100} />
                                </div>
                                <div className="sm:ml-5 text-textcolor flex items-center md:pr-8">
                                    <div>
                                        <div className="animate slideInUp animate--delay-fast mb-3 heading_3 cursor-text-wrp">Subscribe for newsletters</div>
                                        <div className="animate slideInUp animate--delay-medium cursor-text-wrp">
                                            Receive the latest updates straight to your inbox. Get stories, exclusive offers, and promotions when you sign up.
                                        </div>
                                        <div className="mt-4 animate animate--delay-slow slideInUp">
                                            <button
                                                onClick={() => show({
                                                    name: 'newsletters',
                                                    data: {
                                                        message: 'This is a notice modal',
                                                    },
                                                    position: 'right',
                                                    mobilePosition: 'right',
                                                })}
                                                className="px-4 my-btn-pr dark:border-white"
                                                type="submit">
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NEW SUBSCRIBE */}
                {/* <div className="mx-auto m-w pt-8">
                    <div className="md:grid grid-cols-12 gap-5">

                        <div className="col-span-7">

                            <div className="animate slideInUp heading_2 cursor-text-wrp">
                                Never miss out on beauty tips and trends! Stay updated with our latest posts.
                            </div> */}
                {/* <div className="mt-4 animate animate--delay-slow slideInUp">
                                <button
                                    onClick={() => show({
                                        name: 'newsletters',
                                        data: {
                                            message: 'This is a notice modal',
                                        },
                                        position: 'right',
                                        mobilePosition: 'right',
                                    })}
                                    className="px-4 my-btn-pr dark:border-white"
                                    type="submit">
                                    Subscribe
                                </button>
                            </div> */}
                {/* </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-4 md:flex flex-col">
                            
                            <div className="body_text h-full">
                                Enter your email address to receive new posts in your inbox and seasonal newsletters!
                            </div>
                            <div className="w-full flex dark:border-999 dark:focus:border-white focus:border-333 pointer-events-auto border-solid border-b border-ccc focus-visible:outline-none">
                                <input
                                    className="w-full py-1 pr-2 w-full"
                                    placeholder="Join Radiance Aura Newsletters"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    // onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                                    onClick={() => show({
                                        name: 'newsletters',
                                        data: {
                                            message: 'This is a notice modal',
                                        },
                                        position: 'right',
                                        mobilePosition: 'right',
                                    })}
                                />
                                <button
                                    className=""
                                    type="submit"
                                    // onClick={handleSubscribe}
                                    onClick={() => show({
                                        name: 'newsletters',
                                        data: {
                                            message: 'This is a notice modal',
                                        },
                                        position: 'right',
                                        mobilePosition: 'right',
                                    })}
                                >
                                    <Image className="w-full dark:hidden" src="../img/icon/arrow-right-circle.svg" alt="smile" loading="lazy" />
                                    <Image className="w-full hidden dark:block" src="../img/icon/arrow-right-circle-white.svg" alt="smile" loading="lazy" />
                                </button>
                            </div>
                        </div> */}
                {/* </div>
                </div> */}

            </div >
        </>
    )
}

Home.getInitialProps = async ({ req, query }) => {
    if (typeof window != 'undefined') {
        return {
            newestProps: [],
            popularProps: [],
            bannerProps: [],
            isCsr: true,
        }
    }
    try {
        const res = await Promise.all([
            fetch(`${BASE_URL}/api/blogs/newest?limit=10`, { cache: 'force-cache' }),
            fetch(`${BASE_URL}/api/blogs/popular?limit=10`, { cache: 'force-cache' }),
            fetch(`${BASE_URL}/api/blogs/tags/tags?=banner`, { cache: 'force-cache' }),
        ])
        let resData = await Promise.all(res.map(r => r.json()));
        const newest = resData[0].data;
        const popular = resData[1].data;
        const banner = resData[2].data;
        console.log(banner)
        return {
            newestProps: newest || [],
            popularProps: popular || [],
            bannerProps: banner || [],
            isCsr: false,
        }
    } catch (error) {
        return {
            newestProps: [],
            popularProps: [],
            bannerProps: [],
            isCsr: true,
        }
    }
}

export default Home;
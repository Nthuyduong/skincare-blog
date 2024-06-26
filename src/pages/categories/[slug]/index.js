import Link from 'next/link';
import { BASE_URL } from "@utils/apiUtils";
import { useEffect, useState } from 'react';
import { getCategoriesByParentSlugApi, getCategoriesBySlugApi } from '@services/categories';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Categories = ({ categoryProps = [], subCategoriesProps = [], isCsr, slug }) => {
    
    const router = useRouter();

    const [category, setCategories] = useState(categoryProps);
    const [subCategories, setSubCategories] = useState(subCategoriesProps);
    console.log(subCategories);

    useEffect(() => {
        if (isCsr) {
            fetchDataCsr();
        }
    }, [router.asPath]);

    const fetchDataCsr = async () => {
        const res = await Promise.all([
            getCategoriesByParentSlugApi(slug),
            getCategoriesBySlugApi(slug)
        ]);
        setCategories(res[1]?.data || {});
        setSubCategories(res[0]?.data?.results || []);
    }

    const getImagePreview = (url) => {
        if (url) {
            return BASE_URL + '/storage/desktop/' + url;
        }
        return 'https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
    }

    return (
        <>
            <Head>
                <title>{category?.meta_title ?? 'Category'}</title>
                <meta name="description" content={category?.meta_description} />
            </Head>
            <div className="m-w mx-auto my-0">
                <div className="m-w mx-auto">
                    <div className="grid grid-cols-12 pt-60">
                        <div className="col-span-12 md:col-span-7 md:mb-0 mb-3">
                            <h1 className="heading animate slideInUp">{ category.name }</h1>
                        </div>
                        <h3 className="col-span-12 md:col-span-5 animate slideInUp">{ category.description }</h3>
                    </div>
                </div>
                <div className="py-4 md:py-6 m-w mx-auto my-0">
                    <div className="destination-title border-solid border-y border-ccc dark:border-y dark:border-999 py-3">
                        <div className="md:flex md:justify-center">
                            {/*breadcrumb*/}
                            <div className="flex self-center">
                                <ul className="flex">
                                    <li><a href="#">Home</a></li>
                                    <li className="mx-2">/</li>
                                    <li><a href="#">{ category.name }</a></li>
                                </ul>
                            </div>
                            {/*<div className="heading_3 mx-auto">All Destinations</div>*/}
                            {/*Change layout*/}
                            <div className="self-center hidden ml-auto md:flex">
                                <div className="flex justify-center">
                                    <div className="flex des-count pr-3 border-solid border-r border-ccc dark:border-999">
                                        {/* <div className="pr-1">
                                            <img className="icon-sm" src="/img/icon/grid.svg" alt="#" loading="lazy"></img>
                                        </div> */}
                                        <div>4 Categories</div>
                                    </div>
                                    <div className="flex location-count pl-3">
                                        {/* <div className="pr-1">
                                            <img className="icon-sm" src="/img/icon/book-open.svg" alt="#" loading="lazy"></img>
                                        </div> */}
                                        <div>40 Articles</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*all destination show here*/}
                <div className="destination all-destination-cate m-w mx-auto my-0">
                    <div className="grid grid-cols-12 gap-4 md:gap-5">
                        {subCategories.map((subCategory, index) => (
                            <div className="col-span-6 sm:col-span-4 md:col-span-3 destination-cate mb-4" key={index}>
                                <div className="md:block hidden pb-2 heading_6">0{index + 1}/</div>
                                {/*<img className="w-full" src="/img/destination/des2.jpg" alt="smile" loading="lazy"/>*/}
                                <div className="hover-img">
                                    <div className="img-inner">
                                        <Link href={`/categories/${subCategory?.parent?.slug ?? 'sub-des'}/${subCategory.slug}`}>
                                            <img
                                                className="w-full"
                                                src={getImagePreview(subCategory.featured_img)}
                                                alt="smile"
                                                loading="lazy"
                                                height={200}
                                                width={200}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="destination-cate-content">
                                    <div className="flex items-center border-solid border-b border-ccc dark:border-999">
                                        <div className="heading_6 my-3 mr-auto">
                                            <Link href={`/categories/${subCategory?.parent?.slug ?? 'sub-des'}/${subCategory.slug}`}>{subCategory.name}</Link>
                                        </div>
                                        <span>
                                            <img className="icon-ssm w-full hidden dark:block" src="/img/icon/arrow-up-right.svg" alt="smile" loading="lazy"/>
                                            <img className="icon-ssm w-full dark:hidden" src="/img/icon/arrow-up-right-black.svg" alt="smile" loading="lazy"/>
                                        </span>
                                    </div>
                                    <div className="flex more-info pt-2">
                                        <div className="body_text cursor-text-wrp">{ subCategory.description }</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </>
        
    )
}

Categories.getInitialProps = async({ req, query }) => {
    const { slug } = query;
    if (typeof window != 'undefined') {
        return {
            categoryProps: {},
            subCategoriesProps: [],
            isCsr: true,
            slug,
        }
    }
    try {
        const res = await Promise.all([
            fetch(`${BASE_URL}/api/categories/slug/${slug}`),
            fetch(`${BASE_URL}/api/categories/slug/${slug}/childrens`)
        ]);
        let resData = await Promise.all(res.map(r => r.json()));
        const category = resData[0]?.data || {};
        const subCategories = resData[1]?.data?.results || [];

        return {
            categoryProps: category,
            subCategoriesProps: subCategories,
            isCsr: false,
            slug,
        }
    } catch (error) {
        return {
            categoryProps: {},
            subCategoriesProps: [],
            isCsr: true,
            slug,
        }
    }
}

export default Categories;
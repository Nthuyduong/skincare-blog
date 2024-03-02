import Link from 'next/link';
import { BASE_URL } from "@utils/apiUtils";

const Categories = ({ category, subCategories }) => {

    const getImagePreview = (url) => {
        if (url) {
            return BASE_URL + '/storage/desktop/' + url;
        }
        return 'https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
    }

    return (
        <div>
            <div className="container-fluid m-w mx-auto my-0">
                <div className="grid grid-cols-12 pt-60">
                    <div className="col-span-12 md:col-span-7 md:mb-0 mb-3">
                        <div className="heading">{ category.name }</div>
                    </div>
                    <div className="col-span-12 md:col-span-5">{ category.description }</div>
                </div>
            </div>
            <div className="container-fluid p-6 m-w mx-auto my-0">
                <div className="destination-title border-y border-ccc dark:border-y dark:border-ccc py-3">
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
                                <div className="flex des-count pr-3 border-r border-ccc ">
                                    <div className="pr-1">
                                        <img className="icon-sm" src="/img/icon/grid.svg" alt="#" loading="lazy"></img>
                                    </div>
                                    <div>4 Categories</div>
                                </div>
                                <div className="flex location-count pl-3">
                                    <div className="pr-1">
                                        <img className="icon-sm" src="/img/icon/book-open.svg" alt="#" loading="lazy"></img>
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
                    {subCategories.map((subCategory, index) => (
                        <div className="col-span-6 md:col-span-3 destination-cate mb-4" key={index}>
                            <div className="pb-2 heading_6">0{index + 1}/</div>
                            {/*<img className="w-full" src="/img/destination/des2.jpg" alt="smile" loading="lazy"/>*/}
                            <img className="w-full" src={getImagePreview(subCategory.featured_img)} alt="smile" loading="lazy"/>
                            <div className="destination-cate-content">
                                <div className="flex items-center border-b border-ccc dark:border-ccc">
                                    <div className="heading_6 my-1 mr-auto">
                                        <Link href={'/sub-des/' + subCategory.id}>{subCategory.name}</Link>
                                    </div>
                                    <span>
                                        <img className="icon-ssm w-full hidden dark:block" src="/img/icon/arrow-up-right.svg" alt="smile" loading="lazy"/>
                                        <img className="icon-ssm w-full dark:hidden" src="/img/icon/arrow-up-right-black.svg" alt="smile" loading="lazy"/>
                                    </span>
                                </div>
                                <div className="flex more-info pt-2">
                                    <div className="small_text">{ subCategory.description }</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    try {
        const { slug } = query;
        const res = await Promise.all([
            fetch(`${BASE_URL}/api/categories/${slug}`, { cache: 'force-cache' }),
            fetch(`${BASE_URL}/api/categories/${slug}/childrens`, { cache: 'force-cache' })
        ]);
        let resData = await Promise.all(res.map(r => r.json()));
        const category = resData[0]?.data || {};
        const subCategories = resData[1]?.data?.results || [];
        return {
            props: {
                category,
                subCategories
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {
                category: {},
                subCategories: []
            }
        }
    }
}

export default Categories;
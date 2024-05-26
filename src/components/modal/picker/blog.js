import React, { useEffect, useState } from "react";

import { BASE_URL } from "@utils/apiUtils";
import LoadingBlur from '../../common/loading/loadingBlur';
import { 
    fetchBlogPostsApi,
} from "@services/blog";
import SkeletonImage from "@components/common/loading/skeletonImage";
import { useModal } from '@hooks/modal';

const BlogPicker = ({ mode }) => {

    const { addToast } = useModal();

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [paginate, setPaginate] = useState();

    const [selectedPost, setSelectedPost] = useState([]);
    
    useEffect(() => {
        if (posts.length === 0) {
            fetchBlogPosts(1);
        }
    }, []);

    const fetchBlogPosts = async(page) => {
        setLoading(true);
        const res = await fetchBlogPostsApi(page, 12);
        if (res) {
            setPosts([...posts, ...res.results]);
            setPaginate(res.paginate);
        }
        setLoading(false);
    }

    useEffect(() => {
        setSelectedPost([]);
    }, [posts]);

    const handleLoadMore = async() => {
        setLoading(true);
        await fetchBlogPosts(parseInt(paginate.current) + 1);
        setLoading(false);
    }

    const handleSelected = (post) => {
        if (selectedPost.includes(post)) {
            setSelectedPost(selectedPost.filter(item => item !== post));
        } else {
            setSelectedPost([...selectedPost, post]);
        }
    }

    const handleCopy = () => {
        console.log(posts)
        const result = `
            <table width="100%;" style="border-collapse: seperate; border-spacing: 10px; margin: 25px 0">
                <tbody>
                    <tr height="240px">
                        ${selectedPost.map((post, index) => {
                            return `
                                <td colspan="15" style="border:none; text-align:left; vertical-align:top;">
                                    <div>
                                        <img style="width: 100%" src="https://app.radiance-aura.blog/storage/desktop/${encodeURIComponent(post.featured_img)}" alt="" loading="lazy">
                                        <div style="padding-top: 10px">
                                            <div style="font-size: 14px">${post?.categories.map((cate) => cate.name).join(' ')}</div>
                                            <div style="font-weight: bold; font-size: 16px">
                                                ${post?.title}
                                            </div>
                                        </div>
                                    </div>
                                </td>    
                            `
                        }).join('')}
                    </tr>
                </tbody>
            </table>
        `
        navigator.clipboard.writeText(result);
        addToast('Link copied to clipboard', 'success');
    }


    return (
        <div className='image-picker-container'>
            <div className='tab-content flex gap-4'>
                <div className='w-full' style={{maxHeight: "60vh", overflow:"auto"}}>
                    <div className='grid grid-cols-4 gap-4 w-full'>
                        { posts.map((post, index) => (
                            <div 
                                key={index}
                                className={`picker-item ${selectedPost.includes(post) ? 'picker-selected' : ''}`}
                                onClick={() => {
                                    handleSelected(post);
                                }}
                            >
                                <img src={BASE_URL + '/storage/mobile/' + post.featured_img} alt='camera'/>   
                                <div className='text-center'>{post.title}</div> 
                            </div>
                        ))}
                         {loading && (
                            <>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                                    <SkeletonImage key={index} />
                                ))}
                            </>
                        )}
                    </div>
                    { !loading && paginate?.current < paginate?.last ? (
                        <div className='mt-4 flex justify-center'>
                            <button 
                                className='my-btn-pr w-full'
                                onClick={handleLoadMore}
                            >
                                Load more
                            </button>
                        </div>
                    ) : null }
                </div>
            </div>
            <div className='pt-2 border-t-2 flex gap-4 justify-end'>
                { selectedPost.length > 0 ? (
                    <>
                        <div>
                            <button 
                                className='my-btn-pr px-4'
                                onClick={() => {setSelectedPost([])}}
                            >
                                Unselect
                            </button>
                        </div>
                        <div>
                            <button 
                                className='my-btn-pr px-4'
                                onClick={() => {handleCopy()}} 
                            >
                                Copy
                            </button>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
        
    )
}

export default BlogPicker;
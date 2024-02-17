import React, { useState } from 'react';

const ImagePicker = ({ onPick }) => {

    const [featuredImage, setFeaturedImage] = useState('');
    const [tab, setTab] = useState('list');

    const getTabContent = () => {
        switch (tab) {
            case 'list':
                return (
                    <div className='grid grid-cols-8 gap-4'>
                        <div className='picker-item'>
                            <img src='https://app.radiance-aura.blog/storage/desktop/1707801563_guide.png' alt='camera'/>    
                        </div>
                        <div className='picker-item'>
                            <img src='https://app.radiance-aura.blog/storage/desktop/1707801563_guide.png' alt='camera'/>    
                        </div>
                        <div className='picker-item'>
                            <img src='https://app.radiance-aura.blog/storage/desktop/1707801563_guide.png' alt='camera'/>    
                        </div>
                        <div className='picker-item'>
                            <img src='https://app.radiance-aura.blog/storage/desktop/1707801563_guide.png' alt='camera'/>    
                        </div>
                        <div className='picker-item'>
                            <img src='https://app.radiance-aura.blog/storage/desktop/1707801563_guide.png' alt='camera'/>    
                        </div>
                    </div>
                );
            case 'upload':
                return (
                    <div className='flex'>
                        <div className='w-1/2'>
                            <div 
                                className='feature-image-preview cursor-pointer'
                                onClick={() => {
                                    document.getElementById('image-picker-file').click();
                                }}
                            >
                                <img src={'https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'} alt='feature image' />
                            </div>
                            <input 
                                id="image-picker-file" 
                                type='file' 
                                style={{display: "none"}}
                                onChange={(e) => {
                                    setFeaturedImage(e.target.files[0]);
                                }}
                            ></input>
                        </div>
                        <div>
                            <div className='input-wrp'>
                                <div className="mb-1">Alt</div>
                                <div className="search-bar-box">
                                    <input 
                                        name="category-slug"
                                        className="w-full" 
                                        type="text"
                                        placeholder="Enter alt"
                                    />
                                </div>
                            </div>
                            <div className='input-wrp'>
                                <div className="mb-1">Alt</div>
                                <div className="search-bar-box">
                                    <input 
                                        name="category-slug"
                                        className="w-full" 
                                        type="text"
                                        placeholder="Enter alt"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return <></>;
        }
    }

    return (
        <div className='image-picker-container'>
            <div className='tab-header flex gap-8 py-1'>
                <div onClick={() => {setTab('list')}}>List</div>
                <div onClick={() => {setTab('upload')}}>Upload</div>
            </div>
            <div className='tab-content'>
                {getTabContent()}
            </div>
            
        </div>
        
    )
}

export default ImagePicker;
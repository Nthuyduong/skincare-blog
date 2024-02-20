import React, { useState } from 'react';

const Contact = () => {
    
    return (
        <div className='grid grid-cols-12' style={{ gap: '1vw', padding: '0 5vw'}}>
            <div className="col-span-6 pt-4" style={{fontSize: "5vw"}}>
                <div className='grid grid-cols-6 '>
                    <div className='col-span-4'>
                        WELCOME
                    </div>
                </div>
                <div className='grid grid-cols-6 ' style={{ gap: '1vw'}}>
                    <div className='col-span-1'>
                    </div>
                    <div className='col-span-5'>
                        my CREAYTIVE
                    </div>
                </div>
                <div className='grid grid-cols-6 ' style={{ gap: '1vw'}}>
                    <div className='col-span-2 pt-8'>
                        <img className='w-full' src='https://app.radiance-aura.blog/storage/desktop/1707801563_guide.png' alt='camera'/>
                    </div>
                    <div className='col-span-4'>
                        <img className='w-full' src='https://app.radiance-aura.blog/storage/desktop/1707801655_routine.png' alt='camera'/>
                    </div>
                </div>
            </div>
            <div className="col-span-6">
                <div className='grid grid-cols-6 ' style={{ gap: '1vw'}}>
                    <div className='col-span-4 pt-4' style={{fontSize: "5vw"}}>
                        to <br/>DESIGN<br/>WORLD
                    </div>
                    <div className='col-span-2'>
                        <img className='w-full' src='https://app.radiance-aura.blog/storage/desktop/1707801577_sun.png' alt='camera'/>
                    </div>
                </div>
                <div className='grid grid-cols-6 pt-4' style={{ fontSize: "1vw", gap: '1vw'}}>
                    <div className='col-span-2 flex justify-center items-center'>
                        <img className='w-full' src='https://app.radiance-aura.blog/storage/desktop/1707801577_sun.png' alt='camera'/>
                    </div>
                    <div className='col-span-4 flex justify-center items-center'>
                        Bèo dạt mây trôi, chốn xa xôi. Em ơi anh vẫn đợi bèo dạt. Mây… trôi chim ca tang tính tình, cá lội. Ngẫm một tin trông, hai tin đợi, ba bốn tin chờ.Sao chẳng thấy đâu. 
                        Một mình sang sông suốt đêm thâu, Em ơi sông đã ngả ngang đầu. Thương nhớ… ai sương rơi đêm sắp tàn, trăng tàn. Cành tre đưa trước ngõ, làn gió la đà. Em vẫn mong chờ,
                        sao chẳng thấy đâu. Ngày ngày ra trông chốn xa xăm, Em ơi anh vẫn đợi mỏi mòn. Ra… trông sao xa tang tính tình cá vờn, Người đi xa có nhớ, Là nhớ ai ngồi trông cánh chim trời, sao chẳng thấy đâu.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
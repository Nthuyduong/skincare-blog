import React, { useEffect } from "react";

const Skintype = () => {

    // FAQs
    const faqData = [
        {
            question: 'What is your skin type?',
            answer:
                'Five years ago, my skin was a combination of oily, prone to acne with hidden and slight inflammatory acne,' +
                'and had enlarged pores. Presently, due to skincare product use, my skin is combination dry, especially during winter,' +
                'with occasional very dry spells. In warmer weather, the T-zone and cheeks can get oily. Thanks to a consistent' +
                'and suitable skincare routine, acne occurrences are rare, typically limited to my menstrual period or' +
                'periods of disrupted sleep and nutrition.',
        },
        {
            question: 'Recommend products to treat you dry skin',
            answer: 'Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque' +
                'vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor',
        },
        {
            question: 'Did you have acne in the pass?',
            answer: 'Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque' +
                'vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor',
        },
        {
            question: 'How did you go about treating your acne?',
            answer:
                'To address my acne, I ensured my skin stayed clean by washing it gently twice a day with a mild cleanser.' +
                'Prioritizing sufficient sleep and including ample fruits and vegetables in my diet while reducing sugar and' +
                'dairy intake were crucial steps. Hydration played a significant role, so I made a point to drink plenty of' +
                'water daily. Additionally, I incorporated targeted acne treatment products and managed stress levels.' +
                'Staying active with regular workouts, like biking and morning runs, was also part of my routine. And dont' +
                'forget, staying happy is essential—it not only contributes to inner beauty but also reflects on your skin' +
                'health positively.',
        },
        {
            question: 'What skincare product is a must-have for you?',
            answer:
                'Sunscreen is my go-to skincare essential that I never skip. It is crucial for protecting my skin from harmful UV rays, preventing sunburn, premature aging, and reducing the risk of skin cancer. I apply it every day, rain or shine, to keep my skin healthy and protected.',
        },
        {
            question: 'What is your current skincare routine?',
            answer:
                'vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor',
        },
        {
            question: 'Do you alter your skincare routine with each changing season?',
            answer: 'Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat quisque' +
                'vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor',
        },
        {
            question: 'An alternative approach to attaining radiant and healthy skin',
            answer:
                'Achieving healthy and beautiful skin involves adopting some essential habits. Firstly, ensure you get enough sleep,' +
                'ideally around 7-9 hours each night, as it allows your skin to regenerate and repair. Make sure to include plenty of' +
                'vegetables and fruits in your diet while cutting down on sugar and fast food, as these provide vital nutrients for ' +
                'skin health. Keep yourself hydrated by drinking plenty of water—aim for around 15.5 cups' +
                'for males and 11.5 cups for females daily—to maintain skin hydration and elasticity. Lastly, prioritize happiness ' +
                'and relaxation, as stress can negatively affect skin health, leading to breakouts and dullness.',
        }
    ];

    const faqElements = faqData.map((faq, index) => (
        <div key={index} className={`my-collapse dark:border-b dark:border-ccc`}>
            <div className="mb-1 question-container flex">
                <div className="question mr-auto medium_text">
                    {faq.question}
                </div>
                <div className="btn-question flex justify-center items-center">
                    <svg role="presentation" focusable="false" width="12" height="9" className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
                    </svg>
                </div>
            </div>
            <div className={`content-container`}>
                <p>{faq.answer}</p>
            </div>
        </div>
    ));
    return (
        <div className="skintype-page md:pt-7">
            <div className="skintype-inner">
                <div className="animate slideInUp animate--delay-fast md:grid md:grid-cols-12 gap-5">
                    <div className="md:col-span-4"></div>
                    <div className="md:col-span-3">
                        <img className="w-full" src="./img/skintype/banner1.jpg" alt="smile" loading="lazy" />
                    </div>
                    <div className="md:col-span-1 md:flex hidden items-center">
                        <img className="w-full" src="./img/skintype/banner2.jpg" alt="smile" loading="lazy" />
                    </div>
                    <div className="md:col-span-4"></div>
                </div>
                <div className="pt-5 head-content md:relative -top-0 md:-top-8">
                    <div className="text-center mb-4">
                        <div className="heading text-center my-3 animate slideInUp animate--delay-fast">Skin type & History</div>
                        <div className="heading_4 animate slideInUp animate--delay-medium">It’s All About Me</div>
                    </div>
                    <div className="w-1/6 h-px bg-ccc !bg-ccc mx-auto mb-4 animate slideInUp animate--delay-slow"></div>
                    <div className="md:grid md:grid-cols-12">
                        <div className="md:col-span-3"></div>
                        <div className="md:col-span-6 heading_6 flex justify-center">
                            <div className="max-w-screen-sm text-center animate slideInUp animate--delay-slow">Sharing my skincare journey from the past to the present, along with my routine. I hope it
                                provides helpful insights for you!</div>
                        </div>
                        <div className="md:col-span-3"></div>
                    </div>
                </div>
            </div>
            <div className="m-w mx-auto my-0">
                <div className="mt-5 skin-bar dark:border-ccc pb-3">
                    <div className="flex">
                        <div className="mr-auto">Scroll to explore</div>
                        <div className="">
                            <img className="h-4" src="./img/icon/chevron-down-black.svg" alt="smile" loading="lazy" />
                        </div>
                    </div>
                </div>
                <div className="mt-5 all-faq">
                    <div className="md:grid md:grid-cols-12 gap-5">
                        <div className="md:col-span-4 md:border-none border border-ccc">
                            <div className="md:pt-4 md:p-0 p-3 md:pr-5 text-center md:text-left">
                                <img className="w-full mb-5" src="./img/skintype/help.jpg" alt="smile" loading="lazy" />
                                <div className="heading_4 mb-3">Need More Help?</div>
                                <div>Are you interested in collaborating? Do you want to be a part of us? Join with us now!</div>
                                <div className="mt-4">
                                    <button className="w-full my-out-line-btn dark:border-ccc" type="submit">Contact us</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-8">
                            <div className="pt-4">
                                {faqElements}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skintype;
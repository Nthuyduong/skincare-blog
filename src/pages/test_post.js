import React from "react";

const testpost = () => {
    return(
        <div className="article-single-post">
            <div className="test-review-page w-full">
                {/*website banner*/}
                <div className="md:block hidden review-banner w-full">
                    <div className="relative">
                        <div className="container-fluid banner-left dark:text-black m-w mx-auto">
                            <div className="grid grid-cols-12">
                                <div className="col-span-5">
                                    {/*breadcrumb*/}
                                    <div className="mb-3 my-breadcrumb">
                                        <ul className="flex">
                                            <li><a href="#">Home</a></li>
                                            <li className="mx-2">/</li>
                                            <li><a href="#">Skincare Nerd</a></li>
                                            <li className="mx-2">/</li>
                                            <li><a href="#">Nuturish</a></li>
                                        </ul>
                                    </div>
                                    <div className="heading_2 mb-2">Drinking Water and Improving Skin</div>
                                    <div className="medium_text mb-4">Uncover the secret to daily beautiful, radiant skin:
                                        happiness. Explore how joy transforms your beauty routine, embracing your natural glow with each passing day</div>
                                    <div className="small_text">Writen by: Nthduong</div>
                                    <div className="small_text my-1">Publish date: 16/01/2024</div>
                                    <div className="small_text">About 10 minutes to read</div>
                                    <div className="medium_text mt-4">Is this article helpful?</div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-right">
                            <img className="w-full" src="/img/article/waterbanner.jpg" alt="smile" loading="lazy"/>
                        </div>
                    </div>
                </div>
                {/*Mobile banner*/}
                <div className="md:hidden block">
                    <div className="banner-top py-4 bg-primary text-black">
                        <div className="container-fluid">
                            {/*breadcrumb*/}
                            <div className="mb-3 my-breadcrumb">
                                <ul className="flex">
                                    <li><a href="#">Home</a></li>
                                    <li className="mx-2">/</li>
                                    <li><a href="#">Skincare Nerd</a></li>
                                    <li className="mx-2">/</li>
                                    <li><a href="#">Nuturish</a></li>
                                </ul>
                            </div>
                            <div className="heading_2 mb-2">Drinking Water and Improving Skin</div>
                            <div className="medium_text mb-4">Uncover the secret to daily beautiful, radiant skin:
                                happiness. Explore how joy transforms your beauty routine, embracing your natural glow with each passing day</div>
                            <div className="small_text">Writen by: Nthduong</div>
                            <div className="small_text my-1">Publish date: 16/01/2024</div>
                            <div className="small_text">About 10 minutes to read</div>
                            <div className="medium_text mt-4">Is this article helpful?</div>
                        </div>
                    </div>
                    <div className="banner-bottom">
                        <img className="w-full" src="/img/article/waterbanner.jpg" alt="smile" loading="lazy"/>
                    </div>
                </div>
            </div>
            <div className="m-w mx-auto my-0 container-fluid">
                <div className="article-out">
                    <div className="article-summary mb-4">
                        <div className="font-medium mb-2">
                            How much water do you usually drink in a day? If you're not drinking at least eight full
                            glasses, it could be a significant issue. Maintaining proper hydration is crucial for
                            overall health. Water not only plays a key role in digestion and circulation but is also
                            essential for the health and beauty of your skin
                        </div>
                        <div className="font-medium">
                            Drinking enough water benefits your body from the inside out, making it one of the simplest
                            and most effective beauty treatments you can do. While increasing your water intake may not
                            replace all your favorite beauty products, it can certainly make a positive difference for your skin.
                        </div>
                    </div>
                    {/*menu*/}
                    <div className="catalog w-5/6">
                        <div className="list dark:!border-999">
                            <div className="list-title heading_6 mb-3">In this post</div>
                            <div className="all-list">
                                {/* table of content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-article w-full">
                <div className="main-article w-full">
                    <div className="container-fluid m-w mx-auto my-0">
                        <div>
                            <h2 className="heading_2 mb-4">What Does It Mean for Skin to Be Healthy?</h2>
                            <div className="mb-2">
                                Envision someone with vibrant, healthy skin. Picture its smooth texture and imagine
                                the feeling of touching it. Consider how it would appear even in challenging lighting conditions.
                            </div>
                            <div>
                                Healthy skin is primarily characterized by clarity and smoothness. Conditions like acne
                                can arise when pores are blocked, trapping excessive oil within the skin. While various
                                factors may contribute to this oil buildup, maintaining an effective skincare routine can
                                typically balance oils and prevent breakouts.
                            </div>
                            <div className="grid grid-cols-8 gap-4 mt-4 md:mt-7">
                                <div className="col-span-8 md:col-span-4">
                                    <img className="w-full" src="/img/article/food1.jpg" alt="smile" loading="lazy"/>
                                </div>
                                <div className="col-span-8 md:col-span-4 flex items-center">
                                    <div className="">
                                        <div className="mb-2">
                                            However, healthy skin goes beyond being clear and smooth; it exudes an inner radiance.
                                            Achieving all aspects of healthy skin requires more than regular face washing
                                            and sunscreen application
                                        </div>
                                        <div>
                                            That radiant glow comes from a healthy body within. In order to support internal
                                            health and look and feel your best, you should incorporate the best foods for
                                            skin health into your diet regularly, prioritize sleep, minimize daily stressors, and drink plenty of water.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 md:pt-7">
                        <div className="article-content">
                            <div className="m-w mx-auto my-0 container-fluid pb-5 md:pb-7">
                                <div className="mb-4">
                                    <h2 className="heading_2 mb-4">What Can Affect Skin Health?</h2>
                                    <div>
                                        Getting clear and radiant skin isn't always easy because your skin's health can be
                                        influenced by many factors. If you have ongoing skin problems, it's a good idea to
                                        see a dermatologist for specialized advice. However, there are common reasons for
                                        poor skin health, and being aware of them can help you make healthier choices for
                                        your skin.
                                    </div>
                                </div>
                                <div>
                                    <div className="">
                                        <h3 className="mb-2 heading_5">1/ Diet</h3>
                                        <div>
                                            The condition of your skin is more influenced by your diet than you might realize.
                                            In general, natural foods are better for skin health, while processed foods can lead to clogged pores and a dull complexion.
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="mb-2 heading_5">2/ Environment</h3>
                                        <div>
                                            Your skin health is significantly influenced by your living environment. If
                                            you reside in a city center with high pollution levels, it can lead to breakouts
                                            and premature aging. Additionally, sunny regions with consistent high UV
                                            exposure may increase the risk of sun damage.
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <h3 className="mb-2 heading_5">3/ Stress</h3>
                                        <div>
                                            Elevated stress levels can negatively impact your body, including your skin.
                                            Busy periods at work or school may be linked to breakouts or a lack of skin
                                            radiance, indicating stress-related effects.
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3 className="mb-2 heading_5">4/ Genetics</h3>
                                        <div>
                                            Your genetic makeup plays a crucial role in determining your skin's appearance.
                                            While some individuals rarely experience blemishes, regardless of their lifestyles,
                                            others may face severe acne despite maintaining a healthy diet and skincare
                                            routine. In cases of unavoidable genetic factors, a dermatologist might prescribe
                                            specialized acne medication for comprehensive care.
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="mb-2 heading_5">5/ Sun explore</h3>
                                        <div>
                                            Prolonged sun exposure poses risks to your skin. The sun emits UV rays that
                                            accelerate the formation of sunspots and wrinkles. While sunscreen offers
                                            protection, minimizing direct sun exposure remains one of the most effective
                                            ways to prevent premature signs of aging.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-4 md:py-7 bg-primary">
                                <div className="m-w mx-auto my-0 container-fluid text-black">
                                    <div>
                                        <h2 className="heading_2 mb-4">Best Foods for Skin Health: Get Healthy Skin Through Your Diet</h2>
                                        <div className="">
                                            Your diet plays a crucial role in supporting healthy skin. A balanced and diverse
                                            diet, rich in nutritious foods, not only enhances your skin but also improves your
                                            overall health. The nutrients you consume benefit all your organs, with priority
                                            given to those essential for survival. As a result, the skin often receives
                                            what's left after sustaining vital organs.
                                        </div>
                                        <div className="my-2">
                                            If your diet lacks the right balance of macro and micronutrients, your skin may
                                            not receive the necessary support. That's why intentionally incorporating a variety
                                            of healthy foods into your diet can significantly impact the appearance and
                                            texture of your skin.
                                        </div>
                                        <div className="">
                                            Ready to learn about the best foods for healthy and long-lasting skin? These foods
                                            don't just benefit your skin but also support other internal systems like digestion,
                                            immunity, brain function, and circulation. The key is to include them in your diet
                                            regularly so that your entire body, including your skin, can reap the rewards.
                                        </div>
                                        <div className="mt-2">
                                            Some of the top foods for your skin are easy to find and share a common nutrient
                                            found in many fruits and vegetables: vitamin C. This micronutrient is a key component
                                            in a variety of foods that contribute to skin health.
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-8 gap-4 md:pt-7">
                                        <div className="col-span-8 md:col-span-4">
                                            <img className="w-full" src="/img/article/food2.jpg" alt="smile" loading="lazy"/>
                                        </div>
                                        <div className="col-span-8 md:col-span-4 flex items-center">
                                            <div>
                                                <div className="mb-3">Try to include some of these sources of vitamin C in your diet such as:</div>
                                                <ul className="flex">
                                                    <li className="border-r border-000 pr-3">Açaí</li>
                                                    <li className="border-r border-000 px-3">Berries</li>
                                                    <li className="border-r border-000 px-3">Strawberries</li>
                                                    <li className="pl-3">Kiwis</li>
                                                </ul>
                                                <ul className="flex mt-3">
                                                    <li className="border-r border-000 pr-3">Broccoli</li>
                                                    <li className="border-r border-000 px-3">Carrots</li>
                                                    <li className="border-r border-000 px-3">Sweet potatoes</li>
                                                    <li className="pl-3">Orange</li>
                                                </ul>
                                                <div className="mt-4">
                                                    Vitamin C is a common antioxidant that can prevent damage caused by free
                                                    radicals in the body. Free radical damage often shows up as dull, rough,
                                                    or blemished skin. Consuming more vitamin C and other antioxidants can
                                                    help reverse this damage and support bright, supple skin.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid m-w mx-auto my-0 pt-7">
                                <div className="">
                                    <h3 className="mb-2 heading_5">1/ Leafy Greens</h3>
                                    <div>
                                        <div className="mb-2">
                                            Leafy greens such as kale, spinach, and collard greens contribute to radiant
                                            skin. Apart from antioxidants, these greens are rich in essential vitamins
                                            and minerals like iron, folate, and vitamin A. The consumption of leafy
                                            greens supports regular cell turnover, ensuring the removal of old or
                                            damaged cells, which are then replaced by new ones.
                                        </div>
                                        <div>
                                            An excess of old or dead cells can often result in dull or lackluster
                                            skin. Incorporating leafy greens into your diet, coupled with regular
                                            exfoliation, aids in the removal of these cells, providing your skin
                                            with a fresh and bright appearance.
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-8 md:pt-7 pt-3 gap-4">
                                    <div className="col-span-8 md:col-span-4 flex items-center">
                                        <div>
                                            <div className="mb-3">
                                                <h3 className="mb-2 heading_5">2/ Seeds and Nuts</h3>
                                                <div className="mb-2">
                                                    Nuts and seeds are rich sources of omega-3 fatty acids, known to be
                                                    associated with reduced fine lines and wrinkles when included regularly
                                                    in conjunction with skincare routines. Moreover, the beneficial fats
                                                    present in walnuts, chia seeds, hemp seeds, flaxseeds, and similar foods
                                                    may provide a protective barrier against UV damage to the skin.
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 heading_5">3/ Legumes</h3>
                                                <div className="mb-2">
                                                    Legumes encompass various foods, with lentils and beans being the most
                                                    prevalent. These options are rich in zinc, known for its anti-inflammatory
                                                    properties. If your skin problems stem from inflammation, incorporating
                                                    more zinc into your diet may assist in alleviating your symptoms.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-8 md:col-span-4">
                                        <img className="w-full" src="/img/article/food3.jpg" alt="smile" loading="lazy"/>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="mb-2 heading_5">4/ Salmon</h3>
                                    <div>
                                        Salmon is not just tasty but also a great choice for achieving radiant and soft
                                        skin. It's loaded with antioxidants, anti-inflammatory agents, and healthy fats
                                        that protect your skin from environmental damage. Whenever possible, go for wild-caught
                                        salmon as it tends to have more omega-3s, enhancing its skin-boosting benefits.
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="mb-2 heading_5">5/ Green Tea</h3>
                                    <div>
                                        Green tea isn't just good for your overall health; it does wonders for your skin
                                        too. Packed with polyphenols, it has antioxidants and anti-inflammatory properties
                                        that make your skin smoother, clearer, and less irritated. On top of that, green
                                        tea has natural vitamin K, which can help diminish puffiness and dark circles
                                        under your eyes.
                                    </div>
                                </div>
                                <div className="pt-5 md:pt-7">
                                    <h2 className="heading_2 mb-4">How to Incorporate the Best Foods for Skin Into Your Diet</h2>
                                    <div className="mb-4">
                                        Knowing the best foods for healthy skin is one thing, but incorporating them into
                                        your routine can be a challenge. Fortunately, making healthy choices doesn't have
                                        to be dull or unappetizing, especially with Clean Juice. Here are some easy and
                                        tasty ways to add more skin-boosting foods to your diet and achieve that radiant
                                        glow you desire.
                                    </div>
                                    <div className="grid grid-cols-8 gap-4">
                                        <div className="col-span-8 md:col-span-4">
                                            <img className="w-full" src="/img/article/food4.jpg" alt="smile" loading="lazy"/>
                                        </div>
                                        <div className="col-span-8 md:col-span-4 flex items-center">
                                            <div>
                                                <div className="mb-3">
                                                    <h3 className="mb-2 heading_5">1/ Cold-pressed juices</h3>
                                                    <div className="">
                                                        Cold-pressed juices, packed with skin-friendly ingredients like leafy
                                                        greens and vitamin C-rich fruits and veggies, offer a convenient on-the-go
                                                        option. With Clean Juice, you can either create a personalized juice
                                                        cleanse to meet your specific goals or choose from their expertly crafted
                                                        cleanses. As you aim for better skin health, you might also enjoy additional
                                                        perks like improved digestion, increased energy, a stronger immune
                                                        system, and more.
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="mb-2 heading_5">2/ Smoothies</h3>
                                                    <div className="">
                                                        Cold-pressed juices, packed with skin-friendly ingredients like leafy
                                                        greens and vitamin C-rich fruits and veggies, offer a convenient on-the-go
                                                        option. With Clean Juice, you can either create a personalized juice
                                                        cleanse to meet your specific goals or choose from their expertly crafted
                                                        cleanses. As you aim for better skin health, you might also enjoy additional
                                                        perks like improved digestion, increased energy, a stronger immune
                                                        system, and more.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 pt-3 md:pt-7">
                                        <h3 className="mb-2 heading_5">3/ Acai</h3>
                                        <div className="">
                                            Acai is a nutrient-packed berry that's a fantastic source of vitamin C,
                                            essential for radiant skin. Enjoying an açaí bowl gives you the goodness of
                                            açaí in a sorbet-like consistency, topped with delicious and health-boosting
                                            ingredients. Clean Juice's açaí bowls, with toppings like bananas, strawberries,
                                            nuts, and seeds, provide a satisfying blend of smoothness and crunch. It's
                                            like treating yourself to a bowl of frozen yogurt, leaving you feeling great,
                                            and your body appreciative of the essential nutrients.
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 heading_5">3/ Salads</h3>
                                        <div className="">
                                            Blending health-boosting superfoods into juices, smoothies, and bowls is
                                            delicious and enjoyable, but what about those moments when you're in the mood
                                            for a classic salad? Begin with a foundation of leafy greens and incorporate
                                            an array of toppings like nuts, seeds, a protein source, and a dressing made
                                            with omega-3-rich olive oil. In no time, you'll have a nutrient-packed and
                                            delightful meal that not only promotes beautiful skin but also contributes
                                            to various aspects of good health.
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 md:pt-7">
                                    <div className="md:pb-0 pb-4">
                                        <h2 className="heading_2 mb-3">More Ways to Support Healthy Skin</h2>
                                        <div className="">
                                            Incorporating the finest foods for skin health into your diet is a surefire
                                            way to enhance both your appearance and well-being. To bolster the impact of
                                            these dietary changes, remember to adopt additional beneficial habits for
                                            achieving healthier, softer skin.
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-8 gap-4 md:pt-7">
                                        <div className="col-span-8 md:col-span-4 flex items-center">
                                            <div>
                                                <div>
                                                    <h3 className="mb-2 heading_5">1/ Drink Lots of Water</h3>
                                                    <div className="">
                                                        Drinking enough water is vital for overall bodily functions, and it plays a
                                                        key role in achieving clear skin. Increase your water intake to promote
                                                        blemish-free and smoother skin.
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h3 className="mb-3 heading_5">2/ Get Plenty of Sleep</h3>
                                                    <div className="">
                                                        Getting a good night's sleep is crucial for allowing your body to
                                                        recover from busy days. If you find yourself getting only five or six
                                                        hours of sleep each night, you might notice puffiness and discoloration
                                                        in your skin. Aim for seven to nine hours of sleep every night to
                                                        help you look fresh and well-rested.
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <h3 className="mb-2 heading_5">3/ Cut Back on Tobacco and Alcohol</h3>
                                                    <div className="">
                                                        Regular use of tobacco and alcohol is commonly associated with various
                                                        indicators of poor health, including premature skin aging. Scale back
                                                        on these habits to promote a more youthful appearance for your skin.
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <h3 className="mb-2 heading_5">4/ Create a Skin Care Routine</h3>
                                                    <div className="">
                                                        Your skin is special, so your skincare routine should be too. Find a
                                                        routine that suits you, including elements like face washing, exfoliating,
                                                        and moisturizing. And remember to always use SPF sunscreen!
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-8 md:col-span-4">
                                            <img className="w-full" src="/img/article/food5.jpg" alt="smile" loading="lazy"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid m-w mx-auto my-0 flex helpful-rate mt-5">
                    <div className="flex w-full pt-3 border-t border-ccc">
                        <div className="medium_text mr-3">
                            <a href="#">Was this helpful?</a>
                        </div>
                        <div className="flex items-center">
                            <div className="thumb mr-3">
                                <img className="icon-ssm" src="/img/icon/thumbs-up.svg" alt="smile" loading="lazy"/>
                            </div>
                            <div className="thumb">
                                <img className="icon-ssm" src="/img/icon/thumbs-down.svg" alt="smile" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default testpost;
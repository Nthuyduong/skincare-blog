import React from "react";
import { useState } from "react";
import { useApp } from "@hooks/useApp";
import { subscribeApi } from "@services/app";

const NewslettersModal = () => {

    const { subscribe } = useApp();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('')

    const checkEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    async function handleSubscribe() {
        setError(null);
        let errorTmp = {
            email: ''
        };
        let isError = false;
        if (!email) {
            errorTmp.email = 'Email is required';
            isError = true;
        }
        if (!checkEmail(email)) {
            errorTmp.email = 'Email is invalid';
            isError = true;
        }
        if (isError) {
            setError(errorTmp);
            return;
        };

        const res = await subscribeApi(name, email);
        if (res.status) {
            setStatus('success');
            setMessage('Hello ' + name + '! ' + 'Thanks you for join our newsletter! Welcome to Radiance Aura Home.')
        } else {
            setStatus('fail');
            setMessage('Error')
        }
    }

    return (
        <div className="newsletters]">
            <div className="heading_4 mb-3 mt-7 text-textcolor">Join our Newsletter</div>
            <div className="mb-5 text-textcolor">Enter your email address to receive new posts in your inbox and seasonal newsletters!</div>
            <div>
                {status != 'success' ? (
                    <>
                        <div className="mb-3 w-full flex">
                            <input
                                className="w-full py-1 pr-2 dark:border-999 dark:focus:border-white focus:border-333 pointer-events-auto border-solid border-b border-ccc focus-visible:outline-none"
                                placeholder="Your name"
                                onChange={(e) => setName(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                            />
                        </div>
                        <div className="w-full flex">
                            <input
                                className="relative w-full py-1 pr-2 dark:border-999 dark:focus:border-white focus:border-333 pointer-events-auto border-solid border-b border-ccc focus-visible:outline-none"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                            />

                            <button
                                className="absolute right-[10%]"
                                type="submit"
                                onClick={handleSubscribe}
                            >
                                <img className="w-full dark:hidden" src="../img/icon/arrow-right-circle.svg" alt="smile" loading="lazy" />
                                <img className="w-full hidden dark:block" src="../img/icon/arrow-right-circle-white.svg" alt="smile" loading="lazy" />
                            </button>
                            
                        </div>
                        {error?.email && <div className="mt-1 small_text text-red mb-3">{error?.email}</div>}
                        <div>{message}</div>
                    </>
                ) : (
                    <div>{message}</div>
                )}
            </div>

        </div>
    )
}

export default NewslettersModal;
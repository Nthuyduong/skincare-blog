import React from "react";
import { useState } from "react";
import { useApp } from "@hooks/useApp";

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
            setMessage('Hello' + {name} + '! ' + 'Thanks you for join our newsletter! Welcome to Radiance Aura Home.')
        } else {
            setStatus('fail');
            setStatus('Error')
        }
    }

    return (
        <div className="newsletters]">
            <div className="heading_4 mb-3 mt-7">Join our Newsletter</div>
            <div className="mb-5">Enter your email address to receive new posts in your inbox and seasonal newsletters!</div>
            <div>
                <div className="mb-3 w-full flex dark:border-999 dark:focus:border-white focus:border-333 pointer-events-auto border-solid border-b border-ccc focus-visible:outline-none">
                    <input
                        className="w-full py-1 pr-2 w-full"
                        placeholder="Your name"
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                    />
                </div>
                <div className="w-full flex dark:border-999 dark:focus:border-white focus:border-333 pointer-events-auto border-solid border-b border-ccc focus-visible:outline-none">
                    <input
                        className="w-full py-1 pr-2 w-full"
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                    />
                    <button
                        className=""
                        type="submit"
                        onClick={handleSubscribe}
                    >
                        <img className="w-full dark:hidden" src="../img/icon/arrow-right-circle.svg" alt="smile" loading="lazy" />
                        <img className="w-full hidden dark:block" src="../img/icon/arrow-right-circle-white.svg" alt="smile" loading="lazy" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default NewslettersModal;
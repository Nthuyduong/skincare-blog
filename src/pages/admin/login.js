import { useRef, useState } from "react";
import { useAdmin } from '@hooks/useAdmin';

const Adminlogin = () => {

    const { login } = useAdmin();

    const tabsRef = useRef([
        { title: 'Sign in', content: 'Hello, Welcome back!' },
        { title: 'Forgot password', content: 'Forgot your password?' }
    ]);

    const [activeTab, setActiveTab] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    //hàm map để thực hiện lặp qua các mảng
    const renderTabs = () => {
        return tabsRef.current.map((tab, index) => (
            <div
                key={index}
                onClick={() => handleTabClick(index)}
                className={`my-tabs text-center py-2 px-4 ${activeTab === index ? 'active' : ''}`}
            >
                {tab.title}
            </div>
        ));
    };

    const handleLogin = () => {
        console.log(email);
        console.log(password);
        login(email, password)
    }


    return(
        <div className="items-center flex h-screen">
            <div className="admin-login w-full pb-9">
                <div className="">
                    <div className="flex justify-center tabs-container mb-6">
                        {renderTabs()}
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-3"></div>
                        <div className="col-span-6">
                            <div className="tab-content mt-4">
                                <div className="tabs-title heading_1 flex justify-center mb-6">
                                    {tabsRef.current[activeTab].content}
                                </div>
                                {activeTab === 0 && (
                                    <div className="tabs-subtitle">
                                        <div className="flex flex-col">
                                            <label>Email address *</label>
                                            <input
                                                className="admin-inpu"
                                                type="text"
                                                onChange={(e) => {setEmail(e.target.value)}}
                                                value={email}
                                                required/>
                                        </div>
                                        <div className="flex flex-col mt-4 mb-6">
                                            <label>Password *</label>
                                            <input
                                                className="admin-inpu"
                                                type="password"
                                                onChange={(e) => {setPassword(e.target.value)}}
                                                value={password}
                                                required/>
                                        </div>
                                        <button onClick={() => {handleLogin()}} className="w-full my-btn-pr" type="subit">Sign in</button>
                                    </div>
                                )}
                                {activeTab === 1 && (
                                    <div className="tabs-subtitle">
                                        <div className="flex flex-col mb-6">
                                            <label>Email address *</label>
                                            <input className="admin-inpu" type="text" required/>
                                        </div>
                                        <button className="w-full my-btn-pr" type="subit">Submit</button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-span-3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Adminlogin;
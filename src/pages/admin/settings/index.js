import React, { useState } from "react";
import MailSubscriber from "../../../components/view/settings/MailSubscriber";
import MailNotication from "../../../components/view/settings/MailNotication";
import MailContact from "../../../components/view/settings/MailContact";
import LibraryIcon from "../../../components/common/libraryIcon";

const tabs = [
    {
        name: 'subscribed',
        title : 'Email Subscribed',
    },
    {
        name: 'notication',
        title : 'Email Notication',
    },
    {
        name: 'contact',
        title : 'Email Contact',
    },
    {
        name: 'reply',
        title : 'Email Reply',
    }
]

const Settings = () => {

    const [tab, setTab] = useState('subscribed');

    return (
        <div className="settings-page pt-5">
            <div className="heading_1 mb-6">Settings Page</div>
            <div className="tabs">
                {tabs.map((item, index) => (
                    <div key={index} className={`tab-item ${tab === item.name ? 'tab-item-active' : ''}`} onClick={() => setTab(item.name)}>{item.title}</div>
                ))}
            </div>
            <div className="tab-content">
                {tab === 'subscribed' && (<MailSubscriber/>)}
                {tab === 'notication' && (<MailNotication/>)}
                {tab === 'contact' && (<MailContact/>)}
                {tab === 'reply' && (<MailReply/>)}
            </div>
            <LibraryIcon
                mode={'simple'}
            />
        </div>
    )
}

export default Settings;
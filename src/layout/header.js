import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '../utils/constants';
import _ from 'lodash';

export default function Header() {
    const info = useSelector(state => state.user.info);
    const router = useRouter();
    const { t } = useTranslation();

    const [showToggle, setShowToggle] = useState();
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        handleShowMenu();
    }, [router.pathname]);

    const handleShowMenu = () => {
        if (!_.includes([ROUTES.LOGIN, ROUTES.FORGOT_PASSWORD, ROUTES.VERIFY_FORGOT_PASSWORD], router.pathname)) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }

    const isActive = (routerNames) => {
        return _.includes(routerNames, router.pathname) ? 'active': '';
    }

    const handleToInfo = () => {
        router.push(ROUTES.INFO);
    }

    return (
        <nav
            className="header bg-dark dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600 text-white">
            <div className="container-header flex flex-wrap items-center">
                <Link href="/" className='logo flex'>
                    <div className='logo-image'>
                        <img src="/images/logo/medirom-logo.svg" alt="medirom Logo" />
                    </div>
                    <span className='logo-text'>{t('header.logo_text')}</span>
                </Link>

                <div className="flex md:order-2">
                    <button
                        data-collapse-toggle="navbar-sticky" type="button"
                        className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky" aria-expanded="false"
                        onClick={() => setShowToggle(!showToggle)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                {showMenu ? (
                    <div className={`header-menu items-center ${showToggle ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
                         id="navbar-sticky">
                        <ul className="flex flex-col md:flex-row md:mt-0">
                            <li
                                className={`menu-item ${isActive([ROUTES.ORGANIZATION, ROUTES.ORGANIZATION_DETAIL, ROUTES.ORGANIZATION_MEMBER])}`}
                            >
                                <Link href={ROUTES.ORGANIZATION}>{t('header.organization')}</Link>
                            </li>
                            <li
                                className={`menu-item ${isActive([ROUTES.GATEWAYS])}`}
                            >
                                <Link href={ROUTES.GATEWAYS}>{t('header.gateway')}</Link>
                            </li>
                            <li
                                className={`menu-item ${isActive([ROUTES.TERMINALS, ROUTES.TERMINAL_DETAIL, ROUTES.TERMINAL_CONFIG])}`}
                            >
                                <Link href={ROUTES.TERMINALS}>{t('header.list_terminal')}</Link>
                            </li>
                            <li className={`menu-item ${isActive([ROUTES.MEMBERS])}`}>
                                <Link href={ROUTES.MEMBERS}>{t('header.member')}</Link>
                            </li>
                            <li className='user-box'>
                                <div className="dropdown ml-auto">
                                    <input type="checkbox" id={`dropdown_user`} />
                                    <label className="dropdown__face action-container" htmlFor={`dropdown_user`}>
                                        <div className='flex user-container'>
                                            <div className='avatar'>
                                                <img src='https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg'/>
                                            </div>
                                            <span>大平けんと</span>
                                        </div>
                                    </label>
                                    <ul className="dropdown__items">
                                        <li className='dropdown-item-content' onClick={() => { handleToInfo() }}>{t('header.info')}</li>
                                        <li className='dropdown-item-content dropdown-delete-item'>{t('header.logout')}</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                ) : ''}

            </div>
        </nav>
    )
}
// import '../styles/app.scss'
import Layout from '../layout/layout';
// import { I18nextProvider} from 'react-i18next';
// import i18n from '../lang'
// import 'react-datepicker/dist/react-datepicker.css';
// import store from '../store'
import { Provider } from 'react-redux';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { ROUTES } from '../utils/constants';
// import { handleRouteChange }  from '../utils/permission';

// // NProgress Configuration
// NProgress.configure({ showSpinner: false });

const MyApp = ({ Component, pageProps }) => {

    // const router = useRouter();
    //
    // useEffect(() => {
    //
    //     const handleRouteStart = () => NProgress.start();
    //     const handleRouteDone = () => NProgress.done();
    //
    //     Router.events.on("routeChangeStart", handleRouteStart);
    //     Router.events.on("routeChangeComplete", handleRouteDone);
    //     Router.events.on("routeChangeError", handleRouteDone);
    //
    //     return () => {
    //         // Make sure to remove the event handler on unmount!
    //         Router.events.off("routeChangeStart", handleRouteStart);
    //         Router.events.off("routeChangeComplete", handleRouteDone);
    //         Router.events.off("routeChangeError", handleRouteDone);
    //     };
    // }, []);
    //
    // useEffect(() => {
    //     handleRouteChange(router);
    // }, [router.pathname])

    return(
        <Provider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

// const redirectURL = (ctx, url) => {
//     if (typeof window !== 'undefined') {
//         window.location = url;
//     } else {
//         ctx.res.writeHead(302, { Location: url }).end()
//     }
// }

export default MyApp;

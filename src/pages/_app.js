
import Layout from '../components/layout';
import '../styles/app.scss';

// i18n middleware cho chức năng đa ngôn ngữ
import { I18nextProvider } from 'react-i18next';
import i18n from '../lang/index';

// middleware cho chức năng redux
import { Provider } from 'react-redux';
import store from '../store/index';
import { ToastProvider } from '../components/common/toast/toastContext';

const MyApp = ({ Component, pageProps }) => {

    return(
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <ToastProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ToastProvider>
            </I18nextProvider>
        </Provider>
    )
}

export default MyApp;

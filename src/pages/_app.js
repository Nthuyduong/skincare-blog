
import Layout from '../components/layout';
import '../styles/app.scss';

// middleware cho chức năng redux
import { Provider } from 'react-redux';
import store from '../store/index';
import { RouterProvider } from '../provider/router';

const MyApp = ({ Component, pageProps, categories }) => {

    return(
        <Provider store={store}>
            <RouterProvider>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </RouterProvider>
        </Provider>
    )
}

export default MyApp;
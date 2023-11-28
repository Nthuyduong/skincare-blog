import Layout from '../layout/layout';
import { Provider } from 'react-redux';

const MyApp = ({ Component, pageProps }) => {

    return(
        <Provider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp;

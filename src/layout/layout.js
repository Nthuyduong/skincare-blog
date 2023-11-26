import Header from './header';
import Footer from "./footer";

const Layout = ({ children }) => {
    return(
        <>
            <Header />
            <div className='page-body-wrapper bg-grayLight'>{children}</div>
            <Footer/>
        </>
    )
}

export default Layout;
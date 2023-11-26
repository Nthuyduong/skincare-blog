import Header from './Header';

const Layout = ({ children }) => {
    return(
        <>
            <Header />
            <div className='page-body-wrapper bg-grayLight'>{children}</div>
        </>
    )
}

export default Layout;
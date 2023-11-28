const Admindashboard = () => {
    return(
        <div>
            <div className="admin-dashboard">
                <div className="heading_1 mb-6">Dashboard</div>
                <div className="grid grid-cols-12">
                    <div className="col-span-3">Total views</div>
                    <div className="col-span-3">Articles</div>
                    <div className="col-span-3">Subscriptions</div>
                    <div className="col-span-3">Authors</div>
                </div>
            </div>
        </div>
    )
}
export default Admindashboard;
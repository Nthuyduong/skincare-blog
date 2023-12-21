const Admindashboard = () => {
    return(
        <div>
            <div className="admin-dashboard">
                <div className="heading_1 mb-6">Dashboard</div>
                <div className="grid grid-cols-12 gap-5 over-view-db">
                    <div className="col-span-3 p-3 overview">
                        <div className="flex">
                            <div class>icon</div>
                            <div>
                                <div>Total views</div>
                                <div>260K</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 p-3 overview">
                        <div className="flex">
                            <div>icon</div>
                            <div>
                                <div>Articles</div>
                                <div>260K</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 p-3 overview">
                        <div className="flex">
                            <div>icon</div>
                            <div>
                                <div>Subscriptions</div>
                                <div>260K</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 p-3 overview">
                        <div className="flex">
                            <div>icon</div>
                            <div>
                                <div>Like</div>
                                <div>200K</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-9">
                        <div className="visitor">
                            <div>Visitor Statistics</div>
                        </div>
                        <div className="recently-post">

                        </div>
                    </div>
                    <div className="col-span-3">
                        <div>Top Category</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admindashboard;
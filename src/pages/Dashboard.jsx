import React, { useEffect, useState } from "react";
import ApiClass from "../Api/api.js"
const Dashboard = () => {

    return (
        <>

            <section className="dashboard-sec">
                <div className="container-fluid">
                    <div className="dashboard-heading mb-3">
                        <h5 className="mb-0 d-flex align-items-center text-capitalize">
                            dashboard
                        </h5>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="user-dash p-3 rounded mb-4 mb-md-0">
                                <p>Logged in as:</p>
                                <p className="fw-bold mb-0">Strong</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Dashboard;
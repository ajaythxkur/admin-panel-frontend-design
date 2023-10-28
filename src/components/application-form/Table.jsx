import React from "react";


const Table = ({ data, loading, updateAppStatus, setViewForm }) => {


    const APP_STATUS = {
        approved: "approved",
        rejected: "rejected",
        pending: "pending"
    }
    return (
        <>
            <div className="admin-table-wrapper">
                <div className="admin-table table-responsive">
                    <table className="table align-middle table-bordered w-100" id="table-container">
                        <thead>
                            <tr scope="row">
                                <th scope="col">
                                    <div className="d-flex justify-content-between">
                                        <span>Username</span>

                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="d-flex justify-content-between">
                                        <span>Project Name</span>
                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="d-flex justify-content-between">
                                        <span>Supply</span>
                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="d-flex justify-content-between">
                                        <span>Chain</span>
                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="d-flex justify-content-between">
                                        <span>Spots To Claim</span>
                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="d-flex justify-content-between">
                                        <span>Spots Type</span>
                                    </div>
                                </th>
                                <th scope="col">
                                    Status
                                </th>
                                <th scope="col">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        {loading ?
                            <tbody>
                                <tr>
                                    <td colSpan={8} className="text-center">
                                        Loading...
                                    </td>
                                </tr>
                            </tbody>
                            :
                            <>
                                {data?.length != 0 ?
                                    <tbody>
                                        {data.map((v, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td className="text-capitalize">
                                                        {v?.username}
                                                    </td>
                                                    <td className="text-capitalize">
                                                        {v?.project_name}
                                                    </td>
                                                    <td className="text-capitalize">
                                                        {v?.supply}
                                                    </td>
                                                    <td className="text-capitalize">
                                                        {v?.chain}
                                                    </td>
                                                    <td className="text-capitalize">
                                                        {v?.spots_offered}
                                                    </td>
                                                    <td className="text-capitalize">
                                                        {v?.spots_type}
                                                    </td>
                                                    <td className="text-capitalize">
                                                        <form action="" className="status-form">
                                                            <select className="form-select" aria-label=".form-select-lg" name="status" value={v.status} onChange={(e) => updateAppStatus(v.id, e.target.value)}>
                                                                <option value="">Select Application Status</option>
                                                                {Object.keys(APP_STATUS)?.length != 0 &&
                                                                    Object.keys(APP_STATUS).map((v, i) => {
                                                                        return (
                                                                            <option key={i} value={APP_STATUS[v]}>{APP_STATUS[v]}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </form>
                                                    </td>
                                                    <td className="text-capitalize">
                                                        <div className="export-btn">
                                                            <button className="btn" data-bs-toggle="modal" data-bs-target="#application-form-modal"
                                                                onClick={() => setViewForm(v)}
                                                            >View Full Form</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                    :
                                    <tbody>
                                        <tr>
                                            <td colSpan={8} className="text-center" style={{ color: 'var(--white)' }}>
                                                No Applications.
                                            </td>
                                        </tr>
                                    </tbody>
                                }
                            </>
                        }
                    </table>

                </div>

            </div>
        </>
    )
}

export default Table;
import React from "react";


const Table = ({ data, updateStatus, setSendData, deleteListed }) => {



    return (
        <>
            <div className="admin-table-wrapper">
                <div className="admin-table table-responsive">
                    <table className="table align-middle table-bordered w-100" id="table-container">
                        <thead>
                            <tr scope="row">
                                <th scope="col">
                                    <div className="d-flex justify-content-between">
                                        <span>Id</span>
                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="d-flex justify-content-between">
                                        <span>Icon</span>

                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="d-flex justify-content-between">
                                        <span>Server Id</span>
                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="d-flex justify-content-between">
                                        <span>Name</span>

                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="d-flex justify-content-between">
                                        <span>Status</span>

                                    </div>
                                </th>
                                <th scope="col">
                                    View
                                </th>
                                <th scope="col">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        {data?.length != 0 ?
                            <tbody>
                                {data.map((v, i) => {
                                    return (
                                        <tr key={i}>
                                            <td className="text-capitalize">
                                                {v?.id}
                                            </td>
                                            <img src={`https://cdn.discordapp.com/icons/${v?.guild_id}/${v?.icon}.png`} alt="" height="70" width="70" />
                                            <td className="text-capitalize">
                                                {v?.guild_id}
                                            </td>
                                            <td className="text-capitalize">
                                                {v?.name}
                                            </td>
                                            <td>
                                                <div className="form-check form-switch">

                                                    <input className="form-check-input" type="checkbox" checked={v?.status == 1 ? true : false}
                                                        onChange={(e) => { updateStatus(e.target.checked, v.id) }} />
                                                </div>
                                            </td>
                                            <td className="text-capitalize">
                                                <div className="discord-btn">
                                                    <button className="btn" data-bs-toggle="modal" data-bs-target="#bot-guild-modal" onClick={() => setSendData(v.roles)}>View</button>
                                                </div>

                                            </td>
                                            <td>
                                                <div className="discord-btn">
                                                    <button className="btn" onClick={() => deleteListed(v.id)}>Delete</button>
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
                                        No Guilds listed yet.
                                    </td>
                                </tr>
                            </tbody>
                        }
                    </table>

                </div>

            </div>
        </>
    )
}
export default Table;
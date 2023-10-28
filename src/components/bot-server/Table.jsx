import React from "react";


const Table = ({ data, setSendData, loading }) => {

    console.log(data)

    return (
        <>
            <div className="admin-table-wrapper">
                <div className="admin-table table-responsive">
                    <table className="table align-middle table-bordered w-100" id="table-container">
                        <thead>
                            <tr scope="row">
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
                                        <span>Server Name</span>

                                    </div>
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
                                                        {/* https://cdn.discordapp.com/icons/${v.guild_id}/${v.icon}.png */}
                                                        <img src={`https://cdn.discordapp.com/icons/${v['guild']?.id}/${v['guild']?.icon}.png`} alt="" height="70" width="70" />

                                                    </td>
                                                    <td className="text-capitalize">
                                                        {v['guild']?.id}
                                                    </td>
                                                    <td className="text-capitalize">
                                                        {v['guild']?.name}
                                                    </td>

                                                    <td className="text-capitalize">
                                                        <div className="discord-btn">
                                                            <button className="btn" data-bs-toggle="modal" data-bs-target="#bot-guild-modal" onClick={() => setSendData(v['roles'], v['guild'])}>Add To List</button>
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
                                                Bot is in no guild.
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
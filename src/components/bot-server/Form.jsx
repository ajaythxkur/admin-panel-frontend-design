import React from "react";

export default function Form({ data, updateRole, submitGuild, setAppId, AppArr }) {
    return (
        <div className="modal fade common-modal" id="bot-guild-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-uppercase d-flex align-items-center" id="exampleModalLabel">
                            Select eligible roles </h5>
                        <button type="button" className="btn p-0 border-0" data-bs-dismiss="modal" aria-label="Close" id="bot-guild-modal-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 48 48" fill="var(--white)"><path d="m16.5 33.6 7.5-7.5 7.5 7.5 2.1-2.1-7.5-7.5 7.5-7.5-2.1-2.1-7.5 7.5-7.5-7.5-2.1 2.1 7.5 7.5-7.5 7.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" /></svg>
                        </button>
                    </div>
                    <div className="modal-body admin-form">
                        {data?.length != 0 ?
                            <>
                                <div className="row">
                                    {data?.map((v, i) => {
                                        return (
                                            <div className="col-md-4 col-xl-3" key={i}>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="checkbox"
                                                        onChange={(e) => updateRole(e.target.checked, v.id, v.name)} />
                                                    {v.name}

                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="mb-3">
                                    <select className="form-select" aria-label=".form-select-lg" name="account_type" onChange={(e) => setAppId(e.target.value)}>
                                        <option value="">Select Application Id</option>
                                        {AppArr?.length != 0 &&
                                            AppArr.map((v, i) => {
                                                return (
                                                    <option key={i} value={v.id}>{v.project_name} / {v.username}</option>

                                                )
                                            })
                                        }
                                    </select>

                                </div>
                            </>
                            :
                            <p className="text-center">No Roles Found</p>
                        }
                        <hr />
                        <div className="export-btn">
                            <button type="button" className="btn" onClick={() => submitGuild()}>Add To List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
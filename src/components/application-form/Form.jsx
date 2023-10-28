import React, { useEffect, useState } from "react";

export default function ({ data }) {
    useEffect(() => {
        if (data != undefined) {

        }
    }, [data])
    return (
        <div className="modal fade common-modal" id="application-form-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-uppercase d-flex align-items-center" id="exampleModalLabel">
                            Application Form </h5>
                        <button type="button" className="btn p-0 border-0" data-bs-dismiss="modal" aria-label="Close" id="application-form-modal-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 48 48" fill="var(--white)"><path d="m16.5 33.6 7.5-7.5 7.5 7.5 2.1-2.1-7.5-7.5 7.5-7.5-2.1-2.1-7.5 7.5-7.5-7.5-2.1 2.1 7.5 7.5-7.5 7.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" /></svg>
                        </button>
                    </div>
                    <div className="modal-body admin-form">
                        <form action="" className="admin-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="">Project Name</label>
                                    <div className="mb-2">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>

                            </div>

                            <div className="export-btn d-flex gap-3">
                                <input type="submit" className="btn" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
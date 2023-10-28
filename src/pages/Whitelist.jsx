import React, { useState, useEffect } from "react";
import Heading from "../components/Utils/Heading.jsx";
import Table from "../components/whitelist/Table.jsx";
import Form from "../components/whitelist/Form.jsx";
export default function Whitelist() {

    return (
        <>
            <section className="dashboard-sec">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between">
                        <Heading
                            text="Whitelists"
                            image=""
                        />
                        <button className="btn p-0 border-0" data-bs-toggle="modal" data-bs-target="#whitelist-modal">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 48 48" fill="var(--white)"><path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" /></svg>
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Table />
                        </div>
                    </div>
                </div>
            </section>
            <Form />
        </>
    )
}
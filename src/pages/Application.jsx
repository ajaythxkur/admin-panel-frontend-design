import React, { useState, useEffect } from "react";
import Heading from "../components/Utils/Heading.jsx";
import ApiClass from "../Api/api.js";
import Toast from "../common/Toast.js";
import Table from "../components/application-form/Table.jsx";
import Form from "../components/application-form/Form.jsx";
export default function Application() {
    const [form, setForm] = useState([])
    const [loading, setLoading] = useState(true)
    const [view, setView] = useState({})
    //get application forms
    async function getForm() {
        let res = await ApiClass.getRequest("quantum/application/admin/get?all=true", true);
        if (res.data.code == "5001") {
            return
        }
        if (res.data.code == "0000") {
            setLoading(false)
            setForm(res.data.data || [])
            return
        }
    }
    useEffect(() => {
        getForm()
    }, [])
    //update
    async function updateAppStatus(id, status) {
        const values = {
            id,
            status
        }
        let res = await ApiClass.postRequest("quantum/application/status", true, values);
        if (res.data.code == "5001") {
            Toast.error(res.data.comment)
            return
        }
        if (res.data.code == "0000") {
            Toast.success(res.data.comment)
            getForm()
            return
        }
    }
    function setViewForm(v) {
        setView(v)
    }
    return (
        <>
            <section className="dashboard-sec">
                <div className="container-fluid">
                    <Heading
                        text="Applications"
                        image=""
                    />
                    <div className="row">
                        <div className="col-md-12">
                            <Table
                                loading={loading}
                                data={form}
                                updateAppStatus={updateAppStatus}
                                setViewForm={setViewForm}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Form data={view} />
        </>
    )
}
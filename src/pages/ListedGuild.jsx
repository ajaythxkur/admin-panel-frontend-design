import React, { useState, useEffect } from "react";
import Heading from "../components/Utils/Heading.jsx";
import Table from "../components/listed-guild/Table.jsx";
import Toast from "../common/Toast.js";
import ApiClass from "../Api/api.js";
import Form from "../components/listed-guild/Form.jsx";
export default function ListedGuild() {
    const [listed, setListed] = useState([])
    const [view, setView] = useState([])
    const getListed = async () => {
        let res = await ApiClass.getRequest("quantum/bot/listed_guild", true);
        if (res.data.code == "5001") {
            Toast.error(res.data.comment)
            return
        }
        if (res.data.code == "0000") {
            setListed(res.data.data)
            return
        }

    }
    useEffect(() => {
        getListed()
    }, [])
    //update status
    async function updateStatus(status, id) {
        status = status == true ? 1 : 0;
        let res = await ApiClass.updateRequest(`quantum/bot/guild_status?id=${id}&status=${status}`, true);
        if (res.data.code == "5001") {
            Toast.error(res.data.comment)
            return
        }
        if (res.data.code == "0000") {
            Toast.success(res.data.comment)
            getListed()
            return
        }
    }
    //delete guild deleteListed
    async function deleteListed(id) {
        let res = await ApiClass.deleteRequest(`quantum/bot/remove_guild/${id}`, true);
        if (res.data.code == "5001") {
            Toast.error(res.data.comment)
            return
        }
        if (res.data.code == "0000") {
            Toast.success(res.data.comment)
            getListed()
            return
        }
    }
    //roles
    function setSendData(roles) {
        setView(roles)
    }

    return (
        <>
            <section className="dashboard-sec">
                <div className="container-fluid">
                    <Heading
                        text="Listed Guilds"
                        image=""
                    />
                    <div className="row">
                        <div className="col-md-12">
                            <Table
                                data={listed}
                                updateStatus={updateStatus}
                                deleteListed={deleteListed}
                                setSendData={setSendData}
                            />

                        </div>
                    </div>
                </div>
            </section>
            <Form data={view} />
        </>
    )
}
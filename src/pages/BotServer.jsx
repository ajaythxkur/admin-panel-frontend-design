import React, { useState, useEffect } from "react";
import Heading from "../components/Utils/Heading.jsx";
import Table from "../components/bot-server/Table.jsx";
import ApiClass from "../Api/api.js";
import Toast from "../common/Toast.js"
import Form from "../components/bot-server/Form.jsx";
export default function BotServer() {
    const [guild, setGuild] = useState([])
    const [modal_data, setModalData] = useState([])
    const [selectedRole, setSelectedRole] = useState([]);
    const [selectedGuild, setSelectGuild] = useState({})
    const [loading, setLoading] = useState(true)
    const [AppId, setAppId] = useState('')
    const [AppArr, setAppArr] = useState([])
    //quantum/bot/get_guild
    const getServer = async () => {
        let res = await ApiClass.getRequest("quantum/role/guild_roles  ", false);
        if (res.data.code == "5001") {
            Toast.error(res.data.comment)
            return
        }
        if (res.data.code == "0000") {
            setLoading(false)
            setGuild(res.data.data || [])
            return
        }

    }
    useEffect(() => {
        getServer()
        getApplication()
    }, [])

    //data to modal
    function setSendData(role, guild) {
        setModalData(role)
        setSelectGuild(guild)
    }
    //roles select

    function updateRole(status, id, name) {
        let include = selectedRole.filter(v => { return v.id == id });
        include?.length != 0 ? (status == true ? '' :
            (setSelectedRole(selectedRole.filter(v =>
                v.id !== id
            ))), console.log("ateals")) :
            (status == true ? setSelectedRole([...selectedRole, { name, id }]) : '');

    }
    //add guild to list
    async function submitGuild() {
        const { id, name, icon } = selectedGuild;
        if (AppId == "" || selectedRole.length == 0) {
            console.log("Application Id and role is required bitch")
            return;
        }
        let values = {
            guild_id: id,
            name: name,
            icon: icon,
            roles: selectedRole,
            application_id: AppId
        }
        let res = await ApiClass.postRequest("quantum/bot/add_guild", true, values);
        if (res.data.code == "5001") {
            Toast.error(res.data.comment)
            return
        }
        if (res.data.code == "0000") {
            Toast.success(res.data.comment)
            document.getElementById("bot-guild-modal-btn").click();
            return
        }
    }
    //applications
    async function getApplication() {
        let res = await ApiClass.getRequest("quantum/application/admin/get?status=approved", true);
        if (res.data.code == "5001") {
            return
        }
        if (res.data.code == "0000") {
            setAppArr(res.data.data || [])
            return
        }
    }

    return (
        <>
            <section className="dashboard-sec">
                <div className="container-fluid">
                    <Heading
                        text="Bot Servers"
                        image=""
                    />
                    <div className="row">
                        <div className="col-md-12">
                            <Table
                                data={guild}
                                setSendData={setSendData}
                                loading={loading}
                            />

                        </div>
                    </div>
                </div>
            </section>
            <Form data={modal_data} updateRole={updateRole} submitGuild={submitGuild} setAppId={setAppId} AppArr={AppArr} />
        </>
    )
}
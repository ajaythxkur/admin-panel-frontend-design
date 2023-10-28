import React, { useEffect, useState } from "react";
import ApiClass from "../Api/api.js"
import Toast from "../common/Toast.js"
const DiscordSetting = () => {
    const [userClientId, setUserClientId] = useState('');
    const [userRedirect, setUserRedirect] = useState('');
    const [userScopes, setUserScopes] = useState('')

    const [botClientId, setBotClientId] = useState('');
    const [botScopes, setBotScopes] = useState('');
    const [botPermissions, setBotPermissions] = useState('');

    const [activeTab, setActiveTab] = useState('user')
    const getClientSettings = async () => {
        let res = await ApiClass.getRequest("quantum/client/admin/get?client=user", true);
        if (res.data.code == "5001") {
            return
        }
        if (res.data.code == "0000") {
            return
        }
    }
    const getBotSettings = async () => {
        let res = await ApiClass.getRequest("quantum/client/admin/get?client=bot", true);
        if (res.data.code == "5001") {
            return
        }
        if (res.data.code == "0000") {
            return
        }
    }

    useEffect(() => {
        getClientSettings();
        getBotSettings();
    }, [])
    async function submitUserSettings(e) {
        e.preventDefault()
        if(userClientId == "" || userClientId == "" || userScopes ==""){
            Toast.error("Fill All Fields!!!")
            return 
        }
        let values = {
            client_id:userClientId,
            redirect_uri:userRedirect,
            scopes:userScopes
        }
        let res = await ApiClass.postRequest("quantum/discord/create", true, values);
        if (res.data.code == "5001") {
            Toast.error(res.data.comment)
            return
        }
        if (res.data.code == "0000") {
            Toast.error(res.data.comment)
            return
        }
    }
    async function submitBotSettings(e) {
        e.preventDefault()
        if(botClientId == "" || botScopes == "" || botPermissions ==""){
            Toast.error("Fill All Fields!!!")
            return 
        }
        let values = {
            client_id:userClientId,
            scopes:botScopes,
            permissions:botPermissions
        }
        let res = await ApiClass.postRequest("quantum/discord/create-url", true, values);
        if (res.data.code == "5001") {
            Toast.error(res.data.comment)
            return
        }
        if (res.data.code == "0000") {
            Toast.error(res.data.comment)
            return
        }
    }
    const tab = ["user", "bot"];
    return (
        <>

            <section className="dashboard-sec">
                <div className="container-fluid">
                    <div className="dashboard-heading mb-3 d-flex align-items-center justify-content-between">
                        <h5 className="mb-0 d-flex align-items-center text-capitalize">
                            Discord URL Settings
                        </h5>
                        <button className="btn p-0 border-0" data-bs-toggle="modal" data-bs-target="#discord-setting-modal">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 48 48" fill="var(--white)"><path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" /></svg>
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="user-dash p-3 rounded d-md-flex jusitfy-content-between mb-4 mb-md-0">
                                <div className="w-100 px-3">
                                    <h6>User's Authorization</h6>
                                    <form className="admin-form" onSubmit={submitUserSettings}>
                                        <label htmlFor="">Client Id</label>
                                        <div className="mb-2">
                                            <input type="text" className="form-control" name="client_id" value={userClientId} onChange={(e) => setUserClientId(e.target.value)} />
                                        </div>
                                        <label htmlFor="">Redirect Uri</label>
                                        <div className="mb-2">
                                            <input type="text" className="form-control" name="redirect_uri" value={userRedirect} onChange={(e) => setUserRedirect(e.target.value)} />
                                        </div>
                                        <label htmlFor="">Scopes</label>
                                        <div className="mb-2">
                                            <input type="text" className="form-control" name="scopes"
                                                value={userScopes} onChange={(e) => setUserScopes(e.target.value)} />
                                        </div>
                                        <div className="export-btn mb-2">
                                            <input type="submit" className="btn" value="Change" />
                                        </div>
                                    </form>
                                </div>
                                <div className="w-100 px-3">
                                    <h6>Bot's Authorization</h6>
                                    <form className="admin-form" onSubmit={submitBotSettings}>
                                        <label htmlFor="">Client Id</label>
                                        <div className="mb-2">
                                            <input type="text" className="form-control" name="client_id" value={botClientId} onChange={(e) => setBotClientId(e.target.value)} />
                                        </div>
                                        <label htmlFor="">Scopes</label>
                                        <div className="mb-2">
                                            <input type="text" className="form-control" name="scopes" value={botScopes} onChange={(e) => setBotScopes(e.target.value)} />
                                        </div>
                                        <label htmlFor="">Permissions   </label>
                                        <div className="mb-2">
                                            <input type="text" className="form-control" name="permissions" value={botPermissions} onChange={(e) => setBotPermissions(e.target.value)} />
                                        </div>
                                        <div className="export-btn mb-2">
                                            <input type="submit" className="btn" value="Change" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* modal */}
            <div className="modal fade common-modal" id="discord-setting-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-uppercase d-flex align-items-center" id="exampleModalLabel">
                                URL Add </h5>
                            <button type="button" className="btn p-0 border-0" data-bs-dismiss="modal" aria-label="Close" id="discord-setting-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 48 48" fill="var(--white)"><path d="m16.5 33.6 7.5-7.5 7.5 7.5 2.1-2.1-7.5-7.5 7.5-7.5-2.1-2.1-7.5 7.5-7.5-7.5-2.1 2.1 7.5 7.5-7.5 7.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" /></svg>
                            </button>
                        </div>
                        <div className="modal-body admin-form">
                            <div className="url-tabs">
                                <nav>
                                    <div   className= "nav nav-tabs nav-item border-bottom-0 gap-3" id="nav-tab" role="tablist">
                                        {tab.map((v, i) => {
                                            return (
                                                <button   className= {`nav-link text-capitalize ${activeTab == v ? 'active' : ''}`} id={`nav-${v}-tab`} data-bs-toggle="tab" data-bs-target={`#nav-${v}`} type="button" role="tab" aria-controls={`nav-${v}`} aria-selected="true" onClick={()=>setActiveTab(v)} key={i}>{v}</button>
                                            )
                                        })}

                                    </div>
                                </nav>
                                <div   className= "tab-content" id="nav-URL">
                                    {tab.map((v,i)=>{
                                        return(
                                            <div   className= {`tab-pane py-3 fade ${activeTab == v ? 'show active':''}`} id={`nav-${v}`} role="tabpanel" aria-labelledby={`nav-${v}-tab`} key={i}>
{activeTab == "user" &&
                        <div className="">
                                    <form className="admin-form" onSubmit={submitUserSettings}>
                                        <label htmlFor="">Client Id</label>
                                        <div className="mb-2">
                                            <input type="text" className="form-control" name="client_id" value={userClientId} onChange={(e) => setUserClientId(e.target.value)} />
                                        </div>
                                        <label htmlFor="">Redirect Uri</label>
                                        <div className="mb-2">
                                            <input type="text" className="form-control" name="redirect_uri" value={userRedirect} onChange={(e) => setUserRedirect(e.target.value)} />
                                        </div>
                                        <label htmlFor="">Scopes</label>
                                        <div className="mb-2">
                                            <input type="text" className="form-control" name="scopes"
                                                value={userScopes} onChange={(e) => setUserScopes(e.target.value)} />
                                        </div>
                                        <div className="export-btn mb-2">
                                            <input type="submit" className="btn" value="Add" />
                                        </div>
                                    </form>
                                </div>
                                    }

                                    {activeTab == "bot" && 
                                      <div className="">
                                      <form className="admin-form" onSubmit={submitBotSettings}>
                                          <label htmlFor="">Client Id</label>
                                          <div className="mb-2">
                                              <input type="text" className="form-control" name="client_id" value={botClientId} onChange={(e) => setBotClientId(e.target.value)} />
                                          </div>
                                          <label htmlFor="">Scopes</label>
                                          <div className="mb-2">
                                              <input type="text" className="form-control" name="scopes" value={botScopes} onChange={(e) => setBotScopes(e.target.value)} />
                                          </div>
                                          <label htmlFor="">Permissions   </label>
                                          <div className="mb-2">
                                              <input type="text" className="form-control" name="permissions" value={botPermissions} onChange={(e) => setBotPermissions(e.target.value)} />
                                          </div>
                                          <div className="export-btn mb-2">
                                              <input type="submit" className="btn" value="Add" />
                                          </div>
                                      </form>
                                  </div>
                                    }
                                            </div>
                                        )
                                    })}
                                    
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DiscordSetting;
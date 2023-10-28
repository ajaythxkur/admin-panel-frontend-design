import React, { useEffect, useState } from "react";
import Heading from "../components/Utils/Heading.jsx";
import ApiClass from "../Api/api.js";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Toast from "../common/Toast.js";
export default function Team() {
    const [Team, setTeam] = useState([])
    const [File, setFile] = useState('')
    // home/team_get
    const getTeam = async () => {
        let res = await ApiClass.getRequest("home/team_get", true);
        if (res.data.code == "5001") {
            return
        }
        if (res.data.code == "0000") {
            setTeam(res.data.data || [])
            return
        }
    }
    useEffect(() => {
        getTeam()
    }, []);
    const formik = useFormik({
        initialValues: {
            name: '',
            position: '',
            profile_image: '',
            twitter_link: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required.'),
            position: Yup.string().required('Position is required.'),
            profile_image: Yup.string().required('Profile image is required.'),
        }),
        onSubmit: async (values) => {
            values.profile_image = File;
            console.log(values)
            let response = await ApiClass.postRequest('home/team_create', true, values);
            if (response?.data?.code == "5001") {
                Toast.error(response?.data?.comment || '')
                return
            }
            if (response?.data?.code == "0000") {
                Toast.success(response?.data?.comment || '');
                resetForm()
            }
        }
    })
    const { values, handleChange, handleSubmit, errors, touched, setFieldValue, resetForm } = formik;
    async function uploadImage(image) {
        const values = new FormData();
        values.append("file", image)
        let res = await ApiClass.postRequest("home/imageupload", true, values);
        if (res.data.code == "5001") {
            return
        }
        if (res.data.code == "0000") {
            setFile(res.data.data)
            return
        }
    }
    const createTeam = async () => {
        let res = await ApiClass.postRequest("home/team_get", true);
        if (res.data.code == "5001") {
            return
        }
        if (res.data.code == "0000") {
            setTeam(res.data.data || [])
            return
        }
    }
    useEffect(() => {
        if (File == "") {
            setFieldValue("profile_image", '');
        } else {
            setFieldValue("profile_image", File);
        }
    }, [File])
    console.log(File)
    return (
        <>
            <section className="dashboard-sec">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between">
                        <Heading
                            text="Immutable Team"
                            image=""
                        />
                        <button className="btn p-0 border-0" data-bs-toggle="modal" data-bs-target="#team-add-modal">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 48 48" fill="var(--white)"><path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" /></svg>
                        </button>
                    </div>
                    <div className="row">
                        {Team?.length != 0 ?
                            Team.map((v, index) => {
                                return (

                                    <div className="col-md-6" key={index}>
                                        <div className="team-box d-sm-flex gap-2 border p-3">
                                            <div className="team-image mb-2 mb-sm-0">
                                                <img src="" alt="" className="w-100" />
                                            </div>
                                            <div className="team-form">
                                                <form action="" className="admin-form">
                                                    <label htmlFor="">Name</label>
                                                    <div className="mb-2">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <label htmlFor="">Position</label>
                                                    <div className="mb-2">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <label htmlFor="">Twitter Handle</label>
                                                    <div className="mb-2">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="export-btn d-flex gap-3">
                                                        <input type="submit" className="btn" value="Change" />
                                                        <button type="button" className="btn">Remove</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <div className="col-md-12">
                                <p className="mb-0 text-center">No Team Found.</p>
                            </div>
                        }
                    </div>
                </div>
            </section>
            <div className="modal fade common-modal" id="team-add-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-uppercase d-flex align-items-center" id="exampleModalLabel">
                                Add A Team Member </h5>
                            <button type="button" className="btn p-0 border-0" data-bs-dismiss="modal" aria-label="Close" id="team-add-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 48 48" fill="var(--white)"><path d="m16.5 33.6 7.5-7.5 7.5 7.5 2.1-2.1-7.5-7.5 7.5-7.5-2.1-2.1-7.5 7.5-7.5-7.5-2.1 2.1 7.5 7.5-7.5 7.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" /></svg>
                            </button>
                        </div>
                        <div className="modal-body admin-form">
                            <form action="" className="admin-form" onSubmit={handleSubmit}>
                                <label htmlFor="">Name</label>
                                <div className="mb-2">
                                    <input type="text" className="form-control" name="name" onChange={handleChange} value={values.name} />
                                    {errors.name && touched.name && (<span className="text-danger form_err">{errors.name}</span>)}
                                </div>
                                <label htmlFor="">Position</label>
                                <div className="mb-2">
                                    <input type="text" className="form-control" name="position" onChange={handleChange} value={values.position} />
                                    {errors.position && touched.position && (<span className="text-danger form_err">{errors.position}</span>)}
                                </div>
                                <label htmlFor="">Twitter Handle</label>
                                <div className="mb-2">
                                    <input type="text" className="form-control" name="twitter_link" onChange={handleChange} value={values.twitter_link} />
                                    {errors.twitter_link && touched.twitter_link && (<span className="text-danger form_err">{errors.twitter_link}</span>)}
                                </div>
                                <label htmlFor="">Image</label>
                                <div className="mb-2">
                                    <input type="file" className="form-control" name="profile_image" onChange={(e) => uploadImage(e.target.files[0])} />
                                    {errors.profile_image && touched.profile_image && (<span className="text-danger form_err">{errors.profile_image}</span>)}
                                </div>
                                <div className="export-btn d-flex gap-3">
                                    <input type="submit" className="btn" value="Add" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
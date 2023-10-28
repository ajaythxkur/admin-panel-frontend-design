import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from '../components/Nav';
const Sidebar = ({ children }) => {
    const location = useLocation();
    const path = location.pathname;
    const [size, setSize] = useState(window.innerWidth);
    const [menuHeight, setmenuHeight] = useState(window.innerHeight - 64);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setSize(window.innerWidth)
            setmenuHeight(window.innerHeight - 64)
        })
    })
    return (
        <>
            <section className="main-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className={`col-md-4 col-xl-3 col-xxl-2 px-0 ${size < 991 ? 'offcanvas offcanvas-end' : ''}`} id="offcanvasNavbar" >
                            <div className="side-menu position-relative" >
                                <div className='text-center py-3'>
                                    {/* <img src='' className='img-fluid' alt='logo' /> */}
                                    <h5 style={{ color: 'var(--white)' }}>Immutable Legends</h5>
                                </div>
                                <div className={`menu-list px-3`} style={{ height: menuHeight }}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className='mb-0'>
                                            LFG</p>
                                        {size < 991 &&
                                            <button className="btn p-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 48 48" fill="var(--white)"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" /></svg>
                                            </button>
                                        }
                                    </div>
                                    <hr className='my-2' />
                                    <ul className="list-group main-menu">
                                        <Link to="/dashboard" className={`mb-1 ${path == "/dashboard" ? 'active' : ''}`}>
                                            <li className="list-group-item border-0 d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 96 960 960" fill={`${path == "/dashboard" ? 'var(--white)' : 'var(--light-gray)'}`}><path d="M120 546V216h330v330H120Zm0 390V606h330v330H120Zm390-390V216h330v330H510Zm0 390V606h330v330H510ZM180 486h210V276H180v210Zm390 0h210V276H570v210Zm0 390h210V666H570v210Zm-390 0h210V666H180v210Zm390-390Zm0 180Zm-180 0Zm0-180Z"></path></svg>
                                                &nbsp;
                                                <span className='text-capitalize'>Dashboard</span>
                                            </li>
                                        </Link>

                                        <Link to="/team" className={`mb-1 ${path == "/team" ? 'active' : ''}`}>
                                            <li className="list-group-item border-0 d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill={`${path == "/team" ? 'var(--white)' : 'var(--light-gray)'}`}><path d="M19.65 24q-1.05 0-1.725-.8t-.475-1.8l.75-4.5q.4-2.15 2.025-3.525T24 12q2.2 0 3.825 1.375T29.85 16.9l.75 4.5q.2 1-.475 1.8T28.4 24Zm.9-3h6.95l-.6-3.6q-.2-1.05-1-1.725T24.05 15q-1.1 0-1.9.675-.8.675-1 1.725Zm-13.6 6.55q-1 .05-1.75-.4t-.95-1.35q-.1-.4-.025-.8.075-.4.225-.75 0 .05-.05-.2 0-.05-.45-1.05-.1-.55.1-.975.2-.425.6-.825l.1-.1q.1-.85.7-1.4.6-.55 1.45-.55.05 0 .8.15l.15-.05q.25-.2.575-.325.325-.125.725-.125.45 0 .85.175.4.175.6.475.05 0 .075.025.025.025.075.025.6.05 1.05.375.45.325.7.875.1.3.075.6-.025.3-.125.55 0 .1.05.15.3.3.475.675.175.375.175.775 0 .1-.25.9-.05.1 0 .2.05.2.05.7 0 .9-.75 1.575-.75.675-1.85.675Zm33.45-.05q-1.45 0-2.475-1.025Q36.9 25.45 36.9 24q0-.55.175-1.025.175-.475.425-.875L36.25 21q-.4-.4-.15-.9t.8-.5h3.5q1.45 0 2.475 1.025Q43.9 21.65 43.9 23.1v.9q0 1.45-1.025 2.475Q41.85 27.5 40.4 27.5ZM0 36v-2.65q0-1.95 2.1-3.15T7.5 29q.65 0 1.2.025.55.025 1.1.125-.4.85-.6 1.725-.2.875-.2 1.875V36Zm12 0v-3.25q0-3.25 3.325-5.25t8.675-2q5.4 0 8.7 2 3.3 2 3.3 5.25V36Zm28.5-7q3.4 0 5.45 1.2Q48 31.4 48 33.35V36h-9v-3.25q0-1-.175-1.875t-.575-1.725q.55-.1 1.1-.125Q39.9 29 40.5 29ZM24 28.5q-4 0-6.5 1.2T15 32.75V33h18v-.3q0-1.8-2.475-3T24 28.5Zm0 4.5Zm.05-15Z"></path></svg>
                                                &nbsp;
                                                <span className='text-capitalize'>Team</span>
                                            </li>
                                        </Link>

                                        <Link to="/sub-admin" className={`mb-1 ${path == "/sub-admin" ? 'active' : ''}`}>
                                            <li className="list-group-item border-0 d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 96 960 960" fill={`${path == "/sub-admin" ? 'var(--white)' : 'var(--light-gray)'}`}><path d="M140 976q-24 0-42-18t-18-42V436q0-24 18-42t42-18h237V236q0-24 18-42t42-18h87q24 0 42 18t18 42v140h236q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680V436H584q0 28-18.5 44T519 496h-78q-27 0-45.5-16T377 436H140v480Zm92-107h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265 744q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q22.5 0 38.25-15.75T408 638q0-22.5-15.75-38.25T354 584q-22.5 0-38.25 15.75T300 638q0 22.5 15.75 38.25T354 692Zm214-63h170v-50H568v50ZM437 436h87V236h-87v200Zm43 240Z"></path></svg>
                                                &nbsp;
                                                <span className='text-capitalize'>Sub- Admins</span>
                                            </li>
                                        </Link>

                                        <Link to="/discord-setting" className={`mb-1 ${path == "/discord-setting" ? 'active' : ''}`}>
                                            <li className="list-group-item border-0 d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 96 960 960" fill={`${path == "/discord-setting" ? 'var(--white)' : 'var(--light-gray)'}`}><path d="M240 976V804q-57-52-88.5-121.5T120 536q0-150 105-255t255-105q125 0 221.5 73.5T827 441l55 218q4 14-5 25.5T853 696h-93v140q0 24.75-17.625 42.375T700 896H600v80h-60V836h160V636h114l-45-180q-24-97-105-158.5T480 236q-125 0-212.5 86.5T180 533.54q0 64.417 26.324 122.392Q232.649 713.908 281 759l19 18v199h-60Zm257-370Zm-48 76h60l3-44q12-2 22.472-8.462Q544.944 623.077 553 615l42 14 28-48-30-24q5-14 5-29t-5-29l30-24-28-48-42 14q-8.333-7.692-19.167-13.846Q523 421 512 418l-3-44h-60l-3 44q-11 3-21.833 9.154Q413.333 433.308 405 441l-42-14-28 48 30 24q-5 14-5 29t5 29l-30 24 28 48 42-14q8.056 8.077 18.528 14.538Q434 636 446 638l3 44Zm30.118-84Q450 598 429.5 577.618q-20.5-20.383-20.5-49.5Q409 499 429.382 478.5q20.383-20.5 49.5-20.5Q508 458 528.5 478.382q20.5 20.383 20.5 49.5Q549 557 528.618 577.5q-20.383 20.5-49.5 20.5Z"></path></svg>
                                                &nbsp;
                                                <span className='text-capitalize'>Discord Settings</span>
                                            </li>
                                        </Link>

                                        <Link to="/application-form" className={`mb-1 ${path == "/application-form" ? 'active' : ''}`}>
                                            <li className="list-group-item border-0 d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill={`${path == "/application-form" ? 'var(--white)' : 'var(--light-gray)'}`}><path d="M21.55 41.3H9q-1.2 0-2.1-.9-.9-.9-.9-2.1V9.2q0-1.2.775-2.1.775-.9 1.325-.9h10.1q.35-1.75 1.725-2.875T23.1 2.2q1.8 0 3.175 1.125Q27.65 4.45 28 6.2h10.1q1.2 0 2.1.9.9.9.9 2.1v10.15h-3V9.2h-5.3v6.5H14.3V9.2H9v29.1h12.55ZM31 40.05l-8-8 2.15-2.15L31 35.75 42.95 23.8l2.15 2.15ZM24 9q.85 0 1.425-.575Q26 7.85 26 7q0-.85-.575-1.425Q24.85 5 24 5q-.85 0-1.425.575Q22 6.15 22 7q0 .85.575 1.425Q23.15 9 24 9Z"></path></svg>
                                                &nbsp;
                                                <span className='text-capitalize'>Application Forms </span>
                                            </li>
                                        </Link>
                                        <Link to="/bot-server" className={`mb-1 ${path == "/bot-server" ? 'active' : ''}`}>
                                            <li className="list-group-item border-0 d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill={`${path == "/bot-server" ? 'var(--white)' : 'var(--light-gray)'}`}><path d="M16 12h2v4h-2z"></path><path d="M7.35 29.2q-2.25 0-3.8-1.55Q2 26.1 2 23.85t1.55-3.8q1.55-1.55 3.8-1.55v-6.15q0-1.2.9-2.1.9-.9 2.1-.9h8.3q0-2.25 1.55-3.8Q21.75 4 24 4t3.8 1.55q1.55 1.55 1.55 3.8h8.3q1.2 0 2.1.9.9.9.9 2.1v6.15q2.25 0 3.8 1.55Q46 21.6 46 23.85t-1.55 3.8q-1.55 1.55-3.8 1.55V39q0 1.2-.9 2.1-.9.9-2.1.9h-27.3q-1.2 0-2.1-.9-.9-.9-.9-2.1Zm9.8-5q.85 0 1.425-.575.575-.575.575-1.425 0-.85-.575-1.425Q18 20.2 17.15 20.2q-.85 0-1.425.575-.575.575-.575 1.425 0 .85.575 1.425.575.575 1.425.575Zm13.7 0q.85 0 1.425-.575.575-.575.575-1.425 0-.85-.575-1.425-.575-.575-1.425-.575-.85 0-1.425.575-.575.575-.575 1.425 0 .85.575 1.425.575.575 1.425.575ZM15.6 33.75h16.8v-3H15.6ZM10.35 39h27.3V12.35h-27.3Zm0 0V12.35 39Z"></path></svg>
                                                &nbsp;
                                                <span className='text-capitalize'>Bot's Servers</span>
                                            </li>
                                        </Link>
                                        <Link to="/listed-guild" className={`mb-1 ${path == "/listed-guild" ? 'active' : ''}`}>
                                            <li className="list-group-item border-0 d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill={`${path == "/listed-guild" ? 'var(--white)' : 'var(--light-gray)'}`}><path d="M16 12h2v4h-2z"></path><path d="M12 24.5h3v-3h-3Zm0 6h18v-3H12Zm21 0h3v-3h-3Zm-15-6h18v-3H18ZM7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V11H7v26Zm0 0V11v26Z"></path></svg>
                                                &nbsp;
                                                <span className='text-capitalize'>Listed Servers</span>
                                            </li>
                                        </Link>
                                        <Link to="/whitelist" className={`mb-1 ${path == "/whitelist" ? 'active' : ''}`}>
                                            <li className="list-group-item border-0 d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 96 960 960" fill={`${path == "/whitelist" ? 'var(--white)' : 'var(--light-gray)'}`}><path d="M16 12h2v4h-2z"></path><path d="M224.118 895Q175 895 140.5 860.583 106 826.167 106 777H40V316q0-24 18-42t42-18h579v167h105l136 181v173h-71q0 49.167-34.382 83.583Q780.235 895 731.118 895 682 895 647.5 860.583 613 826.167 613 777H342q0 49-34.382 83.5-34.383 34.5-83.5 34.5ZM224 835q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17ZM100 717h22q17-27 43.041-43 26.041-16 58-16t58.459 16.5Q308 691 325 717h294V316H100v401Zm631 118q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17Zm-52-204h186L754 483h-75v148ZM360 527Z"></path></svg>
                                                &nbsp;
                                                <span className='text-capitalize'>Whitelist</span>
                                            </li>
                                        </Link>

                                    </ul>


                                </div>
                            </div>
                        </div>
                        <div className={`col-md-8 col-xl-9 col-xxl-10 p-0 ${size < 991 ? ' offcanvas-body' : ''}`}>
                            <Nav size={size} />
                            <main>{children}</main>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sidebar
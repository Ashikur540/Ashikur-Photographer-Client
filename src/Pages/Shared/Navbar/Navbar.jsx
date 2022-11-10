import React, { useContext, useState } from 'react';
import { CiLogin } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider';
const Navbar = () => {
    const { user, UserSignOut } = useContext(AuthContext);


    const handleLogout = () => {
        if (!user) {
            toast.info("log in first atleast!")
        }
        else {
            UserSignOut()
                .then(() => {
                    toast.success("logged out")
                })
                .catch(error => {
                    toast.error(error.message)
                })
        }
    }

    const [isToggleOpen, setIsToggleOpen] = useState(false)
    return (



        <>
            {/*<!-- Component: Navbar with Avatar --> */}
            {/*<!-- Header --> */}
            <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
                <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                        role="navigation"
                    >
                        {/*      <!-- Brand logo --> */}
                        <Link to="/">
                            <p className="text-2xl font-logoFont mt-6 ">Ashikur Rahman</p>
                        </Link>
                        {/*      <!-- Mobile trigger --> */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center lg:hidden
          ${isToggleOpen
                                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                                    : ""
                                }
        `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                            </div>
                        </button>
                        {/*      <!-- Navigation links --> */}
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                                ? "visible opacity-100 backdrop-blur-sm"
                                : "invisible opacity-0"
                                }`}
                        >

                            <li role="none" className="flex items-stretch">
                                <Link
                                    to="/services/all"
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    href="javascript:void(0)"
                                >
                                    <span>Services</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link
                                    to="/blogs"
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    href="javascript:void(0)"
                                >
                                    <span>Blogs</span>
                                </Link>
                            </li>

                            {
                                user?.uid && <li role="none" className="flex items-stretch">
                                    <Link
                                        to="/reviews"
                                        role="menuitem"
                                        aria-haspopup="false"
                                        tabIndex="0"
                                        className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                        href="javascript:void(0)"
                                    >
                                        <span>My reviews</span>
                                    </Link>
                                </li>
                            }
                            {
                                user?.uid && <li role="none" className="flex items-stretch">
                                    <Link
                                        to="/services/add"
                                        role="menuitem"
                                        aria-haspopup="false"
                                        tabIndex="0"
                                        className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                        href="javascript:void(0)"
                                    >
                                        <span>Add Services</span>
                                    </Link>
                                </li>
                            }
                            <li role="none" className="flex items-stretch md:items-center md:justify-center">

                                <Link
                                    to="/login"
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    class="inline-flex items-center max-h-12 justify-center rounded border bg-gradient-to-bl from-sky-400 to-indigo-900 px-8 py-3 text-white hover:bg-transparent hover:text-slate-300 focus:outline-none focus:ring active:text-indigo-500"

                                >
                                    <span class="text-sm font-medium"> Get Started </span>

                                    <svg
                                        class="ml-3 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                        <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
                            {/*        <!-- Avatar --> */}
                            <Link
                                href="#"
                                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
                            >
                                <img
                                    src={user?.photoURL ? user?.photoURL : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                                    alt="user name"
                                    title={user?.displayName ? user.displayName : "no user found"}
                                    width="40"
                                    height="40"
                                    className="max-w-full rounded-full"
                                />

                            </Link>
                            {
                                user?.uid && <button className="text-2xl ml-2" title="log out" onClick={handleLogout}><CiLogin /></button>
                            }
                            {/*        <!-- End Avatar --> */}
                        </div>
                    </nav>
                </div>
            </header>
            {/*<!-- End Navbar with Avatar--> */}
        </>

    )
}

export default Navbar
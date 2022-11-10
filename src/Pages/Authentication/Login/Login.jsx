import { GoogleAuthProvider } from '@firebase/auth';
import { useContext } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useLocation } from 'react-router';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginImg from "../../../../src/Assets/Image/login.jpg";
import { useDynamicTitle } from '../../../Components/Hooks/DynamicTitle';
import { AuthContext } from "../../../Contexts/AuthProvider";

export const Login = () => {
    const { UserSignIn, setUser, user, googleSignin, resetUserPassword } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const location = useLocation();
    console.log("from login-", location);
    const from = location.state?.from?.pathname || "/"
    // console.log("login:", user);
    const navigate = useNavigate();

    useDynamicTitle('Ashikur-login')


    // states
    // const [userInfo, setUserInfo] = useState({
    //     emailadd: "",
    //     password: "",

    // })




    const handleUserSignin = (email, password) => {
        // console.log("from function", email, password)
        UserSignIn(email, password)
            .then(result => {
                const currentUser = result.user;
                console.log(currentUser);
                // setUser(user)
                toast.success("successfully logged in", {
                    position: "top-center"
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message, {
                    position: "top-center"
                })

            })
    }

    const handleGoogleSignin = () => {

        googleSignin(googleProvider).then(result => {
            const user = result.user;
            console.log(user);
            // window.location.reload();
            toast.success("successfully logged in", {
                position: "top-center"
            })
            navigate(from, { replace: true })
        })
            .catch(error => {
                console.error(error);
                toast.error(error.message, {
                    position: "top-center"
                })
            })
    }

    const handleResetPass = (e) => {
        const email = e.target.email.value;
        resetUserPassword(email)
            .then(() => {
                toast.success("we have mail reset link to you mail \n checkout mail", {
                    position: "top-center"
                })
            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-center"
                })
            })
    }

    // const handleEmail = (e) => {
    //     const emailadd = e.target.value;
    //     setUserInfo({ ...emailadd, emailadd: emailadd })
    // }



    // const handlePassword = (e) => {
    //     const password = e.target.value;
    //     setUserInfo({ ...password, password: password })
    // }


    const handleSubmit = (e) => {
        e.preventDefault();
        // const password = userInfo.password;
        // const email = userInfo.emailadd;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // signin
        handleUserSignin(email, password)


    }

    return (
        <section className="min-h-screen">
            <div className="px-6 h-full text-gray-800 ">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6  md:px-24"
                >
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                            src={loginImg}
                            className="w-full max-h-[600px] object-cover"
                            alt="Sampleimage"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12  md:w-8/12 mb-12 md:mb-0">
                        <div className="flex flex-row items-center justify-center lg:justify-start space-x-6">
                            <p className="mb-0 mr-4 text-xl font-semibold ">Sign in with</p>
                            <button className="w-auto " alt="" onClick={handleGoogleSignin} ><BsGoogle className="text-red-500 text-3xl" /></button>
                            <button className="w-auto ml-auto" alt="" onClick={() => { toast.info("Currently not availale.\n We are working on it") }}  ><BsGithub className="text-accent-100 text-3xl" /></button>
                        </div>

                        <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p className="text-center font-semibold mx-4 mb-0">Or</p>
                        </div>
                        <form onSubmit={handleSubmit}>


                            {/* <!-- Email input --> */}
                            <div className="mb-6">
                                <input

                                    type="email"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    name="email"
                                    placeholder="Email address: lutuputu@gmail.com"
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="mb-6">
                                <input
                                    required
                                    type="password"


                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">

                                </div>
                                <Link to="/login" onClick={handleResetPass} className="text-gray-800">Forgot password?</Link>
                            </div>

                            <div className="text-center lg:text-left">

                                <button
                                    class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring rounded-sm"
                                    type="submit"

                                >
                                    <span
                                        class="absolute inset-0 border border-blue-600 group-active:border-blue-500 rounded-sm"
                                    ></span>
                                    <span
                                        class="block border border-blue-600 bg-blue-600 px-12 py-3 transition-transform active:border-blue-500 active:bg-blue-500 group-hover:-translate-x-1 group-hover:-translate-y-1 rounded-sm"
                                    >
                                        LOGIN
                                    </span>
                                </button>

                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <Link
                                        to="/register"
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    >Register</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
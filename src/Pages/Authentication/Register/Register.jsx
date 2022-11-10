import { useContext, useState } from "react";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import regImg from "../../../../src/Assets/Image/register.jpg";
import { useDynamicTitle } from "../../../Components/Hooks/DynamicTitle";
import { AuthContext } from "../../../Contexts/AuthProvider";


export const Register = () => {
    // context
    const { UserSignUp, updateUserProfile, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    // validation objects......

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        url: "",
        name: "",
        // password2: ""
    })
    const [error, setError] = useState({
        emailErr: "",
        urlErr: "",
        passwordErr: "",
        // passwordErr2: "",
        // mismatch: ""
    })



    // handeling functions---------------------------------\



    const handleName = (e) => {
        const fullname = e.target.value;
        setUserInfo({ ...userInfo, name: fullname })
    }


    const handleUserSignUp = (email, password) => {
        const name = userInfo.name;
        const url = userInfo.url;
        UserSignUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("successfully registered", {
                    position: "top-center"
                })
                handleUpdateUser(name, url);
                window.location.reload();

            })
            .catch(error => {
                console.error(error);
                toast.error(error.message, {
                    position: "top-center"
                })
            })
    }


    const handleUpdateUser = (name, photoURL) => {

        console.log("updateFunc", name, photoURL);
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        console.log("profile", profile);
        updateUserProfile(profile)
            .then(() => {
                console.log("inside ", profile);
                toast.success("profile updated", {
                    position: "top-center"
                })
            }).catch(error => {
                console.log(error)
            })
    }


    //handling  validation functions

    const handleURL = (e) => {
        const URL = e.target.value;
        const valid = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(URL);

        if (!valid)
            setError({ ...error, urlErr: "Please provide a valid url" });
        else {
            setError({ ...error, urlErr: "" });

        }
        setUserInfo({ ...userInfo, url: URL })
    }


    const handleEmail = (e) => {

        const email = e.target.value;
        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

        if (!validEmail) {
            setError({ ...userInfo, emailErr: "Please provide a valid email address" });
            setUserInfo({ ...userInfo, email: "" })
        }

        else {
            setError({ ...error, emailErr: "" })
            setUserInfo({ ...userInfo, email: email })
        }
        console.log(userInfo.email);
    }


    const handlePass = (e) => {
        const password = e.target.value;
        console.log(password);
        // set the errros  ............
        const lenError = password.length < 8;
        const charError = !/(?=[^!@#$&*]*[!@#$&*])/.test(password);
        const UPPLetterError = !/(?=(?:[^A-Z]*[A-Z]){2})/.test(password);
        const numericError = !/(?=(?:[^0-9]*[0-9]){2})/.test(password);


        if (lenError) {

            setError({ ...error, passwordErr: "password must be 8 characters" })
            setUserInfo({ ...userInfo, password: "" })
            setUserInfo({ ...userInfo, password2: "" })

        }
        else if (charError) {
            setError({ ...error, passwordErr: "password should have at least have a special character" })
            setUserInfo({ ...userInfo, password: "" })
            setUserInfo({ ...userInfo, password2: "" })

        }
        else if (UPPLetterError) {
            setError({ ...error, passwordErr: "password should have at least 2 capital letters" })
            setUserInfo({ ...userInfo, password: "" })
            setUserInfo({ ...userInfo, password2: "" })

        }
        else if (numericError) {
            setError({ ...error, passwordErr: "password should have atleast 2 numbers" })
            setUserInfo({ ...userInfo, password: "" })
            setUserInfo({ ...userInfo, password2: "" })

        }
        else {
            setError({ ...error, passwordErr: "" });
            setError({ ...userInfo, password: "" })
            setError({ ...userInfo, password2: "" })

        }
        setUserInfo({ ...userInfo, password: password, password2: e.target.value })
        // console.log(userInfo.password);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = userInfo.name;
        const url = userInfo.url;
        const password = userInfo.password;
        const email = userInfo.email;
        console.log(email, password, name, url);
        // signUp
        handleUserSignUp(email, password);
        navigate("/")




    }

    useDynamicTitle("Ashikur- Register")
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
                            src={regImg}
                            className="w-full max-h-[600px] object-cover"
                            alt="Sampleimage"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12  md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-row items-center justify-center mb-6 lg:justify-start">
                                <p className="mb-0 mr-4 text-xl font-semibold ">Sign up</p>

                            </div>

                            {/* <!-- name input --> */}
                            <div className="mb-6">
                                <input
                                    onChange={handleName}
                                    type="text"
                                    name="name"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                    placeholder="Full name"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    onChange={handleURL}
                                    type="url"
                                    name="url"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                    placeholder="Img-url: http://ayz.com"
                                />
                            </div>
                            {
                                error?.urlErr ? <p className="text-red-600 font-semibold my-3">{error.urlErr}</p>
                                    : <></>
                            }
                            {/* <!-- Email input --> */}
                            <div className="mb-6">
                                <input
                                    onChange={handleEmail}
                                    type="email"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                    name="email"
                                    placeholder="Email address: lutuputu@gmail.com"
                                />
                            </div>
                            {
                                error?.emailErr ? <p className="text-red-600 font-semibold my-3">{error.emailErr}</p>
                                    : <></>
                            }

                            {/* <!-- Password input --> */}
                            <div className="mb-6">
                                <input
                                    onChange={handlePass}
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    name="password"
                                    placeholder="Password: *****"
                                />
                            </div>
                            {
                                error?.passwordErr ? <p className="text-red-600 font-semibold my-3">{error.passwordErr}</p>
                                    : <></>
                            }

                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">

                                </div>
                                <a href="#!" className="text-gray-800">Forgot password?</a>
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
                                        REGISTER
                                    </span>
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <Link
                                        to="/login"
                                        className="text-red-600 tracking-wide hover:text-red-700 focus:text-red-700  transition duration-200 ease-in-out"
                                    >login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
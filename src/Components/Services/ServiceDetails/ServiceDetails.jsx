import React, { useContext, useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import { ReviewCard } from "../../../Components/ReviewCard/ReviewCard";
import { AuthContext } from '../../../Contexts/AuthProvider';
const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const serviceDetails = useLoaderData().data;
    const { _id, name, about, price, rating, picture } = serviceDetails;
    console.log(serviceDetails);


    // load service id based reviews
    useEffect(() => {
        fetch(`http://localhost:5000/services/${_id}/reviews`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data.data);
                    setReviews(data.data);
                }
                else {
                    toast.error(data.errMessage)
                }
            })
            .catch(err => toast.error(err.message))
    }, [refresh])

    // post review data to db 
    const handleAddReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const reviewtext = form.reviewtext.value;
        const rating = form.rating.value;
        console.log(reviewtext, rating);
        const reviewInfo = {
            serviceId: _id,
            reviewerEmail: user?.email,
            reviewerName: user?.displayName,
            reviewerPhoto: user?.photoURL,
            reviewtext,
            rating
        }
        console.log(reviewInfo);

        fetch(`http://localhost:5000/services/${_id}/reviews/add`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    form.reset();
                    setRefresh(!refresh)
                }
            })
            .catch(err => toast.error(err.message))

    }

    return (
        <div>
            <h1 className="text-xl md:text-3xl font-semibold my-4">Explores <span className="text-sky-600">{name} </span>details here</h1>

            <div class="flex justify-center ">
                <div class="flex flex-col md:flex-row md:max-w-5xl rounded-lg bg-white shadow-lg my-4">
                    <img class=" w-full h-96  object-cover md:w-80 rounded-t-lg md:rounded-none md:rounded-l-lg" src={picture} alt="" />
                    <div class="p-6 flex flex-col justify-start md:text-left">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                        <p class="text-gray-700 text-base mb-4">
                            {about}
                        </p>
                        <p class="text-sm  uppercase tracking-widest text-slate-700 font-bold">
                            {
                                rating === 1 && "💛"
                            }
                            {
                                rating === 2 && "💛💛"
                            }
                            {
                                rating === 3 && "💛💛💛"
                            }
                            {
                                rating === 4 && "💛💛💛💛"
                            }
                            {
                                rating === 5 && "💛💛💛💛💛"
                            }
                            {'                                    '}$ {price}
                        </p>
                        {/* <p class="text-gray-600 text-xs">Last updated 3 mins ago</p> */}
                    </div>
                </div>
            </div>
            <h1 className="text-xl md:text-3xl font-semibold my-4">Lets's see what people say about <span className="text-sky-600">{name} </span>here</h1>
            <div className="max-w-[60px] h-1 bg-slate-800 mx-auto my-6"></div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-sm mx-auto md:max-w-full">


                    {
                        reviews.map(review => <ReviewCard
                            key={serviceDetails.serviceId}
                            serviceName={name}
                            review={review}
                        ></ReviewCard>)
                    }
                </div>
                {
                    user?.uid ? <button
                        class="inline-flex mt-12 items-center max-h-12 justify-center rounded border bg-gradient-to-bl from-sky-400 to-indigo-900 px-8 py-3 text-white hover:bg-transparent hover:text-slate-300 focus:outline-none focus:ring active:text-indigo-500"
                        data-bs-toggle="modal" data-bs-target="#exampleModalCenter"
                    >
                        <FaPlus></FaPlus>
                        <span class="text-sm font-medium ml-4"> Add review </span>
                    </button>
                        :
                        <div className="text-2xl font-semibold my-8 text-slate-400">
                            Please login first to add your review
                        </div>
                }

                {/* modal body */}
                <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                    <div class="modal-dialog modal-dialog-centered mx-auto my-auto relative max-w-xl pointer-events-none">
                        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">

                                <h5 class="text-xl flex items-center  font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                                    <img
                                        src={user?.photoURL}
                                        alt="avatar"
                                        className="object-cover w-10 h-10 rounded-full shadow-sm mr-4"
                                    />
                                    {user?.displayName}
                                </h5>
                                <button type="button"
                                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body relative p-4">
                                {/* <!-- Component: Rounded base size textarea with helper text --> */}
                                <form class="relative" onSubmit={handleAddReview}>
                                    <textarea id="reviewtext" type="text" name="reviewtext" rows="3" placeholder="Write your review" class="relative w-full px-4 py-2 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-600 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"></textarea>
                                    <label htmlFor="id-b03" className="absolute left-2 -top-2 z-[1] px-2 text-md text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\u00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-600 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                                        Write your review
                                    </label>
                                    {/* <!-- Component: Plain basic input  --> */}
                                    <div class="h-auto mb-4">
                                        <div class="relative my-6">
                                            <input id="rating" type="text" name="rating" placeholder="rating" class="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-600 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                                            <label for="id-b02" class="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\u00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-600 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                                                rating( 5/4/3/2/1)
                                            </label>
                                        </div>
                                    </div>
                                    {/* <!-- End Plain basic input  --> */}
                                    <div
                                        class=" flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                        <button type="button"
                                            class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                            data-bs-dismiss="modal">
                                            Close
                                        </button>
                                        <button type="submit"
                                            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                            Save review
                                        </button>
                                    </div>
                                </form>
                                {/* <!-- End Rounded base size textarea with helper text --> */}


                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default ServiceDetails
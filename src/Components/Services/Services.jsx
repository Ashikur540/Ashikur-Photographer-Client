import React, { useEffect, useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ServiceCard from './ServiceCard/ServiceCard';
const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data.data);
                    setServices(data.data)
                }
                else {
                    toast.error(data.errMessage)
                }
            })
            .catch(err => {
                toast.error(err.message)
            })

    }, [])






    return (
        <>
            {/* <!-- Component: Three columns even layout --> */}
            <section>
                <div class="container px-6 m-auto mb-16 md:mb-28">
                    <h1 className="text-3xl font-bold my-4">Our Services</h1>
                    <p className="text-md my-8 text-slate-800 p-2 text-center w-1/2 mx-auto ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, vitae? Illum ipsum, laudantium dolorum quae temporibus aut deserunt nemo velit eligendi nisi officia expedita pariatur, quod consequatur maxime at. Amet?</p>
                    <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                        {
                            services.map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }

                    </div>
                    <Link to='/services/all'>
                        <button
                            class="inline-flex items-center my-8 rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                            href="/download"
                        >
                            <span class="text-sm font-medium"> Show more </span>

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
                        </button>
                    </Link>
                </div>

            </section>
            {/* <!-- End Three columns even layout --> */}
        </>
    )
}

export default Services
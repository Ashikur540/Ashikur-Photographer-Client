import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Allservices = () => {

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services/all')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data.data);
                    setAllServices(data.data)
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
        <section id="allservicesCards">
            <div class="container px-6 m-auto">
                <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                    <div class="col-span-4 md:col-span-8 lg:col-span-12">
                        {
                            allServices.map(service => {
                                const { name, price, rating, picture, about } = service
                                return (
                                    // <div class="flex justify-left ">
                                    <div class="flex flex-col md:flex-row md:max-w-5xl rounded-lg bg-white shadow-lg my-4">
                                        <img class=" w-full h-96 md:h-auto object-cover md:w-80 rounded-t-lg md:rounded-none md:rounded-l-lg" src={picture} alt="" />
                                        <div class="p-6 flex flex-col justify-start md:text-left">
                                            <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                                            <p class="text-gray-700 text-base mb-4">
                                                {about}
                                            </p>
                                            <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                                        </div>
                                    </div>
                                    // </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Allservices
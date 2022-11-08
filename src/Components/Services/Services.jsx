import React, { useEffect, useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
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
                            services.slice(0, 3).map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }

                    </div>
                </div>
            </section>
            {/* <!-- End Three columns even layout --> */}
        </>
    )
}

export default Services
import React from 'react';
import { toast } from 'react-toastify';
import { useDynamicTitle } from '../../Components/Hooks/DynamicTitle';

const Addservices = () => {
    useDynamicTitle("Ashikur-Add services")
    const handleSubmit = (e) => {
        e.preventDefault();
        let form = e.target;

        const serviceInfo = {
            serviceName: form.name.value,
            price: form.price.value,
            picture: form.url.value,
            about: form.about.value
        }

        // console.log("from add service:", serviceInfo);


        if (serviceInfo === null) {
            toast.error("provide the details")
        }
        else {
            fetch('http://localhost:5000/services/add', {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(serviceInfo)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        toast.success(data.message);
                        form.reset();
                    }
                    else {
                        toast.error(data.errMessage)
                    }

                })
                .catch(err => {
                    toast.error(err.message)
                })
        }
    }


    return (
        <div>
            <h1 className="text-3xl font-semibold my-12">Here can add services</h1>
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
                <form onSubmit={handleSubmit}>
                    <div class="form-group mb-6">
                        <input type="text" name="name" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                            placeholder="Service Name" />
                    </div>
                    <div class="form-group mb-6">
                        <input type="text" name="price" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                            placeholder="price" />
                    </div>
                    <div class="form-group mb-6">
                        <input type="url" name="url" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                            placeholder="photo url" />
                    </div>

                    <div class="form-group mb-6">
                        <textarea
                            name="about"
                            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                            id="exampleFormControlTextarea13"
                            rows="3"
                            placeholder="Message"
                        ></textarea>
                    </div>

                    <button type="submit" class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Add service</button>
                </form>
            </div>
        </div>
    )
}

export default Addservices
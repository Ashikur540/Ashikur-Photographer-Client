import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const Services = () => {
    return (
        <>
            {/* <!-- Component: Three columns even layout --> */}
            <section>
                <div class="container px-6 m-auto mb-16 md:mb-28">
                    <h1 className="text-3xl font-bold my-4">Our Services</h1>
                    <p className="text-md my-8 text-slate-800 p-2 text-center w-1/2 mx-auto ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, vitae? Illum ipsum, laudantium dolorum quae temporibus aut deserunt nemo velit eligendi nisi officia expedita pariatur, quod consequatur maxime at. Amet?</p>
                    <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                        <div class="col-span-4">
                            <PhotoProvider>
                                <PhotoView src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80">
                                    <a href="#" class="group relative block bg-black">
                                        <img
                                            alt="Developer"
                                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                        />

                                        <div class="relative p-8">
                                            <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                                                Developer
                                            </p>

                                            <p class="text-2xl font-bold text-white">Tony Wayne</p>

                                            <div class="mt-64">
                                                <div
                                                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                                >
                                                    <p class="text-sm text-white">
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                                        perferendis hic asperiores quibusdam quidem voluptates doloremque
                                                        reiciendis nostrum harum. Repudiandae?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </PhotoView>
                            </PhotoProvider>

                        </div>
                        <div class="col-span-4">
                            <PhotoProvider>
                                <PhotoView src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80">
                                    <a href="#" class="group relative block bg-black">
                                        <img
                                            alt="Developer"
                                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                        />

                                        <div class="relative p-8">
                                            <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                                                Developer
                                            </p>

                                            <p class="text-2xl font-bold text-white">Tony Wayne</p>

                                            <div class="mt-64">
                                                <div
                                                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                                >
                                                    <p class="text-sm text-white">
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                                        perferendis hic asperiores quibusdam quidem voluptates doloremque
                                                        reiciendis nostrum harum. Repudiandae?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </PhotoView>
                            </PhotoProvider>

                        </div>
                        <div class="col-span-4">
                            <PhotoProvider>
                                <PhotoView src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80">
                                    <a href="#" class="group relative block bg-black">
                                        <img
                                            alt="Developer"
                                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                        />

                                        <div class="relative p-8">
                                            <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                                                Developer
                                            </p>

                                            <p class="text-2xl font-bold text-white">Tony Wayne</p>

                                            <div class="mt-64">
                                                <div
                                                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                                >
                                                    <p class="text-sm text-white">
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                                        perferendis hic asperiores quibusdam quidem voluptates doloremque
                                                        reiciendis nostrum harum. Repudiandae?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </PhotoView>
                            </PhotoProvider>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Three columns even layout --> */}
        </>
    )
}

export default Services
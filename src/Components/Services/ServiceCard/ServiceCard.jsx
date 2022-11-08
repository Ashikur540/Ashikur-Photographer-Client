import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { _id, name, about, price, rating, picture } = service;
    return (
        <>
            <div class="col-span-4">
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <Link to="/" class="group relative block bg-black">
                            <img
                                alt="Developer"
                                src={picture}
                                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div class="relative p-8">
                                {/* <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                                    {name}
                                </p> */}
                                <p class="text-2xl font-bold text-white">{name}</p>
                                <p class="text-sm  uppercase tracking-widest text-slate-200 font-bold">
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
                                </p>

                                <div class="mt-64">
                                    <div
                                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p class="text-sm text-white">
                                            {
                                                about.length > 100 ? about.slice(0, 120) + "....." : about
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </PhotoView>
                </PhotoProvider>

            </div>
        </>
    )
}

export default ServiceCard
import React from 'react'
import { toast } from 'react-toastify'

const CTA = () => {
    return (
        <div className="my-8">
            <section
                class="overflow-hidden bg-[url(https://i.ibb.co/jMmXWLQ/contact.png)] bg-cover bg-center bg-no-repeat"
            >
                <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="max-w-lg text-center sm:text-left">
                        <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                            Wanna see more ?
                        </h2>

                        <p
                            class="hidden max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
                        >
                            I have slicked a lots of shots by my smart phone and also my camera .Here i have showed a glimps of them
                        </p>

                        <div class="mt-4 sm:mt-8">
                            <button
                                href="#"
                                class="inline-flex items-center rounded-full bg-indigo-700 px-8 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none focus:ring"
                                onClick={toast.info("This feature is currently not available \n we are working on it")}
                            >
                                <span class="text-sm font-medium"> Explore my shorts </span>

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
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default CTA
export const ReviewCard = ({ review, serviceName }) => {
    const { email, name, serviceId, rating, reviewtext, image } = review
    return (

        <div className="flex px-8 py-4 border-1 rounded-sm border">
            {/* <div className="pt-1 mr-6 text-center">
                        <div className="px-2 pb-1 mb-1 border-1 border-gray-400">
                            <p className="text-sm text-blue-gray-700">Jul</p>
                        </div>
                        <div className="px-2">
                            <p className="text-lg font-bold">18</p>
                        </div>
                    </div> */}
            <div>
                <div className="mb-2">
                    <a
                        href="/"
                        className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        aria-label="Category"
                        title="Delevopment"
                    >
                        {serviceName}
                    </a>
                </div>
                {/* <div className="mb-2">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Why I love Laravel
                            </a>
                        </div> */}
                <p className="mb-5 text-gray-700 text-center md:text-left">
                    {reviewtext}
                </p>
                <div className="flex items-center">
                    <a href="/" aria-label="Author" title="Author" className="mr-3">
                        <img
                            src={image}
                            alt="avatar"
                            className="object-cover w-10 h-10 rounded-full shadow-sm"
                        />
                    </a>
                    <div>
                        <p

                            aria-label="Author"
                            title="Author"
                            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            {name}
                        </p>
                        <p className="text-sm font-medium leading-4 text-gray-600">
                            Reviewer
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};
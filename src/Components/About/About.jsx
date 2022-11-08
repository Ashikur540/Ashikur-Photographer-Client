import IMG1 from "../../Assets/Image/ab1.jpg";
import IMG2 from "../../Assets/Image/ab2.jpg";
import IMG3 from "../../Assets/Image/ab3.jpg";

export const About = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center lg:justify-start  md:pr-8 xl:pr-0 lg:max-w-lg">

                    <div className="max-w-xl mb-6 text-center md:text-left">
                        <h2 className="max-w-lg mb-6  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Let us handle to
                            <br className="hidden md:block" />
                            capture your  next{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                moment.❤
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>

                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src={IMG2}
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src={IMG3}
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src={IMG1}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
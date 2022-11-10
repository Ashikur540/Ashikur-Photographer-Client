export const Milestone = () => {
    return (
        <div className="px-2 py-2 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-screen-5xl lg:py-2 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-md text-center shadow-md">
            <div className="grid grid-cols-1 row-gap-8 md:grid-cols-3  rounded-md  ">
                <div className="text-center  bg-stone-100 grid place-items-center p-8 border-r-2">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400 ">
                        150+
                    </h6>
                    <p className="font-bold">Approved in Pexels</p>
                </div>
                <div className="text-center   bg-stone-100 grid place-items-center p-8 border-r-2">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400 ">
                        10+
                    </h6>
                    <p className="font-bold">Weedings covered</p>
                </div>
                <div className="text-center   bg-stone-100 grid place-items-center p-8">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400 ">
                        2+
                    </h6>
                    <p className="font-bold">years experience</p>
                </div>

            </div >
        </div >
    );
};
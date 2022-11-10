export const MyReviewsCard = ({ reviews }) => {

    const { reviewerName, reviewerPhoto, reviewtext, rating } = reviews;
    return (

        <div className="p-8 bg-sky-50 shadow-md border rounded">
            {/* <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                    href="/"
                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                >
                    weekend
                </a>{' '}
                <span className="text-gray-600">— 1 Feb 2020</span>
            </p> */}
            <div className="flex items-center">
                <p aria-label="Author" title="Author" className="mr-3">
                    <img
                        src={reviewerPhoto}
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                </p>
                <div>
                    <a
                        href="/"
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        { }
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                        Reviwer
                    </p>
                </div>
            </div>
            <a
                href="/"
                aria-label="Article"
                title="Jingle Bells"
                className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                {reviewerName}
            </a>
            <p className="mb-5 text-gray-700">
                {reviewtext}
            </p>
            <p class="text-sm  uppercase tracking-widest text-slate-800 font-bold">
                💛{rating}
            </p>

        </div>


    );
};
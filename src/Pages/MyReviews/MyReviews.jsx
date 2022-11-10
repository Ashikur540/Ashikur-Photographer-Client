import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MyReviewsCard } from '../../Components/MyReviewsCard/MyReviewsCard';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data.data);
                    setMyreviews(data.data)
                }
                else {
                    toast.error(`data loading failed`)
                }
            })
            .catch(err => toast.error(err.message))
    }, [user?.email])


    return (
        <div className="min-h-screen px-12">

            <h1 className="text-3xl font-semibold my-12">Here are the reviews you wrote so far</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-sm mx-auto md:max-w-full">
                {
                    myreviews.map(reviews => <MyReviewsCard
                        key={myreviews._id}

                        reviews={reviews}
                    ></MyReviewsCard>)
                }
            </div>

        </div>
    )
}

export default MyReviews
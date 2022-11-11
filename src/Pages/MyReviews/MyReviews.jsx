import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDynamicTitle } from '../../Components/Hooks/DynamicTitle';
import { MyReviewsCard } from '../../Components/MyReviewsCard/MyReviewsCard';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        fetch(`https://ashikur-photographer-server.vercel.app/reviews?email=${user.email}`)
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
    }, [user?.email, refresh])

    useDynamicTitle('Ashkur- My reviews')

    const handleDelete = (id) => {
        const consent = window.confirm("are you sure to delete?")
        if (consent) {
            fetch(`https://ashikur-photographer-server.vercel.app/reviews/${id}`, {
                method: "delete",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        console.log(data.data);
                        toast.success(data.message);
                        setRefresh(!refresh);

                    }
                    else {
                        toast.error(data.message)
                    }
                })
                .catch(err => toast.error(err))
        }
        else {
            return;
        }
    }



    return (
        <div className="min-h-screen px-12">


            {
                myreviews.length === 0 ? <div className="text-2xl font-semibold my-8 text-slate-400">
                    No reviews added so far</div>
                    :
                    <>
                        <h1 className="text-3xl font-semibold my-12">Here are the reviews you wrote so far</h1>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-sm mx-auto md:max-w-full">

                            {
                                myreviews.map(reviews => <MyReviewsCard
                                    key={myreviews._id}
                                    handleDelete={handleDelete}

                                    reviews={reviews}
                                ></MyReviewsCard>)
                            }
                        </div>
                    </>
            }


        </div>
    )
}

export default MyReviews
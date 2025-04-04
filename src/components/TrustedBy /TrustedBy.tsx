'use client'
import React, {useEffect, useState} from 'react';
import "./TrustedBy.scss"
import Button from "@/components/UI/Button/Button";
import MyModal from "@/components/UI/MyModal/MyModal";
import {usePathname} from "next/navigation";
import FormHLeaveReview from "@/components/FormHLeaveReview/FormHLeaveReview";
import Swiper from "@/components/UI/Swiper/Swiper";
import {fetchReviews} from "@/app/lib/date";


const TrustedBy = () => {

    const [reviews, setReviews] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchReviews();
                setReviews(data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchData();
    }, []);

    if (!reviews) {
        return <div>Loading...</div>;
    }

    const pathName = usePathname();
    return (
        <div className="container-trusted-by">
            <span className="title-block">trusted by</span>
            <Swiper
                isButtonToggle={false}
                cards={reviews}
                numberCards={-1}
                renderItem={(item: any) => (
                    <div key={item.id} className="container-reviews">
                        <div className="quotes">“</div>
                        <div className="wrapper-reviews">
                            <div className="reviews">{item.reviews}</div>
                            <div>{item.userName}</div>
                            <div>{item.company}</div>
                        </div>
                    </div>
                )}
            />
            <div></div>
            <MyModal
                childrenOpen={
                    <Button>
                        {pathName === "/ua" ? "залишити відгук" : "leave review"}
                    </Button>
                }
                childrenModal={<FormHLeaveReview/>}
                layoutId={"leaveReview"}
            />
        </div>
    );
};

export default TrustedBy;
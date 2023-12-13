import { Reviews } from "./models";
import { connectToDb } from "@/app/lib/utils";

export const fetchReviews = async () => {
    try {
        await connectToDb();
        const reviews = await Reviews.find({ isPublic: true });
        return reviews;
    } catch (error) {
        throw new Error("fetchReviews: " + error.message);
    }
};

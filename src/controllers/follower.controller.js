
import { addFollower, removeFollower } from "../services/Follower.service.js";


export const addfollowerController = async (req, res) => {
    try {
        const { userId, followId } = req.body;
        const result = await addFollower(userId, followId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const  unfollowerController = async (req, res) => {
    try {
        const { userId, unfollowId } = req.body;
        const result = await removeFollower(userId, unfollowId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

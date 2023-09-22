
import PostSchema from '../database/models/post'

export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await PostSchema.find({});

        return res.status(200).json({ message: 'Success', posts: posts });

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error', error: error });
    }
};
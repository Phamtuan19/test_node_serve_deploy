import express from 'express';
import { getAllPosts } from '../../controllers/post.controller';

const postRoute = express.Router();

postRoute.get('/', getAllPosts)

export default postRoute;
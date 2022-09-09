import { createContext, Dispatch } from "react";
import { Post } from "../entities/post.entity";

import PostsStub from '../assets/posts.stub.json';
import { POST_ACTION } from "../actions/posts.action";

type InitialStateProps = {
    postsData: Post[];
    postsDispatch: Dispatch<POST_ACTION | any>;
}

export const PostContext = createContext<InitialStateProps>({
    postsData: PostsStub,
    postsDispatch: () => null
})
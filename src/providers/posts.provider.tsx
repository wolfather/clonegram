import { ReactNode, useReducer } from "react"
import { PostContext } from "../contexts/posts.context"
import { postsReducer } from "../reducers/posts.reducer";
import PostsStub from '../assets/posts.stub.json';
import { Post } from "../entities/post.entity";

type ProviderProps = {
    children: ReactNode;
}

export const PostsProvider = ({children}: ProviderProps) => {
    const [postsData, postsDispatch] = useReducer(postsReducer, PostsStub as Post[]);

    return (
        <PostContext.Provider value={{postsData, postsDispatch}}>
            {children}
        </PostContext.Provider>
    );
}
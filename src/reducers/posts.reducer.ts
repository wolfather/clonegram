import { POST_ACTION } from "../actions/posts.action"

import PostsStub from '../assets/posts.stub.json';
import { Post } from "../entities/post.entity";

type PostReducerProps = {
    type: POST_ACTION,
    payload: any
}

export function postsReducer(state: Post[] = PostsStub, action: PostReducerProps): Post[] {
    const {type, payload} = action;
    
    switch(type) {
        case POST_ACTION.TOGGLE_LIKE_POST:
            const getPostById = state.find(post => post.id === payload.postId);
            const likesList = new Set(getPostById.likes);

            if(likesList.has(payload.userId)) {
                likesList.delete(payload.userId);
            } else {
                likesList.add(payload.userId);
            }

            const newPostState: Post = {
                ...getPostById, likes: Array.from(likesList)
            };

            return state.map(post => (
                post.id === newPostState.id ? newPostState : post)
            );

        default: return state;
    }
}
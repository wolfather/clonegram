import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { POST_ACTION } from "../../actions/posts.action";
import { PostContext } from "../../contexts/posts.context";

export const Posts = () => {
    const { postsData, postsDispatch } = useContext(PostContext);

    return (
        <View>
            {postsData.map(post => (
                <View key={post.id}>
                    <Text>{post.text}</Text>
                    <TouchableOpacity 
                        onPress={()=> (
                            postsDispatch({
                                type: POST_ACTION.TOGGLE_LIKE_POST,
                                payload: {
                                    postId: post.id,
                                    userId: 1
                                }
                            })
                        )}><Text>{post.likes.includes(1) ? 'like' : 'dislike'}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}
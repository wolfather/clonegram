import { useContext } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from "react-native"
import { POST_ACTION } from "../../actions/posts.action";
import { PostContext } from "../../contexts/posts.context";
import { ProfileImage } from "../Profile_Image";

export const Posts = () => {
    const { postsData, postsDispatch } = useContext(PostContext);

    const renderListItem = ({item}) => (
        <View>
            <ProfileImage uri="" fallbackImage="" />
            <Text>{item?.text}</Text>
            <Text>{item?.likes.length} likes</Text>
            <TouchableOpacity 
                onPress={()=> (
                    postsDispatch({
                        type: POST_ACTION.TOGGLE_LIKE_POST,
                        payload: {
                            postId: item.id,
                            userId: 1
                        }
                    })
                )}>
                <Text>{item.likes.includes(1) ? 'like' : 'dislike'}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={postsData}
                keyExtractor={item => String(item.id)}
                renderItem={renderListItem}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
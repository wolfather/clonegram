import { useState, useEffect } from 'react';
import { Image, ImageProps, StyleSheet } from 'react-native';

type ProfileImageProps = ImageProps & {
    uri: string;
    fallbackImage?: string;
}

export const ProfileImage = ({uri, fallbackImage, ...rest}: ProfileImageProps) => {
    const [image, setImage] = useState<string>('');

    useEffect(() => {
        setImage(uri);

        return;
    }, []);

    const loadFallbackImage = () => {
        setImage(fallbackImage);
    }

    return (
        <Image 
            style={styles.image}
            {...rest} 
            source={{uri: image}} 
            onError={() => loadFallbackImage()} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fff',
    }
})
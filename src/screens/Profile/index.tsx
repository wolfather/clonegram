import { View, Text, StyleSheet } from 'react-native';

export const Profile = () => {

    return (
        <View style={styles.container}>
            <Text>USER</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#999',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
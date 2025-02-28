import { View, ActivityIndicator, Text } from 'react-native';

const LoadingIndicator = () => {
    return (
        <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#fff" />
            <Text className="text-white mt-2">Loading heroes...</Text>
        </View>
    );
};

export default LoadingIndicator;

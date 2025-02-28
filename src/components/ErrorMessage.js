import { View, Text } from 'react-native';

const ErrorMessage = ({ message }) => {
    return (
        <View className="flex-1 justify-center items-center bg-red-900 p-4 rounded-lg">
            <Text className="text-white text-lg font-bold">Error</Text>
            <Text className="text-gray-200 mt-2">{message}</Text>
        </View>
    );
};

export default ErrorMessage;

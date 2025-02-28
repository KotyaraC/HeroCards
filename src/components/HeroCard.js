import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeroCard = ({ hero }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('HeroDetails', { hero })}
            style={{
                backgroundColor: '#1e3a8a',
                background: 'linear-gradient(to bottom, #1e3a8a, #9333ea)',
                padding: 16,
                borderRadius: 16,
                marginBottom: 12,
                flexDirection: 'row',
                alignItems: 'center',
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
            }}
        >
            <Image
                source={{ uri: `https://cdn.cloudflare.steamstatic.com${hero.icon}` }}
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: '#F59E0B',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                }}
            />

            <View style={{ marginLeft: 16, flex: 1 }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                        textShadowColor: '#000',
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 4,
                    }}
                >
                    {hero.localized_name}
                </Text>
                <Text
                    style={{
                        color: '#A3B4D0',
                        fontSize: 14,
                        marginTop: 4,
                        textTransform: 'uppercase',
                        fontWeight: '600',
                    }}
                >
                    {hero.primary_attr} Hero
                </Text>
                <Text
                    style={{
                        color: '#D1D5DB',
                        fontSize: 12,
                        marginTop: 8,
                        fontStyle: 'italic',
                    }}
                >
                    🎭 {hero.roles.join(', ')}
                </Text>
            </View>

            <View
                style={{
                    backgroundColor: '#F59E0B',
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 5,
                }}
            >
                <Text style={{ color: '#1F2937', fontWeight: 'bold' }}>→</Text>
            </View>
        </TouchableOpacity>
    );
};

export default HeroCard;

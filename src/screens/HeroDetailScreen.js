import { View, Text, Image, ScrollView } from 'react-native';

const HeroDetailScreen = ({ route }) => {
    const { hero } = route.params;


    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1e3a8a',
                background: 'linear-gradient(to bottom, #1e3a8a, #9333ea)',
            }}
            className="p-8"
        >
            <View
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    padding: 24,
                    borderRadius: 16,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 6,
                    elevation: 10,
                    height: '22%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80%',
                    maxWidth: 350,
                    marginBottom: 20,
                }}
                className="justify-center items-center"
            >
                <Image
                    source={{uri: `https://cdn.cloudflare.steamstatic.com${hero.img}`}}
                    style={{
                        width: '110%',
                        aspectRatio: 1,
                        borderColor: '#F59E0B',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.5,
                        shadowRadius: 6,
                    }}
                    resizeMode="contain"
                    onError={() => console.log('Image failed to load')}
                />
            </View>

            <View className="mt-6 items-center justify-center">
                <Text style={{ color: 'white', fontSize: 48, fontWeight: '900', textAlign: 'center', textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5 }}>
                    {hero.localized_name}
                </Text>
                <Text style={{ color: '#A3B4D0', fontSize: 24, textAlign: 'center', marginTop: 16, textTransform: 'uppercase' }}>
                    {hero.primary_attr} Hero
                </Text>
            </View>

            <View
                style={{
                    marginTop: 40,
                    backgroundColor: '#1F2937',
                    padding: 32,
                    borderRadius: 24,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 6,
                    elevation: 10,
                    borderWidth: 4,
                    borderColor: '#9333ea',
                }}
            >
                <Text style={{ color: 'white', fontSize: 32, fontWeight: '600', marginBottom: 16, textAlign: 'center' }}>
                    📊 Statistics:
                </Text>
                <Text style={{ color: '#D1D5DB', fontSize: 18, textAlign: 'center', marginBottom: 8 }}>
                    ⚔️ Attack: {hero.base_attack_min} - {hero.base_attack_max}
                </Text>
                <Text style={{ color: '#D1D5DB', fontSize: 18, textAlign: 'center', marginBottom: 8 }}>
                    ❤️ Health: {hero.base_health}
                </Text>
                <Text style={{ color: '#D1D5DB', fontSize: 18, textAlign: 'center', marginBottom: 16 }}>
                    🔵 Mana: {hero.base_mana}
                </Text>
            </View>

            <View
                style={{
                    marginTop: 40,
                    backgroundColor: '#1F2937',
                    padding: 32,
                    borderRadius: 24,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 6,
                    elevation: 10,
                    borderWidth: 4,
                    borderColor: '#9333ea',
                }}
            >
                <Text style={{ color: 'white', fontSize: 32, fontWeight: '600', marginBottom: 16, textAlign: 'center' }}>
                    🎭 Role:
                </Text>
                <Text style={{ color: '#D1D5DB', fontSize: 18, textAlign: 'center' }}>
                    {hero.roles.join(', ')}
                </Text>
            </View>
        </ScrollView>
    );



};

export default HeroDetailScreen;

import { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import HeroCard from '../components/HeroCard';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage';

const HomeScreen = () => {
    const [heroes, setHeroes] = useState([]);
    const [filteredHeroes, setFilteredHeroes] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.opendota.com/api/heroStats')
            .then(response => response.json())
            .then(data => {
                setHeroes(data);
                setFilteredHeroes(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleSearch = (text) => {
        setSearch(text);
        setFilteredHeroes(
            heroes.filter(hero => hero.localized_name.toLowerCase().includes(text.toLowerCase()))
        );
    };

    if (loading) return <LoadingIndicator />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <View style={{ flex: 1, backgroundColor: '#1F2937', paddingHorizontal: 16, paddingTop: 24 }}>


            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: '#2D3748',
                    borderColor: '#4A5568',
                    borderWidth: 1,
                    borderRadius: 16,
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    marginBottom: 24,
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 4,
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 20,
                        marginRight: 12,
                    }}
                >
                    🔍
                </Text>
                <TextInput
                    style={{
                        flex: 1,
                        color: 'white',
                        fontSize: 18,
                        placeholderTextColor: '#A0AEC0',
                    }}
                    placeholder="Search..."
                    value={search}
                    onChangeText={handleSearch}
                />
                {search.length > 0 && (
                    <TouchableOpacity onPress={() => handleSearch('')}>
                        <Text
                            style={{
                                color: '#F56565',
                                fontSize: 20,
                            }}
                        >
                            ✖
                        </Text>
                    </TouchableOpacity>
                )}
            </View>

            <FlatList
                data={filteredHeroes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <HeroCard hero={item} />}
                contentContainerStyle={{ paddingBottom: 30 }}
            />
        </View>
    );
};

export default HomeScreen;

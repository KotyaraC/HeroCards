import { createContext, useContext, useEffect, useState } from 'react';
import { fetchHeroes } from '../services/api';

const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadHeroes = async () => {
            try {
                const data = await fetchHeroes();
                setHeroes(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadHeroes();
    }, []);

    return (
        <HeroContext.Provider value={{ heroes, loading, error }}>
            {children}
        </HeroContext.Provider>
    );
};

export const useHeroes = () => useContext(HeroContext);

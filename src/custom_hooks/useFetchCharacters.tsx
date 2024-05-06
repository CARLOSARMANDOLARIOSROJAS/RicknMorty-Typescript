
    import { useState, useEffect } from "react";
    import axios from "axios";
    import { ApiResponse, Character } from "../models/type";

    export const useFetchCharacters = () => {

        const [characters, setCharacters] = useState<Character[]>([]);
        const [error, setError] = useState<string | null>(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            
            const obtenerPersonajes = async () => {
                try {
                    const response = await axios.get<ApiResponse>('https://rickandmortyapi.com/api/character');
                    setCharacters(response.data.results); 
                } catch (error) {
                    setError('Error fetching characters');
                } finally {
                    setLoading(false);
                }
            };
            obtenerPersonajes();
        }, []);

    return {
        loading,
        error,
        characters
    }
    };

    export default useFetchCharacters;

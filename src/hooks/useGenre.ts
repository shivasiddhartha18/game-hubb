import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
    id: number,
    name: string,
    
}

interface FetchGenre {
    count: number;
    results: Genre[];
 }
const useGenre = () =>{
    const [genre, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
      apiClient
        .get<FetchGenre>("/genres", {signal: controller.signal})
        .then((res) => {
            setGenre(res.data.results);
            setLoading(false)})
        .catch((err) => {if (err instanceof CanceledError) return;
            setError(err.message); setLoading(false)});

        return () => controller.abort();
    }, []);

    return {genre, error, isLoading}
}

export default useGenre;
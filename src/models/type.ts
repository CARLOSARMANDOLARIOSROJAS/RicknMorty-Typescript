
export interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    location: {
        name: string;
    }
}

export interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface ApiResponse {
    results: Character[];
  
}


export interface User {
    id: number;
    name: string;
    description: string;
    image: {
        thumb: string;
        large: string;
    }
}
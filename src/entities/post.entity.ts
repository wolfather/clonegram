export interface Post {
    id: number;
    imgSrc: string;
    text: string;
    authorId: number;
    authorName?: string;
    likes: number[];
}
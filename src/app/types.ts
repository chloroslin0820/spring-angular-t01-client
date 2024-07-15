export interface Post {
    id?: number;
    name: string;
    content: string;
    postedBy: string;
    img: string,
    date?: Date,
    likeCount?: number,
    viewCount?: number,
    tags?: string[],
}

export interface Comment {
    id?: number;
    post: Post;
    content: string;
    postedBy: string;
    createdAt?: Date;
}
export interface Comment {
    id: string;
    userEmail: string | null | undefined;
    productId: string;
    comment: string;
}

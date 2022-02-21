export interface Cart {
    id: string;
    userEmail: string | null | undefined;
    productName: string;
    price: number;
    quantity: number;
    picture: string;
}

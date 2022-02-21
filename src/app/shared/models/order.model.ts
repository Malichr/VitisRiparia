export interface Order {
    id: string;
    firstName: string;
    lastName: string;
    postalCode: number;
    settlement: string;
    street: string;
    houseNumber: string;
    phoneNumber: number;

    userEmail: string | null | undefined;
    productName: string;
    price: number;
    quantity: number;
    picture: string;
}

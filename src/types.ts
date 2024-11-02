export type Item = {
    id: string;
    name: string;
    quantity: number;
    category: string;
    addedAt: Date;
    updatedAt: Date;
    expiryDate: Date;
    image: string | null;
}
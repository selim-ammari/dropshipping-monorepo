export interface Variant {
    id: string;
    sku?: string;
    price: number;
    compareAt?: number;
    stock?: number;
  }
  
  export interface Product {
    id: string;
    title: string;
    description?: string;
    variants: Variant[];
    images?: string[];
  }
  
  export interface OrderItem {
    productId: string;
    variantId: string;
    quantity: number;
    price: number;
  }
  
  export interface Order {
    id: string;
    email: string;
    items: OrderItem[];
    amount: number;
    currency: string;
    status: 'pending' | 'paid' | 'fulfilled' | 'canceled';
  }
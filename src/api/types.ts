export interface User {
  _id: string;
  UserName: string;
  Email: string;
  Phone: string;
  FullName: string;
  Address: string;
  Role: 'user' | 'admin';
  Status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface LoginCredentials {
  UserName: string;
  Password: string;
}

export interface RegisterData {
  UserName: string;
  Email: string;
  Phone: string;
  FullName: string;
  Address: string;
  Password: string;
  Role: 'user';
  Status: 'active';
}

export interface Product {
  _id: string;
  Name: string;
  Description: string;
  Price: number;
  Image: string;
  CategoryId: string;
  Status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  _id: string;
  Name: string;
  Description: string;
  Status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  Id: string;
  ProductId: string;
  UserId: string;
  Quantity: number;
  Product: Product;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  _id: string;
  UserId: string;
  Items: CartItem[];
  TotalAmount: number;
  Status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  Order_Date: string;
  Test_Drive_Date: string;
  Address: string;
  Notes?: string;
  ImageUrl?: string;
  createdAt: string;
  updatedAt: string;
} 
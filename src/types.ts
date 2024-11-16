export interface Product {
    id: number; // Unique identifier for the product
    title: string; // Title of the product
    description?: string; // Description of the product
    price: number; // Price of the product
    category?: string; // Category of the product
    image: string; // URL of the product image
    rating: {
      rate: number; // Rating value
      count: number; // Number of ratings
    };
  }
  
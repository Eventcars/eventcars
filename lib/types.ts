export type CarCategory = "sports" | "luxury" | "classic" | "wedding";

export type CarListing = {
  id: string;
  name: string;
  category: CarCategory;
  city: string;
  pricePerDay: number;
  image: string;
  rating: number;
  reviews: number;
  year: number;
  horsepower: number;
  featured: boolean;
};

export type SearchFilters = {
  city: string;
  category: CarCategory | "";
  pickupDate: string;
  returnDate: string;
};

export const emptySearchFilters: SearchFilters = {
  city: "",
  category: "",
  pickupDate: "",
  returnDate: "",
};

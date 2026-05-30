import type { CarCategory, CarListing } from "./types";

export const danishCities = [
  "Copenhagen",
  "Aarhus",
  "Odense",
  "Aalborg",
  "Esbjerg",
] as const;

export const categories: {
  slug: CarCategory;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    slug: "sports",
    title: "Sports Cars",
    description: "Ferrari, Lamborghini, Porsche and supercars",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
  },
  {
    slug: "luxury",
    title: "Luxury Cars",
    description: "Rolls-Royce, Bentley, Mercedes-Maybach and more",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
  },
  {
    slug: "classic",
    title: "Classic Cars",
    description: "Vintage icons for timeless occasions",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
  },
  {
    slug: "wedding",
    title: "Wedding Cars",
    description: "Elegant arrivals for your special day",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
];

export const carListings: CarListing[] = [
  {
    id: "ferrari-488-gtb",
    name: "Ferrari 488 GTB",
    category: "sports",
    city: "Copenhagen",
    pricePerDay: 7499,
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    rating: 4.9,
    reviews: 28,
    year: 2019,
    horsepower: 660,
    featured: true,
  },
  {
    id: "lamborghini-huracan",
    name: "Lamborghini Huracán",
    category: "sports",
    city: "Aarhus",
    pricePerDay: 8999,
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    rating: 5.0,
    reviews: 19,
    year: 2021,
    horsepower: 610,
    featured: true,
  },
  {
    id: "rolls-royce-ghost",
    name: "Rolls-Royce Ghost",
    category: "luxury",
    city: "Copenhagen",
    pricePerDay: 9999,
    image:
      "https://images.unsplash.com/photo-1631297869054-2616a2965a33?w=800&q=80",
    rating: 5.0,
    reviews: 22,
    year: 2022,
    horsepower: 563,
    featured: true,
  },
  {
    id: "porsche-911-carrera",
    name: "Porsche 911 Carrera",
    category: "sports",
    city: "Odense",
    pricePerDay: 4999,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    rating: 4.8,
    reviews: 34,
    year: 2023,
    horsepower: 379,
    featured: true,
  },
  {
    id: "bentley-continental-gt",
    name: "Bentley Continental GT",
    category: "luxury",
    city: "Aarhus",
    pricePerDay: 6499,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    rating: 4.9,
    reviews: 16,
    year: 2020,
    horsepower: 626,
    featured: true,
  },
];

export const featuredCars = carListings.filter((car) => car.featured);

export const stats = [
  { value: "120+", label: "Premium vehicles" },
  { value: "15", label: "Danish cities" },
  { value: "4.9", label: "Average rating" },
  { value: "2,400+", label: "Happy renters" },
] as const;

export const steps = [
  {
    step: "01",
    title: "Browse & compare",
    description:
      "Explore curated luxury, sports, classic and wedding cars across Denmark.",
  },
  {
    step: "02",
    title: "Book securely",
    description:
      "Choose your dates, add extras, and confirm with transparent pricing in DKK.",
  },
  {
    step: "03",
    title: "Drive & enjoy",
    description:
      "Pick up your vehicle or arrange delivery — fully insured and verified.",
  },
] as const;

export const categoryOptions: { value: CarCategory | ""; label: string }[] = [
  { value: "", label: "All categories" },
  { value: "sports", label: "Sports Cars" },
  { value: "luxury", label: "Luxury Cars" },
  { value: "classic", label: "Classic Cars" },
  { value: "wedding", label: "Wedding Cars" },
];

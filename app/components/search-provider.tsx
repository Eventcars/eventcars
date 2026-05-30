"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { carListings } from "@/lib/data";
import { filterCars, hasActiveFilters } from "@/lib/filter-cars";
import type { CarCategory, CarListing, SearchFilters } from "@/lib/types";
import { emptySearchFilters } from "@/lib/types";

type SearchContextValue = {
  filters: SearchFilters;
  appliedFilters: SearchFilters;
  results: CarListing[];
  isFiltered: boolean;
  setCity: (city: string) => void;
  setCategory: (category: CarCategory | "") => void;
  setPickupDate: (date: string) => void;
  setReturnDate: (date: string) => void;
  applySearch: () => void;
  clearSearch: () => void;
  searchByCategory: (category: CarCategory) => void;
};

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<SearchFilters>(emptySearchFilters);
  const [appliedFilters, setAppliedFilters] =
    useState<SearchFilters>(emptySearchFilters);

  const results = useMemo(
    () => filterCars(carListings, appliedFilters),
    [appliedFilters],
  );

  const isFiltered = hasActiveFilters(appliedFilters);

  const applySearch = useCallback(() => {
    setAppliedFilters({ ...filters });
    document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
  }, [filters]);

  const clearSearch = useCallback(() => {
    setFilters(emptySearchFilters);
    setAppliedFilters(emptySearchFilters);
  }, []);

  const searchByCategory = useCallback((category: CarCategory) => {
    const nextFilters: SearchFilters = {
      ...emptySearchFilters,
      category,
    };
    setFilters(nextFilters);
    setAppliedFilters(nextFilters);
    document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const value = useMemo<SearchContextValue>(
    () => ({
      filters,
      appliedFilters,
      results,
      isFiltered,
      setCity: (city) => setFilters((current) => ({ ...current, city })),
      setCategory: (category) =>
        setFilters((current) => ({ ...current, category })),
      setPickupDate: (pickupDate) =>
        setFilters((current) => ({ ...current, pickupDate })),
      setReturnDate: (returnDate) =>
        setFilters((current) => ({ ...current, returnDate })),
      applySearch,
      clearSearch,
      searchByCategory,
    }),
    [
      filters,
      appliedFilters,
      results,
      isFiltered,
      applySearch,
      clearSearch,
      searchByCategory,
    ],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within SearchProvider");
  }

  return context;
}

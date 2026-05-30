import type { CarListing, SearchFilters } from "./types";

export function filterCars(
  cars: readonly CarListing[],
  filters: SearchFilters,
): CarListing[] {
  return cars.filter((car) => {
    if (filters.city && car.city !== filters.city) {
      return false;
    }

    if (filters.category && car.category !== filters.category) {
      return false;
    }

    if (filters.pickupDate && filters.returnDate) {
      const pickup = new Date(filters.pickupDate);
      const returnDate = new Date(filters.returnDate);

      if (returnDate < pickup) {
        return false;
      }
    }

    return true;
  });
}

export function hasActiveFilters(filters: SearchFilters) {
  return Boolean(
    filters.city ||
      filters.category ||
      filters.pickupDate ||
      filters.returnDate,
  );
}

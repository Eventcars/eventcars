"use client";

import Link from "next/link";
import { getCategoryLabel } from "@/lib/format";
import { useSearch } from "./search-provider";
import { CarCard } from "./car-card";

function ActiveFilterPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs text-gold">
      {label}
    </span>
  );
}

export function FeaturedCars() {
  const { results, appliedFilters, isFiltered, clearSearch } = useSearch();

  const activeLabels: string[] = [];

  if (appliedFilters.city) {
    activeLabels.push(appliedFilters.city);
  }
  if (appliedFilters.category) {
    activeLabels.push(getCategoryLabel(appliedFilters.category));
  }
  if (appliedFilters.pickupDate && appliedFilters.returnDate) {
    activeLabels.push(
      `${appliedFilters.pickupDate} → ${appliedFilters.returnDate}`,
    );
  } else if (appliedFilters.pickupDate) {
    activeLabels.push(`From ${appliedFilters.pickupDate}`);
  }

  return (
    <section id="featured" className="bg-charcoal-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              {isFiltered ? "Search results" : "Featured"}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-cream lg:text-5xl">
              {isFiltered ? "Available cars" : "Handpicked for you"}
            </h2>
            <p className="mt-4 text-lg text-cream/60">
              {isFiltered
                ? `${results.length} ${results.length === 1 ? "car" : "cars"} match your search`
                : "Premium vehicles from verified owners across Denmark."}
            </p>

            {activeLabels.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {activeLabels.map((label) => (
                  <ActiveFilterPill key={label} label={label} />
                ))}
              </div>
            ) : null}
          </div>

          <Link
            href="#search"
            className="shrink-0 rounded-full border border-gold/25 px-6 py-2.5 text-sm text-cream transition hover:border-gold hover:text-gold"
          >
            {isFiltered ? "Modify search" : "Search all cars"}
          </Link>
        </div>

        {results.length > 0 ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="mt-14 rounded-2xl border border-gold/15 bg-black/40 px-8 py-16 text-center">
            <p className="font-display text-2xl text-cream">
              No cars match your search
            </p>
            <p className="mt-3 text-cream/50">
              Try adjusting your city, dates, or category filters.
            </p>
            <button
              type="button"
              onClick={clearSearch}
              className="mt-6 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-gold-light"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

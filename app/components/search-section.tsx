"use client";

import { danishCities, categoryOptions } from "@/lib/data";
import { useSearch } from "./search-provider";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gold/80">
      {children}
    </span>
  );
}

function FieldShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-black/40 px-4 py-3 ring-1 ring-gold/15 transition focus-within:ring-gold/50">
      {children}
    </div>
  );
}

export function SearchSection() {
  const {
    filters,
    setCity,
    setCategory,
    setPickupDate,
    setReturnDate,
    applySearch,
    clearSearch,
    isFiltered,
  } = useSearch();

  const today = new Date().toISOString().split("T")[0];
  const datesInvalid =
    filters.pickupDate &&
    filters.returnDate &&
    filters.returnDate < filters.pickupDate;

  return (
    <section id="search" className="relative z-10 -mt-16 px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-gold/20 bg-charcoal-light shadow-2xl shadow-black/50">
          <div className="border-b border-gold/10 bg-gradient-to-r from-gold/10 via-transparent to-gold/5 px-6 py-4 sm:px-8">
            <h2 className="font-display text-xl text-cream sm:text-2xl">
              Find your dream car
            </h2>
            <p className="mt-1 text-sm text-cream/50">
              Search by city, dates, and category across Denmark
            </p>
          </div>

          <form
            className="p-6 sm:p-8"
            onSubmit={(event) => {
              event.preventDefault();
              if (!datesInvalid) {
                applySearch();
              }
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <label>
                <FieldLabel>City</FieldLabel>
                <FieldShell>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 shrink-0 text-gold"
                    aria-hidden
                  >
                    <path
                      d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <select
                    value={filters.city}
                    onChange={(event) => setCity(event.target.value)}
                    className="w-full cursor-pointer appearance-none bg-transparent text-sm text-cream outline-none"
                  >
                    <option value="" className="bg-charcoal">
                      All cities
                    </option>
                    {danishCities.map((city) => (
                      <option key={city} value={city} className="bg-charcoal">
                        {city}
                      </option>
                    ))}
                  </select>
                </FieldShell>
              </label>

              <label>
                <FieldLabel>Pick-up date</FieldLabel>
                <FieldShell>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 shrink-0 text-gold"
                    aria-hidden
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3 10h18M8 3v4M16 3v4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <input
                    type="date"
                    value={filters.pickupDate}
                    min={today}
                    onChange={(event) => setPickupDate(event.target.value)}
                    className="w-full bg-transparent text-sm text-cream outline-none [color-scheme:dark]"
                  />
                </FieldShell>
              </label>

              <label>
                <FieldLabel>Return date</FieldLabel>
                <FieldShell>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 shrink-0 text-gold"
                    aria-hidden
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3 10h18M8 3v4M16 3v4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <input
                    type="date"
                    value={filters.returnDate}
                    min={filters.pickupDate || today}
                    onChange={(event) => setReturnDate(event.target.value)}
                    className="w-full bg-transparent text-sm text-cream outline-none [color-scheme:dark]"
                  />
                </FieldShell>
              </label>

              <label>
                <FieldLabel>Category</FieldLabel>
                <FieldShell>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 shrink-0 text-gold"
                    aria-hidden
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <select
                    value={filters.category}
                    onChange={(event) =>
                      setCategory(
                        event.target.value as typeof filters.category,
                      )
                    }
                    className="w-full cursor-pointer appearance-none bg-transparent text-sm text-cream outline-none"
                  >
                    {categoryOptions.map((option) => (
                      <option
                        key={option.value || "all"}
                        value={option.value}
                        className="bg-charcoal"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </FieldShell>
              </label>
            </div>

            {datesInvalid ? (
              <p className="mt-4 text-sm text-red-400">
                Return date must be on or after the pick-up date.
              </p>
            ) : null}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={Boolean(datesInvalid)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M20 20l-3-3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Search cars
              </button>

              {isFiltered ? (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="text-sm text-cream/60 transition hover:text-gold"
                >
                  Clear all filters
                </button>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

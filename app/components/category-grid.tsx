"use client";

import Image from "next/image";
import { categories } from "@/lib/data";
import { useSearch } from "./search-provider";

export function CategoryGrid() {
  const { searchByCategory } = useSearch();

  return (
    <section id="categories" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Categories
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-cream lg:text-5xl">
            Find your perfect drive
          </h2>
          <p className="mt-4 text-lg text-cream/60">
            From supercars to vintage classics — browse by occasion and style.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => searchByCategory(category.slug)}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl text-left ring-1 ring-gold/10 transition hover:ring-gold/40"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl text-cream">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-cream/60">
                  {category.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold opacity-0 transition group-hover:opacity-100">
                  Browse
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

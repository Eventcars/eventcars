import Image from "next/image";
import Link from "next/link";
import { formatPrice, getCategoryLabel } from "@/lib/format";
import type { CarListing } from "@/lib/types";

type CarCardProps = {
  car: CarListing;
};

export function CarCard({ car }: CarCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-black ring-1 ring-gold/10 transition hover:ring-gold/35">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-black/70 px-3 py-1 text-xs font-medium text-gold backdrop-blur-sm">
          {getCategoryLabel(car.category)}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-lg text-cream">{car.name}</h3>
            <p className="mt-0.5 text-sm text-cream/50">{car.city}</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-gold">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {car.rating}
          </div>
        </div>

        <div className="mt-3 flex gap-4 text-xs text-cream/40">
          <span>{car.year}</span>
          <span>{car.horsepower} hp</span>
          <span>{car.reviews} reviews</span>
        </div>

        <div className="mt-4 flex items-end justify-between border-t border-gold/10 pt-4">
          <div>
            <p className="font-display text-xl text-gold">
              {formatPrice(car.pricePerDay)}
            </p>
            <p className="text-xs text-cream/40">per day</p>
          </div>
          <Link
            href={`#${car.id}`}
            className="rounded-lg bg-gold/10 px-4 py-2 text-sm font-medium text-gold ring-1 ring-gold/25 transition hover:bg-gold hover:text-black"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}

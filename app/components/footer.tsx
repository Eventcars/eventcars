import Link from "next/link";

const footerLinks = {
  Marketplace: [
    { label: "Sports Cars", href: "#categories" },
    { label: "Luxury Cars", href: "#categories" },
    { label: "Classic Cars", href: "#categories" },
    { label: "Wedding Cars", href: "#categories" },
  ],
  Company: [
    { label: "About us", href: "#" },
    { label: "How it works", href: "#how-it-works" },
    { label: "List your car", href: "#list-your-car" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Terms of service", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Insurance", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl tracking-wide text-cream">
              Event<span className="text-gold">Cars</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
              Denmark&apos;s premier marketplace for renting luxury, sports,
              classic and wedding cars. Verified owners, transparent pricing,
              unforgettable drives.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-gold/60">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 transition hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 sm:flex-row">
          <p className="text-sm text-cream/40">
            &copy; {new Date().getFullYear()} EventCars ApS. All rights
            reserved.
          </p>
          <p className="text-sm text-cream/40">Made in Denmark</p>
        </div>
      </div>
    </footer>
  );
}

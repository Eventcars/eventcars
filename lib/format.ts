export function formatPrice(amount: number) {
  return new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getCategoryLabel(category: string) {
  const labels: Record<string, string> = {
    sports: "Sports Cars",
    luxury: "Luxury Cars",
    classic: "Classic Cars",
    wedding: "Wedding Cars",
  };

  return labels[category] ?? category;
}

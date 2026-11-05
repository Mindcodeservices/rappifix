const PHONE = "50767702618";

export const waLink = (message: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

export const getRatingWidth = (rating: number): number => Math.round(rating / 5 * 100);

export const capitalizeFirstLetter = (word: string): string => word[0].toUpperCase() + word.slice(1);

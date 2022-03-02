import { MAX_RATING, PERSENT } from './const';

export const getRatingWidth = (rating: number): number => Math.round(rating / MAX_RATING * PERSENT);

export const capitalizeFirstLetter = (word: string): string => word[0].toUpperCase() + word.slice(1);
